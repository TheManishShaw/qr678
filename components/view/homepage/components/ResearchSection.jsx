import Image from "next/image";

export default function ResearchSection() {
  return (
    <>
      <section className="relative bg-primary text-white py-16 md:pt-[13rem] md:pb-[1rem]">
        {/* [image:var(--home-research-banner)] */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Well Researched.
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Globally Acknowledged.
          </h3>
          <p className="text-base md:text-lg mb-1">
            Our aesthetic products are backed by
          </p>
          <p className="mb-6">
            <span className="bg-[#FFE89E] px-4 py-1 rounded-sm text-[#464242] ">
              13+ clinical studies.
            </span>
          </p>
          <button className="bg-white text-primary hover:text-white px-6 md:px-8 py-2 md:py-3 rounded-sm hover:bg-secondary transition-colors">
            Clinical Research
          </button>
        </div>
      </section>
    </>
  );
}
