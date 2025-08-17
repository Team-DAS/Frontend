"use client"
import React from "react";
import Link from "next/link";
import { Select, MenuItem, SelectChangeEvent} from "@mui/material";

export default function Navbar() {
  const [value, setValue] = React.useState("Español");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  
  return (
    <nav className="flex justify-between px-10 py-2 bg-gray-100 items-center">
      <div>
        <ul className="flex space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Find Job</Link>
          </li>
          <li>
            <Link href="/services">Employers</Link>
          </li>
          <li>
            <Link href="/contact">Candidate</Link>
          </li>
          <li>
            <Link href="/blog">Pricing Plans</Link>
          </li>
          <li>
            <Link href="/login">Customer Supports</Link>
          </li>
        </ul>
      </div>
      <div>
        <Select
          value={value}
          onChange={handleChange}
          sx={{ paddingInline: "6px"}}
        >
          <MenuItem value={"Español"}>🇨🇴 Español​</MenuItem>
          <MenuItem value={"English"}>🇺🇸​​ English</MenuItem>
        </Select>
      </div>
    </nav>
  );
}
