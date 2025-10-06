"use client"

import React from "react";
import { Button, ButtonProps } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PrimaryButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
  children: React.ReactNode;
  showArrow?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  showArrow = false,
  isLoading = false,
  loadingText = "Loading...",
  disabled,
  sx,
  ...props
}) => {
  return (
    <Button
      variant="contained"
      disabled={disabled || isLoading}
      sx={{
        backgroundColor: "#0085fd",
        color: "white",
        fontWeight: "500",
        fontSize: "14px",
        textTransform: "none",
        borderRadius: "6px",
        padding: "12px 16px",
        "&:hover": {
          backgroundColor: "#0066cc",
        },
        "&:disabled": {
          backgroundColor: "#9ca3af",
          color: "white",
        },
        ...sx,
      }}
      {...props}
    >
      <div className="flex items-center justify-center gap-2 w-full">
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            {loadingText}
          </>
        ) : (
          <>
            {children}
            {showArrow && <ArrowForwardIcon className="w-4 h-4" />}
          </>
        )}
      </div>
    </Button>
  );
};

export default PrimaryButton; 