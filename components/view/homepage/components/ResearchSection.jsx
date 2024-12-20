import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ResearchSection() {
  return (
    <div className="relative w-full  ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/assets/svg/homepage/home-research-banner.svg')`,
        }}
      />
      <div className="relative z-10 flex flex-col justify-end min-h-[60vh] md:min-h-screen text-center px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white italic">
              Well Researched.
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white italic">
              Globally Acknowledged.
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-[200]">
              Our aesthetic products are backed by
            </p>
            <div className="inline-block bg-[#FFD481] px-2 py-1 sm:px-3 sm:py-1 md:px-4">
              <p className="text-xs sm:text-sm md:text-base text-gray-900 font-bold">
                13+ clinical studies
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="mt-4 sm:mt-6 lg:mt-8 bg-white text-primary rounded-lg font-bold text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3"
          >
            QR678 Research
          </Button>
        </div>
      </div>
    </div>
  );
}

