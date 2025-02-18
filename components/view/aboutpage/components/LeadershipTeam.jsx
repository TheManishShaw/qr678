"use client";
import { teamList } from "@/actions/get-request";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const LeadershipTeam = () => {
  const {
    data: teamData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["teamList"],
    queryFn: () => teamList(),
    retry: 5,
    refetchOnWindowFocus: true,
  });

  return (
    <section className="space-y-8 w-full max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <h2 className="heading-1 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
        Leadership Team
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full border border-secondary rounded-md py-6 sm:py-10 px-4 sm:px-6"
      >
        <CarouselContent className="-ml-2 md:-ml-3">
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                >
                  <Card className="border-none h-full animate-pulse">
                    <CardContent className="p-2 sm:p-4 flex flex-col items-center text-center">
                      <div className="w-full md:max-w-[200px] relative mb-3 sm:mb-4 bg-gray-300 h-[20.5rem] md:h-[14.5rem] rounded-md" />
                      <div className="w-32 h-4 bg-gray-300 rounded mt-2" />
                      <div className="w-24 h-3 bg-gray-300 rounded mt-1" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            : teamData?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                >
                  <Card className="border-none h-full">
                    <CardContent className="p-2 sm:p-4 flex flex-col items-center text-center">
                      <div className="w-full md:max-w-[200px] relative mb-3 sm:mb-4">
                        <Image
                          src={
                            item?.photo
                              ? item?.photo
                              : "/assets/png/aboutpage/avatar.png"
                          }
                          alt={`Leader ${index + 1}`}
                          width={200}
                          height={200}
                          className="object-cover object-top border border-primary w-full h-[20.5rem] md:h-[14.5rem] rounded-md"
                        />
                      </div>
                      <h4 className="font-semibold text-primary text-sm sm:text-base">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.position}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
        </CarouselContent>
        {teamData?.length >= 5 && (
          <>
            {/* <CarouselDots className="self-center pt-4 sm:pt-6" /> */}
            <div className="flex items-center justify-end sm:justify-end pt-4 sm:pt-6  space-x-2 sm:space-x-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
              <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
            </div>
          </>
        )}
      </Carousel>
    </section>
  );
};

export default LeadershipTeam;
