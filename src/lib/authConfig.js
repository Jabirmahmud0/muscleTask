export const AUTH_MODE = import.meta.env.VITE_AUTH_MODE ?? 'mock';
export const AUTH_API_BASE_URL =
  import.meta.env.VITE_AUTH_API_BASE_URL ?? 'https://frontend_api_test.test';
export const AUTH_API_ALT_BASE_URL =
  import.meta.env.VITE_AUTH_ALT_BASE_URL ?? 'https://apitest.softvencefsd.xyz';

export const AUTH_STORAGE_KEY = 'muscle-task-auth-session';
export const MOCK_AUTH_STORAGE_KEY = 'muscle-task-mock-auth-db';
