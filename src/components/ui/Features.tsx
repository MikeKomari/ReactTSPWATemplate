import React from "react";
import {
  Smartphone,
  Zap,
  Shield,
  Code2,
  Palette,
  TestTube,
  Globe,
  Settings,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Progressive Web App",
    description:
      "Fully PWA-ready with offline support, installable on any device, and app-like experience.",
    color: "#4B0082",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with Vite for instant hot reloading and optimized builds. React 19 for cutting-edge performance.",
    color: "#FFC857",
  },
  {
    icon: Shield,
    title: "Type Safe",
    description:
      "Full TypeScript integration with strict typing, IntelliSense, and compile-time error checking.",
    color: "#3EB489",
  },
  {
    icon: Palette,
    title: "Modern Styling",
    description:
      "TailwindCSS utility-first approach with responsive design and beautiful component system.",
    color: "#6A0DAD",
  },
  {
    icon: TestTube,
    title: "Testing Ready",
    description:
      "Vitest, React Testing Library, and JSDOM configured for comprehensive testing workflows.",
    color: "#4B0082",
  },
  {
    icon: Globe,
    title: "API Integration",
    description:
      "React Query for server state, Axios for HTTP requests, and Zod for runtime validation.",
    color: "#FFC857",
  },
  {
    icon: Settings,
    title: "State Management",
    description:
      "Zustand for lightweight state management with TypeScript support and persistence.",
    color: "#3EB489",
  },
  {
    icon: Layers,
    title: "Organized Structure",
    description:
      "Clean folder structure with components, hooks, services, and utilities properly organized.",
    color: "#6A0DAD",
  },
  {
    icon: Code2,
    title: "Developer Experience",
    description:
      "ESLint, hot toast notifications, loading skeletons, and modern React patterns included.",
    color: "#4B0082",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E1A47] mb-6">
            Everything You Need
            <span className="block text-[#4B0082]">Out of the Box</span>
          </h2>
          <p className="text-xl text-[#2E1A47]/70 max-w-3xl mx-auto">
            Skip weeks of setup and configuration. This template includes all
            the modern tools and best practices you need to build professional
            web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-[#F4F1FF] to-white rounded-2xl border border-[#4B0082]/10 hover:border-[#4B0082]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#2E1A47] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#2E1A47]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
