import React from "react";
import LeadershipTeam from "./components/LeadershipTeam";
import BoardOfDirectors from "./components/BoardOfDirectors";
import ProductSection from "./components/ProductSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { TimelineSection } from "./components/timeline-section";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-white h-screen">
        <div className="absolute inset-0 bg-gray-100">
          <Image
            src="/assets/png/aboutpage/hero-image.png"
            alt="Background Image"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom right  "
            quality={100}
            priority
          />
        </div>

        <div className="relative z-10 h-full">
          <div className="mx-auto max-w-7xl h-full flex flex-col justify-center">
            <div className="space-y-10 ml-4 sm:ml-8 lg:ml-12">
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-primary leading-tight">
                  <span className="relative inline-block p-2 sm:p-4">
                    <span className="relative z-10">
                      Science For
                      <br />
                      Bettering
                      <br />
                      Lives.
                    </span>
                    <span className="absolute bottom-5 -left-2 w-64">
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

              <p className="text-base sm:text-lg lg:text-xl max-w-[300px] sm:max-w-[400px] text-secondary">
                At QR678, we innovate to craft solutions that go beyond just
                better hair and skin;
                <br />
                they better lives.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-20 py-6 text-sm font-semibold sm:text-base">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <TimelineSection />
      <div className=" flex w-full mx-auto">
        <section className="text-center text-[64px] mt-14 mb-4 py-10 space-y-4 bg-gradient-to-tr from-[#FBFBFB] to-[#F9F9F9] mx-auto">
          <h2 className="heading-1">Challenges</h2>
          <p className="text-secondary text-lg text-[40px] pb-12">
            Forays into hair greying, and skin science
          </p>
          <Image
            src={"challenge.svg"}
            className=" bg-cover"
            alt={`challenges`}
            width={1600}
            height={768}
          />
        </section>
      </div>

      <section className="text-center mt-14 mb-4 space-y-4 max-w-5xl mx-auto bg-white pb-12">
        <h2 className="heading-1 text-[64px]">Beyond Hair Loss Treatments</h2>
        <p className="text-secondary text-lg text-[40px] leading-10">
          To Become The Global Thought Leader And A Science-Based Product
          Behemoth In Hair Science.
        </p>
      </section>
      <ProductSection />
      <LeadershipTeam />
      <BoardOfDirectors />
      <section className="text-center py-8">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-8">
          {/* Text Section */}
          <h2 className="text-2xl font-semibold text-muted-foreground">
            As seen on...
          </h2>

          {/* Logos Section */}
          <div className="flex gap-8 items-center flex-wrap">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="w-[120px] flex items-center justify-center"
              >
                <Image
                  src={"/assets/png/no-image.png"}
                  alt={`Partner Logo ${index + 1}`}
                  width={120}
                  height={40}
                  className="aspect-[3/1] object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
