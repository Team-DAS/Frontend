/**
 * useJobs Hook
 * Hook para manejo de trabajos con estado
 */

import { useState, useCallback } from 'react';
import { jobsService } from '../services/jobs.service';
import { Job, JobSearchParams } from '../types/job.types';
import { PaginatedResponse } from '../types/common.types';

export const useJobs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [pagination, setPagination] = useState<PaginatedResponse<Job>['pagination'] | null>(null);

  const fetchJobs = useCallback(async (params?: JobSearchParams) => {
    try {
      setLoading(true);
      setError(null);
      const response = await jobsService.getJobs(params);
      setJobs(response.data);
      setPagination(response.pagination);
      return response;
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Error al obtener trabajos');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const searchJobs = useCallback(async (query: string, params?: JobSearchParams) => {
    try {
      setLoading(true);
      setError(null);
      const response = await jobsService.searchJobs(query, params);
      setJobs(response.data);
      setPagination(response.pagination);
      return response;
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Error al buscar trabajos');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getFeaturedJobs = useCallback(async (limit = 6) => {
    try {
      setLoading(true);
      setError(null);
      const response = await jobsService.getFeaturedJobs(limit);
      setJobs(response);
      return response;
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Error al obtener trabajos destacados');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const applyToJob = useCallback(async (jobId: string, coverLetter?: string, resumeUrl?: string) => {
    try {
      setLoading(true);
      setError(null);
      return await jobsService.applyToJob({ jobId, coverLetter, resumeUrl });
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Error al aplicar al trabajo');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleFavorite = useCallback(async (jobId: string, isFavorite: boolean) => {
    try {
      setLoading(true);
      setError(null);
      if (isFavorite) {
        return await jobsService.removeFromFavorites(jobId);
      } else {
        return await jobsService.addToFavorites(jobId);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Error al actualizar favorito');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    jobs,
    pagination,
    loading,
    error,
    fetchJobs,
    searchJobs,
    getFeaturedJobs,
    applyToJob,
    toggleFavorite,
  };
};
