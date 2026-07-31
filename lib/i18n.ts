import { tr } from "./dictionaries/tr";
import { en } from "./dictionaries/en";

export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

const dicts = { tr, en };

export function getDict(locale: string) {
  return dicts[(locale as Locale)] ?? tr;
}

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}
