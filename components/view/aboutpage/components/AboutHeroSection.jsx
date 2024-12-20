import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const AboutHeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="relative overflow-hidden bg-white">
        <div className="relative z-10 mx-auto">
          <div className="relative h-screen">
            {/* Background Image */}
            <Image
              src="/assets/png/aboutpage/hero-image.png"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full"
              priority
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 lg:px-12">
              <div className="space-y-6 sm:space-y-8 max-w-lg">
                {/* Heading Section */}
                <h1 className="heading-1 text-4xl sm:text-5xl lg:text-[5rem] font-bold leading-tight text-center sm:text-left">
                  <span className="relative inline-block">
                    Science For
                    <br />
                    Bettering
                    <br />
                    Lives.
                    <span className="absolute bottom-0 left-0 w-full h-1 z-0">
                      <Image
                        src="/assets/svg/aboutus/about_us_line.svg"
                        alt=""
                        width={230}
                        height={12}
                        className="w-full"
                      />
                    </span>
                  </span>
                </h1>

                {/* Description Text */}
                <p className="text-base sm:text-lg lg:text-xl max-w-[300px] sm:max-w-[400px] text-secondary text-center sm:text-left">
                  At QR678, we innovate to craft solutions that go beyond just
                  better hair and skin; they better lives.
                </p>

                {/* Buttons Section */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                  <Button className="bg-primary px-6 sm:px-8 py-2 hover:bg-primary/90 text-sm sm:text-base">
                    Button 1
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-primary text-sm sm:text-base"
                  >
                    <Image
                      src="/assets/svg/aboutus/watch_icon.svg"
                      alt="Watch icon"
                      width={52}
                      height={52}
                      className="w-8 h-8 sm:w-12 sm:h-12"
                    />
                    Watch Testimonials
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;

