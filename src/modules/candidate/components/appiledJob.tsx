"use client";

import { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, Button, Chip, Pagination
} from "@mui/material";

type JobApplication = {
  id: number;
  logo: React.ReactNode;
  title: string;
  type: string;
  typeColor: string;
  location: string;
  salary: string;
  dateApplied: string;
  status: string;
  statusColor: string;
};

type RecentlyAppliedProps = {
  jobs: JobApplication[];
  limit?: number;
  paginated?: boolean;
  itemsPerPage?: number;
};

export default function RecentlyApplied({
  jobs,
  limit,
  paginated = false,
  itemsPerPage = 5,
}: RecentlyAppliedProps) {
  const [page, setPage] = useState(1);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null); // 👈 estado para selección

  let displayedJobs = limit && !paginated ? jobs.slice(0, limit) : jobs;

  if (paginated) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    displayedJobs = jobs.slice(start, end);
  }

  const totalPages = paginated ? Math.ceil(jobs.length / itemsPerPage) : 1;

  return (
    <Paper sx={{ p: 2, boxShadow: "none" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <Typography variant="h6" fontWeight="bold">
          Recently Applied
        </Typography>
        {!paginated && (
          <Typography
            component="a"
            href="/candidate/applied-jobs"
            sx={{ fontSize: "0.875rem", color: "gray", textDecoration: "none", cursor: "pointer" }}
          >
            View all →
          </Typography>
        )}
      </div>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
              <TableCell>Job</TableCell>
              <TableCell>Date Applied</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedJobs.map((job) => {
              const isSelected = selectedJobId === job.id; // 👈 ver si está seleccionado
              return (
                <TableRow
                  key={job.id}
                  onClick={() => setSelectedJobId(job.id)}
                  className={`cursor-pointer transition ${isSelected
                      ? "border-2 border-blue-700 "
                      : ""
                    }`}
                >

                  {/* Job */}
                  <TableCell>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      {job.logo}
                      <div>
                        <Typography fontWeight="bold">{job.title}</Typography>
                        <Chip
                          size="small"
                          label={job.type}
                          sx={{ backgroundColor: job.typeColor }}
                        />
                        <Typography variant="caption" display="block" color="text.secondary">
                          📍 {job.location} · 💲 {job.salary}
                        </Typography>
                      </div>
                    </div>
                  </TableCell>

                  {/* Date */}
                  <TableCell>{job.dateApplied}</TableCell>

                  {/* Status */}
                  <TableCell>
                    <Typography sx={{ color: job.statusColor, fontWeight: "bold" }}>
                      {job.status}
                    </Typography>
                  </TableCell>

                  {/* Action */}
                  <TableCell>
                    <Button
                      variant={isSelected ? "contained" : "outlined"}
                      color="primary"
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {paginated && totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{ mt: 2, display: "flex", justifyContent: "center" }}
          color="primary"
        />
      )}
    </Paper>
  );
}
