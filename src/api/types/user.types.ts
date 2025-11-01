/**
 * User & Account Types
 * Tipos relacionados con usuarios y cuentas
 */

export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  role: 'candidate' | 'employer';
  termsAccepted: boolean;
}

export interface RegisterResponse {
  message: string;
  userId: string;
  email: string;
  requiresVerification?: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'candidate' | 'employer';
  phoneNumber?: string;
  profilePicture?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  profilePicture?: string;
}

export interface EmailVerificationRequest {
  token: string;
}
