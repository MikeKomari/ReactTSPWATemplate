import { GettingStarted } from "@/components/others/GettingStarted";
import { TechStack } from "@/components/others/TechStack";
import { Features } from "@/components/ui/Features";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/ui/Hero";
import React from "react";

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 min-w-full">
      <Hero />
      <Features />
      <TechStack />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default Main;
