"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { FileText, Microscope } from 'lucide-react'
import Image from "next/image"



const timelineData = [
  {
    year: "2006",
    title: "A stroke of serendipity",
    description: "Research On Retinoblastoma In IIT Bombay Throws Up An Interesting Phenomenon On Hair Loss.",
    icon: "/assets/svg/aboutus/microscope.svg",
    position: "right",
    progress: 10
  },
  {
    year: "2007",
    title: "Probing for a revolution",
    description: "Determined Pursuit Of This Insight Leads To The Identification Of Growth Factors Possibly Influencing Hair Growth.",
    icon: "/assets/svg/aboutus/microscope.svg",
    position: "left",
    progress: 15
  },
  {
    year: <div className="flex justify-center ">
    {"2012"}
    <br />-
    {" 2016"}
  </div>,
    title: "The rigour",
    description: <div className="">
    
    <span className="mt-6 text-2xl text-primary">
      In-clinic user trial of 1000 patients of both genders to test
      effectiveness and safety of the formulation.
    </span>
    <button className="bg-primary text-white text-lg font-medium px-6 py-2 rounded-[12px] shadow-lg hover:text-primary hover:bg-white transition duration-300 mt-6">
      View Research
    </button>
  </div>,
    icon: "/assets/svg/aboutus/microscope.svg",
    position: "right",
    progress: 20
  },
  {
    year: "2017",
    title: "The world knows",
    description: "QR678® awarded USA patent",
    icon: "/assets/svg/aboutus/microscope.svg",
    position: "left",
    progress: 35
  },
  {
    year: "2019",
    title: "The accolades follow",
    description: "Indian patent & FDA approval for manufacturing of QR678 Neo.",
    icon: "/assets/svg/aboutus/microscope.svg",
    position: "right",
    progress: 45
  },
  {
    year: "2022",
    title: "Taking over the world",
    description: "Launched in the European Union.",
    icon: "/assets/svg/aboutus/microscope.svg",
    position: "left",
    progress: 65
  },  {
    year: "2024",
    title: "Changing the way you look at hair regrowth",
    description: "Reimagined identity with the same rigour and vision.",
    icon: "/assets/svg/aboutus/microscope.svg",
    position: "right",
    progress: 75
  },
  {
    year: "2024",
    title: "Taking on new challenges",
    description: "From hair loss to greying, and skin care - Stay tuned!",
    icon: "/assets/svg/aboutus/microscope.svg",
    position: "left",
    progress: 85
  }


]

function YearIndicator({ year, progress }) {
  return (
<div className="relative w-40 h-40">
  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
    <circle
      cx="70"
      cy="70"
      r="60"
      fill="none"
      stroke="#1a237e"
      strokeWidth="20" 
    />
    <circle
      cx="70"
      cy="70"
      r="60"
      fill="none"
      stroke="#ffc107"
      strokeWidth="20" 
      strokeDasharray={`${progress * 3.77} 377`}
      className="transition-all duration-1000 ease-out"
    />
  </svg>
  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-secondary">
    {year}
  </div>
</div>

  )
}

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className={`w-full ${
      item.position === "left" ? "bg-white" : "bg-[#FAF4EE]"
    }`}
  >
    <div className={`${item.position === "left" ? "flex-row" : "flex-row-reverse "} container mx-auto flex items-center gap-8 py-12 last:mb-0`}>
      <div className={`flex-1 ${item.position === "left" ? "text-right" : "text-left"}`}>
        <motion.div
          initial={{ opacity: 0, x: item.position === "left" ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.position === "left" ? -50 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-secondary text-3xl font-bold">{item.title}</h3>
          <p className="text-primary text-xl leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
  
      <div className="relative">
        <YearIndicator year={item.year} progress={item.progress} />
        {index < timelineData.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "230px" } : { height: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute left-1/2 top-full w-[2px] border-l-2 border-dashed border-secondary"
          />
        )}
      </div>
  
      <div className={`flex-1 flex justify-center`}>
      <motion.div
          initial={{ opacity: 0, x: item.position === "right" ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.position === "right" ? -50 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          
        <Image
          src={item.icon}
          alt=""
          width={290}
          height={290}
          className="object-contain"
        />
        </motion.div>
      </div>
    </div>
  </motion.div>
  
  )
}

export function TimelineSection() {
  return (
    <div className=" mx-auto bg-[#FAF4EE] px-4 ">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center  mb-20 text-primary pt-12"
      >
        THE <span className="relative">
          GENESIS
          
          {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ffc107]"></span> */}
        </span>...
       <div className="flex items-center">
        <Image
          src={"/assets/svg/aboutus/about_us_line.svg"}
          alt=""
          width={250}
          height={12}
          className="object-contain"
        />
        </div> 
      </motion.h1>
      <div className="relative">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

