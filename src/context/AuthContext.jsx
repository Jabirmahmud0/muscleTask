import { createContext, useContext, useEffect, useReducer } from 'react';
import { AUTH_MODE } from '../lib/authConfig';
import {
  clearAuthSession,
  readAuthSession,
  writeAuthSession,
} from '../lib/authStorage';
import { authApi } from '../lib/authApi';

const AuthContext = createContext(null);

const initialState = {
  ready: false,
  token: null,
  user: null,
  status: 'idle',
  error: null,
  mode: AUTH_MODE,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'HYDRATE_SESSION':
      return {
        ...state,
        ready: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'AUTH_REQUEST':
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        status: 'success',
        error: null,
        token: action.payload.token ?? state.token,
        user: action.payload.user ?? state.user,
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        status: 'error',
        error: action.payload,
      };
    case 'SET_SESSION':
      return {
        ...state,
        status: 'success',
        error: null,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'CLEAR_SESSION':
      return {
        ...state,
        status: 'idle',
        error: null,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'HYDRATE_SESSION',
      payload: readAuthSession(),
    });
  }, []);

  useEffect(() => {
    if (!state.ready || !state.token || state.user) {
      return;
    }

    refreshUser().catch(() => {});
  }, [state.ready, state.token, state.user]);

  const setSession = (session) => {
    writeAuthSession(session);
    dispatch({ type: 'SET_SESSION', payload: session });
  };

  const clearSession = () => {
    clearAuthSession();
    dispatch({ type: 'CLEAR_SESSION' });
  };

  const refreshUser = async () => {
    if (!state.token) {
      clearSession();
      return null;
    }

    dispatch({ type: 'AUTH_REQUEST' });

    try {
      const response = await authApi.getUserDetail(state.token);
      const session = {
        token: state.token,
        user: response.user ?? null,
      };
      setSession(session);
      return response.user ?? null;
    } catch (error) {
      clearSession();
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message ?? 'Unable to restore the current session.',
      });
      throw error;
    }
  };

  const register = async (payload) => {
    dispatch({ type: 'AUTH_REQUEST' });

    try {
      const response = await authApi.register(payload);
      dispatch({ type: 'AUTH_SUCCESS', payload: {} });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message ?? 'Unable to register right now.',
      });
      throw error;
    }
  };

  const login = async (payload) => {
    dispatch({ type: 'AUTH_REQUEST' });

    try {
      const response = await authApi.login(payload);
      setSession({
        token: response.token ?? null,
        user: response.user ?? null,
      });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message ?? 'Unable to login right now.',
      });
      throw error;
    }
  };

  const resendOtp = async (payload) => {
    dispatch({ type: 'AUTH_REQUEST' });

    try {
      const response = await authApi.resendOtp(payload);
      dispatch({ type: 'AUTH_SUCCESS', payload: {} });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message ?? 'Unable to resend OTP right now.',
      });
      throw error;
    }
  };

  const verifyOtp = async (payload) => {
    dispatch({ type: 'AUTH_REQUEST' });

    try {
      const response = await authApi.verifyOtp(payload);
      dispatch({ type: 'AUTH_SUCCESS', payload: {} });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message ?? 'Unable to verify OTP right now.',
      });
      throw error;
    }
  };

  const forgotPassword = async (payload) => {
    dispatch({ type: 'AUTH_REQUEST' });

    try {
      const response = await authApi.forgotPassword(payload);
      dispatch({ type: 'AUTH_SUCCESS', payload: {} });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message ?? 'Unable to start password recovery right now.',
      });
      throw error;
    }
  };

  const forgotVerifyOtp = async (payload) => {
    dispatch({ type: 'AUTH_REQUEST' });

    try {
      const response = await authApi.forgotVerifyOtp(payload);
      dispatch({ type: 'AUTH_SUCCESS', payload: {} });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message ?? 'Unable to verify recovery OTP right now.',
      });
      throw error;
    }
  };

  const resetPassword = async (payload) => {
    dispatch({ type: 'AUTH_REQUEST' });

    try {
      const response = await authApi.resetPassword(payload);
      dispatch({ type: 'AUTH_SUCCESS', payload: {} });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message ?? 'Unable to reset password right now.',
      });
      throw error;
    }
  };

  const logout = async () => {
    dispatch({ type: 'AUTH_REQUEST' });

    try {
      if (state.token) {
        await authApi.logout(state.token);
      }
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message ?? 'Unable to logout cleanly.',
      });
      throw error;
    } finally {
      clearSession();
    }
  };

  const value = {
    ...state,
    isAuthenticated: Boolean(state.token),
    dispatch,
    setSession,
    clearSession,
    register,
    login,
    resendOtp,
    verifyOtp,
    forgotPassword,
    forgotVerifyOtp,
    resetPassword,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider.');
  }

  return context;
}
