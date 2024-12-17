import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroProductSection = () => {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
    {/* Diagonal Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-100/80 transform -skew-y-6 scale-110" />
    
    <div className="container mx-auto px-4 py-12 md:py-20 relative">
      <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
        {/* Product Image */}
        <div className="relative w-full h-[300px] md:h-[400px] mb-8">
          <Image
            src="/assets/png/suite/product-lineup.png"
            alt="QR678 Product Suite"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            The Superhero of Hair Regrowth Therapies Gets a Worthy Sidekick!
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary/80 leading-relaxed">
            The QR678 Suite includes a Shampoo, Serum, and Nutraceuticals designed to work with QR678 Neo for even better results.
          </p>

          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md shadow-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>

    {/* Rounded Corners */}
    <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-[50px]" />
  </section>
  )
}

export default HeroProductSection