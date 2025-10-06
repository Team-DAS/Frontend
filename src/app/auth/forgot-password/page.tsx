"use client"

import React from "react";
import ForgotPasswordForm from "@/modules/homepage/components/ForgotPasswordForm";
import { type ForgotPasswordFormData } from "@/modules/homepage/schemas/authSchemas";
import AuthLayout from "@/modules/homepage/layout/AuthLayout";

const ForgotPasswordPage: React.FC = () => {
  const handleForgotPassword = async (data: ForgotPasswordFormData) => {
    console.log("Forgot password data:", data);
    // TODO: Implement forgot password logic
    // This would typically involve:
    // 1. Making API call to send reset email
    // 2. Showing success message
    // 3. Optionally redirecting to a confirmation page
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Reset email sent successfully");
      // Success message or redirect logic would go here
    } catch (error) {
      console.error("Failed to send reset email:", error);
    }
  };

  return (
    <AuthLayout 
      title="Forgot Password" 
      subtitle="Enter your email address and we'll send you a link to reset your password."
    >
      <ForgotPasswordForm onSubmit={handleForgotPassword} />
    </AuthLayout>
  );
};

export default ForgotPasswordPage; 