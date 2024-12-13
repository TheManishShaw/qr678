"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { FileText, Microscope } from 'lucide-react'
import Image from "next/image"



const timelineData = [
  {
    year: "2006",
    title: "A Stroke Of Serendipity",
    description: "Research On Retinoblastoma In IIT Bombay Throws Up An Interesting Phenomenon On Hair Loss.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "right",
    progress: 75
  },
  {
    year: "2007",
    title: "Probing For A Revolution",
    description: "Determined Pursuit Of This Insight Leads To The Identification Of Growth Factors Possibly Influencing Hair Growth.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "left",
    progress: 85
  },
  {
    year: "2006",
    title: "A Stroke Of Serendipity",
    description: "Research On Retinoblastoma In IIT Bombay Throws Up An Interesting Phenomenon On Hair Loss.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "right",
    progress: 75
  },
  {
    year: "2007",
    title: "Probing For A Revolution",
    description: "Determined Pursuit Of This Insight Leads To The Identification Of Growth Factors Possibly Influencing Hair Growth.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "left",
    progress: 85
  },
  {
    year: "2006",
    title: "A Stroke Of Serendipity",
    description: "Research On Retinoblastoma In IIT Bombay Throws Up An Interesting Phenomenon On Hair Loss.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "right",
    progress: 75
  },
  {
    year: "2007",
    title: "Probing For A Revolution",
    description: "Determined Pursuit Of This Insight Leads To The Identification Of Growth Factors Possibly Influencing Hair Growth.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "left",
    progress: 85
  },  {
    year: "2006",
    title: "A Stroke Of Serendipity",
    description: "Research On Retinoblastoma In IIT Bombay Throws Up An Interesting Phenomenon On Hair Loss.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "right",
    progress: 75
  },
  {
    year: "2007",
    title: "Probing For A Revolution",
    description: "Determined Pursuit Of This Insight Leads To The Identification Of Growth Factors Possibly Influencing Hair Growth.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "left",
    progress: 85
  },  {
    year: "2006",
    title: "A Stroke Of Serendipity",
    description: "Research On Retinoblastoma In IIT Bombay Throws Up An Interesting Phenomenon On Hair Loss.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "right",
    progress: 75
  },
  {
    year: "2007",
    title: "Probing For A Revolution",
    description: "Determined Pursuit Of This Insight Leads To The Identification Of Growth Factors Possibly Influencing Hair Growth.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "left",
    progress: 85
  },  {
    year: "2006",
    title: "A Stroke Of Serendipity",
    description: "Research On Retinoblastoma In IIT Bombay Throws Up An Interesting Phenomenon On Hair Loss.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "right",
    progress: 75
  },
  {
    year: "2007",
    title: "Probing For A Revolution",
    description: "Determined Pursuit Of This Insight Leads To The Identification Of Growth Factors Possibly Influencing Hair Growth.",
    icon: "/placeholder.svg?height=80&width=80",
    position: "left",
    progress: 85
  },
]

function YearIndicator({ year, progress }) {
  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="64"
          cy="64"
          r="60"
          fill="none"
          stroke="#1a237e"
          strokeWidth="8"
          className="opacity-20"
        />
        <circle
          cx="64"
          cy="64"
          r="60"
          fill="none"
          stroke="#ffc107"
          strokeWidth="8"
          strokeDasharray={`${progress * 3.77} 377`}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#1a237e]">
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
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex items-center gap-8 mb-32 last:mb-0 ${
        item.position === "left" ? "flex-row bg-slate-500" : "flex-row-reverse bg-red-500"
      }`}
    >
      <div className={`flex-1 ${item.position === "left" ? "text-right" : "text-left"}`}>
        <motion.div
          initial={{ opacity: 0, x: item.position === "left" ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.position === "left" ? -50 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-[#C5A367] text-3xl font-bold">{item.title}</h3>
          <p className="text-[#1a237e] text-xl leading-relaxed">{item.description}</p>
     
        </motion.div>
      </div>

      <div className="relative">
        <YearIndicator year={item.year} progress={item.progress} />
        {index < timelineData.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "130px" } : { height: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute left-1/2 top-full w-[2px] border-l-2 border-dashed border-secondary"
          />
        )}
      </div>

      
      <div className={`flex-1 ${item.position === "left" ? "justify-end" : "justify-start"}`}>
            <Image
              src={item.icon}
              alt=""
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
    </motion.div>
  )
}

export function TimelineSection() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-20 text-[#1a237e]"
      >
        THE <span className="relative">
          GENESIS
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ffc107]"></span>
        </span>...
      </motion.h1>
      <div className="relative">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

