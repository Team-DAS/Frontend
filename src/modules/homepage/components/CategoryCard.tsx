"use client"

import React from "react";

interface CategoryCardProps {
  title: string;
  openPositions: number;
  icon: React.ReactNode;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  openPositions,
  icon,
  onClick,
}) => {
  return (
    <article 
      className="group relative rounded-lg p-6 cursor-pointer transition-all duration-300 text-gray-900 hover:shadow-md "
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        {/* Icon Container */}
        <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 bg-blue-50 group-hover:bg-blue-100">
          <div className="text-2xl text-blue-600 transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-900">
            {title}
          </h3>
          
          <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-blue-700">
            {openPositions} Open position{openPositions !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CategoryCard; 