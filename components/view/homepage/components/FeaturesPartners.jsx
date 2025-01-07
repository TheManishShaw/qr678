import { Button } from "@/components/ui/button";
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

const FeaturesPartners = () => {
  const partners = [
    {
      name: "Neo Derma",
      logo: "/assets/png/partners/partner-1.png",
    },
    {
      name: "Vibes",
      logo: "/assets/png/partners/partner-2.png",
    },
    {
      name: "Neo Follicle Transplant",
      logo: "/assets/png/partners/partner-3.png",
    },
    {
      name: "Ccarewell",
      logo: "/assets/png/partners/partner-4.png",
    },
    {
      name: "Aayna",
      logo: "/assets/png/partners/partner-5.png",
    },
    {
      name: "La Densitae",
      logo: "/assets/png/partners/partner-6.png",
    },
  ];
  return (
    <section className=" py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 ">
        <h2 className="heading-1 text-center text-secondary mb-10">
          Featured Partners
        </h2>

        <div className="">
          <Card className="p-4 sm:p-6 shadow-none border-none bg-transparent ">
            <div className="">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="">
                  {partners.map((partner, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 md:pl-4  basis-full sm:basis-2 md:basis-1/4 lg:basis-1/5 self-center"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={800}
                        height={800}
                        className=" max-w-52 object-cover self-center "
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots className="self-center pt-4 sm:pt-6" />
                <div className="flex items-center justify-end -mt-4 sm:-mt-6 space-x-2">
                  <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                  <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                </div>
              </Carousel>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPartners;
