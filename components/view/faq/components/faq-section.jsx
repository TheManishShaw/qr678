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
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TopSearchSection from "./TopSearchSection";
import { faqList } from "@/actions/get-request";
import { useQuery } from "@tanstack/react-query";
const categories = [
  "Alopecia",
  "Alopecia Areata",
  "Male Pattern Baldness",
  "Androgenic Alopecia",
];

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: faqData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["faqList"],
    queryFn: () => faqList(),
    retry: 5,
    refetchOnWindowFocus: true,
  });

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

        <TopSearchSection />
        <Separator className="max-w-5xl bg-[#C0C0C0] mx-auto mb-10 " />
        <h3 className="text-4xl text-secondary font-bold mb-8 text-center">
          QR678 Neo
        </h3>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 container mx-auto">
          {faqData &&
            faqData?.map((faq, index) => (
              <Accordion
                key={index}
                type="single"
                defaultValue={`item-0`}
                collapsible
                className="w-full  rounded-md "
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-none  shadow-md rounded-md bg-[#F7F9FC]"
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
              </Accordion>
            ))}
        </div>
      </div>
    </section>
  );
}
