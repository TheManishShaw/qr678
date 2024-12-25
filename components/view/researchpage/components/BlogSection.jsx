import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function BlogSection() {
  return (
    <>

    <div className="relative w-full bg-white">

    <div className="absolute inset-x-0 top-0 h-[120px] w-full">
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120V0C480 80 960 80 1440 0V120H0Z"
          fill="white"
        />
      </svg>
    </div>
    <div className="relative bg-secondary pt-[50px] md:pt-24 lg:pt-30 xl:pt-52 max-w-screen mx-auto 2xl:pt-96 inset-0 bg-[url('/assets/svg/research/product_banner.svg')] bg-cover w-full  mix-blend-multiply md:bg-center"
        >
      <div className="grid min-h-[500px] grid-cols-1 container lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 text-white lg:p-16">
          <h1 className="mb-4 max-w-xl text-4xl font-bold leading-tight lg:text-5xl">
            Effects of QR678® Neo in androgenetic alopecia in comparison to topical
            minoxidil
          </h1>
          <p className="mb-8 max-w-lg text-lg opacity-90">
            Topical minoxidil and oral finasteride tablets. The most important
            clinical trial evaluating the efficacy of minoxidil in androgenetic
            alopecia.
          </p>
          <div className="flex items-center">
            <button className="rounded-md bg-[#2E3192] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#24266E]">
              Read Blog
            </button>
          </div>
        </div>

        {/* Right content - Image */}
        
      </div>
    </div>
  </div>
    </>
  )
}

