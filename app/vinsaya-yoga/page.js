import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Vinyasa Yoga Classes | [Studio Name]",
  description:
    "Discover breath-synchronized Vinyasa Yoga classes that improve strength, flexibility, and mental clarity. All levels welcome.",
  openGraph: {
    title: "Vinyasa Yoga Classes | [Studio Name]",
    description:
      "Join our guided Vinyasa Yoga sessions to flow with breath and intention. Perfect for building strength, balance, and reducing stress.",
    url: "https://fitness-coach-website-v1.vercel.app/vinsaya-yoga",
    siteName: "Mind & Body Yoga Studio",
    images: [
      {
        url: "https://fitness-coach-website-v1.vercel.app/aboutImg.jpeg",
        alt: "Vinyasa yoga class in session",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

function Page() {
  return (
    <section
      id="vinsaya-yoga"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-16 py-24 text-text-secondary"
    >
      <div className="text-center lg:text-left space-y-8 w-fit m-auto lg:mx-0">
        <h2
          className="text-4xl md:text-6xl font-semibold max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Flow With Purpose: Experience Vinyasa Yoga in Its Purest Form
        </h2>
        <div className="block lg:hidden w-full h-[24rem] relative rounded-xl overflow-hidden">
          <Image
            src="/aboutImg.jpeg"
            alt="Vinyasa yoga class in session"
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <p className="max-w-xl mx-auto text-sm md:text-lg">
          Our studio specializes in Vinyasa Yoga - a dynamic,
          breath-synchronized practice that builds strength, balance, and mental
          clarity. Whether you&aposre a beginner or experienced yogi, our guided
          flows help you reconnect with your body, reduce stress, and move with
          intention. Classes are led by certified instructors in a peaceful and
          inclusive environment.
        </p>
        <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4">
          <Link
            href="/#contact"
            className="px-6 py-4 text-text-primary font-semibold text-lg bg-accent rounded-md hover:bg-accent-hover transition"
          >
            Book a Vinyasa Class
          </Link>

          <Link
            href="/#our-team"
            className="px-6 py-4 text-lg bg-text-muted rounded-md transition"
          >
            Meet Our Instructors
          </Link>
        </div>
      </div>
      <div className="hidden lg:block w-full h-[24rem] m-auto relative overflow-hidden">
        <Image
          src="/aboutImg.jpeg"
          alt="Vinyasa yoga class in session"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Page;
