import Image from "next/image";

export default function UntappedSection() {
  return (
    <section className="bg-background py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block bg-[#FFE4B5] px-3 py-1 sm:px-4 sm:py-2 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 text-primary">
            UNTAPPED.
          </span>
          <span className="block mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary">
            Why leave growth on the table?
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4"
            >
              <Image
                src={metric.icon}
                alt={metric.value}
                width={100}
                height={100}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
              />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <p className="text-primary text-sm sm:text-base">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const metrics = [
  {
    value: "XX Billion",
    icon: "/assets/svg/homepage/home-untapped-xx.svg",
    description: "worth of total worldwide impact",
  },
  {
    value: "XY Billion",
    icon: "/assets/svg/homepage/home-untapped-yy.svg",
    description: "worth of total hair & healthcare market",
  },
  {
    value: "ZZ Billion",
    icon: "/assets/svg/homepage/home-untapped-zz.svg",
    description: "worth of total target market",
  },
];

