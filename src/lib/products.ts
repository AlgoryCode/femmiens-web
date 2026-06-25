export type PaymentMode = "puan" | "nakit" | "both";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  priceCash: number;
  pricePoints: number;
  featured?: boolean;
  badge?: string;
}

export const featuredProduct = {
  id: "ayakta-isime-aparati",
  name: "Ayakta İşime Aparatı",
  tagline: "Ayakta çalışırken konforunuz için tasarlandı",
  description:
    "Uzun süre ayakta kalan kadınlar için geliştirilen Ayakta İşime Aparatı, günlük iş rutininizde destek ve rahatlık sunar. Zarif formu ve ergonomik yapısıyla hem evde hem iş yerinde kullanıma uygundur.",
  highlights: [
    "Ergonomik ve hafif tasarım",
    "Kolay taşınabilir yapı",
    "Kadın anatomisine uygun form",
    "Şık ve minimal görünüm",
  ],
  priceCash: 2499,
  pricePoints: 12500,
};

export const storeProducts: Product[] = [
  {
    id: "ayakta-isime-aparati",
    name: "Ayakta İşime Aparatı",
    description: "Ayakta çalışma konforu için özel tasarım aparat.",
    category: "Ana Ürün",
    priceCash: 2499,
    pricePoints: 12500,
    featured: true,
    badge: "Öne Çıkan",
  },
  {
    id: "tasima-cantasi",
    name: "Premium Taşıma Çantası",
    description: "Aparatınız için özel dokuma taşıma çantası.",
    category: "Aksesuar",
    priceCash: 349,
    pricePoints: 1800,
  },
  {
    id: "bakim-seti",
    name: "Bakım & Temizlik Seti",
    description: "Ürününüzün ömrünü uzatan nazik bakım seti.",
    category: "Bakım",
    priceCash: 199,
    pricePoints: 950,
  },
  {
    id: "wellness-kiti",
    name: "Günlük Wellness Kiti",
    description: "Ayakta çalışan kadınlar için özenle seçilmiş içerikler.",
    category: "Wellness",
    priceCash: 599,
    pricePoints: 3000,
    badge: "Yeni",
  },
  {
    id: "not-defteri",
    name: "Femmiens Planlayıcı",
    description: "Günlük rutininizi şık bir planlayıcıyla düzenleyin.",
    category: "Yaşam",
    priceCash: 149,
    pricePoints: 700,
  },
  {
    id: "uyku-maskesi",
    name: "İpek Uyku Maskesi",
    description: "Yumuşak ipek dokusuyla dinlendirici gece rutini.",
    category: "Bakım",
    priceCash: 279,
    pricePoints: 1400,
  },
];
