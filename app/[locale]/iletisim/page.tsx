import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";
import { getDict } from "@/lib/i18n";
import { company } from "@/lib/site";

export default function Iletisim({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const d = getDict(locale);
  const c = d.iletisim;

  return (
    <>
      <PageHero eyebrow={c.heroEyebrow} title={c.heroTitle} intro={c.heroIntro} />

      <section className="pb-24">
        <div className="shell grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Icon name="pin" className="mt-0.5 h-5 w-5 flex-none text-heat-mid" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">{c.addressLabel}</div>
                  <div className="mt-1.5 text-[16px] leading-relaxed">
                    {company.addressLines.map((l) => (
                      <div key={l}>{l}</div>
                    ))}
                  </div>
                  <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[13.5px] text-heat-mid hover:underline">
                    {c.mapsLink}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="phone" className="mt-0.5 h-5 w-5 flex-none text-heat-mid" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">{c.phoneLabel}</div>
                  <a href={company.phoneHref} className="mt-1.5 block text-[16px] hover:text-heat-mid">{company.phone}</a>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="clock" className="mt-0.5 h-5 w-5 flex-none text-heat-mid" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">{c.hoursLabel}</div>
                  <div className="mt-1.5 text-[16px]">{d.common.hours}</div>
                </div>
              </div>

              <div className="border-t border-line pt-6 text-[13.5px] text-ash">{d.common.chambers}</div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm dict={d} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
