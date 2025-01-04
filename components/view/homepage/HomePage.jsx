import React from "react";
import HomeHeroSection from "./components/HomeHeroSection";
import ProductSection from "./components/ProductSection";
import ResearchSection from "./components/ResearchSection";
import StatsSection from "./components/StatsSection";
import UntappedSection from "./components/untapped-section";
import ProgramSection from "./components/program-section";
import TestimonialsSection from "./components/testimonials-section";
import HappyCustomersSlider from "./components/HappyCustomersSlider";
import FloatingActionButtons from "./components/FloatingButtons";
import TopSearchSection from "../faq/components/TopSearchSection";
import GetStartedSection from "../suitpage/components/GetStartedSection";
import HomeBottomSection from "./components/HomeBottomSection";
import AsSeenOnSection from "../aboutpage/components/AsSeenOnSection";
import TestimonialsGrid from "./components/ExpertsSection";

const HomePage = () => {
  return (
    <div>
      {/* <HomeHeroSection /> */}
      <ResearchSection />
      <StatsSection />
      <HappyCustomersSlider/>
      <FloatingActionButtons />
      {/* <UntappedSection /> */}
      <ProductSection />
      <AsSeenOnSection/>
      {/* <TestimonialsSection /> */}
      <TestimonialsGrid/>
      
      <ProgramSection />
      <TopSearchSection/>
      <HomeBottomSection />
      
    </div>
  );
};

export default HomePage;
