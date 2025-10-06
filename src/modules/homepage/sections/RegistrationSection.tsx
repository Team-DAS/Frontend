"use client"

import React from "react";
import RegistrationCard from "../components/RegistrationCard";
import becomeEmployeeImage from "@/modules/homepage/assets/become-employee.svg";
import becomeEmployerImage from "@/modules/homepage/assets/become-employer.svg";

const RegistrationSection: React.FC = () => {
  const handleCandidateClick = () => {
    // Navigate to candidate registration
    console.log("Navigate to candidate registration");
  };

  const handleEmployerClick = () => {
    // Navigate to employer registration
    console.log("Navigate to employer registration");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Become a Candidate Card */}
          <RegistrationCard
            title="Become a Candidate"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur."
            buttonText="Register Now"
            backgroundImage={becomeEmployeeImage}
            backgroundColor="bg-gray-200"
            textColor="text-gray-800"
            buttonColor="bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleCandidateClick}
          />

          {/* Become an Employer Card */}
          <RegistrationCard
            title="Become a Employers"
            description="Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliquet."
            buttonText="Register Now"
            backgroundImage={becomeEmployerImage}
            backgroundColor="bg-blue-600"
            textColor="text-white"
            buttonColor="bg-white text-blue-600 hover:bg-gray-100"
            onClick={handleEmployerClick}
          />
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection; 