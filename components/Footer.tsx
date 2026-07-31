import Link from "next/link";
import { company, navKeys, navHref } from "@/lib/site";
import type { Dict } from "@/lib/dictionaries/tr";

export default function Footer({ locale, dict }: { locale: string; dict: Dict }) {
  return (
    <footer className="mt-6 border-t border-line py-14">
      <div className="shell grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="font-display text-[24px] font-extrabold tracking-[0.02em]">
            {company.name}
          </div>
          <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ash">
            {dict.footer.tagline}
            <br />
            {dict.common.chambers}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-[2px] border border-line text-ash transition-colors hover:border-heat-core hover:text-heat-mid">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h2.6l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V5.1C15.7 5 14.8 5 13.7 5 11.4 5 10 6.3 10 8.7V11H7.5v3H10v8h3Z"/></svg>
            </a>
            <a href={company.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="grid h-9 w-9 place-items-center rounded-[2px] border border-line text-ash transition-colors hover:border-heat-core hover:text-heat-mid">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.5 7.4L22 22h-6.3l-4.9-6.4L5.1 22H2.3l7-8L2 2h6.4l4.4 5.9L18.2 2Zm-1.1 18h1.6L7 3.6H5.3L17.1 20Z"/></svg>
            </a>
            <a href={company.catalogUrl} target="_blank" rel="noopener noreferrer" className="ml-1 inline-flex items-center gap-2 rounded-[2px] border border-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-pearl-dim transition-colors hover:border-heat-core hover:text-pearl">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>
              {dict.common.catalog}
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4 text-ash">{dict.footer.menu}</div>
          <ul className="space-y-2 text-[14px] text-pearl-dim">
            {navKeys.slice(1).map((key) => (
              <li key={key}>
                <Link href={`/${locale}${navHref[key]}`} className="hover:text-heat-mid">
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4 text-ash">{dict.footer.contact}</div>
          <address className="space-y-2 text-[14px] not-italic leading-relaxed text-pearl-dim">
            {company.addressLines.map((l) => (
              <div key={l}>{l}</div>
            ))}
            <a href={company.phoneHref} className="block hover:text-heat-mid">{company.phone}</a>
            <div className="text-ash">{dict.common.hours}</div>
          </address>
        </div>
      </div>

      <div className="shell mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[11.5px] text-ash-dim sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {company.name}. {dict.footer.rights}</span>
        <span className="font-mono tracking-[0.05em]">{dict.footer.credit}{" "}<a href="#" className="text-heat-mid">Kona AI</a></span>
      </div>
    </footer>
  );
}
