"use client"

import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface TestimonialCardProps {
  id: string;
  rating: number;
  text: string;
  clientName: string;
  jobTitle: string;
  profileImage: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  text,
  clientName,
  jobTitle,
  profileImage,
}) => {
  return (
    <article className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative min-h-[280px] flex flex-col">
      {/* Quote Icon */}
      <div className="absolute bottom-4 right-4 text-gray-300 text-4xl">
        <FormatQuoteIcon fontSize="inherit" />
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
        {text}
      </p>

      {/* Client Information */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
          <img
            src={profileImage}
            alt={`${clientName} profile`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">
            {clientName}
          </h4>
          <p className="text-gray-600 text-xs">
            {jobTitle}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard; 