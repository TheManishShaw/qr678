import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, Microscope, Award, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function SuiteAdvantage() {
  return (
    <div className=" bg-primary/10 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-primary mb-16">
          The suite Advantage!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Card className="relative bg-white rounded-3xl overflow-hidden border-[6px] border-[#ECECEC] transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <CardContent className="p-6 flex flex-col items-center text-center min-h-[280px]">
              <h3 className="text-xl font-semibold text-primary mb-3">
                You Get A Complete System
              </h3>
              <p className="text-secondary text-sm mb-4">
                to address hair loss from all aspects - internal nourishment &
                external stimulation
              </p>
              <Image
                src="/assets/svg/suite/calendar.svg"
                alt="Success checkmark"
                height={100}
                width={100}
                className="object-contain drop-shadow-xl"
              />
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="relative bg-white rounded-3xl overflow-hidden border-[6px] border-[#ECECEC] transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <CardContent className="p-6 flex flex-col items-center text-center min-h-[280px]">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Its clinically proven
              </h3>
              <p className="text-secondary text-sm mb-4">
                to improve hair density and reduce hair fall by up to 65%
              </p>
              <Image
                src="/assets/svg/suite/microscope.svg"
                alt="Success checkmark"
                height={90}
                width={90}
                className="object-contain drop-shadow-xl"
              />
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="relative bg-white rounded-3xl overflow-hidden border-[6px] border-[#ECECEC] transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <CardContent className="p-6 flex flex-col items-center text-center min-h-[280px]">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Patented Formula
              </h3>
              <p className="text-secondary text-sm mb-4">
                which is uniquely designed to get optimal results
              </p>
              <Image
                src="/assets/svg/suite/patented.svg"
                alt="Success checkmark"
                height={120}
                width={120}
                className="object-contain drop-shadow-xl"
              />
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="relative bg-white rounded-3xl border-[6px] border-[#ECECEC] overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.1)] ">
            <CardContent className="p-6 flex flex-col items-center text-center min-h-[280px]">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Easy to Use
              </h3>
              <p className="text-secondary text-sm mb-4 flex flex-col items-center text-center">
                So it can be integrated easily in the daily routine
              </p>
              <Image
                src="/assets/svg/suite/thumbsup.svg"
                alt="Success checkmark"
                height={130}
                width={130}
                className="object-contain drop-shadow-xl"
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-primary text-white px-8 py-6 text-lg rounded-xl hover:bg-[#23216A] transition-colors duration-300">
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
}
