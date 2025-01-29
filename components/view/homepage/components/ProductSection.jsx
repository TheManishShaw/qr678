import * as React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function ProductSection() {
  const products = [
    {
      name: "QR678 Neo",
      description:
        "QR678 Neo® is a patented, clinically-proven hair regrowth therapy designed to combat hair loss and stimulate new hair growth. Unlike traditional methods, QR678 Neo® uses a unique, non-surgical formulation of six specific biomimetic polypeptides that is injected painlessly into the scalp, targeting hair follicles for optimal results.",
      features: [
        "Follicular level action",
        "Negligible pain",
        "Works on all etiologies of hair loss",
        "Visible results in 8-10 sessions",
      ],
      image: "/assets/png/Products-That-Make-Lives-Better.png",
      link: "/products",
    },
    {
      name: "QR678 Suite",
      description:
        "The QR678 Suite complements QR678 Neo therapy with a powerful trio—Shampoo, Serum, and Nutraceuticals—designed to target hair loss from all angles. This clinically proven system of QR678 Neo and the QR678 Suite activates follicles, anchors hair health externally, and amplifies growth from within, delivering improved hair density, reduced hair fall, and revitalized, stronger hair.",
      features: [
        "Complete System to address hair loss from all aspects",
        "Patented Formula uniquely designed for optimal results",
        "Clinically Proven to improve hair density and reduce hair fall by up to 65%",
        "Integrates seamlessly into your daily routine",
      ],
      image: "/assets/png/QR678-Suite.png",
      link: "/products",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 border-t border-[#AEA6A6]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-secondary">
        Products That Make Lives Better
      </h1>
      <Card className="p-2 sm:p-4 md:p-8">
        <Carousel className="w-full relative">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index}>
                <Card className="border-secondary h-full flex flex-col">
                  <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                    <div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary text-center sm:text-left">
                        {product.name}
                        <sup className="text-lg sm:text-xl md:text-2xl">®</sup>
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg mt-4 text-center sm:text-left">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start mt-10">
                      <div className="flex items-center justify-center sm:w-1/3 mb-6 sm:mb-0">
                        <Image
                          src={product.image}
                          alt={`${product.name} Product`}
                          width={310}
                          height={200}
                          className="object-contain"
                        />
                      </div>
                      <div className="sm:w-2/3">
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2  items-start">
                          {product.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 mt-6"
                            >
                              <div className="h-6 w-6 rounded-[2px] bg-green-400 flex items-center justify-center flex-shrink-0">
                                <Check className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm sm:text-lg">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-0 flex justify-end">
                      <Link href={product.link}>
                        <Button
                          variant="outline"
                          className="border-secondary px-20 py-6 text-secondary hover:bg-secondary hover:text-white text-sm sm:text-base"
                        >
                          Know More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {products.length > 1 ? (
            <>
              <CarouselDots className="self-center pt-4 sm:pt-6" />
              <div className="flex items-center justify-end -mt-4 sm:-mt-6 space-x-2">
                <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
              </div>
            </>
          ) : (
            ""
          )}
        </Carousel>
      </Card>
    </div>
  );
}
