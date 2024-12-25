import React from "react";
import HeroSectionResearch from "./components/HeroSectionResearch";
import SingeArticle from "./components/SingeArticle";
import { ActivityIcon, CircleIcon, ClockIcon, GaugeIcon } from "lucide-react";
import Image from "next/image";
import BlogSection from "./components/BlogSection";

const ResearchPage = () => {
  return (
    <>
      <HeroSectionResearch />
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
      <div className="space-y-6">
        <h2 className="text-secondary text-2xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto">
        QR678 Neo is a proprietary, first in class hair fall & hair regrowth therapy, which has revolutionised the treatment of hair fall in alopecia. This formulation has been named QR678® Neo inspired by the new generation ubiquitous presence of “Quick Response“ QR code. 
        </h2>
        
       

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          {[
            "Alopecia",
            "Alopecia Areata",
            "Male Pattern Baldness",
            "Androgenic Alopecia"
          ].map((condition) => (
            <button
              key={condition}
              className="px-6 py-3 rounded-[10px] border border-secondary text-primary text-bold text-xl hover:border-white hover:text-white hover:bg-primary transition-colors duration-200"
            >
              {condition}
            </button>
          ))}
        </div>
      </div>
    </section>
      <div className="container mx-auto px-4 py-8 ">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-center mb-6 text-secondary">
            Androgenetic Alopecia
          </h1>
          <p className="text-muted-foreground mb-8  mx-auto text-center">
            Male pattern baldness or androgenetic alopecia is a result of the
            inherent susceptibility of the hair follicles to shrink due to
            androgen hormones. The hair follicles reduce in size due to hormones
            and genetic factors in males. Androgenetic Alopecia results in hair
            thinning and hair loss in a very high number of men and women in
            their lifetime. In men, androgenetic alopecia causes a receding
            hairline and gradual disappearance of hair from the crown of the
            head. In women, androgenetic alopecia or female pattern baldness
            causes diffuse thinning on the crown of the head, leading to
            widening parting and thin, frizzy hair that gradually leads to
            visible scalp.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-around gap-8 mb-12">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/svg/research/checkbox.svg"
                alt=""
                height={40}
                width={40}
                className=""
              />
              <span className="text-muted-foreground text-primary text-2xl font-medium ">
                Hormones
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/svg/research/checkbox.svg"
                alt=""
                height={40}
                width={40}
                className=""
              />
              <span className="text-muted-foreground text-primary text-2xl font-medium">
                Ageing
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/svg/research/checkbox.svg"
                alt=""
                height={40}
                width={40}
                className=""
              />
              <span className="text-muted-foreground text-primary text-2xl font-medium">
                Genetics
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/svg/research/checkbox.svg"
                alt=""
                height={40}
                width={40}
                className=""
              />
              <span className="text-muted-foreground text-primary text-2xl font-medium">
                Metabolic Syndrome
              </span>
            </div>
          </div>

          {/* Journal Section */}
          <h2 className="text-[64px] font-semibold text-center pt-12 mb-8 text-primary">
            Published In Top Journals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journals.map((journal, index) => (
              <SingeArticle key={index} journal={journal} />
            ))}
          </div>
      </div>
        </div>
      <BlogSection/>
    </>
  );
};


export default ResearchPage;

const journals = [
  {
    title:
      "QR678 & QR678 Neo Hair Growth Formulations: A Cellular Toxicity & Animal Efficacy Study",
    summary:
      "Current treatment modalities are limited in their approach and success for hair loss. QR 678 & QR 678 Neo are new formulations, consisting of a combination of growth factors and peptides. This study demonstrates safety analysis.",
  },
  {
    title:
      "Intradermal injections of a hair growth factor formulation for enhancement of human hair regrowth",
    summary:
      "Research has shown the efficacy of hair growth factors in hair regrowth. We describe the intradermal injections of a recombinant, bioengineered hair formulation, containing growth factors, into the scalp skin.",
  },
  {
    title:
      "Evaluation of the safety and effectiveness of intradermal administration of QR678 Neo® hair growth factor formulation",
    summary:
      "A phase-IV, open-label, single-arm multi-ethnicity clinical trial.",
  },
  {
    title:
      "QR 678 & QR678 Neo Vs PRP—A randomized, comparative, prospective study",
    summary:
      "Hair plays a significant role in shaping the appearance of an individual. Loss of hair can lead to serious effects on social esteem of an individual. The most common cause of hair loss is Androgenetic Alopecia (AGA).",
  },
  {
    title:
      "Comparison of QR 678® & QR678® Neo as monotherapy and as combination therapy with 5% Minoxidil solution and oral Finasteride in the treatment of male androgenetic alopecia—Which is better?",
    summary: null,
  },
  {
    title:
      "Effectiveness of QR678 and QR678 Neo® with intralesional corticosteroid vs. intralesional corticosteroid alone in the treatment of alopecia areata –A randomized, comparative, prospective study",
    summary: null,
  },
  {
    title:
      "Evaluation of efficacy of QR678® and QR678® Neo hair growth factor formulation in the treatment of persistent chemotherapy-induced alopecia caused due to cytotoxic chemotherapy—A prospective pilot study",
    summary: null,
  },
  {
    title:
      "Evaluation of efficacy of QR 678 and QR678 neo hair growth factor formulation for the treatment of female pattern alopecia in patients with PCOS—A prospective study",
    summary: null,
  },
  {
    title:
      "Efficacy of QR678 Neo® hair growth factor formulation for the treatment of hair loss in Covid-19-induced persistent Telogen Effluvium—A prospective, clinical, single-blind study",
    summary: null,
  },
  {
    title:
      "A newer approach in the treatment of seborrheic dermatitis with QR678® and QR678 Neo®—A prospective pilot study",
    summary:
      "Seborrheic dermatitis is a skin condition that mainly affects the scalp causing scaly patches, inflamed skin and stubborn dandruff. It usually affects oily areas of the body.",
  },
  {
    title:
      "Evaluation of efficacy of intradermal injection therapy vs derma roller application for administration of QR678 Neo hair regrowth formulation for the treatment of Androgenetic Alopecia—A prospective study",
    summary: null,
  },
  {
    title:
      "Evaluation of efficacy of derma roller sizes vs topical application for administration of QR678 Neo® hair regrowth formulation in the treatment of androgenetic alopecia",
    summary: null,
  },
  {
    title:
      "The iceberg phenomenon of alopecia associated public health ramifications on the quality of life among adults in India",
    summary:
      "Psychosocial implications and effect on the quality of life of individuals due to alopecia are underestimated. This article aims at highlighting its public health ramifications by assessing.",
  },
];
