import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Gizlilik Politikası — Femmiens",
  description: "Femmiens gizlilik politikası ve kişisel verilerin korunması.",
};

export default function GizlilikPolitikasiPage() {
  return (
    <LegalLayout
      title="Gizlilik Politikası"
      description="Son güncelleme: 25 Haziran 2026"
    >
      <p>
        Femmiens olarak kişisel verilerinizin güvenliği bizim için önceliklidir.
        Bu politika, platformumuzu kullanırken hangi bilgilerin toplandığını,
        nasıl kullanıldığını ve nasıl korunduğunu açıklar.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Toplanan Bilgiler
      </h2>
      <p>
        Üyelik, alışveriş ve puan sistemi kapsamında ad-soyad, e-posta adresi,
        telefon numarası, teslimat adresi ve ödeme bilgileriniz (güvenli ödeme
        altyapısı üzerinden) işlenebilir.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Bilgilerin Kullanım Amacı
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Siparişlerinizin hazırlanması ve teslimatı</li>
        <li>Puan kazanımı ve harcama işlemlerinin yönetimi</li>
        <li>Müşteri destek hizmetlerinin sunulması</li>
        <li>Platform deneyiminin kişiselleştirilmesi</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
      </ul>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Veri Güvenliği
      </h2>
      <p>
        Verileriniz SSL şifreleme ve güvenli sunucu altyapısı ile korunur.
        Ödeme bilgileriniz doğrudan Femmiens sunucularında saklanmaz; lisanslı
        ödeme kuruluşları aracılığıyla işlenir.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Haklarınız
      </h2>
      <p>
        KVKK kapsamında verilerinize erişme, düzeltme, silme ve işlemeye itiraz
        etme haklarına sahipsiniz. Talepleriniz için{" "}
        <a href="mailto:kvkk@femmiens.com" className="text-fem-rose hover:underline">
          kvkk@femmiens.com
        </a>{" "}
        adresine yazabilirsiniz.
      </p>
    </LegalLayout>
  );
}
