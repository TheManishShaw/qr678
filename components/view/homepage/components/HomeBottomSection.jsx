import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBottomSection = () => {
  return (
    <div className="flex flex-col ">
      {/* Bottom Section */}
      <section className="relative w-full bottom-0 bg-white py-12 md:py-20">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 w-full h-full opacity-50"
          style={{
            backgroundImage: 'url("/assets/png/suite/MagicPattern.design.png")',
            backgroundRepeat: "no-repeat",
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
          <div className="text-center max-w-3xl mx-auto -mt-[17.5rem] ">
            <h2 className="text-primary text-2xl px-2 md:text-5xl font-medium leading-tight relative z-10 mb-6">
              Want to give your patients the QR678<sup>® </sup> advantage?
            </h2>
            {/* <Link href="/suite">
              <Button className="bg-primary hover:bg-primary text-white px-8  text-lg relative z-10">
                Get Started Here!
              </Button>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBottomSection;
