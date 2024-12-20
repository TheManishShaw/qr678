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
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl text-secondary mb-8 sm:mb-12">
          Testimonials
        </h2>

        <div className="space-y-8 sm:space-y-12">
          <Card className="p-4 sm:p-6 border border-secondary">
            <div className="w-full max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary mb-6 sm:mb-8 text-start">
                Experts said it
              </h2>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 sm:-ml-3">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 sm:pl-3 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="border-2 border-secondary rounded-lg shadow-sm p-4 sm:p-6">
                        <CardContent className="flex flex-col sm:flex-row gap-4 items-center sm:items-start p-0 space-y-3 sm:space-y-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                            className="rounded-full"
                          />
                          <div className="text-center sm:text-left">
                            <h3 className="font-semibold text-base text-[#0F1B4C]">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.location}
                            </p>
                            <p className="text-sm text-[#0F1B4C] leading-relaxed mt-2">
                              {testimonial.quote}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots className="self-center pt-4 sm:pt-6" />
                <div className="flex items-center justify-end -mt-4 sm:-mt-6 space-x-2">
                  <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                  <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                </div>
              </Carousel>
            </div>
          </Card>
          <Card className="p-4 sm:p-6 border border-secondary">
            <div className="w-full max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary mb-6 sm:mb-8 text-start">
                Users felt it
              </h2>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 sm:-ml-3">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 sm:pl-3 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="border-2 border-secondary rounded-lg shadow-sm p-4 sm:p-6">
                        <CardContent className="flex flex-col items-center sm:items-start p-0 space-y-3">
                          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                            <div className="text-center sm:text-left">
                              <h3 className="font-semibold text-base text-[#0F1B4C]">
                                {testimonial.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-[#0F1B4C] leading-relaxed text-center sm:text-left">
                            {testimonial.quote}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots className="self-center pt-4 sm:pt-6" />
                <div className="flex items-center justify-end -mt-4 sm:-mt-6 space-x-2">
                  <CarouselPrevious className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
                  <CarouselNext className="relative inset-0 translate-y-0 hover:border hover:border-secondary" />
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

