"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Demo" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/brief", label: "Brief" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white" onClick={() => setOpen(false)}>
          Company<span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">OS</span>
        </Link>
        <nav className="hidden items-center gap-x-4 text-sm text-zinc-400 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-violet-200">
              {l.label}
            </Link>
          ))}
          <Link href="/demo" className="rounded-full bg-violet-500/20 px-3 py-1.5 font-semibold text-violet-100 ring-1 ring-violet-400/30">
            Run demo
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/demo" className="rounded-full bg-violet-500/20 px-3 py-1.5 text-xs font-semibold text-violet-100" onClick={() => setOpen(false)}>
            Demo
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-zinc-200"
            aria-expanded={open}
            aria-controls="companyos-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="companyos-mobile-nav"
          className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-white/10 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
