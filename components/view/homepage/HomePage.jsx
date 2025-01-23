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
import FeaturesPartners from "./components/FeaturesPartners";
import { TransformBeforeAfterCarousel } from "../productpage/components/TransformBeforeAfterCarousel";

const HomePage = () => {
  return (
    <div>
      {/* <HomeHeroSection /> */}
      <ResearchSection />
      <StatsSection />
      <FeaturesPartners />
      {/* <HappyCustomersSlider/> */}

      {/* <UntappedSection /> */}
      <ProductSection />
      <AsSeenOnSection />
      {/* <TestimonialsSection /> */}
      <TestimonialsGrid />
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-1 mb-16">
            Transformed the Life of <span className=" bg-textBg">150,000+</span>{" "}
            <br /> People and Counting...
          </h2>
          <TransformBeforeAfterCarousel />
        </div>
      </section>
      {/* <ProgramSection /> */}
      {/* <TopSearchSection/> */}
      <HomeBottomSection />
    </div>
  );
};

export default HomePage;
