import Image from "next/image";
import Reveal from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/PageHero";
import { getDict } from "@/lib/i18n";

export default function Kurumsal({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const d = getDict(locale);
  const k = d.kurumsal;

  return (
    <>
      <PageHero eyebrow={k.heroEyebrow} title={k.heroTitle} intro={k.heroIntro} />

      <section className="pb-14">
        <div className="shell">
          <Reveal>
            <div className="relative aspect-[1000/300] w-full overflow-hidden rounded-[3px] border border-line">
              <Image src="/images/kaliphane.webp" alt="HAK-ER tesis" fill sizes="1180px" className="object-cover" />
              <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,22,32,0.65), transparent 55%)" }} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell">
          <Reveal className="mb-12">
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">{k.historyLabel}</span>
          </Reveal>
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {k.timeline.map((t) => (
              <div key={t.year} className="bg-graphite p-8">
                <div className="font-display text-[clamp(40px,6vw,64px)] font-extrabold leading-none text-heat-mid">{t.year}</div>
                <h3 className="mt-5 font-display text-[22px] font-bold uppercase tracking-[0.02em]">{t.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ash">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <Reveal>
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">{k.capacityLabel}</span>
            <h2 className="h-display mt-3 text-[clamp(28px,4.5vw,46px)]">{k.capacityTitle}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ash">{k.capacityBody}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-px border border-line bg-line">
              {k.capacityCards.map((c) => (
                <div key={c.v} className="bg-graphite p-7">
                  <div className="font-display text-[clamp(26px,4vw,40px)] font-extrabold leading-none">{c.k}</div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ash">{c.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <Reveal className="mb-10">
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">{k.valuesLabel}</span>
          </Reveal>
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {k.values.map((v) => (
              <div key={v.n} className="bg-graphite p-8">
                <div className="font-mono text-[13px] text-heat-mid">/{v.n}</div>
                <h3 className="mt-4 font-display text-[21px] font-bold uppercase tracking-[0.02em]">{v.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ash">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand locale={locale} dict={d} />
    </>
  );
}
