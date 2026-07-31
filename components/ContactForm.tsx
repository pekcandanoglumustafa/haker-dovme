"use client";

import { useState } from "react";
import { company } from "@/lib/site";

const field =
  "w-full rounded-[2px] border border-line bg-void px-4 py-3 text-[15px] text-pearl placeholder:text-ash-dim outline-none transition-colors focus:border-heat-core";
const label =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ash";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const companyName = String(data.get("company") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    const subject = `Teklif Talebi — ${name}${companyName ? " / " + companyName : ""}`;
    const body = [
      `Ad Soyad: ${name}`,
      `Firma: ${companyName}`,
      `Telefon: ${phone}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[3px] border border-line bg-graphite p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Ad Soyad *
          </label>
          <input id="name" name="name" required className={field} placeholder="Adınız" />
        </div>
        <div>
          <label className={label} htmlFor="company">
            Firma
          </label>
          <input id="company" name="company" className={field} placeholder="Firma adı" />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Telefon
          </label>
          <input id="phone" name="phone" className={field} placeholder="+90 ..." />
        </div>
        <div>
          <label className={label} htmlFor="email">
            E-posta
          </label>
          <input id="email" name="email" type="email" className={field} placeholder="ornek@firma.com" />
        </div>
      </div>
      <div className="mt-5">
        <label className={label} htmlFor="message">
          Mesajınız *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field + " resize-none"}
          placeholder="İhtiyacınızı ve varsa parça/teknik resim bilgisini kısaca yazın."
        />
      </div>

      <button type="submit" className="btn mt-6 w-full justify-center sm:w-auto">
        Teklif Talebini Gönder →
      </button>

      {sent && (
        <p className="mt-4 font-mono text-[12px] text-heat-mid">
          E-posta uygulamanız açılıyor. Açılmadıysa {company.email} adresine
          yazabilirsiniz.
        </p>
      )}
    </form>
  );
}
