import React from 'react'
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Droplets, FlaskRoundIcon as Flask, Sprout } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
const WhatYouGetSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
    <Card className="bg-white border-none shadow-none">
      <CardHeader>
        <CardTitle >
        <h1 className="heading-1 text-center">

          What you get.
        </h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Product Images and Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Images */}
          <div className="flex justify-center space-x-4">
            <div className="relative w-full">
              <Image
                src="/assets/svg/suite/shampoo.svg"
                alt="QR 678 Shampoo Bottle"
                width={900}
                height={900}
                className="object-contain w-full"
                priority
              />
            </div>
      
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#C4A052]">
              Hair Revitalising Shampoo
            </h2>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 mt-1">
                <Image
                src="/assets/svg/suite/shampoo_1.svg"
                alt=""
               height={100}
               width={100}
              
              />
                </div>
                <p className="text-primary text-lg">
                  Gently cleanses the scalp, removing excess oil, impurities, and dead skin.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-20 h-16 mt-1">
                <Image
                src="/assets/svg/suite/shampoo_2.svg"
                alt=""
               height={100}
               width={100}
              
              />
                </div>
                <p className="text-primary text-lg">
                  Enriched with Anagain and Caffeine to stimulate circulation and prepare the scalp for better nutrient absorption.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12  mt-1">
                <Image
                src="/assets/svg/suite/shampoo_3.svg"
                alt=""
               height={100}
               width={100}
              
              />
                </div>
                <p className="text-primary text-lg">
                  Creates an optimal environment for hair regrowth and rejuvenation.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 mt-1">
                <Image
                src="/assets/svg/suite/shampoo_4.svg"
                alt=""
               height={100}
               width={100}
             
              />
                </div>
                <p className="text-primary text-lg">
                  Mild formulation reduces irritation and maintains a healthy, balanced scalp.
                </p>
              </div>

              {/* Usage Guidelines */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-[#C4A052] mb-4">
                  Usage Guidelines
                </h3>
                <div className="flex items-center gap-4">
                <Image
                src="/assets/svg/suite/usage.svg"
                alt=""
               height={50}
               width={50}              
              />
                  <p className="text-primary text-lg">Use Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <Separator className="max-w-xl mx-auto my-6 bg-gray-300"/>
      <CardContent className="space-y-8">
        {/* Product Images and Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Images */}
          <div className="flex justify-center space-x-4">
            <div className="relative w-full">
              <Image
                src="/assets/svg/suite/serum.svg"
                alt="QR 678 Shampoo Bottle"
                width={900}
                height={900}
                className="object-contain w-full"
                priority
              />
            </div>
      
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#C4A052]">
            Hair Growth Serum
            </h2>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">

              
              <div className="w-14 mt-1">
                <Image
                src="/assets/svg/suite/serum_1.svg"
                alt=""
               height={100}
               width={100}              
              />
                </div>
                <p className="text-primary text-lg">
                Boosts hair follicle stem cell multiplication for improved density and thickness.
                </p>
              </div>

              <div className="flex items-start gap-4">
              <div className="w-12 mt-1">
                <Image
                src="/assets/svg/suite/serum_2.svg"
                alt=""
               height={100}
               width={100}              
              />
                </div>
                <p className="text-primary text-lg">
                Enhances blood flow to the scalp, nourishing roots and reducing hair fall.</p>
              </div>

              <div className="flex items-start gap-4">
              <div className="w-12 mt-1">
                <Image
                src="/assets/svg/suite/serum_3.svg"
                alt=""
               height={100}
               width={100}              
              />
                </div>
                <p className="text-primary text-lg">
                Extends the anagen phase, promoting longer hair growth before shedding.
                </p>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1">
                  <Droplets className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-primary text-lg">
                  Mild formulation reduces irritation and maintains a healthy, balanced scalp.
                </p>
              </div> */}

              {/* Usage Guidelines */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-[#C4A052] mb-4">
                  Usage Guidelines
                </h3>
                <div className="flex items-center gap-4">
                <Image
                src="/assets/svg/suite/usage.svg"
                alt=""
               height={50}
               width={50}              
              />
                  <p className="text-primary text-lg">Use Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <Separator className="max-w-xl mx-auto mb-10 my-6 bg-gray-300"/>

      <CardContent className="space-y-8">
        {/* Product Images and Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Images */}
          <div className="flex justify-center space-x-4">
            <div className="relative w-full">
              <Image
                src="/assets/svg/suite/nutra.svg"
                alt="QR 678 Shampoo Bottle"
                width={900}
                height={900}
                className="object-contain w-full"
                priority
              />
            </div>
      
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#C4A052]">
            Specialised Nutraceuticals
            </h2>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
              <div className="w-14 mt-1">
                <Image
                src="/assets/svg/suite/nutra_1.svg"
                alt=""
               height={100}
               width={100}              
              />
                </div>
                <p className="text-primary text-lg">
                Grape Seed Extract Protects hair follicles from oxidative stress and promotes scalp health.
                </p>
              </div>

              <div className="flex items-start gap-4">
              <div className="w-12 mt-1">
                <Image
                src="/assets/svg/suite/nutra_2.svg"
                alt=""
               height={100}
               width={100}              
              />
                </div>
                <p className="text-primary text-lg">
                Amino Acids Boost collagen production for a stronger hair structure.
                </p>
              </div>

              <div className="flex items-start gap-4">
              <div className="w-12 mt-1">
                <Image
                src="/assets/svg/suite/nutra_3.svg"
                alt=""
               height={100}
               width={100}              
              />
                </div>
                <p className="text-primary text-lg">
                B Vitamins (Biotin, B5, B6) Enhance hair strength and support growth processes.
                </p>
              </div>

              <div className="flex items-start gap-4">
              <div className="w-14 mt-1">
                <Image
                src="/assets/svg/suite/nutra_4.svg"
                alt=""
               height={100}
               width={100}              
              />
                </div>
                <p className="text-primary text-lg">
                Omega-3 Fatty Acids Improve scalp hydration and reduce inflammation for healthier hair follicles.
                </p>
              </div>

              {/* Usage Guidelines */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-[#C4A052] mb-4">
                  Usage Guidelines
                </h3>
                <div className="flex items-center gap-4">
                <Image
                src="/assets/svg/suite/usage.svg"
                alt=""
               height={50}
               width={50}              
              />
                  <p className="text-primary text-lg">Use Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>

  )
}

export default WhatYouGetSection