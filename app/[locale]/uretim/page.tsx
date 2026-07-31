import Image from "next/image";
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
        <div className="shell space-y-4">
          {d.processes.map((p, i) => {
            const imgLeft = i % 2 === 1;
            return (
              <Reveal key={p.n}>
                <div className="grid items-stretch gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-2">
                  <div className={`relative min-h-[200px] md:min-h-[260px] ${imgLeft ? "md:order-1" : "md:order-2"}`}>
                    <Image src={p.img} alt={`HAK-ER — ${p.title}`} fill sizes="(max-width:768px) 100vw, 590px" className="object-cover" />
                    <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,22,32,0.15), rgba(7,22,32,0.55))" }} />
                    <span className="absolute left-5 top-4 font-display text-[40px] font-extrabold leading-none text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">{p.n}</span>
                  </div>
                  <div className={`flex flex-col justify-center bg-graphite p-8 sm:p-10 ${imgLeft ? "md:order-2" : "md:order-1"}`}>
                    <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-heat-mid">{p.subtitle}</div>
                    <h3 className="mt-2 font-display text-[26px] font-bold uppercase tracking-[0.02em]">{p.title}</h3>
                    <p className="mt-4 text-[15.5px] leading-relaxed text-ash">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTABand locale={locale} dict={d} />
    </>
  );
}
