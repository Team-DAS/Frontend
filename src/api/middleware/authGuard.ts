/**
 * Auth Guard Hook
 * Hook para proteger rutas y verificar autenticación
 */

import { useEffect, useState } from 'react';
import { authService } from '../services/auth.service';

export const useAuthGuard = () => {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      // Simplemente verifica si existe un token
      const valid = authService.isAuthenticated();
      setAuthorized(valid);
    };
    check();
  }, []);

  return authorized;
};
