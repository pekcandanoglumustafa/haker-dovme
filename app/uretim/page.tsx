import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/PageHero";
import { processes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Üretim Süreçleri",
  description:
    "Kalıphane, dövme, kafa toplama, ısıl işlem, mekanik işleme ve sevkiyat — Haker'in tam entegre üretim hattı.",
};

export default function Uretim() {
  return (
    <>
      <PageHero
        eyebrow="Üretim Süreçleri"
        title="Kalıptan sevkiyata sekiz adım"
        intro="Her çelik dövme parçası; tasarım, ısıtma, dövme, kafa toplama, ısıl işlem, işleme, kalite ve sevkiyattan oluşan kontrollü bir hattan geçer."
      />

      <section className="pb-24">
        <div className="shell">
          <div className="border-t border-line">
            {processes.map((p, i) => (
              <Reveal key={p.n} delay={(i % 2) * 0.05}>
                <div className="grid gap-6 border-b border-line py-9 md:grid-cols-[120px_1fr_1.4fr] md:items-start md:gap-10">
                  <div className="font-display text-[clamp(44px,7vw,72px)] font-extrabold leading-none text-heat-mid/90">
                    {p.n}
                  </div>
                  <div>
                    <h3 className="font-display text-[24px] font-bold uppercase tracking-[0.02em]">
                      {p.title}
                    </h3>
                    <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.12em] text-ash-dim">
                      {p.subtitle}
                    </div>
                  </div>
                  <p className="text-[15.5px] leading-relaxed text-ash">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
