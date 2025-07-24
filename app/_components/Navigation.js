import Link from "next/link";
import MobileNav from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Classes", href: "/#classes" },
  { label: "Our Team", href: "/#our-team" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="w-full px-6 py-4 lg:px-12 flex justify-between items-center relative z-10 text-text-secondary bg-bg-primary border-b-8 border-border tracking-wider"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      <div className="text-lg lg:text-xl font-bold">Logo/Name</div>

      <ul className="hidden md:flex items-center justify-center md:gap-4 lg:gap-8 text-lg">
        {navLinks.map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className="hover:text-accent transition">
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#contact"
            className="hidden md:inline-block p-2 text-text-primary bg-accent rounded-md hover:bg-accent-hover transition"
          >
            Book A Session
          </Link>
        </li>
      </ul>

      <MobileNav links={navLinks} />
    </nav>
  );
}
