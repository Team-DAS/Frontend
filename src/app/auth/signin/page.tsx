"use client"

import React from "react";
import AuthLayout from "@/modules/homepage/layout/AuthLayout";
import SignInForm from "@/modules/homepage/components/SignInForm";
import { type SignInFormData } from "@/modules/homepage/schemas/authSchemas";

const SignInPage: React.FC = () => {
  const handleSignIn = async (data: SignInFormData) => {
    console.log("Sign in data:", data);
    // TODO: Implement sign in logic
    // This would typically involve:
    // 1. Making API call to authenticate user
    // 2. Storing auth tokens
    // 3. Redirecting to dashboard or intended page
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Sign in successful");
      // Redirect logic would go here
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <AuthLayout title="Sign in">
      <SignInForm onSubmit={handleSignIn} />
    </AuthLayout>
  );
};

export default SignInPage; 