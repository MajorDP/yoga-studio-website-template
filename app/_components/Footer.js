const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Classes", href: "/#classes" },
  { label: "Our Team", href: "/#our-team" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Contact", href: "/#contact" },
];

function Footer() {
  return (
    <footer className="bg-bg-secondary text-text-secondary py-12 px-4 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4 flex flex-col items-center md:justify-start justify-center">
          <h3
            className="text-2xl font-bold text-center md:text-start"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SiteName
          </h3>
          <p className="text-sm text-center md:text-start">
            Yoga That Builds Strength, Flexibility & Mental Clarity
          </p>
          <a
            href="#contact"
            className="inline-block mt-2 text-accent font-semibold"
          >
            Join Us
          </a>
        </div>

        <div className="space-y-2">
          <h3
            className="font-semibold text-lg text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Company
          </h3>
          <ul className="space-y-1 text-sm flex flex-col lg:flex-row items-center lg:items-baseline justify-center gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href} className="hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="space-y-2">
          <h4 className="font-semibold text-lg text-center ">
            Resources/Links
          </h4>
          <ul className="space-y-1 text-sm flex flex-col lg:flex-row items-center lg:items-baseline justify-center gap-4">
            <li>
              <a href="/blog" className="hover:text-accent">
                Blog
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-accent">
                FAQ
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-accent">
                Terms
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-accent">
                Privacy
              </a>
            </li>
          </ul>
        </div> */}
      </div>

      <div className="pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} SieName. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
