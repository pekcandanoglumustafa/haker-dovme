import Link from "next/link";
import Reveal from "@/components/Reveal";
import AxleGraphic from "@/components/AxleGraphic";
import { Icon } from "@/components/Icons";
import { CTABand } from "@/components/PageHero";
import {
  stats,
  capabilities,
  oems,
  sectors,
  exportMarkets,
  processes,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-[136px] pb-20 sm:pt-[150px] sm:pb-24">
        <div
          className="grid-bg absolute inset-0 opacity-50"
          style={{
            maskImage:
              "radial-gradient(120% 80% at 70% 30%, #000 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(120% 80% at 70% 30%, #000 0%, transparent 72%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-[8%] top-[8%] h-[70%] w-[60%] blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, var(--heat-glow), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="shell relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">
                Kapalı Kalıp Sıcak Dövme · Konya · Est. 1986
              </span>
              <h1 className="h-display mt-5 text-[clamp(52px,9.5vw,116px)]">
                Gücü çelikten{" "}
                <span className="bg-heat-grad bg-clip-text text-transparent">
                  dövüyoruz.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-[clamp(16px,2vw,19px)] leading-relaxed text-pearl-dim">
                1986&apos;dan bu yana kapalı kalıp sıcak dövme. MAN, Mercedes,
                Isuzu ve Volvo ticari araçları için ERAXLE arka aks milleri
                üretiyor, dört Avrupa ülkesine ihraç ediyoruz.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/iletisim" className="btn">
                  Teklif Alın →
                </Link>
                <Link href="/uretim" className="btn-ghost">
                  Üretim Süreçleri
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-16">
            <AxleGraphic className="w-full" />
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <div className="border-y border-line">
        <div className="shell grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-line px-5 py-8 sm:px-6 ${
                i % 2 === 1 ? "border-l" : ""
              } ${i >= 2 ? "" : "border-b md:border-b-0"} ${
                i > 0 ? "md:border-l" : ""
              }`}
            >
              <div className="font-display text-[clamp(32px,5vw,46px)] font-extrabold leading-none tracking-[-0.01em]">
                {s.accent ? (
                  <span className="text-heat-mid">{s.num}</span>
                ) : (
                  s.num
                )}
              </div>
              <div className="mt-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ash">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="py-24">
        <div className="shell grid gap-12 md:grid-cols-[1fr_1fr] md:items-end">
          <Reveal>
            <span className="eyebrow">Kurumsal</span>
            <h2 className="h-display mt-3 text-[clamp(30px,5vw,52px)]">
              Zorlu pazarlarda güvenilir dövme ortağı
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[16.5px] leading-relaxed text-ash">
              1986 yılında kurulan Haker, 2006&apos;da sıcak dövme imalatına
              başladı. Farklı büyüklük ve geometrideki çelik dövme
              ihtiyaçlarını, geniş tezgah parkuru ve kalıptan sevkiyata uzanan
              tam entegre üretim hattıyla karşılıyoruz.{" "}
              <Link href="/kurumsal" className="text-heat-mid hover:underline">
                Hikâyemizi okuyun →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="pb-24">
        <div className="shell">
          <Reveal className="mb-12 max-w-2xl">
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">
              01 — KABİLİYETLER
            </span>
            <h2 className="h-display mt-3 text-[clamp(30px,5vw,54px)]">
              Kalıptan sevkiyata, tek çatı altında
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden bg-graphite p-8 transition-colors hover:bg-panel"
              >
                <span className="absolute left-0 top-0 h-0.5 w-0 bg-heat-grad transition-all duration-500 group-hover:w-full" />
                <span className="absolute right-7 top-7 font-mono text-[12px] text-ash-dim">
                  {c.n}
                </span>
                <Icon name={c.icon} className="mb-6 h-10 w-10 text-heat-mid" />
                <h3 className="font-display text-[23px] font-bold uppercase tracking-[0.01em]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ash">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERAXLE */}
      <section className="pb-24">
        <div className="shell">
          <Reveal>
            <div className="overflow-hidden rounded-[3px] border border-line bg-graphite">
              <div className="grid md:grid-cols-[1.05fr_0.95fr] md:items-center">
                <div className="p-8 sm:p-14">
                  <span className="inline-block rounded-[2px] border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-heat-mid">
                    Amiral Ürün
                  </span>
                  <h3 className="h-display mt-5 text-[clamp(36px,5vw,60px)]">
                    ERAXLE
                    <br />
                    Arka Aks Mili
                  </h3>
                  <p className="mt-4 max-w-md text-pearl-dim">
                    Ticari araçlar için sıcak dövülmüş arka aks milleri. Sıcak
                    dövme, kafa toplama, ısıl işlem ve talaşlı imalatın tamamı
                    Haker çatısı altında birleşir.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Ø30 – Ø400 mm",
                      "Kapalı kalıp dövme",
                      "Isıl işlem uygulamalı",
                      "Tahribatsız muayene",
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-[2px] border border-line bg-void px-3 py-2 font-mono text-[12px] tracking-[0.03em] text-pearl-dim"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-6">
                    {oems.map((o) => (
                      <span
                        key={o}
                        className="font-display text-[20px] font-bold tracking-[0.04em] text-ash transition-colors hover:text-pearl"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/urunler"
                    className="mt-8 inline-flex items-center gap-2 font-display text-[14px] font-bold uppercase tracking-[0.06em] text-heat-mid hover:gap-3"
                  >
                    Ürünleri İnceleyin →
                  </Link>
                </div>

                <div className="relative grid min-h-[300px] place-items-center border-t border-line p-8 md:border-l md:border-t-0">
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(120% 100% at 100% 0%, rgba(255,106,26,.14), transparent 60%)",
                    }}
                    aria-hidden
                  />
                  <svg width="100%" viewBox="0 0 420 320" fill="none" aria-hidden>
                    <defs>
                      <linearGradient id="ax2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#3a414c" />
                        <stop offset=".5" stopColor="#c9ccd2" />
                        <stop offset="1" stopColor="#2b3039" />
                      </linearGradient>
                      <linearGradient id="head2" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#ffe28a" />
                        <stop offset=".6" stopColor="#ff8a2a" />
                        <stop offset="1" stopColor="#c42d0e" />
                      </linearGradient>
                    </defs>
                    <g transform="rotate(-32 210 160)">
                      <rect x="150" y="150" width="240" height="20" rx="3" fill="url(#ax2)" />
                      <rect x="386" y="146" width="8" height="28" rx="2" fill="url(#ax2)" />
                      <rect x="396" y="150" width="6" height="20" rx="2" fill="url(#ax2)" />
                      <circle cx="120" cy="160" r="58" fill="url(#head2)" />
                      <circle cx="120" cy="160" r="58" fill="none" stroke="#ffe9a8" strokeOpacity=".4" />
                      <g fill="#2b1405" opacity=".5">
                        <circle cx="120" cy="122" r="6" />
                        <circle cx="120" cy="198" r="6" />
                        <circle cx="88" cy="140" r="6" />
                        <circle cx="88" cy="180" r="6" />
                        <circle cx="152" cy="140" r="6" />
                        <circle cx="152" cy="180" r="6" />
                      </g>
                      <circle cx="120" cy="160" r="16" fill="#2b1405" opacity=".5" />
                    </g>
                    <text
                      x="30"
                      y="300"
                      fontFamily="var(--font-mono), monospace"
                      fontSize="13"
                      fill="#5c626d"
                      letterSpacing="2"
                    >
                      FORGED · HEAT-TREATED · MACHINED
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="pb-24">
        <div className="shell">
          <Reveal className="mb-12 max-w-2xl">
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">
              02 — ÜRETİM HATTI
            </span>
            <h2 className="h-display mt-3 text-[clamp(30px,5vw,54px)]">
              Ham çelikten bitmiş parçaya
            </h2>
            <p className="mt-4 text-ash">
              Her parça, sipariş şartnamesinden sevkiyata kontrollü adımlardan
              geçer.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
            {processes.slice(0, 8).map((p) => (
              <div key={p.n} className="bg-graphite p-6">
                <div className="font-mono text-[12px] tracking-[0.1em] text-heat-mid">
                  {p.n}
                </div>
                <h4 className="mt-3 font-display text-[19px] font-bold uppercase tracking-[0.02em]">
                  {p.title}
                </h4>
                <p className="mt-1.5 text-[12.5px] text-ash">{p.subtitle}</p>
                <div className="mt-4 h-[3px] w-full overflow-hidden bg-line">
                  <span className="block h-full w-full bg-heat-grad" />
                </div>
              </div>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link
              href="/uretim"
              className="inline-flex items-center gap-2 font-display text-[14px] font-bold uppercase tracking-[0.06em] text-heat-mid hover:gap-3"
            >
              Tüm Süreçleri Görün →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MARKETS */}
      <section className="pb-24">
        <div className="shell">
          <Reveal className="mb-12 max-w-2xl">
            <span className="font-mono text-[12px] tracking-[0.2em] text-ash-dim">
              03 — PAZAR & İHRACAT
            </span>
            <h2 className="h-display mt-3 text-[clamp(30px,5vw,54px)]">
              Dört ülke, çok sayıda endüstri
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span
                key={s.key}
                className="rounded-[2px] border border-line px-5 py-3.5 font-display text-[17px] font-bold uppercase tracking-[0.03em] text-pearl-dim transition-colors hover:border-heat-core hover:text-pearl"
              >
                {s.title}
              </span>
            ))}
          </div>
          <div className="mt-11 grid gap-6 border-t border-line pt-9 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-11">
            <div className="eyebrow text-ash">İhracat Pazarları</div>
            <div className="flex flex-wrap gap-6">
              {exportMarkets.map((m) => (
                <span
                  key={m}
                  className="flex items-center gap-2.5 font-display text-[19px] font-bold uppercase tracking-[0.03em]"
                >
                  <span className="h-2 w-2 rounded-full bg-heat-core" />
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
