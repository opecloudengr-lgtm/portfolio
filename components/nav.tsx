"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-neutral-100">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.dev</span>
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-neutral-950 transition-opacity hover:opacity-90"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-neutral-300 sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-5 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-neutral-950"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
