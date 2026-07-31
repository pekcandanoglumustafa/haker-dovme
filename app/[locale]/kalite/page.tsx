import Image from "next/image";
import Reveal from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/PageHero";
import { getDict } from "@/lib/i18n";

export default function Kalite({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const d = getDict(locale);
  const q = d.kalite;

  return (
    <>
      <PageHero eyebrow={q.heroEyebrow} title={q.heroTitle} intro={q.heroIntro} />

      <section className="pb-14">
        <div className="shell">
          <Reveal>
            <div className="relative aspect-[1000/300] w-full overflow-hidden rounded-[3px] border border-line">
              <Image src="/images/lab.webp" alt="HAK-ER metalurjik laboratuvar" fill sizes="1180px" className="object-cover" />
              <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,22,32,0.65), transparent 55%)" }} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <h2 className="h-display text-[clamp(28px,4.5vw,46px)]">{q.subTitle}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ash">{q.subBody}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {d.qualityTests.map((t) => (
                <div key={t.n} className="bg-graphite p-7">
                  <div className="font-mono text-[13px] text-heat-mid">/{t.n}</div>
                  <h3 className="mt-4 font-display text-[19px] font-bold uppercase tracking-[0.02em]">{t.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ash">{t.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <Reveal>
            <div className="grid gap-8 rounded-[3px] border border-line bg-graphite p-8 sm:p-12 md:grid-cols-3">
              {q.commitment.map((c) => (
                <div key={c.k}>
                  <div className="font-display text-[21px] font-bold uppercase tracking-[0.02em] text-heat-mid">{c.k}</div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ash">{c.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand locale={locale} dict={d} />
    </>
  );
}
