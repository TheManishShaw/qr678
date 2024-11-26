import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ResearchSection() {
  return (
    <>
      <div className="relative min-h-[740px] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/assets/svg/homepage/home-research-banner.svg')] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/svg/homepage/home-research-banner.svg')`,
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-end min-h-screen text-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-4">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-4">
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white italic">
                Well Researched.
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white italic">
                Globally Acknowledged.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200">
                Our aesthetic products are backed by
              </p>
              <div className="inline-block bg-[#FFD481] px-3 py-1 sm:px-4 sm:py-2 ">
                <p className="text-sm sm:text-base text-gray-900 font-medium">
                  13+ clinical studies
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="mt-6 sm:mt-8 bg-white text-primary font-bold  text-sm sm:text-base"
            >
              QR678 Research
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
