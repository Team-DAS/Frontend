"use client"

import React from "react";

interface SimpleAuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const SimpleAuthLayout: React.FC<SimpleAuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white  px-6 py-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">J</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Jobpilot</span>
        </div>
      </header>

      {/* Main Content - Centered Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            {subtitle && (
              <p className="text-gray-600 text-sm">
                {subtitle}
              </p>
            )}
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default SimpleAuthLayout; 