import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-8">
        <div className="md:flex  block mx-auto items-center justify-between">
          <div className="max-w-2xl">
            <p className="text-primary text-5xl leading-[3.6rem]">
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
          <div className="relative w-1/3">
            <Image
              src="/assets/svg/homepage/home-stats-image.svg"
              alt="Product showcase"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 pb-6 mt-12 rounded-sm shadow-md shadow-slate-300  bg-white">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <Image
                src={stat.src}
                alt={stat.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h4 className="text-primary font-extrabold text-lg ">
                {stat.title}
              </h4>
              <p className="text-primary px-3 text-[24px]">
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
