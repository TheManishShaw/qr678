import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
  //   <div className="relative overflow-hidden  bg-[#D4B88C]">
  //   <div className="container relative z-10 h-full min-h-full">
  //     <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
  //       <div className="flex flex-col justify-center space-y-4">
  //         <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
  //           Your Journey To Healthier Hair Starts Here!
  //         </h1>
  //         <p className="max-w-[500px] text-zinc-200">
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //         </p>
  //         <div className="flex flex-col gap-2 min-[400px]:flex-row">
  //           <Button size="lg" className="bg-primary hover:bg-primary/90">
  //             Learn More
  //           </Button>
  //         </div>
  //       </div>
  //       <div className="relative w-full hidden lg:block">
  //         <Image
  //           src="/assets/png/faq/hero-image-faq.png"
  //           alt="People with healthy hair"
  //           width={600}
  //           height={400}
  //           className="h-full w-full bottom-0 absolute"
  //           priority
  //         />
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div className="relative h-[650px] w-full overflow-hidden bg-secondary">
      {/* Content Container */}
      <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Text Content */}
        <div className="flex flex-col justify-center px-4 py-12 lg:px-12">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Your Journey To
            <br />
            Healthier Hair
            <br />
            Starts Here!
          </h1>
          <p className="mb-8 max-w-md text-lg text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
    
        </div>

        {/* Image Container */}
        <div className="absolute hidden lg:block bottom-0 right-0 w-full  lg:relative lg:w-auto">
          <div className="relative h-[400px] w-full lg:h-full">
            <img
              src="/assets/png/faq/hero-image-faq.png"
              alt="People with healthy hair"
              className="object-cover"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                height: "85%",
                width: "100%",
              }}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection