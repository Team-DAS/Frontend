import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface JobCardProps {
  id: string;
  title: string;
  employmentType: "FULL-TIME" | "PART-TIME" | "INTERNSHIP";
  salary: {
    min: number;
    max: number;
  };
  location: string;
  isBookmarked?: boolean;
  onBookmarkToggle?: (id: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  employmentType,
  salary,
  location,
  isBookmarked = false,
  onBookmarkToggle,
}) => {
  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getEmploymentTypeColor = (type: string) => {
    switch (type) {
      case "FULL-TIME":
        return "bg-green-100 text-green-800";
      case "PART-TIME":
        return "bg-blue-100 text-blue-800";
      case "INTERNSHIP":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleBookmarkClick = () => {
    if (onBookmarkToggle) {
      onBookmarkToggle(id);
    }
  };

  return (
    <article className="relative bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:cursor-pointer transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Hover Background with Animation */}
      <div className="absolute inset-0 bg-gradient-to-l from-orange-100 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-800 ease-out rounded-lg"></div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <header className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-gray-800 transition-colors duration-300">
            {title}
          </h3>
          <button
            onClick={handleBookmarkClick}
            className="text-gray-400 hover:text-blue-500 hover:cursor-pointer transition-colors duration-200 p-1"
            aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
          >
            <BookmarkBorderIcon className="w-5 h-5" />
          </button>
        </header>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${getEmploymentTypeColor(
                employmentType
              )} group-hover:scale-105`}
            >
              {employmentType}
            </span>
          </div>

          <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
            Salary: {formatSalary(salary.min)} - {formatSalary(salary.max)}
          </p>

          <div className="flex items-center gap-2">
            <LocationOnIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" />
            <span className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{location}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobCard; 