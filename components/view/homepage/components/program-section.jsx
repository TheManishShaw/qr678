export default function ProgramSection() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 border-t border-[#AEA6A6]">
      <div className="container mx-auto px-4 space-y-6 sm:space-y-8">
        <div className="rounded-lg p-4 sm:p-6 md:p-8 border-secondary border-[1.5px] text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 text-primary">
            Join the{" "}
            <span className="text-secondary font-bold">
              Trichopreneur Program
            </span>
          </h2>
          <p className="text-primary mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">
            A <span className="text-secondary">Tricho</span>
            <span className="text-primary">logy + entre</span>
            <span className="text-secondary">preneur</span> with OR678{" "}
            <sup className="text-base sm:text-xl md:text-2xl">®</sup>
          </p>
          <p className="text-base sm:text-lg md:text-xl text-primary">
            An amazing partnership opportunity where we work to help you grow
            while maintaining work-life balance.
          </p>
          <button className="bg-background mt-4 sm:mt-6 hover:text-white px-6 sm:px-10 py-2 border border-secondary text-primary rounded-lg hover:bg-primary transition-colors text-sm sm:text-base">
            Get Started
          </button>
        </div>

        <div className="rounded-lg p-4 sm:p-6 md:p-8 border-secondary border-[1.5px] text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 text-primary">
            Be a <span className="text-secondary font-bold">Superhairo!</span>
          </h2>
          <p className="text-primary mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">
            Your Expertise + OR678<sup className="text-base sm:text-xl md:text-2xl">®</sup>&apos;s Proven Solution
          </p>
          <p className="text-base sm:text-lg md:text-xl text-primary">
            Androgenetic Alopecia, or hair loss, affects millions of people
            worldwide, leading to emotional and psychological stress. By helping
            them regain their hair, you become a part of something greater -
            that helps people explore their full potential and live their best
            life.
          </p>
          <button className="bg-background mt-4 sm:mt-6 hover:text-white px-6 sm:px-10 py-2 border border-secondary text-primary rounded-lg hover:bg-primary transition-colors text-sm sm:text-base">
            Count Me In!
          </button>
        </div>
      </div>
    </section>
  );
}

