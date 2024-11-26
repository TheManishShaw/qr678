import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dr. Viezh R",
    location: "Warsaw, Poland",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: "/assets/png/testimonials.png",
  },
  {
    id: 2,
    name: "Dr. Viezh Ro",
    location: "Warsaw, Poland",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: "/assets/png/testimonials.png",
  },
  {
    id: 3,
    name: "Dr. Viezh Rob",
    location: "Warsaw, Poland",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: "/assets/png/testimonials.png",
  },
  {
    id: 4,
    name: "Dr. Viezh Robe",
    location: "Warsaw, Poland",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: "/assets/png/testimonials.png",
  },
  {
    id: 5,
    name: "Dr. Viezh Rober",
    location: "Warsaw, Poland",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: "/assets/png/testimonials.png",
  },
  {
    id: 6,
    name: "Dr. Viezh",
    location: "Warsaw, Poland",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: "/assets/png/testimonials.png",
  },
  {
    id: 7,
    name: "Dr. Viezh S",
    location: "Warsaw, Poland",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: "/assets/png/testimonials.png",
  },
];
export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4  ">
        <h2 className="text-center text-5xl text-secondary mb-12">
          Testimonials
        </h2>

        <div className="space-y-12 ">
          <Card className="p-6 border border-secondary">
            <div className="w-full max-w-7xl mx-auto px-4 py-8 ">
              <h2 className="text-3xl md:text-4xl  font-medium text-primary mb-8 text-start">
                Experts said it
              </h2>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-3">
                  {testimonials.map((testimonial) => (
                    <CarouselItem
                      key={testimonial.id}
                      className="pl-2 md:pl-3 md:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="border-2 border-secondary rounded-lg shadow-sm p-6">
                        <CardContent className="flex flex-col items-start p-0 space-y-3">
                          <div className="flex items-center gap-3">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                            <div>
                              <h3 className="font-semibold text-base text-[#0F1B4C]">
                                {testimonial.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-[#0F1B4C] leading-relaxed">
                            {testimonial.quote}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots className="self-center pt-6" />
                <div className="flex items-center justify-end -mt-6 space-x-4">
                  <div className="flex space-x-2">
                    <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                    <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                  </div>
                </div>
              </Carousel>
            </div>
          </Card>
          <Card className="p-6 border border-secondary">
            <div className="w-full max-w-7xl mx-auto px-4 py-8 ">
              <h2 className="text-3xl md:text-4xl font-medium text-primary mb-8 text-start">
                Users felt it
              </h2>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-3">
                  {testimonials.map((testimonial) => (
                    <CarouselItem
                      key={testimonial.id}
                      className="pl-2 md:pl-3 md:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="border-2 border-secondary rounded-lg shadow-sm p-6">
                        <CardContent className="flex flex-col items-start p-0 space-y-3">
                          <div className="flex items-center gap-3">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                            <div>
                              <h3 className="font-semibold text-base text-[#0F1B4C]">
                                {testimonial.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-[#0F1B4C] leading-relaxed">
                            {testimonial.quote}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots className="self-center pt-6" />
                <div className="flex items-center justify-end -mt-6 space-x-4">
                  <div className="flex space-x-2">
                    <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                    <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                  </div>
                </div>
              </Carousel>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

const experts = [
  {
    name: "Dr. John Smith",
    title: "Senior Dermatologist",
    quote:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    name: "Dr. Sarah Johnson",
    title: "Hair Restoration Expert",
    quote:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    name: "Dr. Mark Davis",
    title: "Clinical Research Head",
    quote:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const users = [
  {
    name: "David Wilson",
    quote:
      "I can't believe how well this worked for me! The results were amazing and the support was incredible.",
  },
  {
    name: "Jessica Murphy",
    quote:
      "This changed my life! Great results and excellent customer service.",
  },
  {
    name: "Michael Brown",
    quote: "Absolutely impressed with the results. Would highly recommend!",
  },
];
