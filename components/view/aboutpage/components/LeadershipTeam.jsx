import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const LeadershipTeam = () => {
  const leaders = [
    {
      image: "",
      name: "Mr. Indrajit Dutta",
      designation: "Vice President - QR678",
    },
    {
      image: "",
      name: "Mrs. Vaijayanti Naidu",
      designation: "DGM-BD & Strategic Alliances - QR678",
    },
    {
      image: "",
      name: "Dr. Reshma Mallya",
      designation: "DGM Marketing - QR678",
    },
    {
      image: "",
      name: "Dr. Raji Patil",
      designation: "AGM, Medical Affairs - QR678",
    },{
      image: "",
      name: "Mr. Sridhar Ranganathan",
      designation: "Board Advisor - QR678",
    },
  ];
  return (
    <section className="space-y-8 w-full max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <h2 className="heading-1 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
        Board of Directors
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full border border-secondary rounded-md py-6 sm:py-10 px-4 sm:px-6"
      >
        <CarouselContent className="-ml-2 md:-ml-3">
          {leaders.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <Card className="border-none">
                <CardContent className="p-2 sm:p-4 flex flex-col items-center text-center">
                  <div className="w-full md:max-w-[200px] relative mb-3 sm:mb-4">
                    <Image
                      src="/assets/png/aboutpage/avatar.png"
                      alt={`Director ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-cover w-full rounded-md"
                    />
                  </div>
                  <h4 className="font-semibold text-primary text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                   {item.designation}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="self-center pt-4 sm:pt-6" />
        <div className="flex items-center justify-end sm:justify-end -mt-4 sm:-mt-6 space-x-2 sm:space-x-4">
          <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
          <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
        </div>
      </Carousel>
    </section>
  );
};

export default LeadershipTeam;
