"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const menuItems = [
  { name: "Overview", path: "/candidate", icon: DashboardCustomizeOutlinedIcon },
  { name: "Applied Jobs", path: "/candidate/applied-jobs", icon: WorkOutlineOutlinedIcon },
  { name: "Favorite Jobs", path: "/candidate/favorite-jobs", icon: BookmarkBorderOutlinedIcon },
  { name: "Job Alert", path: "/candidate/job-alert", icon: NotificationsActiveOutlinedIcon },
  { name: "Settings", path: "/candidate/settings", icon: SettingsOutlinedIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen p-4 border-r border-gray-300">
      <h2 className="text-sm font-semibold mb-4 text-gray-400">CANDIDATE DASHBOARD</h2>
      <nav className="flex flex-col gap-1">
        {menuItems.map(({ name, path, icon: Icon }) => {
          const isActive = pathname === path;

          return (
            <Link
              key={path}
              href={path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors relative ${
                isActive
                  ? "bg-blue-100 text-blue-700 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[4px] before:bg-blue-700"
                  : "text-gray-700 hover:bg-gray-200 "
              }`}
            >
              <Icon
                fontSize="small"
                className={isActive ? "text-blue-700" : "text-gray-500"}
              />
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
