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
      <div className='flex justify-center '>
        <div className="flex container h-screen relative z-10 mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8">
            <div className="relative inline-block">
              <h1 className="text-[82px] font-bold leading-tight tracking-tight text-[#27277A]">
                <span className="relative inline-block  p-4">
                  Science For
                  <br />
                  Bettering
                  <br />
                  Lives.
                </span>
              </h1>
            </div>
            <p className="text-[20px] max-w-[400px] text-[#B8860B]">
              At QR678, we innovate to craft solutions that go beyond just better hair and skin;
              <br />
              they better lives.
            </p>
            <div className="flex items-center gap-4">
              <Button
                className="bg-[#27277A] px-8 hover:bg-[#27277A]/90"
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
          
        </div>

      </div>
      <div className="relative ">
            <div className="absolute right-0 top-0  rounded-full bg-[#FFE5B4] lg:-right-12" />
            <Image
              src="/assets/png/aboutpage/hero-image.png"
              alt="Scientists at work"
              width={1200}
              height={850}
              className="relative bg-cover z-10"
            />
          </div>
      </div>
      
    </div>
    <TimelineSection/>

          <section className="text-center mt-14 mb-4 space-y-4 max-w-5xl mx-auto bg-[#FAF4EE]">
        <h2 className="heading-1">
          Beyond Hair Loss Treatments
        </h2>
        <p className="text-secondary text-lg">
          To Become The Global Thought Leader And A Science-Based Product Behemoth
          In Hair Science.
        </p>
      </section>
      <ProductSection/>
        <LeadershipTeam/>
        <BoardOfDirectors/>
        <section className="text-center space-y-4">
 
        <div className="flex justify-center container mx-auto items-center gap-8">
      <h2 className="text-2xl font-semibold text-muted-foreground mb-6">As seen on...</h2>
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="flex w-max space-x-8 p-4">
          {Array.from({ length: 5 }).map((logo,index) => (
            <div
              key={index}
              className="w-[120px] shrink-0 items-center justify-center"
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

          {/* {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-24 h-12 relative">
              <Image
                src="/placeholder.svg"
                alt={`Partner Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))} */}
        </div>
      </section>
    </div>
  )
}

export default AboutPage