"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, type ForgotPasswordFormData } from "@/modules/homepage/schemas/authSchemas";
import SocialAuthButtons from "./SocialAuthButtons";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import Link from "next/link";

interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotPasswordFormData) => void;
  isLoading?: boolean;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const handleSocialAuth = (provider: "linkedin" | "google") => {
    console.log(`Authenticate with ${provider}`);
    // Implement social authentication logic
  };

  return (
    <div className="space-y-6">
      {/* Back to Sign In Link */}
      <p className="text-sm text-gray-600">
        Go back to{" "}
        <Link href="/auth/signin" className="text-blue-600 hover:text-blue-800 underline">
          Sign In
        </Link>
      </p>

      {/* Create Account Link */}
      <p className="text-sm text-gray-600">
        Don't have account?{" "}
        <Link href="/account/setup" className="text-blue-600 hover:text-blue-800 underline">
          Create Account
        </Link>
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className={`w-full px-3 py-3 border rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <PrimaryButton
          type="submit"
          disabled={isSubmitting || isLoading}
          isLoading={isSubmitting || isLoading}
          loadingText="Sending Reset Link..."
          showArrow={true}
          sx={{ width: "100%" }}
        >
          Reset Password
        </PrimaryButton>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      {/* Social Authentication */}
      <SocialAuthButtons
        onLinkedInClick={() => handleSocialAuth("linkedin")}
        onGoogleClick={() => handleSocialAuth("google")}
        actionText="Sign in"
      />
    </div>
  );
};

export default ForgotPasswordForm; 