/**
 * Account Service
 * Servicios relacionados con registro y gestión de cuentas
 */

import apiClient from '../config/apiClient';
import {
  RegisterRequest,
  RegisterResponse,
  UserProfile,
  UpdateProfileRequest,
  EmailVerificationRequest,
} from '../types/user.types';
import { ApiResponse } from '../types/common.types';

export const accountService = {
  /**
   * Registrar nuevo usuario
   */
  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>('/accounts/register', data);
    return response.data;
  },

  /**
   * Verificar email con token
   */
  verifyEmail: async (data: EmailVerificationRequest): Promise<ApiResponse<string>> => {
    const response = await apiClient.post<ApiResponse<string>>('/accounts/verify-email', data);
    return response.data;
  },

  /**
   * Reenviar email de verificación
   */
  resendVerificationEmail: async (email: string): Promise<ApiResponse<string>> => {
    const response = await apiClient.post<ApiResponse<string>>('/accounts/resend-verification', {
      email,
    });
    return response.data;
  },

  /**
   * Obtener perfil del usuario actual
   */
  getProfile: async (): Promise<UserProfile> => {
    const response = await apiClient.get<UserProfile>('/accounts/profile');
    return response.data;
  },

  /**
   * Actualizar perfil del usuario
   */
  updateProfile: async (data: UpdateProfileRequest): Promise<UserProfile> => {
    const response = await apiClient.put<UserProfile>('/accounts/profile', data);
    return response.data;
  },

  /**
   * Eliminar cuenta de usuario
   */
  deleteAccount: async (): Promise<ApiResponse<string>> => {
    const response = await apiClient.delete<ApiResponse<string>>('/accounts/profile');
    return response.data;
  },

  /**
   * Subir foto de perfil
   */
  uploadProfilePicture: async (file: File): Promise<{ url: string }> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await apiClient.post<{ url: string }>('/accounts/profile/picture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },
};
