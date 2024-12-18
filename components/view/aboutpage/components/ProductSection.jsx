import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductSection = () => {
  return (
 
     <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h3 className='font-bold text-primary text-3xl pl-8 capitalize'>The next revolution is around the corner</h3>
   
      <Card className="p-2 md:p-8 border-none shadow-none">
        <Carousel className="w-full relative">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index)=> (
              
              <CarouselItem key={index}>
              <Card className="border-secondary">
                <CardContent className="p-6 md:p-8 relative"> {/* Add relative here */}
                  <div className="mb-12">
                    <h2 className="text-5xl font-bold text-secondary">
                      QR678 Neo<sup className=" text-2xl">®</sup>
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      QR678 Neo<sup>®</sup> is a patented, clinically-proven hair regrowth
                      therapy designed to combat hair loss and stimulate new hair growth.
                      Unlike traditional methods, QR678 Neo<sup>®</sup> uses a unique,
                      non-surgical formulation of six specific biomimetic polypeptides that
                      is injected painlessly into the scalp, targeting hair follicles for
                      optimal results.
                    </p>
                  </div>
                  <div className="md:flex">
                    <div className="flex items-start md:w-1/3 justify-start">
                      <Image
                        src="/assets/png/Products-That-Make-Lives-Better.png"
                        alt="QR678 Neo Product"
                        width={310}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid gap-4 grid-cols-2 items-start">
                        <div className="flex items-center gap-3">
                          <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-4 w-4 text-green-600 rounded-s-sm" />
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
                    </div>
                  </div>
                  {/* Button positioned in the bottom-right corner */}
                  <Button
                    variant="outline"
                    className="text-primary rounded-[5px] bg-gray-400/20 border-secondary absolute bottom-12 right-20"
                  >
                    Know More
                  </Button>
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
    </section>
 
  )
}

export default ProductSection