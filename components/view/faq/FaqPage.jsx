import React from "react";
import HeroSection from "./components/hero-section";
import { FAQSection } from "./components/faq-section";

const FaqPage = () => {
  return (
    <div className="bg-[#F2F2F3]">
      <HeroSection />
      <FAQSection />
    </div>
  );
};

export default FaqPage;
