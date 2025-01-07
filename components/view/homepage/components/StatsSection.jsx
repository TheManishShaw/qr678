import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="bg-background py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-2/3 lg:w-1/2 max-w-2xl">
            <p className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-tight md:leading-[3rem] lg:leading-[3.6rem]">
              <span className="text-primary font-bold">
                OR678<sup>® </sup>
              </span>
              products have been used by{" "}
              <span className="text-secondary font-bold">1500+ doctors</span> to
              help{" "}
              <span className="text-secondary font-bold">150,000+ people</span>{" "}
              regain their confidence.
            </p>
          </div>
          <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 mt-8 md:mt-0 mx-auto">
            <Image
              src="/assets/svg/homepage/home-stats-image.svg"
              alt="Product showcase"
              width={300}
              height={225}
              className="object-contain w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-6 pb-6 mt-12 rounded-sm shadow-md shadow-slate-300 bg-white">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <Image
                src={stat.src}
                alt={stat.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h4 className="text-secondary font-extrabold text-base sm:text-lg">
                {stat.title}
              </h4>
              <p className="text-primary text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  {
    title: "India & USA",
    src: "/assets/svg/homepage/home-stats-patent.svg",
    description: "Patent",
  },
  {
    title: "15+",
    src: "/assets/svg/homepage/home-stats-yearofresearch.svg",
    description: "Years of Research",
  },
  {
    title: "15+",
    src: "/assets/svg/homepage/home-stats-clinical.svg",
    description: "Clinical Studies Published in Peer-Reviewed Journals",
  },
];
