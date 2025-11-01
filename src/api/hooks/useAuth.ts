/**
 * useAuth Hook
 * Hook personalizado para autenticación con manejo de estado
 */

import { useState, useCallback } from 'react';
import { authService } from '../services/auth.service';
import { LoginRequest, UserInfo } from '../types/auth.types';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (data: LoginRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.login(data);
      return response;
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Error al iniciar sesión');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      await authService.logout();
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Error al cerrar sesión');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getCurrentUser = useCallback((): UserInfo | null => {
    return authService.getCurrentUser();
  }, []);

  const isAuthenticated = useCallback((): boolean => {
    return authService.isAuthenticated();
  }, []);

  return {
    login,
    logout,
    getCurrentUser,
    isAuthenticated,
    loading,
    error,
  };
};
