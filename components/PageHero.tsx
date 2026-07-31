import Link from "next/link";
import Reveal from "./Reveal";
import { company } from "@/lib/site";
import type { Dict } from "@/lib/dictionaries/tr";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-[128px] pb-16 sm:pt-[150px] sm:pb-20">
      <div
        className="grid-bg absolute inset-0 opacity-40"
        style={{
          maskImage: "radial-gradient(120% 80% at 30% 0%, #000 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(120% 80% at 30% 0%, #000 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[6%] top-0 h-[70%] w-[45%] blur-2xl"
        style={{ background: "radial-gradient(closest-side, var(--heat-glow), transparent 70%)" }}
        aria-hidden
      />
      <div className="shell relative">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-display mt-4 text-[clamp(40px,7vw,84px)]">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-pearl-dim">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function CTABand({ locale, dict }: { locale: string; dict: Dict }) {
  return (
    <section className="pb-24 pt-4">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3px] border border-line bg-graphite p-10 sm:p-14">
            <div
              className="pointer-events-none absolute -right-[10%] -top-[40%] h-[180%] w-1/2 blur-2xl"
              style={{ background: "radial-gradient(closest-side, var(--heat-glow), transparent 70%)" }}
              aria-hidden
            />
            <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
              <div>
                <span className="eyebrow">{dict.cta.eyebrow}</span>
                <h2 className="h-display mt-3 text-[clamp(30px,5vw,52px)]">{dict.cta.title}</h2>
                <p className="mt-4 max-w-md text-pearl-dim">{dict.cta.body}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link href={`/${locale}/iletisim`} className="btn justify-center">
                  {dict.cta.contact}
                </Link>
                <a href={company.phoneHref} className="btn-ghost justify-center">
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
