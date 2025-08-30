"use client";
import UserBadge from "../components/userBadge";
import Badge from "../components/badge";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import RecentlyApplied from "../components/appiledJob";

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
  isSelected?: boolean;
};

const jobs: JobApplication[] = [
  {
    id: 1,
    logo: <img src="https://portorocha.com/static/442269ac56eddaecd3fa3dd752c38870-1f45a87cbef4613d88ca54b03e3cd2e9.jpeg" alt="Upwork" className="w-10 h-10 rounded" />,
    title: "Networking Engineer",
    type: "Remote",
    typeColor: "bg-blue-100 text-blue-600",
    location: "Washington",
    salary: "$50k-80k/month",
    dateApplied: "Feb 2, 2019 19:28",
    status: "Active",
    statusColor: "text-green-600",
  },
  {
    id: 2,
    logo: <img src="/dribbble.png" alt="Dribbble" className="w-10 h-10 rounded" />,
    title: "Product Designer",
    type: "Full Time",
    typeColor: "bg-blue-100 text-blue-600",
    location: "Dhaka",
    salary: "$50k-80k/month",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusColor: "text-green-600",
  },
  {
    id: 3,
    logo: <img src="/apple.png" alt="Apple" className="w-10 h-10 rounded" />,
    title: "Junior Graphic Designer",
    type: "Temporary",
    typeColor: "bg-blue-100 text-blue-600",
    location: "Brazil",
    salary: "$50k-80k/month",
    dateApplied: "Feb 2, 2019 19:28",
    status: "Active",
    statusColor: "text-green-600",
  },
  {
    id: 4,
    logo: <img src="/microsoft.png" alt="Microsoft" className="w-10 h-10 rounded" />,
    title: "Visual Designer",
    type: "Contract Base",
    typeColor: "bg-blue-100 text-blue-600",
    location: "Wisconsin",
    salary: "$50k-80k/month",
    dateApplied: "Dec 7, 2019 23:26",
    status: "Active",
    statusColor: "text-green-600",
    isSelected: true,
  },
];

export default function AppliedJobs() {

  const all={name:"Ester Howard",
    applied_jobs:23,
    favorite_jobs:5,
    job_alerts:10,
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
}

  return <div className="p-4">
    
  <RecentlyApplied jobs={jobs} paginated itemsPerPage={6} />


  </div>;
}
