import { Button } from '@/components/ui/button'
import { Activity, Beaker, CheckCircle2, Clock, HeartPulse, ShieldCheck, Zap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { TransformBeforeAfterCarousel } from './components/TransformBeforeAfterCarousel'
import { ScientificPublications } from './components/ScientificPublications'
import { Card } from '@/components/ui/card'

const ProductPage = () => {
  return (
    <div>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="heading-1">
                From the Womb of Science, a{" "}
                <span className="bg-yellow-200 px-2">Hair Regrowth</span>{" "}
                Revolution is Born.
              </h1>
              <p className="text-muted-foreground">
                A patented biomimetic polypeptides formulation designed to target hair
                follicles for QR678 hair growth
              </p>
              <Button size="lg" className="rounded-full">
                Learn More
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src="/assets/png/prodcutpage/Medical Professionals.png"
                alt="Medical Professionals"
                fill
                className="object-cover mx-auto  rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Counter */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-1 mb-16">
            Transformed the Life of{" "}
            <span className=" bg-textBg">150,000+</span> <br/> People and
            Counting...
          </h2>
          <TransformBeforeAfterCarousel />
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="heading-1 text-secondary text-center mb-12">
            QR678 Neo™&apos;s Biomimetic Polypeptides: <br/> A Class Apart
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20  flex items-center justify-center">
             
                <Image src="/assets/png/prodcutpage/XMLID_599_.svg" width={100} height={100} alt=''/>
              </div>
              <h3 className="heading-2">Specialized for Hair</h3>
              <p className="sub-heading">
                Regrowth biomimetic composition works on hair regrowth
              </p>
            </div>
            <div className="text-center space-y-4">
            <div className="mx-auto w-20 h-20  flex items-center justify-center">
             
                <Image src="/assets/png/prodcutpage/svg4578.svg" width={100} height={100} alt=''/>
              </div>
              <h3 className="heading-2">Clinically Proven</h3>
              <p className="sub-heading">
                Backed by 13+ rigorous clinical trials
              </p>
            </div>
            <div className="text-center space-y-4">
            <div className="mx-auto w-20 h-20  flex items-center justify-center">
              
                <Image src="/assets/png/prodcutpage/Layer_1.svg" width={100} height={100} alt=''/>
              </div>
              <h3 className="heading-2">No Blood. No Pain.</h3>
              <p className="sub-heading">
                Non-invasive and safe, with negligible discomfort
              </p>
            </div>
            <div className="text-center space-y-4">
            <div className="mx-auto w-20 h-20  flex items-center justify-center">
               
                <Image src="/assets/png/prodcutpage/Capa_1.svg" width={100} height={100} alt=''/>
              </div>
              <h3 className="heading-2">No Side Effects</h3>
              <p className="sub-heading">
                No drug interactions or systemic side effects
              </p>
            </div>
            <div className="text-center space-y-4">
            <div className="mx-auto w-20 h-20  flex items-center justify-center">
               
                <Image src="/assets/png/prodcutpage/Layer_1 (1).svg" width={100} height={100} alt=''/>
              </div>
              <h3 className="heading-2">Long Lasting</h3>
              <p className="sub-heading">
                Strong, thick, natural hair – made to last
              </p>
            </div>
            <div className="text-center space-y-4">
            <div className="mx-auto w-20 h-20  flex items-center justify-center">
               
                <Image src="/assets/png/prodcutpage/Layer_1 (2).svg" width={80} height={90} alt=''/>
              </div>
              <h3 className="heading-2">Quick</h3>
              <p className="sub-heading">
                10-minute hair growth procedure, visible results in 6-10 sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPARK Diagram */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="heading-1 text-secondary text-center mb-2">
            Experience the S.P.A.R.K.
          </h2>
          <p className="text-center heading-2 mb-12">
            Direct follicular action on all local etiologies of hair loss.
          </p>
       
        </div>
      </section>
      <div className="container mx-auto px-4 py-12 space-y-16 max-w-6xl">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#B08D57]">
          When the Best Gets Even Better!
        </h1>
        <p className="text-indigo-900 text-xl max-w-3xl mx-auto">
          Meet the QR678 Suite—Shampoo, Serum, and Nutraceuticals designed
          to work with QR678 Neo for even better results.
        </p>
      </section>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="p-6 border-2">
          <Image
            src="/placeholder.svg"
            alt="QR678 Suite Products"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </Card>

        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-[#B08D57]">
              Better Hair Regrowth by 24.8%
            </h3>
            <p className="text-indigo-900">
              24.8% improvement in Global Hair Growth and Quality scores while
              using the QR678 Suite with QR678 Neo therapy.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-[#B08D57]">
              80%+ Success Rate
            </h3>
            <p className="text-indigo-900">
              Hair Rub Test showed reduced hair fall from 4.54* (baseline) to 1.49*
              (post-therapy) for over 80% users.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-[#B08D57]">
              Strengthens & Revitalizes Hair
            </h3>
            <p className="text-indigo-900">
              Reduces hair fall, improves texture, shine, and density. Can we add
              some more lines here?
            </p>
          </div>
        </div>
      </div>

      {/* Scientific Section */}
      <section className="bg-white rounded-lg p-8 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-[#B08D57]">
            Seriously Scientific
          </h2>
          <p className="text-xl text-indigo-900">
            13+ clinical studies published in top scientific journals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <Image
              src="/placeholder.svg"
              alt="Research Paper"
              width={500}
              height={700}
              className="w-full h-auto"
            />
          </Card>

          <div className="space-y-4">
            {[
              "Hair pull test positive in only 12% after eight sessions",
              "Global assessment score jumped from 6 to 8 between the fourth and eighth sessions",
              "Terminal hair count, vellus hair count, and hair density saw huge improvements by session eight",
              "Patients gave themselves a higher satisfaction score—confidence restored!",
              "Long-term follow-up? No side effects, just great results",
              "QR678 Neo™—a game-changing, safe, and effective solution for androgenetic alopecia and female pattern hair loss"
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="text-[#B08D57]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" className="text-indigo-900 border-indigo-900">
            View All Research
          </Button>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          *Reference: Kapoor, R., & Shome, D. (2024, August). Evaluation of the effectiveness of the QR678 Suite in combination
          with QR678 Neo therapy for managing Androgenetic Alopecia: A prospective clinical study.
        </p>
      </section>
    </div>

    
    </div>
  )
}

export default ProductPage