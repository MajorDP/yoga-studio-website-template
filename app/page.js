import Image from "next/image";
import Link from "next/link";
import Hero from "./_components/pages/Hero";
import About from "./_components/pages/About";
import OurTeam from "./_components/pages/OurTeam";
import Classes from "./_components/pages/Classes";
import Schedule from "./_components/pages/Schedule";
import Contact from "./_components/pages/Contact";
import ReasonsWhy from "./_components/pages/ReasonsWhy";

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
