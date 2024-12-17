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
                src="/assets/png/suite/product-image.png"
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
                <div className="w-8 h-8 mt-1">
                  <Droplets className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Gently cleanses the scalp, removing excess oil, impurities, and dead skin.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1">
                  <Flask className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Enriched with Anagain and Caffeine to stimulate circulation and prepare the scalp for better nutrient absorption.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1">
                  <Sprout className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Creates an optimal environment for hair regrowth and rejuvenation.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1">
                  <Droplets className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Mild formulation reduces irritation and maintains a healthy, balanced scalp.
                </p>
              </div>

              {/* Usage Guidelines */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-[#C4A052] mb-4">
                  Usage Guidelines
                </h3>
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-[#C4A052]" />
                  <p className="text-[#2A2B7B] text-lg">Use Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <Separator className="max-w-xl mx-auto bg-gray-300"/>
      <CardContent className="space-y-8">
        {/* Product Images and Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Images */}
          <div className="flex justify-center space-x-4">
            <div className="relative w-full">
              <Image
                src="/assets/png/suite/product-image.png"
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
                <div className="w-8 h-8 mt-1">
                  <Droplets className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Gently cleanses the scalp, removing excess oil, impurities, and dead skin.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1">
                  <Flask className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Enriched with Anagain and Caffeine to stimulate circulation and prepare the scalp for better nutrient absorption.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1">
                  <Sprout className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Creates an optimal environment for hair regrowth and rejuvenation.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1">
                  <Droplets className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Mild formulation reduces irritation and maintains a healthy, balanced scalp.
                </p>
              </div>

              {/* Usage Guidelines */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-[#C4A052] mb-4">
                  Usage Guidelines
                </h3>
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-[#C4A052]" />
                  <p className="text-[#2A2B7B] text-lg">Use Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <Separator className="max-w-xl mx-auto bg-gray-300"/>

      <CardContent className="space-y-8">
        {/* Product Images and Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Images */}
          <div className="flex justify-center space-x-4">
            <div className="relative w-full">
              <Image
                src="/assets/png/suite/product-image.png"
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
                <div className="w-8 h-8 mt-1">
                  <Droplets className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Gently cleanses the scalp, removing excess oil, impurities, and dead skin.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1">
                  <Flask className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Enriched with Anagain and Caffeine to stimulate circulation and prepare the scalp for better nutrient absorption.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1">
                  <Sprout className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Creates an optimal environment for hair regrowth and rejuvenation.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1">
                  <Droplets className="w-8 h-8 text-[#C4A052]" />
                </div>
                <p className="text-[#2A2B7B] text-lg">
                  Mild formulation reduces irritation and maintains a healthy, balanced scalp.
                </p>
              </div>

              {/* Usage Guidelines */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-[#C4A052] mb-4">
                  Usage Guidelines
                </h3>
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-[#C4A052]" />
                  <p className="text-[#2A2B7B] text-lg">Use Daily</p>
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