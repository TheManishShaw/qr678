import Image from "next/image";
import Link from "next/link";
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
        <div className="flex flex-wrap justify-center sm:justify-start  gap-4 sm:gap-8 items-center">
          {PartnersImages.map((partner, index) => (
            <div
              key={index}
              className=" flex flex-wrap items-center justify-center"
            >
             <Link href={partner.url}> <Image
                src={partner.src || "/assets/png/no-image.png"}
                alt={partner.name || `Partner Logo ${index + 1}`}
                width={120}
                height={40}
                className=" object-contain filter  transition-all"
              /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOnSection;

const PartnersImages = [
  {
    src: "/assets/svg/aboutus/partner-1.svg",
    name: "TOI",
    url: "",
  },
  {
    src: "/assets/svg/aboutus/bs.svg",
    name: "BS",
    url: "",
  },
  {
    src: "/assets/svg/aboutus/tfe.svg",
    name: "The Financial Express",
    url: "https://www.financialexpress.com/life/90-percent-of-women-aged-18-36-with-pcos-at-risk-of-hair-loss-3596541/",
  },
  {
    src: "/assets/svg/aboutus/en.svg",
    name: "ET Now",
    url: "",
  },
  {
    src: "/assets/svg/aboutus/femina.svg",
    name: "FEMINA",
    url: "",
  },
  {
    src: "/assets/svg/aboutus/mid-day.svg",
    name: "mid-day",
    url: "",
  },
  {
    src: "/assets/svg/aboutus/india.svg",
    name: "INDIA.COM",
    url: "",
  },
];
