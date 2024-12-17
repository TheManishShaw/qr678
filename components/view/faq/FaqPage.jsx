import React from "react";
import HeroSection from "./components/hero-section";
import { FAQSection } from "./components/faq-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FaqPage = () => {
  return (
    <div> 
   
      <HeroSection />
      <FAQSection />
    </div>
  );
};

export default FaqPage;
