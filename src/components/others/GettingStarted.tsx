import React from "react";
import { Terminal, Download, Rocket, FolderOpen } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Clone the Repository",
    description:
      "Get started by cloning the template repository to your local machine.",
    code: "git clone https://github.com/MikeKomari/ReactTSPWATemplate .",
    color: "#4B0082",
  },
  {
    icon: Terminal,
    title: "Install Dependencies",
    description:
      "Install all the required packages and dependencies using npm.",
    code: "npm install",
    color: "#6A0DAD",
  },
  {
    icon: Rocket,
    title: "Start Development",
    description:
      "Launch the development server and start building your application.",
    code: "npm run dev",
    color: "#FFC857",
  },
  {
    icon: FolderOpen,
    title: "Explore & Build",
    description:
      "Familiarize yourself with the folder structure and start creating amazing apps!",
    code: "Open your editor and start coding!",
    color: "#3EB489",
  },
];

export const GettingStarted: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E1A47] mb-6">
            Get Started in
            <span className="block text-[#4B0082]">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-[#2E1A47]/70 max-w-3xl mx-auto">
            From zero to production-ready PWA in minutes. No complex
            configuration, no endless setup guides — just clone, install, and
            start building.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-br from-[#F4F1FF] to-white rounded-2xl border border-[#4B0082]/10 hover:border-[#4B0082]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3"
                      style={{ backgroundColor: step.color }}
                    >
                      {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-[#2E1A47]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#2E1A47]/70 mb-4 text-lg">
                    {step.description}
                  </p>
                </div>

                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="bg-[#2E1A47] rounded-xl p-4 font-mono text-sm">
                    <div className="flex items-center mb-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <code className="text-green-400">$ {step.code}</code>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/MikeKomari/ReactTSPWATemplate"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View on GitHub
            </a>
            <a
              href="https://github.com/MikeKomari/ReactTSPWATemplate#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#4B0082] text-[#4B0082] rounded-lg font-semibold text-lg hover:bg-[#4B0082] hover:text-white transition-all duration-300"
            >
              Read README
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
