/**
 * Job Types
 * Tipos relacionados con ofertas de trabajo
 */

import { PaginationParams } from './common.types';

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  description: string;
  location: string;
  locationType: 'remote' | 'onsite' | 'hybrid';
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship';
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency?: string;
  category: string;
  tags: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
  expiryDate?: string;
  isActive: boolean;
  employerId: string;
  applicationsCount?: number;
}

export interface JobSearchParams extends PaginationParams {
  query?: string;
  location?: string;
  category?: string;
  employmentType?: string;
  locationType?: string;
  salaryMin?: number;
  salaryMax?: number;
}

export interface CreateJobRequest {
  title: string;
  description: string;
  location: string;
  locationType: 'remote' | 'onsite' | 'hybrid';
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship';
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency?: string;
  category: string;
  tags: string[];
  requirements: string[];
  benefits: string[];
  expiryDate?: string;
}

export interface UpdateJobRequest extends Partial<CreateJobRequest> {
  isActive?: boolean;
}

export interface JobApplication {
  id: string;
  jobId: string;
  candidateId: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedDate: string;
  coverLetter?: string;
  resumeUrl?: string;
}

export interface ApplyToJobRequest {
  jobId: string;
  coverLetter?: string;
  resumeUrl?: string;
}

export interface JobCategory {
  id: string;
  name: string;
  icon?: string;
  jobCount: number;
}
