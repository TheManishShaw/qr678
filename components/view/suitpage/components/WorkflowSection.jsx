import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Microscope, FileCheck, ThumbsUp } from "lucide-react";

export default function WorkflowSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <Image
        src="/assets/svg/suite/team_bg.svg"
        alt="Background"
        layout="fill"
        objectFit="contain"
        className="absolute inset-0  z-0 p-[16rem]"
      />

      <div className="relative z-10 container mx-auto mb-14 px-4">
        <h2 className="text-primary text-4xl md:text-5xl font-bold text-center mb-20">
          Acts like a team. Works like a charm.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-32">
            <Card className="bg-[#E9F3FF] h-[428px] w-[402px] mx-auto mb-26 flex flex-col justify-center items-center">
              <CardHeader>
                <Image
                  src="/assets/svg/suite/team_activate.svg"
                  alt="QR 678 Shampoo Bottle"
                  width={130}
                  height={160}
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-secondary text-2xl">
                  <span className="bg-[#FFDEA7] px-2  rounded-[4px] text-primary">
                    Activate
                  </span>{" "}
                  with QR678 Neo
                </CardTitle>
                <CardDescription className="text-primary text-xl">
                  Activate hair follicles, stimulate Anagen phase for growth,
                  and increase the odds for follicle survival.
                </CardDescription>
              </CardContent>
            </Card>
            <div className="relative hidden lg:block">
              <Image
                src="/assets/svg/suite/arrow-1.png"
                alt="Workflow arrow"
                width={200}
                height={200}
                className="absolute -right-40 top-0"
              />
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/assets/svg/suite/arrow.png"
                alt="Workflow arrow"
                width={240}
                height={200}
                className="absolute left-[31rem] -top-[17rem] transform -translate-y-1/2"
              />
            </div>
            <Card className="bg-[#E9F3FF] h-[428px] w-[402px] mx-auto mr-12 mt-20 flex flex-col justify-center items-center">
              <CardHeader>
                <Image
                  src="/assets/svg/suite/nutra.svg"
                  alt="QR 678 Shampoo Bottle"
                  width={130}
                  height={160}
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-secondary text-2xl">
                  <span className="bg-[#FFDEA7] px-2  rounded-[4px] text-primary">
                    ANCHOR
                  </span>{" "}
                  with Shampoo & Serum
                </CardTitle>
                <CardDescription className="text-primary text-xl">
                  Cleanse, hydrate, and enhance circulation to the hair
                  follicle.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center items-center h-screen">
            <Card className="bg-[#E9F3FF] h-[428px] w-[402px] flex flex-col justify-center items-center">
              <CardHeader className="flex justify-center">
                <Image
                  src="/assets/svg/suite/team_anchor.svg"
                  alt="QR 678 Shampoo Bottle"
                  width={130}
                  height={160}
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-secondary text-2xl">
                  <span className="bg-[#FFDEA7] px-2  rounded-[4px] text-primary">
                    AMPLIFY
                  </span>{" "}
                  with Nutraceuticals
                </CardTitle>
                <CardDescription className="text-primary text-xl">
                  Boost hair health from the inside, ensuring fuller, stronger
                  hair that remains in the growth phase longer.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:block  bottom-0 left-0 w-full">
        <Image
          src="/assets/svg/suite/Wave.svg"
          alt="Wave background"
          width={1440}
          height={398}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
