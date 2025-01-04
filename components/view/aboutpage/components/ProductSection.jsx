'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <h3 className='font-bold text-primary text-2xl sm:text-3xl text-center sm:text-left sm:pl-8 capitalize mb-6'>The next revolution is around the corner</h3>
   
      <Card className="p-2 sm:p-4 md:p-8 border-none shadow-none">
        <Carousel className="w-full relative">
          <CarouselContent>
            {Array.from({ length: 1 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card className="border-secondary">
                  <CardContent className="p-4 sm:p-6 md:p-8 relative">
                    <div className="mb-6 sm:mb-12 text-center sm:text-left">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
                        QR678 Neo<sup className="text-xl sm:text-2xl">®</sup>
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        QR678 Neo<sup>®</sup> is a patented, clinically-proven hair regrowth
                        therapy designed to combat hair loss and stimulate new hair growth.
                        Unlike traditional methods, QR678 Neo<sup>®</sup> uses a unique,
                        non-surgical formulation of six specific biomimetic polypeptides that
                        is injected painlessly into the scalp, targeting hair follicles for
                        optimal results.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                      <div className="flex items-center justify-center sm:justify-start sm:w-1/3 mb-6 sm:mb-0">
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
                            "Visible results in 8-10 sessions"
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <Check className="h-4 w-4 text-green-600" />
                              </div>
                              <span className="text-sm sm:text-base">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center sm:justify-end mt-6">
                      <Button
                        variant="outline"
                        className="text-primary rounded-[5px] bg-gray-400/20 border-secondary text-sm sm:text-base"
                      >
                        Know More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6">
            <CarouselDots className=" flex justify-center" />
            <div className="flex justify-end mt-4">
              <div className="flex space-x-2">
                <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
              </div>
            </div>
          </div>
        </Carousel>
      </Card>
    </section>
  )
}

export default ProductSection

