import Hero from "./_components/pages/Hero";
import About from "./_components/pages/About";
import OurTeam from "./_components/pages/OurTeam";
import Classes from "./_components/pages/Classes";
import Schedule from "./_components/pages/Schedule";
import Contact from "./_components/pages/Contact";
import ReasonsWhy from "./_components/pages/ReasonsWhy";

export const metadata = {
  title: "Mind & Body Yoga Studio | Vinyasa, Power & Hot Yoga Classes",
  description:
    "Discover your balance at Mind & Body Yoga Studio. Join expert-led classes in Vinyasa, Power, and Hot Yoga designed to strengthen your body and calm your mind. All levels welcome.",
  openGraph: {
    title: "Mind & Body Yoga Studio | Expert-Led Yoga in [Your City]",
    description:
      "Join a community of mindful movement. Vinyasa, Power & Hot Yoga classes that welcome all levels. Strengthen, stretch, and restore.",
    url: "https://fitness-coach-website-v1.vercel.app",
    siteName: "Mind & Body Yoga Studio",
    images: [
      {
        url: "https://fitness-coach-website-v1.vercel.app/aboutImg.jpeg",
        alt: "People practicing yoga in a calm studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <ReasonsWhy />
      <OurTeam />
      <Schedule />
      <Contact />
    </main>
  );
}
