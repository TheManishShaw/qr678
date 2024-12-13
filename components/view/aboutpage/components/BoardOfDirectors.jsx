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

const BoardOfDirectors = () => {
  return (
    <section className="space-y-8 w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="heading-1 text-center">
        Board of Directors
      </h2>
      <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full border border-secondary rounded-md py-10 px-6"
    >
      <CarouselContent className="-ml-2 md:-ml-3">
        {Array.from({ length: 9 }).map((_, index)  => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-2 md:basis-1/3 lg:basis-1/5"
          >
            <Card className="border-none">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-4">
                  <Image
                    src="/assets/png/aboutpage/avatar.png"
                    alt={`Director ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h4 className="font-semibold text-[#2D3166]">Name Surname</h4>
                <p className="text-sm text-muted-foreground">Credentials</p>
              </CardContent>
            </Card>
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
    </section>
  );
};

export default BoardOfDirectors;
