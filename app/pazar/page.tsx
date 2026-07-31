import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/PageHero";
import { sectors, exportMarkets } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pazar & İhracat",
  description:
    "Otomotiv, ticari araç, savunma sanayii, tarım ve iş makineleri sektörleri. Almanya, Fransa, Polonya ve Bosna Hersek'e ihracat.",
};

export default function Pazar() {
  return (
    <>
      <PageHero
        eyebrow="Pazar & İhracat"
        title="Çok sayıda endüstri, dört ülke"
        intro="Sıcak dövme çelik parçalarımız otomotivden savunmaya, tarımdan iş makinelerine kadar birçok sektörde kullanılıyor; dört Avrupa ülkesine ihraç ediliyor."
      />

      <section className="pb-20">
        <div className="shell">
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <Reveal key={s.key}>
                <div className="h-full bg-graphite p-8">
                  <h3 className="font-display text-[22px] font-bold uppercase tracking-[0.02em]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ash">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Export */}
      <section className="pb-24">
        <div className="shell">
          <Reveal>
            <div className="rounded-[3px] border border-line bg-graphite p-8 sm:p-12">
              <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">
                İHRACAT PAZARLARI
              </span>
              <h2 className="h-display mt-3 text-[clamp(28px,4.5vw,46px)]">
                Avrupa&apos;ya dövme ihracatı
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
                {exportMarkets.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-3 bg-graphite px-6 py-8 font-display text-[20px] font-bold uppercase tracking-[0.03em]"
                  >
                    <span className="h-2.5 w-2.5 flex-none rounded-full bg-heat-core" />
                    {m}
                  </div>
                ))}
              </div>
              <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-ash">
                Avrupalı müşterilerimizin beklediği kalite dokümantasyonu,
                izlenebilirlik ve teslim disipliniyle çalışıyoruz. Yeni
                pazarlarda iş birliği için ekibimizle iletişime geçebilirsiniz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
