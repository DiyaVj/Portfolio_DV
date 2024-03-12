"use client";
import React, { useState } from "react";
import AboutSection from "./components/AboutSection";
import AchievementSection from "./components/AchievementSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import StarsCanvas from "./components/StarsCanvas";

export default function Home() {
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const toggleAnimation = () => {
    setIsAnimationPaused(!isAnimationPaused);
  };
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
         <StarsCanvas isPaused={isAnimationPaused} />
      <Navbar />
      <div className="z-20 container mt-24 mx-auto px-12 py-4">
      <HeroSection
          toggleAnimation={toggleAnimation}
          isAnimationPaused={isAnimationPaused}
        />
        <AboutSection />
        <AchievementSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
