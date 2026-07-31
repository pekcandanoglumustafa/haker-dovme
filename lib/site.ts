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
  hours: "Pazartesi – Cuma · 08:00 – 18:00",
  chambers: "Konya Sanayi Odası & Konya Ticaret Odası üyesi",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Haker+%C3%87elik+D%C3%B6vme+Konya",
};

export const nav = [
  { href: "/", label: "Anasayfa" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/uretim", label: "Üretim Süreçleri" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/kalite", label: "Kalite" },
  { href: "/pazar", label: "Pazar" },
  { href: "/iletisim", label: "İletişim" },
];

export const stats = [
  { num: "1986", label: "Kuruluş yılı" },
  { num: "2006", label: "Sıcak dövme imalatı" },
  { num: "4", label: "İhracat ülkesi", accent: true },
  { num: "Ø30–400", label: "Dövme aralığı (mm)", accent: true },
];

export const oems = ["MAN", "MERCEDES", "ISUZU", "VOLVO"];

export const exportMarkets = ["Almanya", "Fransa", "Polonya", "Bosna Hersek"];

export const sectors = [
  {
    key: "otomotiv",
    title: "Otomotiv",
    desc: "Binek ve ticari araç güç aktarma ve şasi bileşenleri için sıcak dövme parçalar.",
  },
  {
    key: "ticari-arac",
    title: "Ticari Araç",
    desc: "MAN, Mercedes, Isuzu ve Volvo ticari araçları için ERAXLE arka aks milleri.",
  },
  {
    key: "savunma",
    title: "Savunma Sanayii",
    desc: "Yüksek mukavemet ve izlenebilirlik gerektiren kritik dövme parçalar.",
  },
  {
    key: "tarim",
    title: "Tarım",
    desc: "Traktör ve tarım makineleri için dayanıklı dövme aktarma organları.",
  },
  {
    key: "is-makineleri",
    title: "İş Makineleri",
    desc: "Ağır hizmet koşullarına dayanıklı yapısal ve hareketli dövme bileşenler.",
  },
  {
    key: "tasimacilik",
    title: "Taşımacılık",
    desc: "Yük ve ulaşım araçları için yorulma dayanımı yüksek dövme çözümler.",
  },
];

export const processes = [
  {
    n: "01",
    title: "Kalıphane",
    subtitle: "Mühendislik & Kalıp Tasarımı",
    desc: "Tasarlanan parçaların imalata birebir aktarılabilmesi için kalıphanemiz modern CNC tezgahlarıyla donatılmıştır. Kalıp imalatının tamamını kendi bünyemizde gerçekleştiririz.",
  },
  {
    n: "02",
    title: "Malzeme",
    subtitle: "Hammadde Kontrolü",
    desc: "Her parti çelik, dökümden önce menşei ve kimyasal bileşimi doğrulanarak üretime alınır. İzlenebilirlik baştan sona korunur.",
  },
  {
    n: "03",
    title: "Dövme",
    subtitle: "Kapalı Kalıp Sıcak Dövme",
    desc: "Farklı büyüklük ve geometrideki çelik parçalar için geniş pres ve çekiç tezgahı parkuru. Yüksek mukavemetli, gözeneksiz iç yapı.",
  },
  {
    n: "04",
    title: "Kafa Toplama",
    subtitle: "Upsetting",
    desc: "Şişirme tezgahlarında bölgesel ısıtma ile minimum Ø30, maksimum Ø200 ham malzeme ısıtılıp Ø400'e kadar kafa toplanır.",
  },
  {
    n: "05",
    title: "Isıl İşlem",
    subtitle: "Heat Treatment",
    desc: "Kontrollü ısıl işlem hatlarıyla sertlik ve mekanik özellikler müşteri şartnamesine göre optimize edilir.",
  },
  {
    n: "06",
    title: "Mekanik İşleme",
    subtitle: "Talaşlı İmalat / CNC",
    desc: "Modern CNC tezgahlarında bitirme işlemleri; dövme parçalar bitmiş ürün toleranslarına getirilir.",
  },
  {
    n: "07",
    title: "Demir Dışı Metaller",
    subtitle: "Non-Ferrous",
    desc: "Çelik dışında, projeye özel demir dışı metal alaşımlarında da dövme ve işleme kabiliyeti.",
  },
  {
    n: "08",
    title: "Sevkiyat",
    subtitle: "Ambalaj & Teslimat",
    desc: "Kalite kontrolünü geçen parçalar uygun ambalajla, yurt içi ve dört ülkeye ihracat kanallarıyla teslim edilir.",
  },
];

export const qualityTests = [
  {
    n: "01",
    title: "Boyutsal Ölçüm",
    desc: "Kalibre ölçüm cihazlarıyla tolerans doğrulaması.",
  },
  {
    n: "02",
    title: "Kimyasal Analiz",
    desc: "Spektrometre ile malzeme bileşimi kontrolü.",
  },
  {
    n: "03",
    title: "Sertlik Ölçümü",
    desc: "Isıl işlem sonrası sertlik değerlerinin doğrulanması.",
  },
  {
    n: "04",
    title: "Çatlak Kontrolü",
    desc: "Tahribatsız muayene ile yüzey ve iç kusur tespiti.",
  },
];

export const capabilities = [
  {
    n: "/01",
    title: "Kapalı Kalıp Sıcak Dövme",
    desc: "Farklı büyüklük ve geometrideki parçalar için geniş pres ve çekiç tezgahı parkuru ile yüksek mukavemetli dövme.",
    icon: "forge",
  },
  {
    n: "/02",
    title: "Kafa Toplama",
    desc: "Şişirme tezgahlarında bölgesel ısıtma ile Ø30'dan Ø400'e kadar kontrollü kafa toplama.",
    icon: "wave",
  },
  {
    n: "/03",
    title: "Kalıphane",
    desc: "Kalıp tasarımı ve imalatı; CNC tezgahlarla hassas kalıp üretimi ve bakımı.",
    icon: "grid",
  },
  {
    n: "/04",
    title: "Isıl İşlem",
    desc: "Kontrollü ısıl işlem ile sertlik ve mekanik özelliklerin şartnameye göre optimizasyonu.",
    icon: "flask",
  },
  {
    n: "/05",
    title: "Mekanik İşleme",
    desc: "Modern CNC tezgahlarında bitirme işlemleri; dövme parçaların son ölçüye getirilmesi.",
    icon: "gear",
  },
  {
    n: "/06",
    title: "Kalite Laboratuvarı",
    desc: "Kalibre ekipmanlarla boyutsal, kimyasal, sertlik ve tahribatsız muayene.",
    icon: "beaker",
  },
];
