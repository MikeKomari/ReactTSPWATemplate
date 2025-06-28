import React from "react";
import { Zap, Smartphone, Code2 } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F4F1FF] via-[#F4F1FF] to-[#E8E1FF] min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4B0082] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6A0DAD] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#4B0082]/10 border border-[#4B0082]/20 mb-8">
            <Zap className="w-4 h-4 text-[#4B0082] mr-2" />
            <span className="text-sm font-medium text-[#2E1A47]">
              React PWA Template
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#2E1A47] mb-6 leading-tight">
            Build Modern
            <span className="block bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] bg-clip-text text-transparent">
              PWA Apps
            </span>
            <span className="block">Lightning Fast</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#2E1A47]/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            A comprehensive React + TypeScript + Vite template with everything
            you need to build production-ready Progressive Web Apps. Skip the
            boilerplate, focus on building.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://github.com/MikeKomari/ReactTSPWATemplate"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
              <Code2 className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/MikeKomari/ReactTSPWATemplate#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#4B0082] text-[#4B0082] rounded-lg font-semibold text-lg hover:bg-[#4B0082] hover:text-white transition-all duration-300"
            >
              View README
            </a>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
              <Smartphone className="w-8 h-8 text-[#4B0082] mr-3" />
              <div className="text-left">
                <h3 className="font-bold text-[#2E1A47]">PWA Ready</h3>
                <p className="text-sm text-[#2E1A47]/70">
                  Installable & Offline
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
              <Zap className="w-8 h-8 text-[#FFC857] mr-3" />
              <div className="text-left">
                <h3 className="font-bold text-[#2E1A47]">Lightning Fast</h3>
                <p className="text-sm text-[#2E1A47]/70">Vite + React 19</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
              <Code2 className="w-8 h-8 text-[#3EB489] mr-3" />
              <div className="text-left">
                <h3 className="font-bold text-[#2E1A47]">TypeScript</h3>
                <p className="text-sm text-[#2E1A47]/70">Fully Type Safe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
