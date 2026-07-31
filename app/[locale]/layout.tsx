import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoBadge from "@/components/DemoBadge";
import { getDict, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isEn = params.locale === "en";
  return {
    metadataBase: new URL("https://hakerdovme.com"),
    title: {
      default: isEn
        ? "Haker Steel Forging Co. — Closed-Die Hot Forging · Konya"
        : "Haker Çelik Dövme A.Ş. — Kapalı Kalıp Sıcak Dövme · Konya",
      template: "%s · Haker Çelik Dövme A.Ş.",
    },
    description: isEn
      ? "Closed-die hot forging since 1986. ERAXLE rear axle shafts for MAN, Mercedes, Isuzu and Volvo. Konya-based, exporting to four countries."
      : "1986'dan bu yana kapalı kalıp sıcak dövme. MAN, Mercedes, Isuzu ve Volvo için ERAXLE arka aks mili üretimi. Konya merkezli, dört ülkeye ihracat.",
    alternates: {
      languages: {
        tr: "/tr",
        en: "/en",
      },
    },
    openGraph: {
      title: "Haker Çelik Dövme A.Ş.",
      description: isEn
        ? "Closed-die hot forging since 1986. ERAXLE rear axle shafts, export to four countries."
        : "1986'dan bu yana kapalı kalıp sıcak dövme. ERAXLE arka aks mili, dört ülkeye ihracat.",
      locale: isEn ? "en_US" : "tr_TR",
      type: "website",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const dict = getDict(params.locale);
  return (
    <html lang={params.locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Header locale={params.locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={params.locale} dict={dict} />
        <DemoBadge text={dict.demo} />
      </body>
    </html>
  );
}
