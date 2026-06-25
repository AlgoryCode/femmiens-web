import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Mesafeli Satış Sözleşmesi — Femmiens",
  description: "Femmiens mesafeli satış sözleşmesi ve ön bilgilendirme.",
};

export default function MesafeliSatisPage() {
  return (
    <LegalLayout
      title="Mesafeli Satış Sözleşmesi"
      description="6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında"
    >
      <p>
        Bu sözleşme, Femmiens üzerinden yapılan mesafeli satışlara ilişkin
        tarafların hak ve yükümlülüklerini düzenler.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Satıcı Bilgileri
      </h2>
      <p>
        Unvan: Femmiens<br />
        E-posta: destek@femmiens.com<br />
        Telefon: 0850 000 00 00
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Ürün ve Fiyat
      </h2>
      <p>
        Sipariş anında sitede görüntülenen ürün özellikleri, fiyatlar ve
        teslimat koşulları geçerlidir. Puanla alışverişlerde puan karşılığı
        değer, sipariş onay ekranında belirtilir.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Teslimat
      </h2>
      <p>
        Ürünler, sipariş onayından itibaren en geç 30 gün içinde teslim
        edilir. Teslimat süresi ürün sayfasında ayrıca belirtilebilir.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Cayma Hakkı
      </h2>
      <p>
        Tüketici, ürünü teslim aldığı tarihten itibaren 14 gün içinde cayma
        hakkını kullanabilir. Cayma hakkının kullanılması için detaylı bilgi
        İade & Değişim sayfamızda yer almaktadır.
      </p>
    </LegalLayout>
  );
}
