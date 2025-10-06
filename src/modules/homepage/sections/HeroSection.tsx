import React from "react";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import MetricCard from "../components/MetricCard";
import SearchBar  from "@/shared/ui/SearchBar";
import heroImage from "@/modules/homepage/assets/hero.png";
import Image from "next/image";

const metrics = [
  {
    icon: <WorkOutlineOutlinedIcon fontSize="medium" />,
    value: 1000,
    label: "Jobs",
  },
  {
    icon: <BusinessOutlinedIcon fontSize="medium" />,
    value: 1000,
    label: "Companies",
  },
  {
    icon: <GroupOutlinedIcon fontSize="medium" />,
    value: 1000,
    label: "Candidates",
  },
  {
    icon: <WorkOutlineOutlinedIcon fontSize="medium" />,
    value: 1000,
    label: "New Jobs",
  },
];

const suggestions = [
  "Software Engineer",
  "Product Manager",
  "Data Analyst",
  "UX Designer",
  "Marketing Manager",
];

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-between items-center w-full">
      <div className="flex justify-between items-center w-full max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Find Your Dream Job</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <SearchBar />
          <p className="text-gray-500 text-sm">
            Suggestions:
            {suggestions.length > 0 && " "}
            {suggestions.map((suggestion, index) =>
              index === suggestions.length - 1 ? (
                <span key={index} className="font-bold hover:text-blue-500">
                  {suggestion}
                </span>
              ) : (
                <span key={index} className="font-bold hover:text-blue-500">
                  {suggestion},{" "}
                </span>
              )
            )}
          </p>
        </div>
        <div className="relative w-2/5 h-96">
          <Image
            src={heroImage}
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-10 mb-20 w-full max-w-7xl mx-auto px-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
