"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Alenezi",
    location: "Bayan Derma, Kuwait",
    quote:
      "I have been using QR678® for chronic telogen effluvium, especially in adolescents.",
    image: "/assets/jpg/doctors/Dr. Sarah Alenezi.jpg",
  },
  {
    id: 2,
    name: "Dr. Michael Gold",
    location: "Gold Skin Care, USA",
    quote:
      "QR678® to me is a revolutionary hair growth product. There are really no adverse events that I am aware of.",
    image: "/assets/jpg/doctors/Dr. Michael Gold.jpeg",
  },
  {
    id: 3,
    name: "Dr. Sidharth Sonthalia",
    location: "Skinnocence, India",
    quote:
      "QR678® therapy in my patients offered 'definitive benefit' after the very first session; gross and trichoscopic confirmed progressive efficacy; and fantastic patient compliance.",
    image: "/assets/jpg/doctors/Dr. Siddharth Sonthalia.jpg",
  },
  {
    id: 4,
    name: "Dr. Kalpana Sarangi",
    location: "DKS Clinique, India",
    quote: "I have had very good results with QR678® and no doubts about it.",
    image: "/assets/jpg/doctors/Dr. Kalpana Sarangi.jpg",
  },
  {
    id: 5,
    name: "Dr. Vivek Singhal",
    location: "09 Clinic, Kuwait",
    quote:
      "I have a bunch of patients who have used QR678® post chemotherapy and the results were excellent.",
    image: "/assets/jpg/doctors/Dr. Vivek Singhal.jpg",
  },
  {
    id: 6,
    name: "Sqn. Ldr. (Dr.) Aseem Sharma",
    location: "Skin Saga Centre for Dermatology, India",
    quote:
      "QR678® is a quick procedure that requires no blood involvement, making it painless and eliminating the need for prior numbing.",
    image: "/assets/jpg/doctors/Aseem Sharma.png",
  },
  {
    id: 7,
    name: "Dr. Jagdish Sakhiya",
    location: "Sakhiya Skin Clinic, India",
    quote:
      "In AGA patients with multifactorial local pathophysiologies, I have had 90% success rate with QR678®.",
    image: "/assets/jpg/doctors/Dr. Jagdish Sakhiya.jpg",
  },
];

export default function TestimonialsGrid() {
  return (
    <>
      <section className="py-24 px-4 bg-gray-50">
        <div className=" mx-auto container">
          <h2 className="text-5xl font-semibold text-center mb-20 text-secondary">
            Experts said it
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative [&>*]:h-full">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mb-10 relative">
                <Card className="flex flex-col h-full p-6 overflow-hidden transition-all duration-300 hover:shadow-lg">
                  {/* Background Quote */}
                  <div className="absolute top-0 left-2 text-[200px] leading-none text-black/5 font-serif">
                    &ldquo;
                  </div>

                  {/* Quote Content */}
                  <blockquote className="text-[#6366F1] text-lg leading-relaxed relative flex-grow">
                    {testimonial.quote}
                  </blockquote>

                  {/* Bottom Details Section - Now sticky */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-medium text-secondary text-xl">
                          {testimonial.name}
                        </h3>
                        <p className="text-secondary/80 mt-1">
                          {testimonial.location}
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={`Portrait of ${testimonial.name}`}
                          width={80}
                          height={80}
                          className="object-cover rounded-full  max-h-[5.5rem] border-2 border-secondary/20"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="py-10 px-4 bg-gray-50">
        <div className=" mx-auto container">
          <h2 className="text-5xl font-semibold text-center mb-20 text-secondary">
            Users Felt it
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  " mb-10 relative ",
                  index === 0 && "lg:-mt-12",
                  index % 2 === 1 && "lg:-mt-12",
                  index % 3 === 1 && "lg:-mt-8",
                  index % 3 === 2 && "lg:-mt-12"
                )}
              >
                <Card className="space-y-4 p-6 overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <blockquote className="text-[#6366F1] text-lg leading-relaxed">
                    {testimonial.quote}
                  </blockquote>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-secondary">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-secondary/80">
                        {testimonial.credentials}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <Image
                        src="expert.svg"
                        alt="QR678 Neo Product"
                        width={138}
                        height={138}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
