"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import { emailVerificationSchema, type EmailVerificationFormData } from "@/modules/homepage/schemas/authSchemas";
import { TextField, Typography, Link } from "@mui/material";
import SimpleAuthLayout from "@/modules/homepage/layout/SimpleAuthLayout";

const EmailVerificationPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResendLoading, setIsResendLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailVerificationFormData>({
    resolver: zodResolver(emailVerificationSchema),
  });

  const handleVerifyEmail = async (data: EmailVerificationFormData) => {
    setIsLoading(true);
    console.log("Email verification data:", data);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Email verification successful");
      // TODO: Redirect to dashboard or success page
    } catch (error) {
      console.error("Email verification failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResendLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Verification code resent");
      // TODO: Show success message
    } catch (error) {
      console.error("Failed to resend code:", error);
    } finally {
      setIsResendLoading(false);
    }
  };

  return (
    <SimpleAuthLayout 
      title="Email Verification" 
      subtitle="We've sent a verification code to argemdevtest@gmail.com to verify your email address and activate your account."
    >
      <form onSubmit={handleSubmit(handleVerifyEmail)} className="space-y-6">
        {/* Verification Code */}
        <div>
          <TextField
            {...register("verificationCode")}
            label="Verification Code"
            fullWidth
            variant="outlined"
            error={!!errors.verificationCode}
            helperText={errors.verificationCode?.message}
            placeholder="Enter 6-digit code"
            inputProps={{
              maxLength: 6,
              style: { textAlign: "center", fontSize: "18px", letterSpacing: "4px" }
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </div>

        {/* Submit Button */}
        <PrimaryButton
          type="submit"
          fullWidth
          isLoading={isLoading}
          loadingText="Verifying..."
          sx={{ mt: 3 }}
          showArrow
        >
          Verify My Account
        </PrimaryButton>

        {/* Resend Code */}
        <div className="text-center mt-6">
          <Typography variant="body2" color="text.secondary">
            Didn&apos;t receive any code?{" "}
            <Link
              component="button"
              type="button"
              onClick={handleResendCode}
              disabled={isResendLoading}
              sx={{
                color: "#0085fd",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
                "&:disabled": {
                  color: "#9ca3af",
                },
              }}
            >
              {isResendLoading ? "Sending..." : "Resend"}
            </Link>
          </Typography>
        </div>
      </form>
    </SimpleAuthLayout>
  );
};

export default EmailVerificationPage; 