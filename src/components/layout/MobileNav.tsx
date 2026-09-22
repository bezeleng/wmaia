"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        className="rounded-lg p-2 text-brand-blue-dark transition-colors hover:bg-surface"
      >
        <span className="block h-0.5 w-6 bg-current" />
        <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        <span className="mt-1.5 block h-0.5 w-6 bg-current" />
      </button>

      {isOpen && (
        <nav className="absolute inset-x-0 top-full z-50 flex flex-col gap-1 border-t border-border-soft bg-white px-6 py-4 shadow-xl">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="my-1 rounded-lg bg-brand-orange-soft px-3 py-3 font-semibold text-brand-orange-dark"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 font-medium text-brand-blue-dark hover:text-brand-orange"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      )}
    </div>
  );
}
