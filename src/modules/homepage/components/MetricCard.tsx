import React from 'react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

const MetricCard = ({
  icon,
  value,
  label
}: MetricCardProps) => {
  return (
    <div className="bg-white rounded-md p-4 min-w-60 flex items-center gap-4 hover:shadow-md transition-all duration-300 group">
      {/* Icon container */}
      <div className="bg-gray-100 group-hover:bg-blue-600 p-3 rounded-lg flex items-center justify-center transition-all duration-300">
        <div className="text-blue-600 group-hover:text-blue-50 text-xl transition-all duration-300">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col">
        <span className="text-xl text-gray-900">
          {value}
        </span>
        <span className="text-sm text-gray-500">
          {label}
        </span>
      </div>
    </div>
  );
};

export default MetricCard; 