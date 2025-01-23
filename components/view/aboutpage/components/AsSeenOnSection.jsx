import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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

        <ScrollArea className=" max-w-4xl whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 p-4">
            {PartnersImages.map((partner, index) => (
              <div
                key={index}
                className=" flex flex-wrap items-center justify-center"
              >
                <Link href={partner.url} target="_blank" className="w-32 h-32">
                  {" "}
                  <Image
                    src={partner.src || "/assets/png/no-image.png"}
                    alt={partner.name || `Partner Logo ${index + 1}`}
                    width={120}
                    height={40}
                    className=" h-full w-full object-contain filter grayscale  transition-all"
                  />
                </Link>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* <div className="flex flex-wrap justify-center sm:justify-start  gap-4 sm:gap-8 items-center">
          {PartnersImages.map((partner, index) => (
            <div
              key={index}
              className=" flex flex-wrap items-center justify-center"
            >
              <Link href={partner.url} target="_blank" className="w-32 h-32">
                {" "}
                <Image
                  src={partner.src || "/assets/png/no-image.png"}
                  alt={partner.name || `Partner Logo ${index + 1}`}
                  width={120}
                  height={40}
                  className=" h-full w-full object-contain filter grayscale  transition-all"
                />
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AsSeenOnSection;

const PartnersImages = [
  {
    src: "/assets/svg/aboutus/partner-1.svg",
    name: "TOI",
    url: "https://timesofindia.indiatimes.com/life-style/beauty/the-future-of-hair-restoration-science-innovation-and-a-holistic-shift/articleshow/116626862.cms",
  },
  {
    src: "/assets/svg/aboutus/livemint.jpeg",
    name: "Livemint",
    url: "https://www.livemint.com/mint-lounge/wellness/androgenetic-alopecia-hair-loss-in-youngsters-iceberg-phenomenon-minoxidil-11723909608450.html",
  },
  {
    src: "/assets/svg/aboutus/tfe.svg",
    name: "The Financial Express",
    url: "https://www.financialexpress.com/life/90-percent-of-women-aged-18-36-with-pcos-at-risk-of-hair-loss-3596541/",
  },
  {
    src: "/assets/svg/aboutus/en.svg",
    name: "ET Now",
    url: "https://health.economictimes.indiatimes.com/news/industry/pcos-impacts-hair-health-increases-susceptibility-to-hair-thinning-loss-study/112896932",
  },
  {
    src: "/assets/svg/aboutus/femina.svg",
    name: "FEMINA",
    url: "https://drive.google.com/file/d/11HTBix1ENMTX7uz7Sb92kaQwtCRDARGP/view?usp=sharing",
  },
  {
    src: "/assets/svg/aboutus/news19.jpg",
    name: "News9",
    url: "https://www.news9live.com/health/health-news/from-laser-stimulation-to-microneedling-how-hair-restoration-may-change-in-2025-2782444",
  },
];
