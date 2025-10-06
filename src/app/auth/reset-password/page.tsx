"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SimpleAuthLayout from "@/modules/homepage/layout/SimpleAuthLayout";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import { resetPasswordSchema, type ResetPasswordFormData } from "@/modules/homepage/schemas/authSchemas";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPasswordPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const handleResetPassword = async (data: ResetPasswordFormData) => {
    setIsLoading(true);
    console.log("Reset password data:", data);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Password reset successful");
      // TODO: Redirect to sign in page or show success message
    } catch (error) {
      console.error("Password reset failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SimpleAuthLayout 
      title="Reset Password"
      subtitle="Don&apos;t worry! It happens. Please enter the new password and confirm password."
    >
      <form onSubmit={handleSubmit(handleResetPassword)} className="space-y-6">
        {/* New Password */}
        <div>
          <TextField
            {...register("newPassword")}
            label="New Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <TextField
            {...register("confirmPassword")}
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
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
          loadingText="Resetting Password..."
          sx={{ mt: 3 }}
        >
          Reset Password
        </PrimaryButton>
      </form>
    </SimpleAuthLayout>
  );
};

export default ResetPasswordPage; 