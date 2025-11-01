/**
 * API Error Handler
 * Manejo centralizado de errores de API
 */

import { AxiosError } from 'axios';
import { ApiError } from '../types/common.types';

export class ApiErrorHandler {
  /**
   * Maneja errores de Axios y los transforma en errores consistentes
   */
  static handle(error: AxiosError): never {
    if (error.response) {
      // El servidor respondió con un código de error
      const apiError: ApiError = {
        message: this.getErrorMessage(error),
        statusCode: error.response.status,
        errors: error.response.data?.errors,
        timestamp: new Date().toISOString(),
      };

      this.logError(apiError);
      throw apiError;
    } else if (error.request) {
      // La petición fue hecha pero no hubo respuesta
      const networkError: ApiError = {
        message: 'No se pudo conectar con el servidor. Verifica tu conexión.',
        statusCode: 0,
        timestamp: new Date().toISOString(),
      };

      this.logError(networkError);
      throw networkError;
    } else {
      // Algo pasó al configurar la petición
      const unknownError: ApiError = {
        message: error.message || 'Ocurrió un error inesperado',
        statusCode: 500,
        timestamp: new Date().toISOString(),
      };

      this.logError(unknownError);
      throw unknownError;
    }
  }

  /**
   * Extrae el mensaje de error apropiado
   */
  private static getErrorMessage(error: AxiosError): string {
    const data = error.response?.data as any;

    // Intenta obtener mensaje de diferentes formatos
    if (data?.message) return data.message;
    if (data?.error) return data.error;
    if (typeof data === 'string') return data;

    // Mensajes por código de estado
    switch (error.response?.status) {
      case 400:
        return 'Datos inválidos. Por favor verifica la información.';
      case 401:
        return 'No autorizado. Por favor inicia sesión nuevamente.';
      case 403:
        return 'No tienes permisos para realizar esta acción.';
      case 404:
        return 'El recurso solicitado no fue encontrado.';
      case 409:
        return 'El recurso ya existe o hay un conflicto.';
      case 422:
        return 'Datos inválidos. Por favor verifica los campos.';
      case 429:
        return 'Demasiadas peticiones. Por favor intenta más tarde.';
      case 500:
        return 'Error interno del servidor. Por favor intenta más tarde.';
      case 503:
        return 'Servicio no disponible temporalmente.';
      default:
        return 'Ocurrió un error. Por favor intenta nuevamente.';
    }
  }

  /**
   * Registra el error (puede conectarse a un servicio de logging)
   */
  private static logError(error: ApiError): void {
    if (process.env.NODE_ENV === 'development') {
      console.error('🔴 API Error:', {
        message: error.message,
        status: error.statusCode,
        errors: error.errors,
        timestamp: error.timestamp,
      });
    }

    // Aquí podrías enviar a un servicio de logging como Sentry
    // Example: Sentry.captureException(error);
  }

  /**
   * Verifica si el error es de autenticación
   */
  static isAuthError(error: any): boolean {
    return error?.statusCode === 401;
  }

  /**
   * Verifica si el error es de permisos
   */
  static isPermissionError(error: any): boolean {
    return error?.statusCode === 403;
  }

  /**
   * Verifica si el error es de validación
   */
  static isValidationError(error: any): boolean {
    return error?.statusCode === 422 || error?.statusCode === 400;
  }
}
