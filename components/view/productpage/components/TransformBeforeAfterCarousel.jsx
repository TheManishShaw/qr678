"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const SLIDES = [
  {
    before: "/assets/png/Vector.png",
    after: "/assets/png/Vector.png",
    title: "Androgenetic Alopecia",
  },
  {
    before: "/assets/png/Vector.png",
    after: "/assets/png/Vector.png",
    title: "Telogen Effluvium",
  },
  {
    before: "/assets/png/Vector.png",
    after: "/assets/png/Vector.png",
    title: "Alopecia Areata",
  },
  {
    before: "/assets/png/Vector.png",
    after: "/assets/png/Vector.png",
    title: "Traction Alopecia",
  },
]

export function TransformBeforeAfterCarousel() {

  return (
    <div className="relative">
      <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className=" mx-auto p-4"
              >
                <CarouselContent className="-ml-2 md:-ml-3">
                  {SLIDES.map((slide,index) => (
                    <CarouselItem
                      key={index}
                      className="flex flex-col  max-w-lg"
                    >
                     

        
   
        <div className="flex flex-col sm:flex-row gap-12 mb-10 justify-center">
          {/* Before Card */}
          <Card className="relative border-2 rounded-none p-3 border-primary w-[300px]">
            <CardContent className="p-0">
              <img
                src="/assets/png/prodcutpage/before.png"
                alt="Before treatment"
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-100/95 px-6 py-2  shadow-lg">
                <span className="text-blue-900 font-semibold text-lg">Before</span>
              </div>
            </CardContent>
          </Card>

          {/* After Card */}
          <Card className="relative border-2 rounded-none p-3 border-primary w-[300px]">
            <CardContent className="p-0">
              <img
                src="/assets/png/prodcutpage/before.png"
                alt="After treatment"
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-100/95 px-6 py-2  shadow-lg">
                <span className="text-blue-900 font-semibold text-lg">After</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-textBg shadow-md py-3 px-6  text-center mx-auto">
          <h2 className="text-blue-900 text-2xl font-semibold">Androgenetic Alopecia</h2>
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
  )
}

