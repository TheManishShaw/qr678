import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative md:h-[520px] w-full overflow-hidden bg-gradient-to-br from-[#A88750] to-[#EEC582]">
      <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 md:py-12 lg:px-12 z-10">
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            Your Journey To
            <br />
            Healthier Hair
            <br />
            Starts Here!
          </h1>
          <p className="mb-8 max-w-md text-lg text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="md:absolute inset-0 lg:relative lg:inset-auto">
          <div className="relative h-[350px] md:h-full w-full">
            <Image
              src="/assets/png/faq/hero-image-faq.png"
              alt="People with healthy hair and FAQ text"
              fill
              className="object-cover lg:object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
