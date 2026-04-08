import {
  AUTH_API_ALT_BASE_URL,
  AUTH_API_BASE_URL,
  AUTH_MODE,
} from './authConfig';
import { readMockDatabase, writeMockDatabase } from './authStorage';

class ApiError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

function buildFormData(payload = {}) {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      return;
    }

    formData.append(key, String(value));
  });

  return formData;
}

async function parseResponse(response) {
  const contentType = response.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    return response.json();
  }

  const text = await response.text();
  return text ? { message: text } : {};
}

async function request({
  path,
  method = 'GET',
  payload,
  token,
  baseUrl = AUTH_API_BASE_URL,
}) {
  if (AUTH_MODE === 'mock') {
    return mockRequest({ path, method, payload, token });
  }

  const response = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: method === 'GET' ? undefined : buildFormData(payload),
  });

  const data = await parseResponse(response);

  if (!response.ok) {
    throw new ApiError(data?.message ?? 'Request failed.', response.status, data);
  }

  return data;
}

function createMockToken(email) {
  return `mock-token-${email}-${Date.now()}`;
}

function upsertUser(database, user) {
  const nextUsers = database.users.filter((entry) => entry.email !== user.email);
  nextUsers.push(user);
  return nextUsers;
}

async function mockRequest({ path, method, payload, token }) {
  const database = readMockDatabase();

  if (path === '/api/register' && method === 'POST') {
    const existingUser = database.users.find((user) => user.email === payload.email);

    if (existingUser) {
      throw new ApiError('Email already registered.', 422, { errors: { email: ['Already taken.'] } });
    }

    const otp = '858486';
    const registeredUser = {
      first_name: payload.first_name,
      last_name: payload.last_name,
      email: payload.email,
      password: payload.password,
      verified: false,
    };

    writeMockDatabase({
      ...database,
      users: upsertUser(database, registeredUser),
      activeOtp: {
        email: payload.email,
        code: otp,
        kind: 'register',
      },
    });

    return {
      message: 'Registration successful. Verify the OTP to continue.',
      otp,
      email: payload.email,
    };
  }

  if (path === '/api/login' && method === 'POST') {
    const user = database.users.find((entry) => entry.email === payload.email);

    if (!user || user.password !== payload.password) {
      throw new ApiError('Invalid email or password.', 401);
    }

    if (!user.verified) {
      throw new ApiError('Please verify your account before logging in.', 403);
    }

    return {
      token: createMockToken(user.email),
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      },
    };
  }

  if (path === '/api/resend_otp' && method === 'POST') {
    const user = database.users.find((entry) => entry.email === payload.email);

    if (!user) {
      throw new ApiError('User not found.', 404);
    }

    const otp = '858486';
    writeMockDatabase({
      ...database,
      activeOtp: {
        email: payload.email,
        code: otp,
        kind: 'register',
      },
    });

    return { message: 'OTP resent successfully.', otp };
  }

  if (path === '/api/verify_otp' && method === 'POST') {
    if (
      database.activeOtp?.kind !== 'register' ||
      database.activeOtp?.email !== payload.email ||
      database.activeOtp?.code !== payload.otp
    ) {
      throw new ApiError('Invalid OTP.', 422);
    }

    const verifiedUser = database.users.find((entry) => entry.email === payload.email);

    writeMockDatabase({
      ...database,
      users: upsertUser(database, { ...verifiedUser, verified: true }),
      activeOtp: null,
    });

    return { message: 'OTP verified successfully.' };
  }

  if (path === '/api/forgot-password' && method === 'POST') {
    const user = database.users.find((entry) => entry.email === payload.email);

    if (!user) {
      throw new ApiError('User not found.', 404);
    }

    const otp = '066162';
    writeMockDatabase({
      ...database,
      activeOtp: {
        email: payload.email,
        code: otp,
        kind: 'forgot',
      },
    });

    return { message: 'Forgot password OTP sent.', otp };
  }

  if (path === '/api/forgot-verify-otp' && method === 'POST') {
    if (
      database.activeOtp?.kind !== 'forgot' ||
      database.activeOtp?.email !== payload.email ||
      database.activeOtp?.code !== payload.otp
    ) {
      throw new ApiError('Invalid forgot password OTP.', 422);
    }

    const resetToken = 'pgHUpTTvTuLJHwRfaAORKBECNeKg1dbctPyYSBQs';
    writeMockDatabase({
      ...database,
      activeOtp: null,
      resetToken: {
        email: payload.email,
        token: resetToken,
      },
    });

    return { message: 'OTP verified.', token: resetToken };
  }

  if (path === '/api/reset-password' && method === 'POST') {
    if (database.resetToken?.token !== payload.token) {
      throw new ApiError('Invalid reset token.', 422);
    }

    const user = database.users.find((entry) => entry.email === database.resetToken.email);

    writeMockDatabase({
      ...database,
      users: upsertUser(database, { ...user, password: payload.password }),
      resetToken: null,
    });

    return { message: 'Password reset successful.' };
  }

  if (path === '/api/logout' && method === 'POST') {
    if (!token) {
      throw new ApiError('Missing token.', 401);
    }

    return { message: 'Logged out successfully.' };
  }

  if (path === '/api/user-detail' && method === 'GET') {
    if (!token?.startsWith('mock-token-')) {
      throw new ApiError('Unauthorized.', 401);
    }

    const email = token.replace(/^mock-token-/, '').replace(/-\d+$/, '');
    const user = database.users.find((entry) => entry.email === email);

    if (!user) {
      throw new ApiError('User not found.', 404);
    }

    return {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      },
    };
  }

  throw new ApiError(`Unhandled mock request for ${method} ${path}.`, 500);
}

export const authApi = {
  register(payload) {
    return request({ path: '/api/register', method: 'POST', payload });
  },
  login(payload) {
    return request({ path: '/api/login', method: 'POST', payload });
  },
  resendOtp(payload) {
    return request({ path: '/api/resend_otp', method: 'POST', payload });
  },
  verifyOtp(payload) {
    return request({ path: '/api/verify_otp', method: 'POST', payload });
  },
  forgotPassword(payload) {
    return request({ path: '/api/forgot-password', method: 'POST', payload });
  },
  forgotVerifyOtp(payload) {
    return request({
      path: '/api/forgot-verify-otp',
      method: 'POST',
      payload,
      baseUrl: AUTH_API_ALT_BASE_URL,
    });
  },
  resetPassword(payload) {
    return request({ path: '/api/reset-password', method: 'POST', payload });
  },
  logout(token) {
    return request({ path: '/api/logout', method: 'POST', token });
  },
  getUserDetail(token) {
    return request({ path: '/api/user-detail', method: 'GET', token });
  },
};

export { ApiError, buildFormData };
