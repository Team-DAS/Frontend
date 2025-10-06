import React from "react";

const popularVacancies = [
  {
    name: "Software Engineer",
    positions: 234,
  },
  {
    name: "Product Manager",
    positions: 156,
  },
  {
    name: "Data Analyst",
    positions: 189,
  },
  {
    name: "UX Designer",
    positions: 98,
  },
  {
    name: "Marketing Manager",
    positions: 145,
  },
  {
    name: "DevOps Engineer",
    positions: 112,
  },
  {
    name: "Frontend Developer",
    positions: 203,
  },
  {
    name: "Backend Developer",
    positions: 178,
  },
  {
    name: "Full Stack Developer",
    positions: 167,
  },
  {
    name: "Data Scientist",
    positions: 134,
  },
  {
    name: "Project Manager",
    positions: 123,
  },
  {
    name: "Sales Representative",
    positions: 89,
  },
];

const PopularVacanciesSection = () => {
  return (
    <section className="flex bg-white flex-col justify-between items-center w-full py-20">
      <div className="flex justify-between items-center w-full max-w-7xl px-4 pb-10">
        <h2 className="text-3xl font-bold">Most Popular Vacancies</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl px-4 ">
        {popularVacancies.map((vacancy, index) => (
          <div key={index}>
            <h3 className="text-lg text-black mb-2 hover:text-blue-500 hover:underline hover:underline-offset-6 cursor-pointer transition-colors duration-200">
              {vacancy.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {vacancy.positions} positions available
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularVacanciesSection;
