import React from 'react'
import LeadershipTeam from './components/LeadershipTeam'
import BoardOfDirectors from './components/BoardOfDirectors'
import ProductSection from './components/ProductSection'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'
import { TimelineSection } from './components/timeline-section'

const AboutPage = () => {
  return (
    <div>
        <div className="relative overflow-hidden bg-white">
      <div className=" relative z-10 mx-auto">

      <div className="relative h-screen">
      {/* Background Image */}
      <Image
        src="/assets/png/aboutpage/hero-image.png" 
        alt="Background Image"
        layout="fill" // Ensures the image fills the container
        className="object-cover w-full" 
      />

      {/* Overlay Content */}
      <div className="space-y-8 ml-4 sm:ml-8 lg:ml-12">
  {/* Heading Section */}
  <div className="relative inline-block place-items-center">
    <h1 className="heading-1 text-7xl sm:text-7xl lg:text-[5rem] font-bold">
      <span className="relative inline-block p-2 sm:p-4">
        Science For
        <br />
        Bettering
        <br />
        Lives.
      </span>
    </h1>
  </div>

  {/* Description Text */}
  <p className="text-base sm:text-lg lg:text-[20px] max-w-[300px] sm:max-w-[400px] text-secondary">
    At QR678, we innovate to craft solutions that go beyond just better hair and skin;
    <br />
    they better lives.
  </p>

  {/* Buttons Section */}
  <div className="flex flex-wrap items-center gap-4">
    <Button className="bg-primary px-6 sm:px-8 py-2 hover:bg-primary/90 text-sm sm:text-base">
      Button 1
    </Button>
    <Button
      variant="ghost"
      className="flex items-center gap-2 text-primary text-sm sm:text-base"
    >
      <Image
        src="/assets/svg/aboutus/watch_icon.svg"
        alt="Scientists at work"
        width={52}
        height={52}
        className="relative bg-cover z-10"
      />
      Watch Testimonials
    </Button>
  </div>
</div>

    </div>
        {/* <div className="grid place-items-center  gap-8 lg:grid-cols-4 lg:gap-12 ml-12">
          <div className="space-y-8 ">
            <div className="relative inline-block">
              <h1 className="heading-1 ">
                <span className="relative inline-block  p-4">
                  Science For
                  <br />
                  Bettering
                  <br />
                  Lives.
                </span>
              </h1>
            </div>
            <p className="text-[20px] max-w-[400px] text-secondary">
              At QR678, we innovate to craft solutions that go beyond just better hair and skin;
              <br />
              they better lives.
            </p>
            <div className="flex items-center gap-4">
              <Button
                className="bg-primary px-8 hover:bg-primary/90"
              >
                Button 1
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-primary"
              >
                 <Image
              src="/assets/svg/aboutus/watch_icon.svg"
              alt="Scientists at work"
              width={52}
              height={52}
              className="relative bg-cover z-10"
            />
                
                Watch Testimonials
              </Button>
            </div>
          </div>
          <div className="relative col-span-3 mx-auto">
         
            <Image
              src="/assets/png/aboutpage/hero-image.png"
              alt="Scientists at work"
              width={1440}
              height={700}
              className="relative bg-cover z-10"
            />
          </div>
        </div> */}
      </div>

    </div>
    <TimelineSection/>
    <div className=' flex w-full mx-auto'>
      <section className="text-center text-[64px] mt-14 mb-4 space-y-4  bg-white mx-auto">
        <h2 className="heading-1">
        Challenges
        </h2>
        <p className="text-secondary text-lg text-[40px] pb-12">
        Forays into hair greying, and skin science
        </p>
        <Image
                src={"challenge.svg"}
                alt={``}
                width={1600}
                height={768}
                
              />
      </section>
      </div >

          <section className="text-center mt-14 mb-4 space-y-4 max-w-5xl mx-auto bg-white pb-12">
        <h2 className="heading-1 text-[64px]">
          Beyond Hair Loss Treatments
        </h2>
        <p className="text-secondary text-lg text-[40px] leading-10">
          To Become The Global Thought Leader And A Science-Based Product Behemoth
          In Hair Science.
        </p>
      </section>
      <ProductSection/>
        <LeadershipTeam/>
        <BoardOfDirectors/>
        <section className="text-center py-8">
  <div className="container mx-auto flex flex-wrap items-center justify-center gap-8">
    {/* Text Section */}
    <h2 className="text-2xl font-semibold text-muted-foreground">
      As seen on...
    </h2>

    {/* Logos Section */}
    <div className="flex gap-8 items-center flex-wrap">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="w-[120px] flex items-center justify-center"
        >
          <Image
            src={"/assets/png/no-image.png"}
            alt={`Partner Logo ${index + 1}`}
            width={120}
            height={40}
            className="aspect-[3/1] object-contain filter grayscale hover:grayscale-0 transition-all"
          />
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default AboutPage