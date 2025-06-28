import React from "react";

const technologies = [
  { name: "React 19", description: "Modern UI library", category: "Frontend" },
  { name: "TypeScript", description: "Static typing", category: "Language" },
  { name: "Vite", description: "Build tool", category: "Build" },
  {
    name: "TailwindCSS",
    description: "Utility-first CSS",
    category: "Styling",
  },
  { name: "React Query", description: "Server state", category: "Data" },
  { name: "Zustand", description: "State management", category: "State" },
  { name: "Zod", description: "Schema validation", category: "Validation" },
  { name: "Axios", description: "HTTP client", category: "Network" },
  { name: "Vitest", description: "Unit testing", category: "Testing" },
  { name: "React Router v7", description: "Routing", category: "Navigation" },
  { name: "React Hot Toast", description: "Notifications", category: "UI" },
  { name: "PWA Plugin", description: "Progressive Web App", category: "PWA" },
];

const categories = [
  "Frontend",
  "Language",
  "Build",
  "Styling",
  "Data",
  "State",
  "Validation",
  "Network",
  "Testing",
  "Navigation",
  "UI",
  "PWA",
];
const categoryColors: { [key: string]: string } = {
  Frontend: "#4B0082",
  Language: "#6A0DAD",
  Build: "#FFC857",
  Styling: "#3EB489",
  Data: "#4B0082",
  State: "#6A0DAD",
  Validation: "#FFC857",
  Network: "#3EB489",
  Testing: "#4B0082",
  Navigation: "#6A0DAD",
  UI: "#FFC857",
  PWA: "#3EB489",
};

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F4F1FF] to-[#E8E1FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E1A47] mb-6">
            Modern Tech Stack
          </h2>
          <p className="text-xl text-[#2E1A47]/70 max-w-3xl mx-auto">
            Built with the latest and greatest technologies, carefully selected
            for performance, developer experience, and maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover:border-[#4B0082]/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                  style={{ backgroundColor: categoryColors[tech.category] }}
                >
                  {tech.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#2E1A47] mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-[#2E1A47]/70">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-[#2E1A47] font-medium">
              + Many more tools and utilities included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
