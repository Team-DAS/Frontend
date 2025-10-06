"use client"

import React from "react";
import CategoryCard from "../components/CategoryCard";
import ViewAllButton from "../components/ViewAllButton";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import CampaignIcon from "@mui/icons-material/Campaign";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BarChartIcon from "@mui/icons-material/BarChart";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import StorageIcon from "@mui/icons-material/Storage";

interface Category {
  id: string;
  title: string;
  openPositions: number;
  icon: React.ReactNode;
}

const categories: Category[] = [
  {
    id: "1",
    title: "Graphics & Design",
    openPositions: 357,
    icon: <BrushIcon />,
  },
  {
    id: "2",
    title: "Code & Programming",
    openPositions: 312,
    icon: <CodeIcon />,
  },
  {
    id: "3",
    title: "Digital Marketing",
    openPositions: 297,
    icon: <CampaignIcon />,
  },
  {
    id: "4",
    title: "Video & Animation",
    openPositions: 247,
    icon: <PlayArrowIcon />,
  },
  {
    id: "5",
    title: "Music & Audio",
    openPositions: 204,
    icon: <MusicNoteIcon />,
  },
  {
    id: "6",
    title: "Account & Finance",
    openPositions: 167,
    icon: <BarChartIcon />,
  },
  {
    id: "7",
    title: "Health & Care",
    openPositions: 125,
    icon: <MedicalServicesIcon />,
  },
  {
    id: "8",
    title: "Data & Science",
    openPositions: 57,
    icon: <StorageIcon />,
  },
];

const PopularCategorySection: React.FC = () => {
  const handleViewAll = () => {
    // Navigate to all categories page or expand the current view
    console.log("Navigate to all categories");
  };

  const handleCategoryClick = (categoryId: string) => {
    // Navigate to category page or filter jobs by category
    console.log(`Navigate to category: ${categoryId}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Popular Category</h2>
          <ViewAllButton onClick={handleViewAll} />
        </header>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              {...category}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategorySection; 