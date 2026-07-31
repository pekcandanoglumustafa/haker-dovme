"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

function Logo() {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-[34px] w-[34px] place-items-center">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
          <rect x="1" y="1" width="32" height="32" rx="2" stroke="#2f3540" />
          <path
            d="M8 24V10h3v5.4l4.6-5.4H19l-5 5.8L19.4 24H15.6l-3.7-5.2L11 20v4H8Z"
            fill="url(#lg)"
          />
          <path d="M21 24V10h3v5h2.5v-5H30v14h-3.5v-6H24v6h-3Z" fill="#edeef1" />
          <defs>
            <linearGradient id="lg" x1="8" y1="10" x2="20" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffce3b" />
              <stop offset="1" stopColor="#ff5a10" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="font-display text-[21px] font-extrabold leading-none tracking-[0.02em]">
        HAKER
        <span className="mt-[2px] block text-[11px] font-semibold tracking-[0.26em] text-ash">
          ÇELİK DÖVME A.Ş.
        </span>
      </span>
    </span>
  );
}

export default function Header() {
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors ${
        scrolled
          ? "border-line bg-void/90"
          : "border-transparent bg-void/70"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Haker Çelik Dövme anasayfa">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13.5px] font-medium tracking-[0.01em] transition-colors ${
                  active ? "text-heat-mid" : "text-pearl-dim hover:text-pearl"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <span className="hidden font-mono text-[12px] text-ash sm:inline">
            <b className="text-heat-mid">TR</b> / EN
          </span>
          <Link href="/iletisim" className="btn hidden md:inline-flex">
            Teklif Alın
          </Link>
          <button
            className="lg:hidden text-pearl"
            aria-label="Menü"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path d="M6 6l14 14M20 6L6 20" />
              ) : (
                <path d="M4 8h18M4 13h18M4 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-void/95 lg:hidden transition-[max-height] duration-300 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="shell flex flex-col py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-line/60 py-3 font-display text-[17px] font-semibold uppercase tracking-[0.02em] text-pearl-dim last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/iletisim" className="btn mt-4 justify-center">
            Teklif Alın
          </Link>
        </nav>
      </div>
    </header>
  );
}
