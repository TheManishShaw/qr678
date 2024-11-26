import Image from "next/image";

export default function UntappedSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16">
          <span className="bg-[#FFE4B5] px-4 py-1 pt-2 pl-6 pr-6 pb-2 font-bold text-5xl mb-3 text-primary">
            UNTAPPED.
          </span>
          <span className="block mt-4 text-5xl text-secondary ">
            Why leave growth on the table?
          </span>
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8 items-center justify-center">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center  md:flex block mx-auto items-center gap-4"
            >
              <Image
                src={metric.icon}
                alt={metric.value}
                width={144}
                height={144}
                className="rounded-full"
              />
              <div className=" text-center md:text-start ">
                <div className="text-2xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <p className="text-primary">{metric.description}</p>
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
    value: "XX Billion ",
    icon: "/assets/svg/homepage/home-untapped-xx.svg",
    description: "worth of total worldwide impact",
  },
  {
    value: "XY Billion  ",
    icon: "/assets/svg/homepage/home-untapped-yy.svg",
    description: "worth of total hair & healthcare market",
  },
  {
    value: "ZZ Billion",
    icon: "/assets/svg/homepage/home-untapped-zz.svg",
    description: "worth of total target market",
  },
];
