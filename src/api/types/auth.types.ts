/**
 * Authentication Types
 * Tipos relacionados con autenticación y autorización
 */

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user?: UserInfo;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken?: string;
}

export interface UserInfo {
  id: string;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
}

export type UserRole = 'candidate' | 'employer' | 'admin';

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
