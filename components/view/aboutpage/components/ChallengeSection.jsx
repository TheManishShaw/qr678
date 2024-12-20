import Image from "next/image";
import React from "react";

const ChallengeSection = () => {
  return (
    <section className="w-full  mx-auto  py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">
      <div className="w-full mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary">Challenges</h2>
          <p className="text-secondary text-lg sm:text-xl lg:text-3xl max-w-3xl mx-auto">
            Forays into hair greying, and skin science
          </p>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Image 
            src="/challenge.svg" 
            alt="Challenges in hair and skin science" 
            width={1600} 
            height={768} 
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary">Beyond Hair Loss Treatments</h2>
        <p className="text-secondary text-lg sm:text-xl lg:text-3xl leading-normal sm:leading-relaxed">
          To Become The Global Thought Leader And A Science-Based Product Behemoth In Hair Science.
        </p>
      </div>
    </section>
  );
};

export default ChallengeSection;

