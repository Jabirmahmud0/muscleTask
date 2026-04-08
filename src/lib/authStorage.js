import { AUTH_STORAGE_KEY, MOCK_AUTH_STORAGE_KEY } from './authConfig';

function readJson(key, fallbackValue) {
  if (typeof window === 'undefined') {
    return fallbackValue;
  }

  const rawValue = window.localStorage.getItem(key);

  if (!rawValue) {
    return fallbackValue;
  }

  try {
    return JSON.parse(rawValue);
  } catch {
    return fallbackValue;
  }
}

function writeJson(key, value) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

export function readAuthSession() {
  return readJson(AUTH_STORAGE_KEY, { token: null, user: null });
}

export function writeAuthSession(session) {
  writeJson(AUTH_STORAGE_KEY, {
    token: session?.token ?? null,
    user: session?.user ?? null,
  });
}

export function clearAuthSession() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function readMockDatabase() {
  return readJson(MOCK_AUTH_STORAGE_KEY, {
    users: [],
    activeOtp: null,
    resetToken: null,
  });
}

export function writeMockDatabase(database) {
  writeJson(MOCK_AUTH_STORAGE_KEY, database);
}
