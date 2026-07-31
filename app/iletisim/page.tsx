import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Haker Çelik Dövme A.Ş. — Aşağıpınarbaşı Mah. Ankara Cad. No:334, Selçuklu / Konya. Teklif ve iş birliği için bize ulaşın.",
};

export default function Iletisim() {
  return (
    <>
      <PageHero
        eyebrow="Bize Ulaşın"
        title="Teklif alın, iş birliği kurun"
        intro="Teknik resminizi ya da ihtiyaç listenizi paylaşın; dövme, ısıl işlem ve işleme dahil komple teklifimizle en kısa sürede dönelim."
      />

      <section className="pb-24">
        <div className="shell grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          {/* details */}
          <Reveal>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Icon name="pin" className="mt-0.5 h-5 w-5 flex-none text-heat-mid" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
                    Adres
                  </div>
                  <div className="mt-1.5 text-[16px] leading-relaxed">
                    {company.addressLines.map((l) => (
                      <div key={l}>{l}</div>
                    ))}
                  </div>
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[13.5px] text-heat-mid hover:underline"
                  >
                    Haritada aç →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="phone" className="mt-0.5 h-5 w-5 flex-none text-heat-mid" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
                    Telefon
                  </div>
                  <a
                    href={company.phoneHref}
                    className="mt-1.5 block text-[16px] hover:text-heat-mid"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="clock" className="mt-0.5 h-5 w-5 flex-none text-heat-mid" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
                    Çalışma Saatleri
                  </div>
                  <div className="mt-1.5 text-[16px]">{company.hours}</div>
                </div>
              </div>

              <div className="border-t border-line pt-6 text-[13.5px] text-ash">
                {company.chambers}
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
