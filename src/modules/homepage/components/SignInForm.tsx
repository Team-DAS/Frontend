"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInFormData } from "@/modules/homepage/schemas/authSchemas";
import SocialAuthButtons from "./SocialAuthButtons";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

interface SignInFormProps {
  onSubmit: (data: SignInFormData) => void;
  isLoading?: boolean;
}

const SignInForm: React.FC<SignInFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const handleSocialAuth = (provider: "linkedin" | "google") => {
    console.log(`Authenticate with ${provider}`);
    // Implement social authentication logic
  };

  return (
    <div className="space-y-6">
      {/* Create Account Link */}
      <p className="text-sm text-gray-600">
        Don&apos;t have account?{" "}
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

        {/* Password */}
        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`w-full px-3 py-3 pr-10 border rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            {showPassword ? (
              <VisibilityOffIcon className="w-5 h-5" />
            ) : (
              <VisibilityIcon className="w-5 h-5" />
            )}
          </button>
          {errors.password && (
            <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* Remember me and Forgot password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <Link
            href="/auth/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <PrimaryButton
          type="submit"
          disabled={isSubmitting || isLoading}
          isLoading={isSubmitting || isLoading}
          loadingText="Signing In..."
          showArrow={true}
          sx={{ width: "100%" }}
        >
          Sign In
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

export default SignInForm; 