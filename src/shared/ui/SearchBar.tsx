"use client";

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface SearchBarProps {
  onSearch?: (jobQuery: string, location: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = "" }) => {
  const [jobQuery, setJobQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(jobQuery, location);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`flex items-center gap-2 w-full max-w-4xl bg-white rounded-lg shadow-md p-2 ${className}`}
    >
      {/* Job Search Input */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <SearchIcon className="text-blue-500 text-xl" />
        <input
          type="text"
          placeholder="Job title, Keyword..."
          value={jobQuery}
          onChange={(e) => setJobQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
        />
      </div>

      {/* Location Input */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <LocationOnIcon className="text-blue-500 text-xl" />
        <input
          type="text"
          placeholder="Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap"
      >
        Find Job
      </button>
    </form>
  );
};

export default SearchBar; 