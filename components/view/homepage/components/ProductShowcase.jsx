import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProductShowcase() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative w-full  mx-auto">
          <Image
            src="/assets/png/productShowcase.png"
            alt="QR678 Logo"
            width={800}
            height={800}
            className="object-contain self-center"
          />
        </div>

        <div className="text-center lg:text-right space-y-4">
          <h1 className="md:text-5xl text-3xl font-medium text-secondary leading-tight">
            Find a QR678 Partner
            <br />
            Clinic Near You
          </h1>
          <Button className="bg-primary hover:bg-[#1F1F6F] text-white px-8 py-6 text-lg ">
            Search Now
          </Button>
        </div>
      </div>
    </div>
  );
}
