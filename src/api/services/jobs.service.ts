/**
 * Jobs Service
 * Servicios relacionados con ofertas de trabajo
 */

import apiClient from '../config/apiClient';
import {
  Job,
  JobSearchParams,
  CreateJobRequest,
  UpdateJobRequest,
  JobApplication,
  ApplyToJobRequest,
  JobCategory,
} from '../types/job.types';
import { PaginatedResponse, ApiResponse } from '../types/common.types';

export const jobsService = {
  /**
   * Obtener lista de trabajos con paginación y filtros
   */
  getJobs: async (params?: JobSearchParams): Promise<PaginatedResponse<Job>> => {
    const response = await apiClient.get<PaginatedResponse<Job>>('/jobs', { params });
    return response.data;
  },

  /**
   * Obtener un trabajo específico por ID
   */
  getJobById: async (jobId: string): Promise<Job> => {
    const response = await apiClient.get<Job>(`/jobs/${jobId}`);
    return response.data;
  },

  /**
   * Crear nueva oferta de trabajo (solo empleadores)
   */
  createJob: async (data: CreateJobRequest): Promise<Job> => {
    const response = await apiClient.post<Job>('/jobs', data);
    return response.data;
  },

  /**
   * Actualizar oferta de trabajo
   */
  updateJob: async (jobId: string, data: UpdateJobRequest): Promise<Job> => {
    const response = await apiClient.put<Job>(`/jobs/${jobId}`, data);
    return response.data;
  },

  /**
   * Eliminar oferta de trabajo
   */
  deleteJob: async (jobId: string): Promise<ApiResponse<string>> => {
    const response = await apiClient.delete<ApiResponse<string>>(`/jobs/${jobId}`);
    return response.data;
  },

  /**
   * Obtener trabajos destacados
   */
  getFeaturedJobs: async (limit = 6): Promise<Job[]> => {
    const response = await apiClient.get<Job[]>('/jobs/featured', {
      params: { limit },
    });
    return response.data;
  },

  /**
   * Buscar trabajos
   */
  searchJobs: async (query: string, params?: JobSearchParams): Promise<PaginatedResponse<Job>> => {
    const response = await apiClient.get<PaginatedResponse<Job>>('/jobs/search', {
      params: { query, ...params },
    });
    return response.data;
  },

  /**
   * Obtener categorías de trabajos
   */
  getCategories: async (): Promise<JobCategory[]> => {
    const response = await apiClient.get<JobCategory[]>('/jobs/categories');
    return response.data;
  },

  /**
   * Aplicar a un trabajo
   */
  applyToJob: async (data: ApplyToJobRequest): Promise<JobApplication> => {
    const response = await apiClient.post<JobApplication>('/jobs/apply', data);
    return response.data;
  },

  /**
   * Obtener aplicaciones del candidato
   */
  getMyApplications: async (): Promise<JobApplication[]> => {
    const response = await apiClient.get<JobApplication[]>('/jobs/my-applications');
    return response.data;
  },

  /**
   * Obtener trabajos guardados/favoritos
   */
  getFavoriteJobs: async (): Promise<Job[]> => {
    const response = await apiClient.get<Job[]>('/jobs/favorites');
    return response.data;
  },

  /**
   * Agregar trabajo a favoritos
   */
  addToFavorites: async (jobId: string): Promise<ApiResponse<string>> => {
    const response = await apiClient.post<ApiResponse<string>>(`/jobs/${jobId}/favorite`);
    return response.data;
  },

  /**
   * Remover trabajo de favoritos
   */
  removeFromFavorites: async (jobId: string): Promise<ApiResponse<string>> => {
    const response = await apiClient.delete<ApiResponse<string>>(`/jobs/${jobId}/favorite`);
    return response.data;
  },
};
