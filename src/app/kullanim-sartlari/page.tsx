import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Kullanım Şartları — Femmiens",
  description: "Femmiens platform kullanım şartları ve koşulları.",
};

export default function KullanimSartlariPage() {
  return (
    <LegalLayout
      title="Kullanım Şartları"
      description="Son güncelleme: 25 Haziran 2026"
    >
      <p>
        Femmiens web sitesini ve hizmetlerini kullanarak aşağıdaki şartları
        kabul etmiş sayılırsınız. Lütfen platformu kullanmadan önce bu metni
        dikkatlice okuyunuz.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Hizmet Kapsamı
      </h2>
      <p>
        Femmiens; kadınlara yönelik ürün satışı, puanla alışveriş sistemi ve
        ilgili dijital hizmetleri sunar. Platform içeriği ve ürün yelpazesi
        önceden haber verilmeksizin güncellenebilir.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Üyelik ve Hesap Güvenliği
      </h2>
      <p>
        Hesabınızın güvenliğinden siz sorumlusunuz. Şifrenizi üçüncü kişilerle
        paylaşmamanız ve şüpheli bir durum fark ettiğinizde bize derhal
        bildirmeniz gerekir.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Puan Sistemi
      </h2>
      <p>
        Kazanılan puanlar belirtilen süre içinde geçerlidir ve devredilemez.
        Hile, sahte işlem veya sistem kötüye kullanımı tespit edilen puanlar
        iptal edilebilir.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Sorumluluk Sınırı
      </h2>
      <p>
        Femmiens, yasal çerçevede izin verilen ölçüde; teknik arızalar, üçüncü
        taraf hizmet kesintileri veya mücbir sebeplerden kaynaklanan
        aksaklıklardan sorumlu tutulamaz.
      </p>
    </LegalLayout>
  );
}
