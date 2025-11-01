/**
 * API Client Configuration
 * Cliente Axios configurado con interceptores para autenticación
 * y refresh token automático
 */

import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { TokenManager } from '../utils/tokenManager';

// Base URL desde variables de entorno o fallback
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://2ed0552ec716.ngrok-free.app/api/v1';

// Crear instancia de Axios
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 segundos
});

// Variable para evitar múltiples refresh simultáneos
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token!);
    }
  });
  failedQueue = [];
};

/**
 * Interceptor de Request
 * Agrega el token de autenticación a todas las peticiones
 */
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = TokenManager.getAccessToken();
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`);
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor de Response
 * Maneja errores y refresh token automático
 */
apiClient.interceptors.response.use(
  (response) => {
    // Log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log(`✅ ${response.config.method?.toUpperCase()} ${response.config.url}`, response.status);
    }
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Si es error 401 y no es la ruta de login/refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (originalRequest.url?.includes('/auth/login') || originalRequest.url?.includes('/auth/refresh-token')) {
        // Si falla login o refresh, limpiar tokens y redirigir
        TokenManager.clearAll();
        if (typeof window !== 'undefined') {
          window.location.href = '/auth/signin';
        }
        return Promise.reject(error);
      }

      if (isRefreshing) {
        // Si ya se está refrescando, agregar a la cola
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return apiClient(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = TokenManager.getRefreshToken();

      if (!refreshToken) {
        TokenManager.clearAll();
        if (typeof window !== 'undefined') {
          window.location.href = '/auth/signin';
        }
        return Promise.reject(error);
      }

      try {
        // Intentar refrescar el token
        const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
          refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        TokenManager.setAccessToken(accessToken);
        if (newRefreshToken) {
          TokenManager.setRefreshToken(newRefreshToken);
        }

        processQueue(null, accessToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }

        return apiClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        TokenManager.clearAll();
        if (typeof window !== 'undefined') {
          window.location.href = '/auth/signin';
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Manejar otros errores
    return Promise.reject(error);
  }
);

export default apiClient;
