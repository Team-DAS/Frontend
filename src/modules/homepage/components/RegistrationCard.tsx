"use client"

import React from "react";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface RegistrationCardProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  onClick?: () => void;
}

const RegistrationCard: React.FC<RegistrationCardProps> = ({
  title,
  description,
  buttonText,
  backgroundImage,
  textColor,
  buttonColor,
  onClick,
}) => {
  return (
    <article 
      className={`relative rounded-lg p-8 overflow-hidden`}
    >
      {/* Background Image */}
      <div className="absolute right-0 top-0 h-full w-full overflow-hidden">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover no-repeat"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-between items-start z-10 max-w-[60%] h-full">
        <h3 className={`text-xl font-bold mb-3 ${textColor}`}>
          {title}
        </h3>
        
        <p className={`text-sm mb-6 leading-relaxed ${textColor} opacity-90`}>
          {description}
        </p>
        
        <button 
          className={`${buttonColor} px-4 py-2 cursor-pointer rounded text-sm font-medium transition-all duration-300 hover:opacity-90 flex items-center gap-2 group-hover:gap-3`}
          onClick={onClick}
        >
          {buttonText}
          <ArrowForwardIcon className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};

export default RegistrationCard; 