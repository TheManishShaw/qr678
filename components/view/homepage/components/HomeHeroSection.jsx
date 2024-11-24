import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeHeroSection = () => {
  return (
    <>
      <section className="relative bg-white ">
        <div className=" mx-auto  flex flex-col md:flex-row items-center justify-between">
          <div className=" px-10 py-10 w-full mx-auto mb-8 md:mb-0">
            <h1 className="text-3xl md:text-[2.5rem] leading-[3rem] font-thin mb-4">
              <span className="text-secondary font-bold">Empowering</span>{" "}
              <span className="text-primary">hair & skin professionals</span>{" "}
              <span className="text-primary">with</span>{" "}
              <span className="text-secondary font-bold">science</span>
              <span className="text-primary">
                {" "}
                <br /> to make
              </span>{" "}
              <span className="text-secondary font-bold">better decisions</span>
              <span className="text-primary">
                {" "}
                <br /> for their patients & practice
              </span>{" "}
            </h1>
            {/* <p className="text-lg md:text-xl mb-6">
              to make{" "}
              <span className="text-secondary font-bold">better decisions</span>
              <br />
              for their patients & practice
            </p> */}
            <Link
              href="#"
              className="inline-block bg-primary text-white px-6 md:px-8 py-2 md:py-3  rounded-sm hover:bg-[#2a3572] transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="relative w-full  bg-[#EEEEEF]  h-full py-12 md:py-16 lg:py-20">
            <Image
              src="/assets/svg/homepage/home-hero-section-image.svg"
              alt="Product collection"
              width={560}
              height={350}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeroSection;
