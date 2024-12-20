import Image from "next/image";
import React from "react";

const AsSeenOnSection = () => {
  return (
    <section className="text-center py-8 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8">
        {/* Text Section */}
        <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground w-full sm:w-auto mb-4 sm:mb-0">
          As seen on...
        </h2>

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className=" flex flex-wrap items-center justify-center"
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
  );
};

export default AsSeenOnSection;

