import React from "react";
import HomeHeroSection from "./components/HomeHeroSection";
import ProductSection from "./components/ProductSection";
import ResearchSection from "./components/ResearchSection";
import StatsSection from "./components/StatsSection";
import UntappedSection from "./components/untapped-section";
import ProgramSection from "./components/program-section";
import TestimonialsSection from "./components/testimonials-section";

const HomePage = () => {
  return (
    <div>
      {/* <HomeHeroSection /> */}
      <ResearchSection />
      <StatsSection />
      <UntappedSection />
      <ProgramSection />
      <ProductSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
