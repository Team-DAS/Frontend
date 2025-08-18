"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Find Job", href: "/find-job" },
  { name: "Employers", href: "/employers" },
  { name: "Candidate", href: "/candidate" },
  { name: "Pricing Plans", href: "/pricing-plans" },
  { name: "Customer Supports", href: "/customer-supports" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [value, setValue] = React.useState("Español");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <header className="flex justify-center bg-gray-100 items-center h-12 py-2">
      <div className="flex items-center justify-between sm:w-9/13 w-full">
        <nav className="h-full">
          <ul className="flex space-x-10 h-full">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                        : "text-gray-500 hover:text-gray-700"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
          <Select
            value={value}
            onChange={handleChange}
            className="h-full px-[6px] max-h-[32px]"
          >
            <MenuItem value={"Español"}>🇨🇴 Español​</MenuItem>
            <MenuItem value={"English"}>🇺🇸​​ English</MenuItem>
          </Select>
        </div>
      </div>
    </header>
  );
}
