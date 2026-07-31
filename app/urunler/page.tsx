import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/PageHero";
import { oems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "ERAXLE arka aks milleri ve müşteriye özel sıcak dövme çelik parçalar.",
};

export default function Urunler() {
  return (
    <>
      <PageHero
        eyebrow="Ürünler"
        title="ERAXLE ve müşteriye özel dövme parçalar"
        intro="Amiral ürünümüz ERAXLE arka aks millerinin yanında, teknik resminize göre üretilen sıcak dövme çelik parçalar."
      />

      {/* ERAXLE feature */}
      <section className="pb-20">
        <div className="shell">
          <Reveal>
            <div className="overflow-hidden rounded-[3px] border border-line bg-graphite">
              <div className="grid md:grid-cols-[0.95fr_1.05fr] md:items-center">
                <div className="relative grid min-h-[320px] place-items-center border-b border-line p-10 md:border-b-0 md:border-r">
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(120% 100% at 0% 0%, rgba(255,106,26,.16), transparent 60%)",
                    }}
                    aria-hidden
                  />
                  <svg width="100%" viewBox="0 0 420 320" fill="none" aria-hidden>
                    <defs>
                      <linearGradient id="pax" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#3a414c" />
                        <stop offset=".5" stopColor="#c9ccd2" />
                        <stop offset="1" stopColor="#2b3039" />
                      </linearGradient>
                      <linearGradient id="phead" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#ffe28a" />
                        <stop offset=".6" stopColor="#ff8a2a" />
                        <stop offset="1" stopColor="#c42d0e" />
                      </linearGradient>
                    </defs>
                    <g transform="rotate(-28 210 160)">
                      <rect x="150" y="151" width="250" height="18" rx="3" fill="url(#pax)" />
                      <rect x="396" y="147" width="8" height="26" rx="2" fill="url(#pax)" />
                      <circle cx="122" cy="160" r="60" fill="url(#phead)" />
                      <circle cx="122" cy="160" r="60" fill="none" stroke="#ffe9a8" strokeOpacity=".4" />
                      <g fill="#2b1405" opacity=".5">
                        <circle cx="122" cy="120" r="6" />
                        <circle cx="122" cy="200" r="6" />
                        <circle cx="88" cy="140" r="6" />
                        <circle cx="88" cy="180" r="6" />
                        <circle cx="156" cy="140" r="6" />
                        <circle cx="156" cy="180" r="6" />
                      </g>
                      <circle cx="122" cy="160" r="17" fill="#2b1405" opacity=".5" />
                    </g>
                  </svg>
                </div>
                <div className="p-8 sm:p-12">
                  <span className="inline-block rounded-[2px] border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-heat-mid">
                    Amiral Ürün
                  </span>
                  <h2 className="h-display mt-5 text-[clamp(34px,5vw,56px)]">
                    ERAXLE Arka Aks Mili
                  </h2>
                  <p className="mt-4 max-w-md text-pearl-dim">
                    Ticari araçlar için sıcak dövülmüş arka aks milleri. Dövme,
                    kafa toplama, ısıl işlem ve talaşlı imalatın tamamı Haker
                    bünyesinde gerçekleştirilir; böylece kalite ve teslim süresi
                    tek elden yönetilir.
                  </p>
                  <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-line bg-line">
                    {[
                      ["Çap aralığı", "Ø30 – Ø400 mm"],
                      ["Üretim", "Kapalı kalıp dövme"],
                      ["İşlem", "Isıl işlem + CNC"],
                      ["Muayene", "Tahribatsız test"],
                    ].map(([k, v]) => (
                      <div key={k} className="bg-graphite px-4 py-4">
                        <dt className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ash">
                          {k}
                        </dt>
                        <dd className="mt-1 font-display text-[16px] font-semibold tracking-[0.01em]">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OEM uyumluluk */}
      <section className="pb-20">
        <div className="shell">
          <Reveal className="mb-8">
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">
              UYUMLU TİCARİ ARAÇLAR
            </span>
          </Reveal>
          <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {oems.map((o) => (
              <div
                key={o}
                className="grid place-items-center bg-graphite py-12 font-display text-[26px] font-extrabold tracking-[0.06em] text-ash transition-colors hover:bg-panel hover:text-pearl"
              >
                {o}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom parts */}
      <section className="pb-24">
        <div className="shell grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <Reveal>
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">
              MÜŞTERİYE ÖZEL
            </span>
            <h2 className="h-display mt-3 text-[clamp(28px,4.5vw,46px)]">
              Teknik resminize göre dövme parça
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ash">
              Otomotiv, savunma, tarım ve iş makineleri sektörleri için farklı
              geometri ve boyutlarda sıcak dövme çelik parçalar üretiyoruz.
              Kalıp tasarımından seri üretime kadar tüm süreci sizin için
              yönetiriz.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-line border-y border-line">
              {[
                "Kapalı kalıp sıcak dövme",
                "Kafa toplama (upsetting) — Ø30 → Ø400",
                "Isıl işlem ile mukavemet optimizasyonu",
                "CNC talaşlı imalat ile bitirme",
                "Demir dışı metal alaşımları",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 py-4 text-[15px] text-pearl-dim"
                >
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-heat-core" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
