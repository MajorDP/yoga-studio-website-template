"use client";
import { useState } from "react";

import { Menu, X } from "lucide-react";
import Link from "next/link";

function MobileNav({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full md:hidden z-40 bg-bg-primary border-b-8 border-border">
          <ul className="flex flex-col gap-4 p-6 text-lg">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                className="block p-2 text-text-primary bg-accent rounded-md text-center"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
