import * as React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
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
  const item = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 text-secondary">
        Products That Make Lives Better
      </h1>
      <Card className="p-2 md:p-8">
        <Carousel className="w-full relative">
          <CarouselContent>
            {item.map((item, index) => (
              
                <CarouselItem key={index}>
                  <Card className="border-secondary">
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-12">
                        <h2 className="text-5xl font-bold text-secondary">
                          QR678 Neo<sup className=" text-2xl">®</sup>
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          QR678 Neo<sup>®</sup> is a patented, clinically-proven
                          hair regrowth therapy designed to combat hair loss and
                          stimulate new hair growth. Unlike traditional methods,
                          QR678 Neo<sup>®</sup> uses a unique, non-surgical
                          formulation of six specific biomimetic polypeptides
                          that is injected painlessly into the scalp, targeting
                          hair follicles for optimal results.
                        </p>
                      </div>
                      <div className="md:flex ">
                        <div className="flex items-start md:w-1/3 justify-start">
                          <Image
                            src="/assets/png/Products-That-Make-Lives-Better.png"
                            alt="QR678 Neo Product"
                            width={310}
                            height={200}
                            className="object-contain"
                          />
                        </div>
                        <div className="md:w-2/3 ">
                          <div className="grid gap-4 grid-cols-2 items-start">
                            <div className="flex items-center gap-3">
                              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="h-4 w-4 text-green-600 rounded-s-sm " />
                              </div>
                              <span>Follicular level action</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="h-4 w-4 text-green-600" />
                              </div>
                              <span>Negligible pain</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="h-4 w-4 text-green-600" />
                              </div>
                              <span>Works on all etiologies of hair loss</span>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="h-4 w-4 text-green-600" />
                              </div>
                              <span>Visible results in 8-10 sessions</span>
                            </div>
                          </div>

                          <Button
                            variant="outline"
                            className="mt-4 border-[#B38B59] text-[#B38B59] hover:bg-[#B38B59] hover:text-white"
                          >
                            Know More
                          </Button>
                        </div>
                      </div>
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
      </Card>
    </div>
  );
}
