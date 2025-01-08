"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DoesItReallyWorkSection = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          Does it Really Work?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto mb-12">
          {/* Better Hair Regrowth */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src="/assets/svg/suite/hair_growth.svg"
                alt="Hair growth illustration"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-xl"
              />
            </div>
            <h3 className="text-primary text-xl sm:text-2xl font-bold">
              Better Hair Regrowth
              <br />
              by 24.8%
            </h3>
            <p className="text-secondary/80 text-sm sm:text-base leading-relaxed">
              24.8% improvement in Global Hair Growth and Quality scores while
              using the QR678 Suite with QR678 Neo therapy.
            </p>
          </div>

          {/* Success Rate */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src="/assets/svg/suite/success.svg"
                alt="Success rate illustration"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-xl"
              />
            </div>
            <h3 className="text-primary text-xl sm:text-2xl font-bold">
              80%+ Success
              <br />
              Rate
            </h3>
            <p className="text-secondary/80 text-sm sm:text-base leading-relaxed">
              Hair Rub Test showed reduced hair fall from 4.54* (baseline) to
              1.49* (post-therapy) for over 80% users.
            </p>
          </div>

          {/* Strengthens & Revitalizes */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src="/assets/svg/suite/strength.svg"
                alt="Hair strength illustration"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-xl"
              />
            </div>
            <h3 className="text-primary text-xl sm:text-2xl font-bold">
              Strengthens &<br />
              Revitalizes Hair
            </h3>
            <p className="text-secondary/80 text-sm sm:text-base leading-relaxed">
              Reduces hair fall, improves texture, shine, and density.
            </p>
          </div>
        </div>

        <div className="text-center space-y-6 sm:space-y-8">
          <Link href={"/research"}>
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg">
              View Full Research
            </Button>
          </Link>

          <p className="text-secondary/60 text-xs sm:text-sm max-w-4xl mx-auto">
            *Reference: Kapoor, R., & Shome, D. (2024, August). Evaluation of
            the effectiveness of the QR678 Suite in combination with QR678 Neo
            therapy for managing Androgenetic Alopecia: A prospective clinical
            study.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoesItReallyWorkSection;
