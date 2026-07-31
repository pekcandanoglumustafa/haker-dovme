import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/PageHero";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "1986'dan bu yana çelik dövme. Haker'in tarihçesi, üretim kapasitesi ve değerleri.",
};

const timeline = [
  {
    year: "1986",
    title: "Kuruluş",
    desc: `${company.founder} tarafından Konya'da kuruldu. Dövme ve metal işleme alanında ilk adım atıldı.`,
  },
  {
    year: "2006",
    title: "Sıcak Dövme",
    desc: "Kapalı kalıp sıcak dövme imalatına geçildi; geniş tezgah parkuru ile seri üretim kapasitesi kuruldu.",
  },
  {
    year: "Bugün",
    title: "ERAXLE & İhracat",
    desc: "MAN, Mercedes, Isuzu ve Volvo için ERAXLE arka aks milleri; Almanya, Fransa, Polonya ve Bosna Hersek'e ihracat.",
  },
];

const values = [
  {
    n: "01",
    title: "Tam Entegre Üretim",
    desc: "Kalıp tasarımından ısıl işleme, talaşlı imalattan kaliteye kadar tüm süreç tek çatı altında.",
  },
  {
    n: "02",
    title: "İzlenebilir Kalite",
    desc: "Hammaddeden sevkiyata kadar her aşamada kalibre ekipmanlarla ölçüm ve kayıt.",
  },
  {
    n: "03",
    title: "İhracata Hazır",
    desc: "Avrupalı OEM ve tedarikçilerin beklediği standart ve dokümantasyon disiplini.",
  },
];

export default function Kurumsal() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal · Est. 1986"
        title="Çeliği güce çeviren bir hikâye"
        intro="Zorlu bir pazarda, değişen bir dünyada Haker Çelik Dövme, müşterilerine ihtiyaç duydukları güveni sunar. 1986'dan bu yana büyüyen bir üretim kültürü."
      />

      {/* TİMELİNE */}
      <section className="pb-20">
        <div className="shell">
          <Reveal className="mb-12">
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">
              TARİHÇE
            </span>
          </Reveal>
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {timeline.map((t) => (
              <div key={t.year} className="bg-graphite p-8">
                <div className="font-display text-[clamp(40px,6vw,64px)] font-extrabold leading-none text-heat-mid">
                  {t.year}
                </div>
                <h3 className="mt-5 font-display text-[22px] font-bold uppercase tracking-[0.02em]">
                  {t.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ash">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KAPASİTE */}
      <section className="pb-20">
        <div className="shell grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <Reveal>
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">
              KAPASİTE
            </span>
            <h2 className="h-display mt-3 text-[clamp(28px,4.5vw,46px)]">
              Geniş tezgah parkuru, tam entegre hat
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ash">
              Farklı büyüklük ve geometrideki çelik dövme ihtiyaçlarını
              karşılamak için pres, çekiç ve şişirme tezgahlarından oluşan geniş
              bir üretim parkuruna sahibiz. Kalıphanemiz modern CNC tezgahlarıyla
              donatılıdır ve kalıp imalatının tamamı kendi bünyemizde yapılır.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-px border border-line bg-line">
              {[
                { k: "Ø30–Ø400", v: "Kafa toplama aralığı (mm)" },
                { k: "1986", v: "Yıllık üretim tecrübesi" },
                { k: "4", v: "İhracat ülkesi" },
                { k: "CNC", v: "Kalıphane & işleme" },
              ].map((c) => (
                <div key={c.v} className="bg-graphite p-7">
                  <div className="font-display text-[clamp(26px,4vw,40px)] font-extrabold leading-none">
                    {c.k}
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ash">
                    {c.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEĞERLER */}
      <section className="pb-24">
        <div className="shell">
          <Reveal className="mb-10">
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">
              DEĞERLERİMİZ
            </span>
          </Reveal>
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {values.map((v) => (
              <div key={v.n} className="bg-graphite p-8">
                <div className="font-mono text-[13px] text-heat-mid">/{v.n}</div>
                <h3 className="mt-4 font-display text-[21px] font-bold uppercase tracking-[0.02em]">
                  {v.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ash">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
