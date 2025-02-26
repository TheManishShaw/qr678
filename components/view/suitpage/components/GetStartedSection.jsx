import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetStartedSection = () => {
  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <section className="relative w-full md:h-screen bg-[#E0D2D2] pt-12 md:pt-20 overflow-hidden">
        <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-end">
          <div className="grid md:grid-cols-2 items-end w-full h-full">
            {/* Left Column */}
            <div className="relative h-full  w-full md:block hidden">
              <Image
                src="/assets/png/suite/lady.png"
                alt="Person thinking"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6 text-end self-end pb-8 md:pb-16">
              <div className="relative h-[150px] md:h-[200px] lg:h-[300px]">
                <Image
                  src="/assets/png/suite/group-product.png"
                  alt="QR678 Product Suite"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-4 text-center md:text-right">
                <h2 className="text-secondary text-3xl md:text-5xl">
                  Curious to
                </h2>
                <h1 className="text-primary text-4xl md:text-[100px] font-bold">
                  Get Started?
                </h1>
                <p className="text-secondary text-2xl pt-2 md:text-3xl">
                  Ask your doctor about QR678 Suite today!
                </p>
                <a
                  href="/assets/download/QR678_Hair_Suite_ Brochure_ A4_Oct24_V4.pdf"
                  download="/assets/download/QR678_Hair_Suite_ Brochure_ A4_Oct24_V4.pdf"
                >
                  <Button className="bg-primary hover:bg-primary/90 rounded-[8px] text-white px-4 py-2 md:px-8 md:py-6 text-base md:text-lg">
                    Download Brochure
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="relative w-full bottom-0 bg-white py-12 md:py-20">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 w-full h-full opacity-50"
          style={{
            backgroundImage: 'url("/assets/png/suite/MagicPattern.design.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "500px 500px",
          }}
        />

        <div className="relative mx-auto">
          {/* Product Images */}
          <div className="flex justify-between items-center">
            <div className="relative w-[200px] -mt-7 h-[300px] ">
              <Image
                src="/assets/png/suite/QR678_Shampoo-3D.png"
                alt="QR678 Shampoo Left"
                fill
                className="object-contain md:block hidden"
              />
            </div>
            <div className="relative w-[200px] h-[300px]">
              <Image
                src="/assets/png/suite/QR678_Serum-3D.png"
                alt="QR678 Shampoo Right"
                fill
                className="object-contain md:block hidden"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center max-w-3xl mx-auto -mt-[16.5rem] ">
            <h2 className="text-primary text-2xl px-2 md:text-5xl font-medium leading-tight relative z-10 mb-6">
              Want to give your patients the QR678 Suite advantage?
            </h2>
            <Link href="/contact-us/#contactForm" scroll={true}>
            <Button className="bg-primary hover:bg-primary text-white px-8  text-lg relative z-10">
              Get Started Here!
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedSection;
