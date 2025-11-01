/**
 * Authentication Service
 * Servicios relacionados con autenticación y autorización
 */

import apiClient from '../config/apiClient';
import {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ValidateTokenResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
} from '../types/auth.types';
import { TokenManager } from '../utils/tokenManager';
import { ApiResponse } from '../types/common.types';

export const authService = {
  /**
   * Login de usuario
   */
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/login', data);
    
    // Guardar tokens automáticamente
    if (response.data.accessToken) {
      TokenManager.setAccessToken(response.data.accessToken);
    }
    if (response.data.refreshToken) {
      TokenManager.setRefreshToken(response.data.refreshToken);
    }
    if (response.data.user) {
      TokenManager.setUserInfo(response.data.user);
    }

    return response.data;
  },

  /**
   * Logout de usuario
   */
  logout: async (): Promise<void> => {
    try {
      await apiClient.post('/auth/logout');
    } finally {
      // Siempre limpiar tokens localmente
      TokenManager.clearAll();
    }
  },

  /**
   * Refrescar access token
   */
  refreshToken: async (data: RefreshTokenRequest): Promise<RefreshTokenResponse> => {
    const response = await apiClient.post<RefreshTokenResponse>('/auth/refresh-token', data);
    
    if (response.data.accessToken) {
      TokenManager.setAccessToken(response.data.accessToken);
    }
    if (response.data.refreshToken) {
      TokenManager.setRefreshToken(response.data.refreshToken);
    }

    return response.data;
  },

  /**
   * Validar token actual
   */
  validateToken: async (): Promise<boolean> => {
    const token = TokenManager.getAccessToken();
    if (!token) return false;

    try {
      const response = await apiClient.post<ValidateTokenResponse>('/authz/validate');
      return response.data.valid || response.data === true;
    } catch {
      return false;
    }
  },

  /**
   * Solicitar recuperación de contraseña
   */
  forgotPassword: async (data: ForgotPasswordRequest): Promise<ApiResponse<string>> => {
    const response = await apiClient.post<ApiResponse<string>>('/auth/forgot-password', data);
    return response.data;
  },

  /**
   * Resetear contraseña con token
   */
  resetPassword: async (data: ResetPasswordRequest): Promise<ApiResponse<string>> => {
    const response = await apiClient.post<ApiResponse<string>>('/auth/reset-password', data);
    return response.data;
  },

  /**
   * Cambiar contraseña (usuario autenticado)
   */
  changePassword: async (data: ChangePasswordRequest): Promise<ApiResponse<string>> => {
    const response = await apiClient.put<ApiResponse<string>>('/auth/change-password', data);
    return response.data;
  },

  /**
   * Obtener información del usuario actual
   */
  getCurrentUser: () => {
    return TokenManager.getUserInfo();
  },

  /**
   * Verificar si el usuario está autenticado
   */
  isAuthenticated: () => {
    return TokenManager.isAuthenticated();
  },
};
