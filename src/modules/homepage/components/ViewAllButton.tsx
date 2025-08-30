"use client"

import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";

interface ViewAllButtonProps {
  onClick: () => void;
  label?: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ 
  onClick, 
  label = "View All" 
}) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      aria-label={`View all ${label.toLowerCase()}`}
      sx={{
        backgroundColor: "white",
        color: "#0085fd",
        fontWeight: "bold",
        transition: "all 0.3s ease",
        width: "130px",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #e5e7eb",
        "&:hover": {
          backgroundColor: "#0085fd",
          color: "white",
          transition: "all 0.3s ease",
        },
      }}
    >
      {label}
      <ArrowForwardIcon className="w-5 h-5" />
    </Button>
  );
};

export default ViewAllButton; 