import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { TransformBeforeAfterCarousel } from "./components/TransformBeforeAfterCarousel";
import { ScientificPublications } from "./components/ScientificPublications";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, FileText, Microscope } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const ProductPage = () => {
  return (
    <div className="">
      <section className="relative ">
        <div
          className="pt-24   md:pt-72  inset-0 bg-[url('/assets/png/prodcutpage/hero-image.png')] bg-cover w-full  mix-blend-multiply md:bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/assets/png/prodcutpage/hero-image.png')`,
          }}
        >
          <div className="container mx-auto px-4 md:mt-30">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div className="space-y-6 text-center md:text-left">
                <h1 className="heading-1 text-4xl md:text-6xl lg:text-[80px] leading-tight">
                  From the Womb <br className="hidden md:inline" /> of Science, a <br className="hidden md:inline" />
                  <span className="bg-[#FFBF1A] px-2 "> Hair Regrowth</span>{" "}
                  Revolution is <br className="hidden md:inline" />
                  Born.
                </h1>
                <p className="text-muted-foreground max-w-sm mx-auto md:mx-0 text-xl md:text-2xl text-secondary">
                  A patented biomimetic polypeptides formulation designed to
                  target hair follicles for QR678 hair growth
                </p>

              </div>
            </div>
          </div>
          <div className=" justify-between bg-white/70 mx-auto p-4  mt-40 bottom-0">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between container w-full gap-6 items-center">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center justify-center  text-center">
                  <FileText className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-lg font-medium mb-1 text-primary ">
                    Patented in
                  </h3>
                  <p className="text-xl font-bold text-primary">India & USA</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center justify-center  text-center">
                  <Microscope className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-medium text-primary mb-1">
                    13+
                  </h3>
                  <p className="text-xl font-bold text-primary">
                    Clinical Studies
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center justify-center  text-center">
                  <Cog className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-lg text-primary font-medium mb-1">
                    Manufactured in
                  </h3>
                  <p className="text-xl font-bold text-primary">South Korea</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Counter */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-1 mb-16">
            Transformed the Life of <span className=" bg-textBg">150,000+</span>{" "}
            <br /> People and Counting...
          </h2>
          <TransformBeforeAfterCarousel />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="heading-1 text-secondary text-center mb-12">
            QR678 Neo<sup>®</sup>’s Biomimetic Polypeptides: <br /> A Class
            Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20  flex items-center justify-center">
                <Image
                  src="/assets/png/prodcutpage/XMLID_599_.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <h3 className="heading-2">Specialized for Hair</h3>
              <p className="sub-heading">
                Regrowth biomimetic composition works on hair regrowth
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20  flex items-center justify-center">
                <Image
                  src="/assets/png/prodcutpage/svg4578.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <h3 className="heading-2">Clinically Proven</h3>
              <p className="sub-heading">
                Backed by 13+ rigorous clinical trials
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20  flex items-center justify-center">
                <Image
                  src="/assets/png/prodcutpage/Layer_1.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <h3 className="heading-2">No Blood. No Pain.</h3>
              <p className="sub-heading">
                Non-invasive and safe, with negligible discomfort
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20  flex items-center justify-center">
                <Image
                  src="/assets/png/prodcutpage/Capa_1.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <h3 className="heading-2">No Side Effects</h3>
              <p className="sub-heading">
                No drug interactions or systemic side effects
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20  flex items-center justify-center">
                <Image
                  src="/assets/png/prodcutpage/Layer_1 (1).svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <h3 className="heading-2">Long Lasting</h3>
              <p className="sub-heading">
                Strong, thick, natural hair – made to last
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20  flex items-center justify-center">
                <Image
                  src="/assets/png/prodcutpage/Layer_1 (2).svg"
                  width={80}
                  height={90}
                  alt=""
                />
              </div>
              <h3 className="heading-2">Quick</h3>
              <p className="sub-heading">
                10-minute hair growth procedure, visible results in 6-10
                sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPARK Diagram */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 relative">
          <h2 className="heading-1 text-secondary text-center mb-2">
            Experience the S.P.A.R.K.
          </h2>
          <p className="text-center heading-2 mb-12">
            Direct follicular action on all local etiologies of hair loss.
          </p>
          <Image
            width={900}
            height={900}
            className="w-full h-full"
            src="/assets/png/prodcutpage/spark.png"
            alt="spark image"
          />
          <div className="flex justify-center mt-8 md:mt-0 md:absolute md:right-20 md:bottom-40">
            <Button className="bg-primary rounded-[5px] px-16 hover:bg-primary/90">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-[#F2F1F1]">
        <div className="container  mx-auto px-4 py-12 space-y-16 max-w-6xl">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary">
              When the Best Gets Even Better!
            </h1>
            <p className="text-indigo-900 text-xl max-w-3xl mx-auto">
              Meet the QR678 Suite—Shampoo, Serum, and Nutraceuticals designed
              to work with QR678 Neo for even better results.
            </p>
          </section>

          {/* Benefits Section */}
          <section>
          <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
            <Card className=" border-none shadow-none bg-transparent">
              <Image
                src="/assets/png/product.png"
                alt="QR678 Suite Products"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </Card>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <Image
                  src="/assets/svg/productpage/arrowIcon.svg"
                  className="mt-2"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold text-secondary">
                    Better Hair Regrowth by 24.8%
                  </h3>
                  <p className="text-indigo-900 text-xl">
                    24.8% improvement in Global Hair Growth and Quality scores
                    while using the QR678 Suite with QR678 Neo therapy.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Image
                  src="/assets/svg/productpage/arrowIcon.svg"
                  className="mt-2"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold text-secondary">
                    80%+ Success Rate
                  </h3>
                  <p className="text-indigo-900 text-xl">
                    Hair Rub Test showed reduced hair fall from 4.54* (baseline)
                    to 1.49* (post-therapy) for over 80% users.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Image
                  src="/assets/svg/productpage/arrowIcon.svg"
                  className="mt-2"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold text-secondary">
                    Strengthens & Revitalizes Hair
                  </h3>
                  <p className="text-indigo-900 text-xl">
                    Reduces hair fall, improves texture, shine, and density. Can
                    we add some more lines here?
                  </p>
                </div>
              </div>

            
            </div>
          </div>
            <p className="text-primary text-xl mt-4 p-2">
            *Reference: Kapoor, R., & Shome, D. (2024, August). Evaluation of the effectiveness of the QR678 Suite in combination with QR678 Neo therapy for managing Androgenetic Alopecia: A prospective clinical study.
            </p>
          </section>

          {/* Scientific Section */}
          <section className="bg-white border rounded-lg p-8 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-secondary">
                Seriously Scientific
              </h2>
              <p className="text-xl text-indigo-900">
                13+ clinical studies published in top scientific journals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
              <Card className="border-none">
                <Image
                  src="/assets/png/product-detail.png"
                  alt="Research Paper"
                  width={500}
                  height={700}
                  className="w-full h-auto"
                />
                <div className="text-center mt-4 w-/">
                  <Button
                    variant="outline"
                    className="text-indigo-900 rounded-[5px] bg-gray-400/20 border-secondary"
                  >
                    View All Research
                  </Button>
                </div>
              </Card>

              <div className="space-y-4">
                {[
                  "Hair pull test positive in only 12% after eight sessions",
                  "Global assessment score jumped from 6 to 8 between the fourth and eighth sessions",
                  "Terminal hair count, vellus hair count, and hair density saw huge improvements by session eight",
                  "Patients gave themselves a higher satisfaction score—confidence restored!",
                  "Long-term follow-up? No side effects, just great results",
                  "QR678 Neo™—a game-changing, safe, and effective solution for androgenetic alopecia and female pattern hair loss",
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Image
                      src="/assets/svg/icons/doubleCheckIcon.svg"
                      alt="icon"
                      width={50}
                      height={50}
                      className="h-6 w-6"
                    />
                    {/* <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" /> */}
                    <p className="text-secondary text-xl">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;

