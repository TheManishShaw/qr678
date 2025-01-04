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
import TopSearchSection from "./TopSearchSection";
const categories = [
  "Alopecia",
  "Alopecia Areata",
  "Male Pattern Baldness",
  "Androgenic Alopecia",
];

const faqs =  [
  {
    question: "What is QR678 Neo?",
    answer:
      "Hair loss is a difficult phase of life and QR678 is the top of the class, the first of its kind hair loss treatment and hair regrowth therapy that can help you get over this phase. QR678 is a mix of hair growth factors that wakes up the hair follicles from their dormant phase to the active phase resulting in more natural looking, thicker and shinier hair. QR678 hair fall and regrowth treatment is suitable for both men and women suffering from most types of non-scarring alopecia. QR678 has received India and US patents and has regulatory approval in India for commercial production.",
    icon: "/assets/svg/faq/briefcase.svg",
  },
  {
    question: "Why is QR678 considered safe?",
    answer:
      "QR678 Neo is a plant-derived formulation made up of 6 biomimetic polypeptides along with vitamins, minerals, and amino acids. These ingredients are generally well-tolerated by the body and have minimal risk of adverse events. It is a minimally invasive therapy for hair loss that promotes hair regrowth actively. The QR678 Neo has regulatory approvals in 10+ countries with CE certification in the European Union. QR678 has undergone extensive clinical trials to evaluate its safety and efficacy. Evidence suggests that it is a safe option for hair growth.",
    icon: "/assets/svg/faq/location_pin.svg",
  },
  {
    question:
      "Does QR678 only control hair fall or does it give hair growth too?",
    answer:
      "QR678 Neo controls hair fall as well as promotes hair growth. The active ingredients in QR678 Neo prolong the Anagen or the growth phase of the hair cycle, thereby preventing hair fall. The biomimetic polypeptides present in QR678 Neo formulation mimic the action of growth factors that are known to stimulate hair growth by promoting angiogenesis and stem cell migration.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question: "In how many sessions does QR678 give visible results?",
    answer:
      "The number of sessions of QR678 hair regrowth therapy needed varies depending on individual factors such as the severity of hair loss, the underlying cause, and the response to treatment. The recommended course of QR678 hair therapy typically involves undergoing 5 to 10 sessions, with intervals of 3 weeks between each session for optimal results. This structured regimen allows for gradual improvement and rejuvenation of the hair follicles.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question: "How is QR678 better than other hair fall treatments?",
    answer:
      "QR678 is a mixture of natural growth factors that are already present in the scalp and therefore it is completely safe to use on everybody. It has the right concentration of specific hair growth factors and QR678 does not have any side effects, is performed as an outpatient procedure and the results are visible within eight weeks of starting the treatment. You can listen for yourself what the patients say about QR678 hair fall treatment.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question: "How is QR678 better than PRP and stem cell hair fall treatment?",
    answer:
      "QR678 is a relatively new treatment for hair fall and hair regrowth but in the short time of its invention, QR678 has proven to be more effective than PRP and stem cell treatment for reducing hair fall. QR678 produces longer-lasting and better results and is completely safe and without any side effects. QR678 can help treat androgenetic alopecia, female pattern hair loss, and hair loss because of chemotherapy, seborrheic dermatitis, and alopecia areata. PRP and stem cells, on the other hand, do not have the specific concentration of required growth factors, they lack standardisation in terms of treatment protocols and preparation of the solution injected, and lack good quality studies to prove their benefits. Both processes are still under investigation and their results are still awaiting confirmation.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question: "How often do I need to repeat QR678 treatment?",
    answer:
      "QR678 injections are administered in 8-12 sessions about 3-4 weeks apart. The results are visible after a few weeks. Once you have achieved the desired results, the injections need not be repeated unless the hair fall starts again. This is because QR678 makes the hair follicles healthy. Get to know more about why QR678 is highly effective in treating hair fall and increasing hair growth.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question: "What precautions should I take after QR678 treatment?",
    answer:
      "QR678 is a completely safe treatment without side effects, and you can go about your daily routine after the sessions. The only care you need to take is to use a gentle shampoo not before the next day of the treatment and avoid scratching and rubbing the treated area. If you have any other problem, then consult your dermatologist.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question:
      "If QR678 is so effective, why do you prescribe other medications with QR678?",
    answer:
      "QR678 is highly effective in increasing hair growth and this treatment is combined with other medications such as Minoxidil and Finasteride to control and reduce hair fall. This combination results in faster and longer-lasting results.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question: "Can QR678 be used after hair transplant?",
    answer:
      "Yes, using QR678 after hair transplant produces very successful results. QR678 gives faster density and reduces the catagen loss of transplanted hair. The growth factors in QR678 help in faster healing and activate the dormant follicles, thus: \n- Increase the viability of hair follicles\n- Improve healing and repairing of tissue process\n- Strengthen the inactive hair follicles and stimulate hair growth\n- Improve the health of existing hair, making them fuller and stronger\n\nQR678 can be given in multiple treatment sessions after three to four weeks following successful hair transplant surgery. QR678 can also be used before the hair transplant surgery to reduce the area of transplant and improve the results.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question: "Is thinning hair a worrying sign?",
    answer:
      "Yes, thinning hair is an indication of androgenetic alopecia. Significant hair thinning or development of bald patches means that you are suffering from hair fall. Unlike men, women can experience hair thinning without going completely bald. The main causes of thinning hair can be aging, stress, nutrient deficiency, or an inflammatory condition.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question: "What is hair miniaturization? What does it look like?",
    answer:
      "Hair miniaturization is the process that causes the hair to thin and fall out. It is also another name for hair thinning and balding. The hair follicles start generating thinner hair and eventually the shafts become weaker and shrink to a scar leaving behind a bald patch. The most obvious signs of hair miniaturization are:\n- Increased hair fall\n- Visibly thinning hair\n- Widening part especially in women\n- Receding hairline at temples\n\nThe sooner you act on these signs, the higher the chances of reversing the process.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question: "What is male androgenetic alopecia?",
    answer:
      "Androgenetic alopecia, also known as male pattern baldness, is the main cause of baldness in men. In this kind of alopecia, hair loss happens in a noticeable and defined pattern starting from the front or top of the scalp and receding to an M-shaped hairline, eventually leading to partial or total balding. Androgenetic alopecia is related to an androgen hormone called dihydrotestosterone (DHT). Increased levels of DHT shorten the growth cycle of hair and cause the follicles to shrink, eventually stopping hair production altogether. Many times, it is associated with over-sensitivity of hair follicles to normal levels of DHT.",
    icon: "/assets/svg/faq/people_group.svg",
  },
  {
    question: "How does female pattern alopecia progresses?",
    answer:
      "Female pattern hair loss can start at any age group but it is more common in women nearing menopause or have had a menopause. Female patter and hair loss is different from the male pattern baldness. Unlike men, females tend to lose hair in a scattered pattern. The hair loss usually happens in phases, many months will go by, there is no hair loss, and then there is a period of 3-6 months when the hair loss will be accelerated. Female pattern hair loss starts with thinning of hair along with the hair part in a Christmas tree like fashion. It progresses to becoming thinner gradually and is quite noticeable as a thinning ponytail and further results in full balding.",
    icon: "/assets/svg/faq/people_group.svg",
  },
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

       {/* Top Search */}
       <TopSearchSection/>
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
                className="border-none md:my-8 my-4 shadow-md rounded-md bg-[#F7F9FC]"
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
                className="border-none md:my-8 my-4 shadow-md rounded-md  bg-[#F7F9FC]"
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
