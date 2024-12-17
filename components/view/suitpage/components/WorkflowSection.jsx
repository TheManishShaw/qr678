import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Microscope, FileCheck, ThumbsUp } from 'lucide-react'

export default function WorkflowSection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-100/50 to-purple-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-gray-100/50 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Main Title */}
        <h2 className="text-primary text-3xl md:text-5xl font-bold text-center mb-16">
          Acts like a team. Works like a charm.
        </h2>

        {/* Workflow Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mb-24 relative">
          {/* Connecting Lines - Visible on md and up */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
          </div>

          {/* Activate Card */}
          <Card className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="space-y-4">
              <div className="relative h-48 w-full">
                <Image
                  src="/assets/png/suite/qr678-neo.png"
                  alt="QR678 Neo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-primary">Activate</span>
                  <span className="text-secondary"> with QR678 Neo</span>
                </h3>
                <p className="text-gray-600">
                  Activate hair follicles, stimulate Anagen phase for growth, and increase the odds for follicle survival.
                </p>
              </div>
            </div>
          </Card>

          {/* Anchor Card */}
          <Card className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="space-y-4">
              <div className="relative h-48 w-full">
                <Image
                  src="/assets/png/suite/shampoo-serum.png"
                  alt="Shampoo and Serum"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-primary">ANCHOR</span>
                  <span className="text-secondary"> with Shampoo & Serum</span>
                </h3>
                <p className="text-gray-600">
                  Cleanse, hydrate, and enhance circulation to the hair follicle.
                </p>
              </div>
            </div>
          </Card>

          {/* Amplify Card */}
          <Card className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="space-y-4">
              <div className="relative h-48 w-full">
                <Image
                  src="/assets/png/suite/nutraceuticals.png"
                  alt="Nutraceuticals"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-primary">AMPLIFY</span>
                  <span className="text-secondary"> with Nutraceuticals</span>
                </h3>
                <p className="text-gray-600">
                  Boost hair health from the inside, ensuring fuller, stronger hair that remains in the growth phase longer.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Suite Advantage Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-12">
            The suite Advantage!
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <CheckCircle className="w-8 h-8 text-primary" />,
                title: "You Get A Complete System",
                description: "to address hair loss from all aspects - internal nourishment & external stimulation"
              },
              {
                icon: <Microscope className="w-8 h-8 text-primary" />,
                title: "It's clinically proven",
                description: "to improve hair density and reduce hair fall by up to 65%"
              },
              {
                icon: <FileCheck className="w-8 h-8 text-primary" />,
                title: "Patented Formula",
                description: "which is uniquely designed to get optimal results"
              },
              {
                icon: <ThumbsUp className="w-8 h-8 text-primary" />,
                title: "Easy to Use",
                description: "So it can be integrated easily in the daily routine"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center space-y-4">
                  {item.icon}
                  <h3 className="text-primary font-semibold">{item.title}</h3>
                  <p className="text-secondary/80 text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

