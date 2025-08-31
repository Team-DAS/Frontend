"use client"

import React from "react";
import AuthLayout from "@/modules/homepage/layout/AuthLayout";
import RegistrationForm from "@/modules/homepage/components/RegistrationForm";
import { type RegistrationFormData } from "@/modules/homepage/schemas/authSchemas";

const CreateAccountPage: React.FC = () => {
  const handleRegistration = async (data: RegistrationFormData) => {
    try {
      console.log("Registration data:", data);
      // Here you would typically send the data to your API
      // Example:
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      
      // For demo purposes, just log the data
      alert("Account created successfully! (Demo mode)");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <AuthLayout
      title="Create account."
    >
      <RegistrationForm onSubmit={handleRegistration} />
    </AuthLayout>
  );
};

export default CreateAccountPage;
