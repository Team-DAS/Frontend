import React from 'react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  variant?: 'default' | 'transparent';
}

const MetricCard = ({
  icon,
  value,
  label,
  variant = 'default'
}: MetricCardProps) => {
  const getCardStyles = () => {
    if (variant === 'transparent') {
      return "flex flex-col  gap-4";
    }
    return "bg-white rounded-md p-4 min-w-60 flex items-center gap-4 group";
  };

  const getIconStyles = () => {
    if (variant === 'transparent') {
      return "bg-blue-950/60 p-5 rounded-md flex items-center justify-center";
    }
    return "bg-gray-100 group-hover:bg-blue-600 p-3 rounded-lg flex items-center justify-center transition-all duration-300";
  };

  const getIconTextStyles = () => {
    if (variant === 'transparent') {
      return "text-xl";
    }
    return "text-blue-600 group-hover:text-blue-50 text-xl transition-all duration-300";
  };

  const getValueStyles = () => {
    if (variant === 'transparent') {
      return "text-xl text-white font-semibold";
    }
    return "text-xl text-gray-900";
  };

  const getLabelStyles = () => {
    if (variant === 'transparent') {
      return "text-sm text-white/80";
    }
    return "text-sm text-gray-500";
  };

  return (
    <div className={getCardStyles()}>
      {/* Icon container */}
      <div className={getIconStyles()}>
        <div className={getIconTextStyles()}>
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col">
        <span className={getValueStyles()}>
          {value}
        </span>
        <span className={getLabelStyles()}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default MetricCard; 