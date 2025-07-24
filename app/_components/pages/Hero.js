import Link from "next/link";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen py-24 relative"
      style={{
        background: "url(/heroImg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-1" />
      <div className="relative z-2 text-center space-y-8 md:bg-bg-primary/10 md:backdrop-blur-xs md:rounded-full md:px-16 py-4 md:py-12 w-fit mx-auto">
        <h1
          className="text-4xl md:text-6xl text-text-primary text-shadow-xs text-shadow-text-secondary font-semibold max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Yoga That Builds Strength, Flexibility & Mental Clarity
        </h1>
        <p className="max-w-xl mx-auto text-text-primary text-shadow-2xs text-shadow-text-secondary text-sm md:text-lg">
          Our studio offers expert-led classes for all levels, combining
          movement, breathwork, and mindfulness to help you feel stronger, more
          balanced, and less stressed-on and off the mat.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="#contact"
            className="px-6 py-4 text-text-primary font-semibold text-lg bg-accent rounded-md hover:bg-accent-hover transition"
          >
            Book A Session
          </Link>

          <Link
            href="#about"
            className="px-6 py-4 text-text-secondary text-lg bg-text-muted rounded-md transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
