import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import arrow from "@/modules/homepage/assets/arrow-curved.png";
import Image from "next/image";

const steps = [
  {
    icon: <PersonAddIcon className="text-blue-500 text-2xl group-hover:text-white transition-colors duration-200" />,
    title: "Create account",
    description: "Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
    isHighlighted: false,
  },
  {
    icon: <CloudUploadIcon className="text-blue-500 text-2xl group-hover:text-white transition-colors duration-200" />,
    title: "Upload CV/Resume",
    description: "Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales",
    isHighlighted: false,
  },
  {
    icon: <SearchIcon className="text-blue-500 text-2xl group-hover:text-white transition-colors duration-200" />,
    title: "Find suitable job",
    description: "Phasellus quis eleifend ex. Morbi nec fringilla nibh.",
    isHighlighted: false,
  },
  {
    icon: <CheckCircleIcon className="text-blue-500 text-2xl group-hover:text-white transition-colors duration-200" />,
    title: "Apply job",
    description: "Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.",
    isHighlighted: false,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="flex flex-col justify-between items-center w-ful py-20">
      <div className="flex flex-col items-center w-full max-w-7xl px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How JobPilot Works</h2>
        
        <div className="flex items-center justify-between w-full relative">
          {/* Render steps first */}
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col group hover:bg-white hover:rounded-lg px-10 py-5 items-center relative z-0">
              {/* Step Circle */}
              <div 
                className= "w-20 h-20 rounded-full flex items-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-200 bg-white justify-center mb-4 "
              >
                {step.icon}
              </div>
              
              {/* Step Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-gray-600 text-sm text-center max-w-48 leading-relaxed">
                {step.description}
              </p>
              
              {/* Highlight Background for Step 2 */}
              {step.isHighlighted && (
                <div className="absolute inset-0 bg-gray-200 rounded-lg transform scale-110"></div>
              )}
            </div>
          ))}
          
          {/* Render arrows separately with higher z-index */}
          {steps.map((step, index) => (
            index < steps.length - 1 && (
              <div key={`arrow-${index}`} className={`absolute ${index === 1 ? 'top-15' : 'top-0'} z-30 w-50`} style={{
                left: `${(index + 1) * 25 - 8}%`,
                transform: index === 1 ? 'rotatex(180deg)' : 'none'
              }}>
                <Image src={arrow} alt="arrow" width={200} height={200} />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 