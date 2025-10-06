"use client"

import React from "react";
import Image from "next/image";
import backgroundImage from "@/modules/homepage/assets/sing-in.png";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MetricCard from "../components/MetricCard";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  const metrics = [
    {
      icon: <WorkOutlineOutlinedIcon className="text-white text-2xl" />,
      value: "175,324",
      label: "Live Job",
    },
    {
      icon: <BusinessOutlinedIcon className="text-white text-2xl" />,
      value: "97,354",
      label: "Companies",
    },
    {
      icon: <AssignmentTurnedInIcon className="text-white text-2xl" />,
      value: "7,532",
      label: "New Jobs",
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Jobpilot</span>
            </div>
          </div>

          {/* Form Content */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            {subtitle && (
              <p className="text-gray-600 text-sm mb-8">
                {subtitle}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>

      {/* Right Side - Background with Metrics */}
      <div className="flex-1 relative">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>
        
        {/* Content */}
        <div className="relative top-3/5 ml-15 flex flex-col z-10 text-white p-8">
          <h2 className="text-4xl font-bold mb-4">
            Over 1,75,324 candidates
          </h2>
          <p className="text-4xl mb-12">
            waiting for good employees.
          </p>

          {/* Metrics */}
          <div className="flex justify-start gap-16">
            {metrics.map((metric, index) => (
              <MetricCard key={index} icon={metric.icon} value={metric.value} label={metric.label} variant="transparent" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout; 