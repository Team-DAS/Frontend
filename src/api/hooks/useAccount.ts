/**
 * useAccount Hook
 * Hook para manejo de cuenta y perfil
 */

import { useState, useCallback } from 'react';
import { accountService } from '../services/account.service';
import { UserProfile, RegisterRequest, UpdateProfileRequest } from '../types/user.types';
import { ApiError } from '../types/common.types';

export const useAccount = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const register = useCallback(async (data: RegisterRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await accountService.register(data);
      return response;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await accountService.getProfile();
      setProfile(response);
      return response;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = useCallback(async (data: UpdateProfileRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await accountService.updateProfile(data);
      setProfile(response);
      return response;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadProfilePicture = useCallback(async (file: File) => {
    try {
      setLoading(true);
      setError(null);
      const response = await accountService.uploadProfilePicture(file);
      return response;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const verifyEmail = useCallback(async (token: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await accountService.verifyEmail({ token });
      return response;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    profile,
    loading,
    error,
    register,
    getProfile,
    updateProfile,
    uploadProfilePicture,
    verifyEmail,
  };
};
