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

  const value = {
    ...state,
    isAuthenticated: Boolean(state.token),
    dispatch,
    setSession,
    clearSession,
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
