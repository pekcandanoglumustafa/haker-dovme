import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/PageHero";
import { qualityTests } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kalite & Laboratuvar",
  description:
    "Boyutsal ölçüm, kimyasal analiz, sertlik ölçümü ve çatlak kontrolü — uluslararası standartlara göre kalibre edilmiş metalurjik laboratuvar.",
};

export default function Kalite() {
  return (
    <>
      <PageHero
        eyebrow="Kalite & Laboratuvar"
        title="Sevkiyattan önce, her parça"
        intro="Üretim aşamalarında ve sevkiyat öncesinde tüm test ve kontroller, uluslararası standartlara göre kalibre edilmiş ekipmanlarla metalurjik laboratuvarımızda yapılır."
      />

      <section className="pb-20">
        <div className="shell grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <h2 className="h-display text-[clamp(28px,4.5vw,46px)]">
              Ölçülemeyen üretilmez
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ash">
              Metalurjik laboratuvarımız, hammadde girişinden bitmiş parçaya
              kadar her aşamada devrededir. Boyutsal doğruluk, kimyasal bileşim,
              sertlik ve iç bütünlük; kalibre edilmiş cihazlarla kayıt altına
              alınarak izlenebilirlik sağlanır.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {qualityTests.map((q) => (
                <div key={q.n} className="bg-graphite p-7">
                  <div className="font-mono text-[13px] text-heat-mid">
                    /{q.n}
                  </div>
                  <h3 className="mt-4 font-display text-[19px] font-bold uppercase tracking-[0.02em]">
                    {q.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ash">
                    {q.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* commitment band */}
      <section className="pb-24">
        <div className="shell">
          <Reveal>
            <div className="grid gap-8 rounded-[3px] border border-line bg-graphite p-8 sm:p-12 md:grid-cols-3">
              {[
                {
                  k: "Kalibrasyon",
                  v: "Test ekipmanları uluslararası standartlara göre kalibre edilir.",
                },
                {
                  k: "İzlenebilirlik",
                  v: "Her parti, hammaddeden sevkiyata kadar kayıt altında tutulur.",
                },
                {
                  k: "Tahribatsız Muayene",
                  v: "Yüzey ve iç kusurlar, parçaya zarar vermeden tespit edilir.",
                },
              ].map((c) => (
                <div key={c.k}>
                  <div className="font-display text-[21px] font-bold uppercase tracking-[0.02em] text-heat-mid">
                    {c.k}
                  </div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ash">
                    {c.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
