import Image from "next/image";

export default function ProductSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 ">
        <h2 className="text-center text-5xl md:text-2xl text-secondary mb-8 md:mb-12">
          Products That Make Lives Better
        </h2>
        <div className=" bg-white p-6 md:p-8 border-secondary border-2 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src="/assets/svg/homepage/home-productsection-image.svg"
                alt="OR678 Neo"
                width={300}
                height={300}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg md:text-5xl text-secondary mb-4">
                OR678 Neo®
              </h3>
              <p className="text-primary mb-6">
                OR678 Neo® is a patented, clinically-proven hair regrowth
                therapy designed to combat hair loss and promote new hair
                growth. Unlike traditional methods, OR678 Neo® uses a unique,
                first-of-its-kind formulation that targets the root cause of
                hair loss at multiple levels, delivering consistent and reliable
                follicles for optimal results.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-secondary rounded-full"></span>
                  Scalp care and vitality
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-secondary rounded-full"></span>
                  Works on all lifestages
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-secondary rounded-full"></span>
                  Visible results in 8-12
                </li>
              </ul>
              <button className="bg-background mt-6 hover:text-white px-6 py-2 border-[1px] border-secondary text-primary rounded-sm hover:bg-primary transition-colors">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
