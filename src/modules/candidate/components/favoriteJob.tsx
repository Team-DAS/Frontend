"use client";

import { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

type JobItem = {
  id: number;
  logo: React.ReactNode;
  title: string;
  type: string;
  typeColor: string;
  location: string;
  salary: string;
  remainingDays?: string;
  status?: boolean; // true = activo, false = expirado
  isBookmarked?: boolean;
};

type JobListProps = {
  jobs: JobItem[];
};

export default function JobList({ jobs }: JobListProps) {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <Paper className="p-4 rounded-lg ">
      {/* Lista de Jobs */}
      <div className="flex flex-col divide-y divide-gray-200 border-none">
        {jobs.map((job) => {
          const isSelected = selectedJob === job.id;

          return (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job.id)}
              className={`flex items-center justify-between py-4 px-2 cursor-pointer transition 
              ${isSelected ? "bg-blue-50 border-l-4 border-blue-600" : ""}`}
            >
              {/* Columna izquierda: Info */}
              <div className="flex items-center gap-4">
                {job.logo}
                <div className="space-y-1">
                  <Typography fontWeight="bold">{job.title}</Typography>
                  <Chip
                    size="small"
                    label={job.type}
                    sx={{
                      backgroundColor: job.typeColor,
                      color: "white",
                      fontSize: "0.75rem",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    📍 {job.location} · 💲 {job.salary}
                  </Typography>

                  {job.status === false ? (
                    <Typography variant="caption" color="error" fontWeight="bold">
                      ❌ Job Expired
                    </Typography>
                  ) : (
                    job.remainingDays && (
                      <Typography variant="caption" color="text.secondary">
                        ⏳ {job.remainingDays} Remaining
                      </Typography>
                    )
                  )}
                </div>
              </div>

              {/* Columna derecha: Acciones */}
              <div className="flex items-center gap-2">
                <IconButton>
                  {job.isBookmarked ? (
                    <BookmarkIcon className="text-blue-600" />
                  ) : (
                    <BookmarkBorderIcon />
                  )}
                </IconButton>

                {job.status === false ? (
                  <Button variant="outlined" color="inherit" disabled>
                    Deadline Expired
                  </Button>
                ) : (
                  <Button
                    variant={isSelected ? "contained" : "outlined"}
                    color="primary"
                  >
                    Apply Now →
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Paper>
  );
}
