import Reveal from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/PageHero";
import { getDict } from "@/lib/i18n";

export default function Uretim({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const d = getDict(locale);
  const u = d.uretim;

  return (
    <>
      <PageHero eyebrow={u.heroEyebrow} title={u.heroTitle} intro={u.heroIntro} />

      <section className="pb-24">
        <div className="shell">
          <div className="border-t border-line">
            {d.processes.map((p, i) => (
              <Reveal key={p.n} delay={(i % 2) * 0.05}>
                <div className="grid gap-6 border-b border-line py-9 md:grid-cols-[120px_1fr_1.4fr] md:items-start md:gap-10">
                  <div className="font-display text-[clamp(44px,7vw,72px)] font-extrabold leading-none text-heat-mid/90">{p.n}</div>
                  <div>
                    <h3 className="font-display text-[24px] font-bold uppercase tracking-[0.02em]">{p.title}</h3>
                    <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.12em] text-ash-dim">{p.subtitle}</div>
                  </div>
                  <p className="text-[15.5px] leading-relaxed text-ash">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand locale={locale} dict={d} />
    </>
  );
}
