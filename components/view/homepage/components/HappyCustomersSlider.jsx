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
import Image from "next/image";

const slides= [
  {
    title: 'QR678 Neo',
    subtitle: 'Sub-head',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.',
    image: '/assets/svg/homepage/product.svg',
    ctaText: 'Learn More'
  },
  {
    title: 'Happy Customers',
    subtitle: 'Sub-head',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.',
    image: '/assets/svg/homepage/girl_customer.svg',
    ctaText: 'Learn More'
  },
  {
    title: 'Got Questions?',
    subtitle: 'Sub-head',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.',
    image: '/assets/svg/homepage/girl_customer.svg',
    ctaText: 'Learn More'
  }
]

export default function HappyCustomersSlider() {
  return (
    <section className=" py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">      
        <div className="space-y-8 sm:space-y-12">
          <Card className="p-4 sm:p-6 shadow-none border-none bg-transparent ">
            <div className="">
             
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="">
                  {slides.map((slide, index) => (
                    <div
                    key={index}
                    className="flex gap-4 mx-4"
                  >
                    <div className="bg-gradient-to-r  w-[500px] from-[#494996] to-[#060628] rounded-3xl p-1 mb-0 md:p-2 md:pb-0  flex flex-col md:flex-row items-center gap-2">
                    <div className="w-full md:w-1/2">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={600}
                          height={900}
                          className="w-full h-auto object-contain"
                        />
                      </div><div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-white text-3xl md:text-xl font-bold">{slide.title}</h2>
                        <p className="text-white/80 text-[16px]">{slide.subtitle}</p>
                        <p className="text-white/70 leading-relaxed text-[14px]">{slide.description}</p>
                        <Button 
                          variant="secondary" 
                          className="mt-4 rounded-full px-8"
                        >
                          {slide.ctaText}
                        </Button>
                      </div>
                     
                    </div>
                  </div>
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
