"use client";

import JobList from "../components/favoriteJob";
import { Avatar } from "@mui/material";

// Lista de trabajos simulados
const jobAlerts = [
  {
    id: 1,
    logo: <Avatar src="/logos/google.png" alt="Google" />,
    title: "Technical Support Specialist",
    type: "Full Time",
    typeColor: "#2563eb",
    location: "Idaho, USA",
    salary: "$15K-$20K",
    remainingDays: "4 Days",
    status: true,
    isBookmarked: false,
  },
  {
    id: 2,
    logo: <Avatar src="/logos/youtube.png" alt="YouTube" />,
    title: "UI/UX Designer",
    type: "Full Time",
    typeColor: "#2563eb",
    location: "Minnesota, USA",
    salary: "$10K-$15K",
    remainingDays: "4 Days",
    status: true,
    isBookmarked: false,
  },
  {
    id: 3,
    logo: <Avatar src="/logos/reddit.png" alt="Reddit" />,
    title: "Front End Developer",
    type: "Internship",
    typeColor: "#0ea5e9",
    location: "Mymensingh, Bangladesh",
    salary: "$10K-$15K",
    remainingDays: "4 Days",
    status: false,
    isBookmarked: true,
  },
  {
    id: 4,
    logo: <Avatar src="/logos/ship.png" alt="Ship" />,
    title: "Marketing Officer",
    type: "Full Time",
    typeColor: "#2563eb",
    location: "Montana, USA",
    salary: "$50K-$60K",
    remainingDays: "4 Days",
    status: true,
    isBookmarked: false,
  },
];

const favoriteJobs = [
  {
    id: 5,
    logo: <Avatar src="/logos/google.png" alt="Google" />,
    title: "Technical Support Specialist",
    type: "Full Time",
    typeColor: "#2563eb",
    location: "Idaho, USA",
    salary: "$15K-$20K",
    status: true,
    isBookmarked: true,
  },
  {
    id: 6,
    logo: <Avatar src="/logos/youtube.png" alt="YouTube" />,
    title: "UI/UX Designer",
    type: "Full Time",
    typeColor: "#2563eb",
    location: "Minnesota, USA",
    salary: "$10K-$15K",
    remainingDays: "4 Days",
    status: true,
    isBookmarked: false,
  },
  {
    id: 7,
    logo: <Avatar src="/logos/slack.png" alt="Slack" />,
    title: "Senior UX Designer",
    type: "Full Time",
    typeColor: "#2563eb",
    location: "UK",
    salary: "$30K-$35K",
    remainingDays: "4 Days",
    status: true,
    isBookmarked: true,
  },
  {
    id: 8,
    logo: <Avatar src="/logos/facebook.png" alt="Facebook" />,
    title: "Junior Graphic Designer",
    type: "Full Time",
    typeColor: "#2563eb",
    location: "Bangladesh",
    salary: "$40K-$50K",
    remainingDays: "4 Days",
    status: true,
    isBookmarked: false,
  },
];

export default function JobsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <JobList  jobs={jobAlerts}  />
      <JobList   jobs={favoriteJobs}  />
    </div>
  );
}
