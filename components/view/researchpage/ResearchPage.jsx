import React from "react";
import HeroSectionResearch from "./components/HeroSectionResearch";
import SingeArticle from "./components/SingeArticle";
import { ActivityIcon, CircleIcon, ClockIcon, GaugeIcon } from "lucide-react";

const ResearchPage = () => {
  return (
    <>
      <HeroSectionResearch />
      <div className="container mx-auto px-4 py-8 ">
   
      <div className="mb-12">
        <h1 className="text-3xl font-semibold text-center mb-6 text-primary">Androgenetic Alopecia</h1>
        <p className="text-muted-foreground mb-8  mx-auto text-center">
          Male pattern baldness or androgenetic alopecia is a result of the inherent susceptibility of the hair follicles to shrink due to androgen hormones. The hair follicles reduce in size due to hormones and genetic factors in males. Androgenetic Alopecia results in hair thinning and hair loss in a very high number of men and women in their lifetime. In men, androgenetic alopecia causes a receding hairline and gradual disappearance of hair from the crown of the head. In women, androgenetic alopecia or female pattern baldness causes diffuse thinning on the crown of the head, leading to widening parting and thin, frizzy hair that gradually leads to visible scalp.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <CircleIcon className="w-6 h-6 text-primary" />
            <span className="text-muted-foreground">Hormones</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-6 h-6 text-primary" />
            <span className="text-muted-foreground">Ageing</span>
          </div>
          <div className="flex items-center gap-2">
            <ActivityIcon className="w-6 h-6 text-primary" />
            <span className="text-muted-foreground">Genetics</span>
          </div>
          <div className="flex items-center gap-2">
            <GaugeIcon className="w-6 h-6 text-primary" />
            <span className="text-muted-foreground">Metabolic Syndrome</span>
          </div>
        </div>

        {/* Journal Section */}
        <h2 className="text-2xl font-semibold text-center mb-8 text-primary">Published In Top Journals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journals.map((journal, index) => (
        <SingeArticle key={index} journal={journal}/>
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default ResearchPage;


const journals = [
    {
      journal: "Plastic and Reconstructive Surgery",
      title: "QR678 & QR678 Neo Hair Growth Formulations: A Cellular Toxicity & Animal Efficacy Study",
      description: "Current treatment options are limited in hair regrowth therapy. This study evaluates QR678 Neo hair formulations, consisting of a combination of growth factors and peptides."
    },
    {
      journal: "Journal of Cosmetic Dermatology",
      title: "Intradermal injections of a hair growth factor formulation for enhancement of human hair regrowth",
      description: "Research has shown the efficacy of hair growth factors in promoting hair regeneration."
    },
    {
      journal: "Journal of Cosmetic Dermatology",
      title: "Evaluation of the safety and effectiveness of intradermal administration of QR678 Neo® hair growth factor formulation",
      description: "A Phase III, open-label, single-arm study to evaluate safety."
    },
    // Add more journal entries as needed
  ]
  
