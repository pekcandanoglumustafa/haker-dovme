// Locale-invariant company data
export const company = {
  name: "Haker Çelik Dövme A.Ş.",
  short: "HAKER",
  founded: 1986,
  forgingSince: 2006,
  founder: "Salih Er",
  gm: "Alparslan Askar",
  phone: "+90 332 239 23 45",
  phoneHref: "tel:+903322392345",
  email: "info@hakerdovme.com",
  addressLines: [
    "Aşağıpınarbaşı Mah. Ankara Cad. No:334",
    "42250 Selçuklu / Konya / Türkiye",
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Haker+%C3%87elik+D%C3%B6vme+Konya",
};

export const oems = ["MAN", "MERCEDES", "ISUZU", "VOLVO"];

export const navKeys = [
  "home",
  "kurumsal",
  "uretim",
  "urunler",
  "kalite",
  "pazar",
  "iletisim",
] as const;

export const navHref: Record<(typeof navKeys)[number], string> = {
  home: "",
  kurumsal: "/kurumsal",
  uretim: "/uretim",
  urunler: "/urunler",
  kalite: "/kalite",
  pazar: "/pazar",
  iletisim: "/iletisim",
};
