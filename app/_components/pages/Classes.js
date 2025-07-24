import Image from "next/image";
import Link from "next/link";

function Classes() {
  const classes = [
    {
      name: "Vinyasa Yoga",
      description:
        "The most popular style today - a fast-paced flow that synchronizes movement with breath. Builds strength, flexibility, and endurance.",
      image: "/aboutImg.jpeg",
      href: "/vinsaya-yoga",
    },
    {
      name: "Power Yoga",
      description:
        "A more athletic, fitness-driven approach to yoga. Strong poses, core work, and faster transitions.",
      image: "/aboutImg.jpeg",
      href: "/power-yoga",
    },
    {
      name: "Hot Yoga",
      description:
        "A series of poses done in a heated room to boost flexibility, detoxify the body, and increase intensity.",
      image: "/aboutImg.jpeg",
      href: "/hot-yoga",
    },
  ];
  return (
    <section
      id="classes"
      className="min-h-screen space-y-24 px-4 xl:px-16 py-24 text-text-secondary"
    >
      <div className="text-center space-y-8 w-fit mx-auto">
        <h2
          className="text-4xl md:text-6xl text-text-secondary font-semibold max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Yoga Classes Are Fit For All Levels
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-lg">
          Explore beginner to advanced yoga classes led by certified
          instructors. Improve balance, reduce stress, and deepen your practice
          today.
        </p>
        <Link
          href="/contact"
          className="px-6 py-4 text-text-primary font-semibold text-lg bg-accent rounded-md hover:bg-accent-hover transition"
        >
          Book Your Free Trial Class
        </Link>
      </div>
      <article className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {classes.map((school) => (
          <div
            className="flex flex-col items-center gap-4 h-full bg-bg-secondary p-6 rounded-xl shadow hover:scale-105 transition"
            key={school.name}
          >
            <div className="flex flex-col flex-grow gap-4 text-center">
              <h2
                className="text-2xl font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {school.name}
              </h2>
              <p className="italic">{school.description}</p>
              <Link
                href={school.href}
                className="mt-auto w-fit mx-auto px-4 py-2 text-text-primary font-semibold bg-accent rounded-md hover:bg-accent-hover transition"
              >
                Learn More
              </Link>
            </div>
            <div className="relative w-full h-96 rounded-xl overflow-hidden">
              <Image
                src={school.image}
                alt={school.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Classes;
