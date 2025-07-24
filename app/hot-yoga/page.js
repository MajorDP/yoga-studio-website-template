import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hot Yoga Classes | [Studio Name]",
  description:
    "Sweat, stretch, and detox in our heated Hot Yoga studio. Led by expert instructors, these sessions improve flexibility, stamina, and mental clarity.",
  openGraph: {
    title: "Hot Yoga Classes | [Studio Name]",
    description:
      "Experience expert-led Hot Yoga in a heated studio. Designed to help you detox, improve mobility, and feel revitalized inside and out.",
    url: "https://yoga-studio-website-template.vercel.app",
    siteName: "Mind & Body Yoga Studio",
    images: [
      {
        url: "https://yoga-studio-website-template.vercel.app/aboutImg.jpeg",
        alt: "Hot yoga class in heated studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

function page() {
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
          Detox & Energize with Expert-Led Hot Yoga Classes
        </h2>
        <div className="block lg:hidden w-full h-[24rem] relative rounded-xl overflow-hidden">
          <Image
            src="/aboutImg.jpeg"
            alt="Hot yoga class in heated studio"
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <p className="max-w-xl mx-auto text-sm md:text-lg">
          Our Hot Yoga sessions are held in a heated studio to help you sweat,
          stretch deeper, and flush out toxins. Ideal for those seeking improved
          flexibility, stamina, and a full-body reset. With experienced
          instructors and a supportive environment, you&apos;ll leave each class
          feeling lighter, stronger, and more focused.
        </p>
        <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4">
          <Link
            href="/#contact"
            className="px-6 py-4 text-text-primary font-semibold text-lg bg-accent rounded-md hover:bg-accent-hover transition"
          >
            Book Hot Yoga
          </Link>

          <Link
            href="/#about"
            className="px-6 py-4 text-lg bg-text-muted rounded-md transition"
          >
            Meet Our Instructors
          </Link>
        </div>
      </div>
      <div className="hidden lg:block w-full h-[24rem] m-auto relative overflow-hidden">
        <Image
          src="/aboutImg.jpeg"
          alt="Hot yoga class in heated studio"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default page;
