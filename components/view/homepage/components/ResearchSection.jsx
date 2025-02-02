"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    bgImage: "/assets/svg/homepage/slider-1.svg",
    title: ["QR678® Shaping the future of hair science"],
    subtitle: (
      <>
        Proven solutions that help{" "}
        <span className="font-bold">1500+ Doctors</span> make their patients
        happier
      </>
    ),
    highlight: "",
    link: "/about-us",
  },
  {
    bgImage: "/assets/svg/homepage/home-research-banner.svg",
    title: ["Empowering you with science to delight your patients."],
    subtitle:
      "Clinically proven solutions to improve efficiency and effectiveness of your hair practice.",
    highlight: "",
    link: "/products",
  },
];

export default function ResearchSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );
  const carouselRef = React.useRef(null);

  return (
    <div className="relative">
      <Carousel
        ref={carouselRef}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center mix-blend-multiply"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${slide.bgImage}')`,
                  }}
                />
                <div className="relative z-10 flex flex-col justify-end min-h-[60vh] md:min-h-screen text-center px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
                  <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
                    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                      {slide.title.map((line, i) => (
                        <h1
                          key={i}
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white italic"
                        >
                          {line}
                        </h1>
                      ))}
                      <p className="text-sm max-w-lg mx-auto sm:text-base md:text-lg lg:text-2xl text-gray-200 font-[200]">
                        {slide.subtitle}
                      </p>
                      {slide.highlight && (
                        <div className="inline-block bg-[#FFD481] px-2 py-1 sm:px-3 sm:py-1 md:px-4">
                          <p className="text-xs sm:text-sm md:text-base text-gray-900 font-bold">
                            {slide.highlight}
                          </p>
                        </div>
                      )}
                    </div>
                    <Link href={slide.link}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="mt-4 sm:mt-6 lg:mt-8 bg-white text-primary rounded-md font-bold text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3"
                      >
                        Know more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 transition-opacity opacity-50 hover:opacity-100" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 transition-opacity opacity-50 hover:opacity-100" />
      </Carousel>
    </div>
  );
}
