
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
const ChallengeSection = () => {
  return (
    <section className="space-y-8 w-full max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <div className=" flex w-full mx-auto">
        <section className="text-center text-[64px] mt-14 mb-4 space-y-4  bg-white mx-auto">
          <h2 className="heading-1">Challenges</h2>
          <p className="text-secondary text-lg text-[40px] pb-12">
            Forays into hair greying, and skin science
          </p>
          <Image src={"challenge.svg"} alt={``} width={1600} height={768} />
        </section>
      </div>

      <section className="text-center mt-14 mb-4 space-y-4 max-w-5xl mx-auto bg-white pb-12">
        <h2 className="heading-1 text-[64px]">Beyond Hair Loss Treatments</h2>
        <p className="text-secondary text-lg text-[40px] leading-10">
          To Become The Global Thought Leader And A Science-Based Product
          Behemoth In Hair Science.
        </p>
      </section>
    </section>
  );
};

export default ChallengeSection;

