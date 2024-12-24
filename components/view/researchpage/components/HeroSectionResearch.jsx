import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'


const HeroSectionResearch = () => {
  return (
    <section className="relative min-h-[600px] bg-[#0A0B3B] overflow-hidden">
    <div className="container relative z-10 mx-auto px-4 pt-12 md:pb-0 pb-10 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        {/* Left side with image */}
        <div className="relative mx-auto max-w-full">
      
       
              <Image
                src="/assets/png/researchpage/heroimage.png"
                alt="QR678 Product"
                width={1000}
                height={1000}
                className="relative z-10"
                priority
              />
       
        </div>

        {/* Right side with text */}
        <div className="text-center lg:text-right">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rooted in continuous rigorous research & evidence-informed science
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            QR678: The cutting-edge hair regrowth solution
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full bg-white text-[#0A0B3B] hover:bg-white/90"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </div>
    </div>

    {/* Background dots pattern */}
    <div className="absolute bottom-4 right-4 flex gap-2">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex gap-2">
          {[...Array(4)].map((_, j) => (
            <div
              key={j}
              className="h-1.5 w-1.5 rounded-full bg-white/20"
            />
          ))}
        </div>
      ))}
    </div>
  </section>
  )
}

export default HeroSectionResearch