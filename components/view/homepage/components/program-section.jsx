export default function ProgramSection() {
  return (
    <section className="bg-white py-16 border-t border-[#AEA6A6]">
      <div className="container mx-auto px-4 space-y-8">
        <div className=" rounded-lg p-8  border-secondary border-[1px]">
          <h2 className="text-5xl mb-4 text-primary">
            Join the{" "}
            <span className="text-secondary font-bold">
              Trichopreneur Program
            </span>
          </h2>
          <p className="text-primary mb-6 text-4xl ">
            A <span className="text-secondary text-4xl">Tricho</span>
            <span className="text-primary">logy + entre</span>
            <span className="text-secondary text-4xl ">preneur</span> with OR678{" "}
            <sup>®</sup>
          </p>
          <p className="text-xl text-primary">
            An amazing partnership opportunity where we work to help you grow
            while maintaining work-life balance.
          </p>
          <button className="bg-background mt-6 hover:text-white px-10 py-2 border-[1px] border-secondary text-primary rounded-[8px] hover:bg-primary transition-colors">
            Get Started
          </button>
        </div>

        <div className=" rounded-lg p-8  border-secondary border-[1px]">
          <h2 className=" mb-4 text-primary text-5xl">
            Be a <span className="text-secondary font-bold">Superhairo!</span>
          </h2>
          <p className="text-primary mb-6 text-4xl">
            Your Expertise + OR678®&apos;s Proven Solution
          </p>
          <p className="text-xl text-primary">
            Androgenetic Alopecia, or hair loss, affects millions of people
            worldwide, leading to emotional and psychological stress. By helping
            them regain their hair, you become a part of something greater -
            that helps people explore their full potential and live their best
            life.
          </p>
          <button className="bg-background mt-6 hover:text-white px-6 py-2 border-[1px] border-secondary text-primary rounded-sm hover:bg-primary transition-colors">
            Count Me In!
          </button>
        </div>
      </div>
    </section>
  );
}
