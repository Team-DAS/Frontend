"use client";
import React from "react";
import Link from "next/link";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const sections = [
  {
    title: "Quick Links",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Candidate",
    links: [
      { name: "Browse Jobs", href: "/jobs" },
      { name: "Browse Employers", href: "/employers" },
      { name: "Submit Resume", href: "/submit-resume" },
      { name: "Job Alerts", href: "/job-alerts" },
    ],
  },
  {
    title: "Employers",
    links: [
      { name: "Post a Job", href: "/jobs" },
      { name: "Browse Candidates", href: "/employers" },
      { name: "Employers Dashboard", href: "/submit-resume" },
      { name: "Applications", href: "/job-alerts" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Faqs", href: "/jobs" },
      { name: "Privacy Policy", href: "/employers" },
      { name: "Terms & Conditions", href: "/submit-resume" },
    ],
  },
];

const businessInfo = {
    name: "Jobpilot",
    phone: "(319) 555-0115",
    address: "6391 Elgin St. Celina, Delaware 10299, New York, United States of America",
    copyright: "© 2021 Jobpilot - Job Portal. All rights Reserved"
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full h-fit text-white flex flex-col text-sm justify-between items-center">
      <div className="w-full h-fit flex items-center justify-center py-10">
        <div className="sm:w-9/13 w-full flex gap-6 py-6 justify-between items-start">
          <div className="flex flex-col sm:w-1/4 w-full text-gray-600 gap-3 text-sm">
            <div className="flex gap-2 text-white items-center">
              <WorkOutlineOutlinedIcon />
              <span className="text-xl">{businessInfo.name}</span>
            </div>
            <p className="text-lg">
              Call now: <span className="text-white">{businessInfo.phone}</span>
            </p>
            <p className="text-gray-500">
              {businessInfo.address}
            </p>
          </div>
          <nav>
            <ul className="flex space-x-10">
              {sections.map((section) => {
                return (
                  <div key={section.title} className="flex flex-col gap-4">
                    <h4 className="text-[0.9rem] font-medium">
                      {section.title}
                    </h4>
                    <ul className="flex flex-col gap-1">
                      {section.links.map((link) => {
                        return (
                          <li
                            key={link.name}
                            className="flex items-center overflow-hidden"
                          >
                            <div className="-translate-x-6 hover:translate-x-0 duration-200 transition-all text-gray-400 hover:text-gray-50">
                              <Link href={link.href} className="flex items-center gap-1">
                                <ArrowForwardIcon />
                                {link.name}
                              </Link>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-full h-fit py-6 flex text-gray-500 border-t-2 border-t-gray-500 justify-center items-center">
        <div className="flex items-center justify-between sm:w-9/13 w-full">
          <p>{businessInfo.copyright}</p>
          <ul className="flex gap-2">
            <li>
              <Link
                className="hover:text-gray-50 duration-200 transition-all"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-50 duration-200 transition-all"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-50 duration-200 transition-all"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-50 duration-200 transition-all"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
