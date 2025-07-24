import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-16 py-24 text-text-secondary"
    >
      <div className="text-center lg:text-left space-y-8 w-fit m-auto lg:mx-0">
        <h2
          className="text-4xl md:text-6xl font-semibold max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          More Than Just Yoga - A Space to Transform Your Mind and Body
        </h2>
        <div className="block lg:hidden w-full h-[24rem] relative rounded-xl overflow-hidden">
          <Image
            src="/aboutImg.jpeg"
            alt="Group yoga training"
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <p className="max-w-xl mx-auto text-sm md:text-lg">
          Our studio is built on the belief that yoga is more than movement -
          it&apos;s a path to strength, clarity, and connection. With expert
          instructors, inclusive classes for all levels, and a calm, welcoming
          environment, we help you grow—on and off the mat.
        </p>
        <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4">
          <Link
            href="#contact"
            className="px-6 py-4 text-text-primary font-semibold text-lg bg-accent rounded-md hover:bg-accent-hover transition"
          >
            Schedule A Class
          </Link>

          <Link
            href="#about"
            className="px-6 py-4 text-lg bg-text-muted rounded-md transition"
          >
            Our Team
          </Link>
        </div>
      </div>
      <div className="hidden lg:block w-full h-[24rem] m-auto relative overflow-hidden">
        <Image
          src="/aboutImg.jpeg"
          alt="Group yoga training"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default About;
