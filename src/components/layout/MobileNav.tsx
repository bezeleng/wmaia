"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, type NavLink } from "@/lib/navigation";

function MenuIcon({ icon }: { icon?: NavLink["icon"] }) {
  if (!icon) return null;

  if (icon === "condominio") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-none stroke-current" strokeWidth="1.8">
        <path d="M4 21V8.5L12 4l8 4.5V21" />
        <path d="M8 21v-7h8v7M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-none stroke-current" strokeWidth="1.8">
      <path d="M4 20h16M6 20V9h12v11M9 13h2M13 13h2M9 16h2M13 16h2M8 9V6h8v3" />
    </svg>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden">
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
        <nav className="absolute inset-x-0 top-full z-50 flex max-h-[calc(100vh-6rem)] flex-col gap-1 overflow-y-auto border-t border-border-soft bg-white px-6 py-4 shadow-xl">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="my-1 inline-flex items-center gap-3 rounded-lg bg-brand-orange-soft px-3 py-3 font-semibold text-brand-orange-dark"
              >
                <MenuIcon icon={link.icon} />
                <span>{link.label}</span>
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
