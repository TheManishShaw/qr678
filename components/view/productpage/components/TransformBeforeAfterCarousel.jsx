"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const SLIDES = [
  {
    before: "/assets/svg/productpage/abhinav_jain_before.svg",
    after: "/assets/svg/productpage/abhinav_jain_after.svg",
    title: "Abhinav Jain",
    age: 35,
    gender: "Male",
    location: "Delhi",
    condition: "Grade III Vertex AGA",
  },
  {
    before: "/assets/svg/productpage/pratap_reddy_before.svg",
    after: "/assets/svg/productpage/pratap_reddy_after.svg",
    title: "Pratap Reddy",
    age: 29,
    gender: "Male",
    location: "Bangalore",
    condition: "Grade III AGA",
  },
  {
    before: "/assets/svg/productpage/arjun_kohli_before.svg",
    after: "/assets/svg/productpage/arjun_kohli_after.svg",
    title: "Arjun Kohli",
    age: 53,
    gender: "Male",
    location: "New Delhi",
    condition: "Grade IV AGA",
  },
  {
    before: "/assets/svg/productpage/digvijay_singh_before.svg",
    after: "/assets/svg/productpage/digvijay_singh_after.svg",
    title: "Digvijay Singh",
    age: 35,
    gender: "Male",
    location: "Bangalore",
    condition: "Grade IV AGA",
  },
  {
    before: "/assets/svg/productpage/sharal_braggs_before.svg",
    after: "/assets/svg/productpage/sharal_braggs_after.svg",
    title: "Pt. Sharal Braggs",
    age: 33,
    gender: "Female",
    location: "Bangalore",
    condition: "Ludwig Grade II",
  },
  {
    before: "/assets/svg/productpage/rimka_nishchal_before.svg",
    after: "/assets/svg/productpage/rimka_nishchal_after.svg",
    title: "Pt. Rimka Nischal",
    age: 46,
    gender: "Female",
    location: "Bangalore",
    condition: "Ludwig Grade II",
  },
  {
    before: "/assets/svg/productpage/rishab_salecha_before.svg",
    after: "/assets/svg/productpage/rishab_salecha_after.svg",
    title: "Pt. Rishabh Salecha",
    age: 31,
    gender: "Male",
    location: "Bangalore",
    condition: "Grade III-IV AGA",
  },
];

export function TransformBeforeAfterCarousel() {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className=" mx-auto p-4 "
      >
        <CarouselContent className="-ml-2 md:-ml-3  mx-auto w-full">
          {SLIDES.map((slide, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col justify-center px-5 max-w-lg mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
                {/* Before Card */}
                <Card className="relative border-2 rounded-none p-3 border-primary w-[300px]">
                  <CardContent className="p-0">
                    <Image
                      src={slide.before || "/placeholder.svg"}
                      alt="Before treatment"
                      width={225}
                      height={262}
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-100/95 px-6 py-2 shadow-lg">
                      <span className="text-blue-900 font-semibold text-lg">
                        Before
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* After Card */}
                <Card className="relative border-2 rounded-none p-3 border-primary w-[300px]">
                  <CardContent className="p-0">
                    <Image
                      src={slide.after || "/placeholder.svg"}
                      alt="After treatment"
                      width={225}
                      height={262}
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-100/95 px-6 py-2 shadow-lg">
                      <span className="text-blue-900 font-semibold text-lg">
                        After
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* {slide.title} */}
              <div className="bg-textBg shadow-md py-3 px-6  text-center mx-auto">
                <h2 className="text-blue-900 text-2xl font-semibold">
                  <p>{`${slide.gender}, ${slide.age} years , ${slide.location}`}</p>
                  <p>{slide.condition}</p>
                </h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="self-center pt-6" />
        <div className="flex items-center justify-end -mt-6 space-x-4">
          <div className="flex space-x-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
            <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
