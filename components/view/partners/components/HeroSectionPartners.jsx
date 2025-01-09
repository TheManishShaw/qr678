import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSectionPartners = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-zinc-300 via-gray-200 to-zinc-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-4/5 relative h-[500px]  ">
            <Image
              src="/assets/png/partners/doctors (1).png"
              alt="Medical professionals with clipboards"
              fill
              className="object-cover  object-top"
              priority
            />
          </div>

          <div className="w-full md:w-2/5 space-y-6 mb-6 md:mb-0 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e2b8f]">
              Our Doctor Partners
            </h1>
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-gray-600">
                QR678® solutions are available across
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                1000+ clinics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPartners;
