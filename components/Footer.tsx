import Link from "next/link";
import { company, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-line py-14">
      <div className="shell grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="font-display text-[24px] font-extrabold tracking-[0.02em]">
            {company.name}
          </div>
          <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ash">
            Kapalı kalıp sıcak dövme · Konya · Est. {company.founded}
            <br />
            {company.chambers}
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4 text-ash">Menü</div>
          <ul className="space-y-2 text-[14px] text-pearl-dim">
            {nav.slice(1).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-heat-mid">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4 text-ash">İletişim</div>
          <address className="space-y-2 text-[14px] not-italic leading-relaxed text-pearl-dim">
            {company.addressLines.map((l) => (
              <div key={l}>{l}</div>
            ))}
            <a href={company.phoneHref} className="block hover:text-heat-mid">
              {company.phone}
            </a>
            <div className="text-ash">{company.hours}</div>
          </address>
        </div>
      </div>

      <div className="shell mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[11.5px] text-ash-dim sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {company.name}. Tüm hakları saklıdır.
        </span>
        <span className="font-mono tracking-[0.05em]">
          Tasarım &amp; geliştirme:{" "}
          <a href="#" className="text-heat-mid">
            Kona AI
          </a>
        </span>
      </div>
    </footer>
  );
}
