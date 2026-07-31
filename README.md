# Haker Çelik Dövme A.Ş. — Kurumsal Web Sitesi

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion ile
geliştirilmiş çok sayfalı kurumsal tanıtım sitesi.

## Geliştirme
```bash
npm install
npm run dev
```
http://localhost:3000

## Yayına alma (Vercel)
1. Bu repoyu GitHub'a gönderin.
2. vercel.com → **Add New → Project** → repoyu seçin.
3. Framework otomatik "Next.js" algılanır, **Deploy**.
4. İsteğe bağlı: hakerdovme.com alan adını Vercel > Domains'ten bağlayın.

## Sayfalar
- `/` Anasayfa
- `/kurumsal` Tarihçe, kapasite, değerler
- `/uretim` Üretim süreçleri (8 adım)
- `/urunler` ERAXLE ve müşteriye özel dövme
- `/kalite` Kalite & metalurjik laboratuvar
- `/pazar` Sektörler & ihracat
- `/iletisim` İletişim + teklif formu

## Doldurulacaklar
- `lib/site.ts` içinde e-posta (`info@hakerdovme.com` yer tutucudur), telefon, adres.
- Gerçek fabrika/ürün fotoğrafları eklenebilir.

Tasarım & geliştirme: Kona AI
