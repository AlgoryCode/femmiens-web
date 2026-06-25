import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Çerez Politikası — Femmiens",
  description: "Femmiens çerez kullanım politikası.",
};

export default function CerezPolitikasiPage() {
  return (
    <LegalLayout
      title="Çerez Politikası"
      description="Son güncelleme: 25 Haziran 2026"
    >
      <p>
        Femmiens web sitesi, deneyiminizi iyileştirmek ve site performansını
        analiz etmek amacıyla çerezler (cookies) kullanmaktadır.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Çerez Nedir?
      </h2>
      <p>
        Çerezler, tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin
        dosyalarıdır. Oturum bilgilerinizi hatırlamak ve tercihlerinizi
        saklamak için kullanılır.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Kullandığımız Çerez Türleri
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Zorunlu çerezler:</strong> Sitenin temel işlevleri için
          gereklidir.
        </li>
        <li>
          <strong>Performans çerezleri:</strong> Ziyaret istatistiklerini
          anonim olarak toplar.
        </li>
        <li>
          <strong>Tercih çerezleri:</strong> Dil ve görüntüleme tercihlerinizi
          hatırlar.
        </li>
      </ul>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Çerezleri Yönetme
      </h2>
      <p>
        Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz.
        Zorunlu çerezlerin devre dışı bırakılması sitenin bazı bölümlerinin
        düzgün çalışmamasına neden olabilir.
      </p>
    </LegalLayout>
  );
}
