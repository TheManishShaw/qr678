"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"



const testimonials = [
  {
    quote: "I have a bunch of patients who have used QR678 post chemotherapy and the results were excellent.",
    name: "Dr Sarah Alenezi",
    credentials: "MD, Dermatologist, Hair Disease Bayan Derma, Kuwait",
    image: "/placeholder.svg?height=120&width=120"
  },
  {
    quote: "QR678 therapy in my patients offered definitive benefit after the very first session; gross and trichoscopic confirmed progressive efficacy; and fantastic patient compliance.",
    name: "Dr. Sidharth Sonthalia",
    credentials: "MD, DNB, MNAMS, FIAD, Dermatologist, Skinnocence, India",
    image: "/placeholder.svg?height=120&width=120"
  },
  {
    quote: "I have been using QR678 for chronic telogen effluvium, especially in adolescents.",
    name: "Dr Sarah Alenezi",
    credentials: "MD, Dermatologist, Hair Disease Bayan Derma, Kuwait",
    image: "/placeholder.svg?height=120&width=120"
  },
  {
    quote: "I have been using QR678 for chronic telogen effluvium, especially in adolescents.",
    name: "Dr Sarah Alenezi",
    credentials: "MD, Dermatologist, Hair Disease Bayan Derma, Kuwait",
    image: "/placeholder.svg?height=120&width=120"
  },
  {
    quote: "I have been using QR678 for chronic telogen effluvium, especially in adolescents.",
    name: "Dr Sarah Alenezi",
    credentials: "MD, Dermatologist, Hair Disease Bayan Derma, Kuwait",
    image: "/placeholder.svg?height=120&width=120"
  }
]

export default function TestimonialsGrid() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-semibold text-center mb-16 text-[#B08B57]">
          Experts said it
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={cn(
                "p-6 bg-white relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                // Add negative margins to create overlapping effect
                index % 2 === 1 && "md:-mt-8",
                index % 3 === 1 && "lg:-mt-8",
                index % 3 === 2 && "lg:-mt-16"
              )}
            >
              <div className="space-y-4">
                <blockquote className="text-[#6366F1] text-lg leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-[#B08B57]">{testimonial.name}</h3>
                    <p className="text-sm text-[#B08B57]/80">{testimonial.credentials}</p>
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

