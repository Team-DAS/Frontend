"use client"

import React, { useState } from "react";
import JobCard from "../components/JobCard";
import ViewAllButton from "../components/ViewAllButton";

interface Job {
  id: string;
  title: string;
  employmentType: "FULL-TIME" | "PART-TIME" | "INTERNSHIP";
  salary: {
    min: number;
    max: number;
  };
  location: string;
}

const featuredJobs: Job[] = [
  {
    id: "1",
    title: "Technical Support Specialist",
    employmentType: "PART-TIME",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "2",
    title: "Senior UX Designer",
    employmentType: "FULL-TIME",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "3",
    title: "Marketing Officer",
    employmentType: "INTERNSHIP",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "4",
    title: "Junior Graphic Designer",
    employmentType: "INTERNSHIP",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "5",
    title: "Interaction Designer",
    employmentType: "PART-TIME",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "6",
    title: "Project Manager",
    employmentType: "FULL-TIME",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "7",
    title: "Software Engineer",
    employmentType: "FULL-TIME",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "8",
    title: "Visual Designer",
    employmentType: "FULL-TIME",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "9",
    title: "Project Manager",
    employmentType: "FULL-TIME",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "10",
    title: "Front End Developer",
    employmentType: "PART-TIME",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "11",
    title: "Senior UX Designer",
    employmentType: "FULL-TIME",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
  {
    id: "12",
    title: "Marketing Manager",
    employmentType: "INTERNSHIP",
    salary: { min: 20000, max: 25000 },
    location: "Dhaka, Bangladesh",
  },
];

const FeaturedJobsSection: React.FC = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Set<string>>(new Set());

  const handleBookmarkToggle = (jobId: string) => {
    setBookmarkedJobs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };

  const handleViewAll = () => {
    // Navigate to all jobs page or expand the current view
    console.log("Navigate to all jobs");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
          <ViewAllButton onClick={handleViewAll} />
        </header>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {featuredJobs.map((job) => (
            <JobCard
              key={job.id}
              {...job}
              isBookmarked={bookmarkedJobs.has(job.id)}
              onBookmarkToggle={handleBookmarkToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection; 