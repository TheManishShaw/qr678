import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const AboutHeroSection = () => {
  return (
    <section className="w-full  mx-auto">
      <div className="relative overflow-hidden bg-white md:h-screen">
        <div className="md:absolute md:inset-0 bg-gray-100">
          <Image
            src="/assets/png/aboutpage/hero-image.png"
            alt="Background Image"
            layout="fill"           
            className=" md:right-0 top-4 md:bg-contain  bg-cover text-center"
            quality={100}
            priority
          />
        </div>
        <div className="relative z-10 h-full">
          <div className="mx-auto  h-full flex flex-col justify-center">
            <div className="md:space-y-10 space-y-5 mb-2 ml-4 sm:ml-8 lg:ml-12">
              <div className="relative inline-block">
                <h1 className="text-2xl lg:text-[5rem] font-bold text-primary leading-tight">
                  <span className="relative inline-block p-2 sm:p-4">
                    <span className="relative z-10">
                      Science For
                      <br />
                      Bettering
                      <br />
                      Lives.
                    </span>
                    <span className="absolute bottom-5 -left-2 w-40 md:w-64">
                      <Image
                        src="/assets/svg/aboutus/about_us_line.svg"
                        alt=""
                        width={150}
                        height={12}
                        className="w-full"
                      />
                    </span>
                  </span>
                </h1>
              </div>

              <p className=" text-sm lg:text-xl max-w-[300px] sm:max-w-[400px] text-secondary">
                At QR678, we innovate to craft solutions that go beyond just
                better hair and skin;
                <br />
                they better lives.
              </p>

              {/* <div className="flex flex-wrap items-center gap-4 mb-2">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-20 md:py-6 text-sm font-semibold sm:text-base">
                  Learn More
                </Button>
                <Button
                  variant="ghost"
                  className="flex text-primary items-center gap-2 hover:bg-transparent hover:text-primary text-sm sm:text-base"
                >
                  <Image
                    src="/assets/svg/aboutus/watch_icon.svg"
                    alt="Watch icon"
                    width={70}
                    height={70}
                    className="relative z-10"
                  />
                  Watch Testimonials
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;

