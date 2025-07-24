import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ReasonsWhy() {
  const reasons = [
    {
      name: "Inclusive for All Levels",
      desc: "Whether you're brand new to yoga or a seasoned practitioner, our classes are designed to meet you where you are and help you grow.",
    },
    {
      name: "Certified Expert Instructors",
      desc: "Our team consists of highly trained, certified instructors who prioritize safety, alignment, and personal progress.",
    },
    {
      name: "Holistic Experience",
      desc: "We go beyond the physical-integrating breathwork and mindfulness to support both mental and emotional well-being.",
    },
    {
      name: "Supportive Community",
      desc: "You're not just another student. You're part of a welcoming, judgment-free community that motivates and lifts each other up.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen space-y-24 px-4 xl:px-16 py-24 text-text-secondary"
    >
      <div className="text-center space-y-8 w-fit mx-auto">
        <h2
          className="text-4xl md:text-6xl text-text-secondary font-semibold max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Why You Should Choose Our Yoga Studio
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-lg">
          Discover what sets our yoga studio apart-from certified instructors
          and inclusive classes to a supportive community and holistic wellness
          approach. Join a space where your growth comes first.
        </p>
        <Link
          href="/contact"
          className="px-6 py-4 text-text-primary font-semibold text-lg bg-accent rounded-md hover:bg-accent-hover transition"
        >
          Book Your Free Trial Class
        </Link>
      </div>
      <article className="grid grid-cols-1 gap-8">
        {reasons.map((reason, index) => (
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-4 h-full bg-bg-secondary p-6 rounded-xl shadow hover:scale-105 transition`}
            key={reason.name}
          >
            <div className="w-fit flex flex-col flex-grow gap-4 text-center">
              <h2
                className="text-2xl font-semibold flex flex-col items-center gap-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Check className="text-accent w-8 h-8" /> {reason.name}
              </h2>

              <p className="italic">{reason.desc}</p>
            </div>
            <div className="relative w-full h-96 rounded-xl overflow-hidden">
              <Image
                src="/aboutImg.jpeg"
                alt={reason.name}
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

export default ReasonsWhy;
