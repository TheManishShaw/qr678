import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const TopSearchSection = () => {
  const topSearchedFAQs = [
    {
      question: "What is QR678 Neo?",
      answer:
        "The QR678®️ Neo is a proprietary, first-in-class hair loss and hair regrowth therapy that has revolutionized the treatment of hair loss in alopecia. This formulation has been named QR678®️ Neo inspired by the new generation's ubiquitous presence of the “Quick Response“ QR code. 678 in Morse Code signifies “there is no answer.” This formulation has been named QR678™️ to signify a Quick Response to a disease which earlier had no answer.",
      icon: "/assets/svg/faq/briefcase.svg",
    },
    {
      question: "Where are you located?",
      answer:
        "We are currently available in Ahmedabad, Bangalore, Chennai, Delhi, Hyderabad, Jaipur, Kolkata, Madurai, Mumbai, Nagpur, Nashik, Pune, Surat, Vadodara, Vishakhapatnam and many more. (Link 'many more' with the partners' page).",
      icon: "/assets/svg/faq/location_pin.svg",
    },
    {
      question: "Patents available?",
      answer:
        "QR678®️ is a patented, regulatory-approved treatment with a 90% success rate. It’s a quick, non-surgical procedure backed by 13+ clinical trials, ensuring proven efficacy.",
      icon: "/assets/svg/faq/people_group.svg",
    },
  ];

  return (
    <div className="container mx-auto my-20">
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
                  />
                </span>
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
  );
};

export default TopSearchSection;
