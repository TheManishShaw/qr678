"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, MinusIcon, Plus, PlusIcon, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
const categories = [
  "Alopecia",
  "Alopecia Areata",
  "Male Pattern Baldness",
  "Androgenic Alopecia",
];

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

const faqs = [
  {
    question: "What is QR678?",
    answer:
      "Hair loss is difficult phase of life and QR678 is the ray of the hope. For first to be end hair loss treatment and hair regrowth therapy that can help you get over this phase.Hair loss is difficult phase of life and QR678 is the ray of the hope. For first to be end hair loss treatment and hair regrowth therapy that can help you get over this phase.",
  },
  {
    question: "How does QR678 work?",
    answer:
      "QR678 works by targeting the root cause of hair loss and promoting natural hair growth.",
  },
  // Add more FAQs as needed
];

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container">
        <div className="text-center text-primary mb-12">
          <h2 className="text-3xl  mb-2">
            We Have <span className="text-secondary">Answers</span>
          </h2>
          <div className="max-w-xl mx-auto mt-6 relative text-primary">
            <Input
              type="search"
              placeholder="Ask a question "
              className="pl-10 focus:placeholder-primary placeholder-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-primary " />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-sm border-secondary text-primary font-medium"
            >
              {category}
            </Button>
          ))}
        </div>

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
        <Separator className="max-w-5xl bg-[#C0C0C0] mx-auto mb-10 " />
        <h3 className="text-4xl text-secondary font-bold mb-8 text-center">
          QR678 Neo
        </h3>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 container mx-auto">
          <Accordion type="single" collapsible className="w-full  rounded-md ">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none md:my-8 my-4 shadow-md rounded-md"
              >
                <AccordionTrigger className="flex w-full items-center justify-between px-4 border-b rounded-md gap-4   hover:no-underline ">
                  {/* Question Text */}
                  <span className="text-left text-xl font-semibold text-primary">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 py-4 px-6 shadow-md text-lg leading-relaxed text-primary">
                  <p className="mb-4">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="w-full  rounded-md ">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none md:my-8 my-4 shadow-md rounded-md"
              >
                <AccordionTrigger className="flex w-full items-center justify-between px-4 border-b rounded-md gap-4   hover:no-underline ">
                  {/* Question Text */}
                  <span className="text-left text-xl font-semibold text-primary">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 py-4 px-6 shadow-md text-lg leading-relaxed text-primary">
                  <p className="mb-4 font-light">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
