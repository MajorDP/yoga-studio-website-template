import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <section
      id="hot-yoga"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-16 py-24 text-text-secondary"
    >
      <div className="text-center lg:text-left space-y-8 w-fit m-auto lg:mx-0">
        <h2
          className="text-4xl md:text-6xl font-semibold max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Power Yoga That Builds Strength, Focus & Endurance
        </h2>
        <div className="block lg:hidden w-full h-[24rem] relative rounded-xl overflow-hidden">
          <Image
            src="/aboutImg.jpeg"
            alt="Power yoga class in action"
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <p className="max-w-xl mx-auto text-sm md:text-lg">
          Designed for those who want more intensity, our Power Yoga classes
          combine athletic movement with controlled breathing to help you build
          lean muscle, sharpen focus, and boost stamina. Perfect for high-energy
          practitioners or anyone looking to level up their fitness through
          yoga. Taught by certified instructors in a motivating, supportive
          space.
        </p>
        <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4">
          <Link
            href="/#contact"
            className="px-6 py-4 text-text-primary font-semibold text-lg bg-accent rounded-md hover:bg-accent-hover transition"
          >
            Try Power Yoga
          </Link>

          <Link
            href="/#about"
            className="px-6 py-4 text-lg bg-text-muted rounded-md transition"
          >
            Meet Our Trainers
          </Link>
        </div>
      </div>
      <div className="hidden lg:block w-full h-[24rem] m-auto relative overflow-hidden">
        <Image
          src="/aboutImg.jpeg"
          alt="Power yoga class in action"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Page;
