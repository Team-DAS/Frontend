"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, type RegistrationFormData } from "@/modules/homepage/schemas/authSchemas";
import SocialAuthButtons from "./SocialAuthButtons";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRegister } from "../hooks/useRegister";

const RegistrationForm: React.FC = () => {
  const { register: doRegister, loading, error, success } = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      accountType: "FREELANCER", // Changed default value
      agreeToTerms: false,
    },
  });

  const accountType = watch("accountType");

  const handleSocialAuth = (provider: "linkedin" | "google") => {
    console.log(`Authenticate with ${provider}`);
  };

  const onSubmit = async (data: RegistrationFormData) => {
    await doRegister(data);
  };

  return (
    <div className="space-y-6">
      {/* Login Link */}
      <p className="text-sm text-gray-600">
        Already have account?{" "}
        <a href="/auth/login" className="text-blue-600 hover:text-blue-800 underline">
          Log In
        </a>
      </p>

      {/* Account Type Toggle */}
      <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center gap-2">
        <p className="text-sm text-gray-600">Create account as:</p>
        <div className="flex gap-2 w-full">
          <button
            type="button"
            onClick={() => setValue("accountType", "FREELANCER")} // Changed value
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors duration-200 ${
              accountType === "FREELANCER"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            👤 FREELANCER
          </button>
          <button
            type="button"
            onClick={() => setValue("accountType", "EMPLOYER")} // Changed value
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors duration-200 ${
              accountType === "EMPLOYER"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            🏢 EMPLOYER
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Hidden account type field */}
        <input type="hidden" {...register("accountType")} />

        {/* Full Name & Username Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              {...register("fullName")}
              type="text"
              placeholder="Full Name"
              className={`w-full px-3 py-3 border rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("username")}
              type="text"
              placeholder="Username"
              className={`w-full px-3 py-3 border rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.username && (
              <p className="mt-1 text-xs text-red-600">{errors.username.message}</p>
            )}
          </div>
        </div>

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

        {/* Confirm Password */}
        <div className="relative">
          <input
            {...register("confirmPassword")}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className={`w-full px-3 py-3 pr-10 border rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            {showConfirmPassword ? (
              <VisibilityOffIcon className="w-5 h-5" />
            ) : (
              <VisibilityIcon className="w-5 h-5" />
            )}
          </button>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Terms Agreement */}
        <div className="flex items-center gap-3">
          <input
            {...register("agreeToTerms")}
            type="checkbox"
            id="agreeToTerms"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
            I&apos;ve read and agree with your{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              Terms of Services
            </a>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-xs text-red-600">{errors.agreeToTerms.message}</p>
        )}

        {/* Submit Button */}
        <PrimaryButton
          type="submit"
          disabled={isSubmitting || loading}
          isLoading={isSubmitting || loading}
          loadingText="Creating Account..."
          showArrow={true}
          sx={{ width: "100%" }}
        >
          Create Account
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
      />
    </div>
  );
};

export default RegistrationForm;