"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navKeys, navHref } from "@/lib/site";
import type { Dict } from "@/lib/dictionaries/tr";

function Logo({ sub }: { sub: string }) {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-[34px] w-[34px] place-items-center">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
          <rect x="1" y="1" width="32" height="32" rx="2" stroke="#2f3540" />
          <path d="M8 24V10h3v5.4l4.6-5.4H19l-5 5.8L19.4 24H15.6l-3.7-5.2L11 20v4H8Z" fill="url(#lg)" />
          <path d="M21 24V10h3v5h2.5v-5H30v14h-3.5v-6H24v6h-3Z" fill="#edeef1" />
          <defs>
            <linearGradient id="lg" x1="8" y1="10" x2="20" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6bb2dd" />
              <stop offset="1" stopColor="#2f88c4" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="font-display text-[21px] font-extrabold leading-none tracking-[0.02em]">
        HAK-ER
        <span className="mt-[2px] block text-[11px] font-semibold tracking-[0.26em] text-ash">
          {sub}
        </span>
      </span>
    </span>
  );
}

export default function Header({ locale, dict }: { locale: string; dict: Dict }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const other = locale === "en" ? "tr" : "en";
  const rest = pathname.replace(/^\/(tr|en)/, "");
  const toggleHref = `/${other}${rest || ""}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors ${
        scrolled ? "border-line bg-void/90" : "border-transparent bg-void/70"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between">
        <Link href={`/${locale}`} aria-label="Haker">
          <Logo sub={dict.common.brandSub} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navKeys.map((key) => {
            const href = `/${locale}${navHref[key]}`;
            const active =
              key === "home"
                ? pathname === `/${locale}`
                : pathname.startsWith(href);
            return (
              <Link
                key={key}
                href={href}
                className={`text-[13.5px] font-medium tracking-[0.01em] transition-colors ${
                  active ? "text-heat-mid" : "text-pearl-dim hover:text-pearl"
                }`}
              >
                {dict.nav[key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <Link href={toggleHref} className="hidden font-mono text-[12px] text-ash hover:text-pearl sm:inline">
            <b className="text-heat-mid">{locale.toUpperCase()}</b> / {dict.common.otherLangLabel}
          </Link>
          <Link href={`/${locale}/iletisim`} className="btn hidden md:inline-flex">
            {dict.common.quote}
          </Link>
          <button className="lg:hidden text-pearl" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? <path d="M6 6l14 14M20 6L6 20" /> : <path d="M4 8h18M4 13h18M4 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-void/95 lg:hidden transition-[max-height] duration-300 ${
          open ? "max-h-[460px]" : "max-h-0"
        }`}
      >
        <nav className="shell flex flex-col py-3">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={`/${locale}${navHref[key]}`}
              className="border-b border-line/60 py-3 font-display text-[17px] font-semibold uppercase tracking-[0.02em] text-pearl-dim last:border-0"
            >
              {dict.nav[key]}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <Link href={`/${locale}/iletisim`} className="btn flex-1 justify-center">
              {dict.common.quote}
            </Link>
            <Link href={toggleHref} className="btn-ghost justify-center px-4">
              {dict.common.otherLangLabel}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
