import React from "react";
import HeroSection from "./components/hero-section";
import { FAQSection } from "./components/faq-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FaqPage = () => {
  return (
    <div> 
     <div className="relative w-full overflow-hidden bg-[#C4A57B]">
      <div className="container relative mx-auto grid min-h-[600px] grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 lg:min-h-[700px]">
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-6 text-white">
          <h1 className="text-4xl font-bold leading-tight tracking-tight drop-shadow-sm md:text-5xl lg:text-6xl">
            Your Journey To Healthier Hair Starts Here!
          </h1>
          <p className="max-w-[600px] text-lg text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Image Section with FAQ Overlay */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-full w-full">
            <img
              src="/assets/png/faq/hero-image-faq.png"
              alt="Group of people with different hair types"
              className="h-full w-full object-cover"
            />
            {/* FAQ Geometric Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-full w-full">
                {/* F Shape */}
                <div className="absolute left-[10%] top-[20%] h-32 w-32 border-2 border-white/30" />
                {/* A Shape */}
                <div className="absolute left-[40%] top-[30%] h-32 w-32 rotate-45 border-2 border-white/30" />
                {/* Q Shape */}
                <div className="absolute left-[70%] top-[40%] h-32 w-32 rounded-full border-2 border-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative w-full overflow-hidden bg-[#C4A57B]">
      <div className="container relative mx-auto grid min-h-[600px] grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 lg:min-h-[700px]">
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-6 text-white">
          <h1 className="text-4xl font-bold leading-tight tracking-tight drop-shadow-sm md:text-5xl lg:text-6xl">
            Your Journey To Healthier Hair Starts Here!
          </h1>
          <p className="max-w-[600px] text-lg text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Image Section with FAQ Overlay */}
        <div className="relative flex items-center justify-center ">
          <div className="relative h-full w-full">
            <Image
              src="/assets/png/faq/hero-image-faq.png"
              alt="Group of people with different hair types"
              layout="fill"
              objectFit="cover"
              className=""
            />
            {/* FAQ Geometric Overlay */}
    
          </div>
        </div>
      </div>
    </div>
      <HeroSection />
      <FAQSection />
    </div>
  );
};

export default FaqPage;
