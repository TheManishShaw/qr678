import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const TopSearchSection = () => {
  
const topSearchedFAQs = [
  {
    question: "What is QR678 Neo?",
    answer:
      "Many people come with different schedules, which means that doctors can start and end their day as they choose. Many people come with different schedules, which means that doctors can start and end their day as they choose. Many people come with different schedules, which means that doctors can start and end their day as they choose.",
    icon: "/assets/svg/faq/briefcase.svg",
  },
  {
    question: "Where are you located?",
    answer:
      "We have centers in a number region of our opportunities that aren't limited by geographic location. This can be especially helpful.",
    icon: "/assets/svg/faq/location_pin.svg",
  },
  {
    question: "Patents available?",
    answer:
      "We have work available continuously in different locations, which embraces diversity and inclusion by hiring people from different backgrounds.",
    icon: "/assets/svg/faq/people_group.svg",
  },
];

  return (
    <div>
       <h3 className="text-3xl text-primary  mb-8 text-center">
          Top Searched <span className="text-secondary">FAQs</span>
        </h3>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {topSearchedFAQs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">
                    <Image
                                src={faq.icon}
                                alt=""
                                
                               height={28}
                               width={28}
                                className=""
                              /></span>
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
    </div>
  )
}

export default TopSearchSection
