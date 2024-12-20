import * as React from "react";
import Image from "next/image";
import { Check } from 'lucide-react';
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

export default function ProductSection() {
  const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 border-t border-[#AEA6A6]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-secondary">
        Products That Make Lives Better
      </h1>
      <Card className="p-2 sm:p-4 md:p-8">
        <Carousel className="w-full relative">
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="border-secondary">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="mb-6 sm:mb-8 md:mb-12">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary text-center sm:text-left">
                        QR678 Neo<sup className="text-lg sm:text-xl md:text-2xl">®</sup>
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg mt-4 text-center sm:text-left">
                        QR678 Neo<sup>®</sup> is a patented, clinically-proven
                        hair regrowth therapy designed to combat hair loss and
                        stimulate new hair growth. Unlike traditional methods,
                        QR678 Neo<sup>®</sup> uses a unique, non-surgical
                        formulation of six specific biomimetic polypeptides
                        that is injected painlessly into the scalp, targeting
                        hair follicles for optimal results.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                      <div className="flex items-center justify-center sm:w-1/3 mb-6 sm:mb-0">
                        <Image
                          src="/assets/png/Products-That-Make-Lives-Better.png"
                          alt="QR678 Neo Product"
                          width={310}
                          height={200}
                          className="object-contain"
                        />
                      </div>
                      <div className="sm:w-2/3">
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 items-start">
                          {[
                            "Follicular level action",
                            "Negligible pain",
                            "Works on all etiologies of hair loss",
                            "Visible results in 8-10 sessions",
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <Check className="h-4 w-4 text-green-600" />
                              </div>
                              <span className="text-sm sm:text-base">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center sm:justify-start mt-6">
                          <Button
                            variant="outline"
                            className="border-[#B38B59] text-[#B38B59] hover:bg-[#B38B59] hover:text-white text-sm sm:text-base"
                          >
                            Know More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className="self-center pt-4 sm:pt-6" />
          <div className="flex items-center justify-end -mt-4 sm:-mt-6 space-x-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
            <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
          </div>
        </Carousel>
      </Card>
    </div>
  );
}

