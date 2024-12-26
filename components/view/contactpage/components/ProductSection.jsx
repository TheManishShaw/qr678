import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ProductSection = () => {
  return (
    <section className="min-h-screen ">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Heading - Full width on mobile, split on desktop */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold col-span-full mb-8 lg:mb-16">
            <span className="text-primary">Switch To The Cutting-Edge </span>
            <span className="text-secondary">Hair Regrowth </span>
            <span className="text-primary">Solution!</span>
          </h1>

          {/* Product Images */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
            <Image
              src="/assets/svg/homepage/home-hero-section-image.svg"
              alt="QR 678 Hair Regrowth Products"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-primary text-lg max-w-lg md:text-xl leading-relaxed">
            QR678® offers a comprehensive range of products designed to enhance the health of your existing hair and promote the regrowth of healthy hair. Our innovative formulations are tailored to nourish the scalp and rejuvenate hair follicles, ensuring optimal results for those seeking to restore their hair&apos;s vitality and thickness. Experience the transformative benefits of QR678® and embrace a new era of hair care.
           
            </p>
            <div>
              <Button 
                className="bg-primary hover:bg-primary text-white px-8 py-6 text-lg rounded-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection