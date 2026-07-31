import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoBadge from "@/components/DemoBadge";

export const metadata: Metadata = {
  metadataBase: new URL("https://hakerdovme.com"),
  title: {
    default: "Haker Çelik Dövme A.Ş. — Kapalı Kalıp Sıcak Dövme · Konya",
    template: "%s · Haker Çelik Dövme A.Ş.",
  },
  description:
    "1986'dan bu yana kapalı kalıp sıcak dövme. MAN, Mercedes, Isuzu ve Volvo ticari araçları için ERAXLE arka aks mili üretimi. Konya merkezli, dört ülkeye ihracat.",
  keywords: [
    "çelik dövme",
    "sıcak dövme",
    "kapalı kalıp dövme",
    "arka aks mili",
    "ERAXLE",
    "Konya dövme",
    "kafa toplama",
    "forging Turkey",
  ],
  openGraph: {
    title: "Haker Çelik Dövme A.Ş.",
    description:
      "1986'dan bu yana kapalı kalıp sıcak dövme. ERAXLE arka aks mili üretimi, dört ülkeye ihracat.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <DemoBadge />
      </body>
    </html>
  );
}
