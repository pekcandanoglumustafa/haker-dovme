"use client";

import { useState } from "react";
import { company } from "@/lib/site";
import type { Dict } from "@/lib/dictionaries/tr";

const field =
  "w-full rounded-[2px] border border-line bg-void px-4 py-3 text-[15px] text-pearl placeholder:text-ash-dim outline-none transition-colors focus:border-heat-core";
const label = "mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ash";

export default function ContactForm({ dict }: { dict: Dict }) {
  const [sent, setSent] = useState(false);
  const f = dict.iletisim.form;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const companyName = String(data.get("company") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const subject = `${f.subject} — ${name}${companyName ? " / " + companyName : ""}`;
    const body = [
      `${f.lblName}: ${name}`,
      `${f.lblCompany}: ${companyName}`,
      `${f.lblPhone}: ${phone}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[3px] border border-line bg-graphite p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">{f.name} *</label>
          <input id="name" name="name" required className={field} placeholder={f.namePh} />
        </div>
        <div>
          <label className={label} htmlFor="company">{f.company}</label>
          <input id="company" name="company" className={field} placeholder={f.companyPh} />
        </div>
        <div>
          <label className={label} htmlFor="phone">{f.phone}</label>
          <input id="phone" name="phone" className={field} placeholder="+90 ..." />
        </div>
        <div>
          <label className={label} htmlFor="email">{f.email}</label>
          <input id="email" name="email" type="email" className={field} placeholder={f.emailPh} />
        </div>
      </div>
      <div className="mt-5">
        <label className={label} htmlFor="message">{f.message} *</label>
        <textarea id="message" name="message" required rows={5} className={field + " resize-none"} placeholder={f.messagePh} />
      </div>
      <button type="submit" className="btn mt-6 w-full justify-center sm:w-auto">{f.submit}</button>
      {sent && (
        <p className="mt-4 font-mono text-[12px] text-heat-mid">
          {f.sent} {company.email}
        </p>
      )}
    </form>
  );
}
