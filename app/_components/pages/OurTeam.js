import Image from "next/image";
import Link from "next/link";

function OurTeam() {
  const team = [
    {
      name: "Instructor 1 - Melissa",
      description: "Certified yoga instructor with 6+ years of experience.",
      image: "/aboutImg.jpeg",
    },
    {
      name: "Instructor 2 - Jeniffer",
      description: "Certified yoga instructor with 4+ years of experience.",
      image: "/aboutImg.jpeg",
    },
    {
      name: "Instructor 3 - Melinda",
      description: "Certified yoga instructor with 10+ years of experience.",
      image: "/aboutImg.jpeg",
    },
  ];
  return (
    <section
      id="our-team"
      className="min-h-screen space-y-24 px-4 xl:px-16 py-24 text-text-secondary"
    >
      <div className="text-center space-y-8 w-fit mx-auto">
        <h2
          className="text-4xl md:text-6xl text-text-secondary font-semibold max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Meet the Instructors Behind the Practice
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-lg">
          Our certified yoga teachers bring years of experience, deep
          mindfulness, and a passion for helping others grow. Each instructor
          offers a unique approach-but all share one goal: to guide you toward a
          stronger, calmer, more connected self.
        </p>
        <Link
          href="/contact"
          className="px-6 py-4 text-text-primary font-semibold text-lg bg-accent rounded-md hover:bg-accent-hover transition"
        >
          Book Your Free Trial Class
        </Link>
      </div>
      <article className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {team.map((mate) => (
          <div
            className="flex flex-col items-center gap-4 h-full bg-bg-secondary p-6 rounded-xl shadow hover:scale-105 transition"
            key={mate.name}
          >
            <div className="flex flex-col flex-grow gap-4 text-center">
              <h2
                className="text-2xl font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {mate.name}
              </h2>
              <p className="italic">{mate.description}</p>
            </div>
            <div className="relative w-full h-96 rounded-xl overflow-hidden">
              <Image
                src={mate.image}
                alt={mate.name}
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

export default OurTeam;
