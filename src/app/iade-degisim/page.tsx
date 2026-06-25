import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "İade & Değişim — Femmiens",
  description: "Femmiens iade ve değişim koşulları.",
};

export default function IadeDegisimPage() {
  return (
    <LegalLayout
      title="İade & Değişim"
      description="Kolay ve şeffaf iade süreci"
    >
      <p>
        Femmiens olarak alışveriş deneyiminizden memnun kalmanızı önemsiyoruz.
        Ürünlerinizi aşağıdaki koşullarda iade edebilir veya değiştirebilirsiniz.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Cayma Süresi
      </h2>
      <p>
        Mesafeli satışlarda ürünü teslim aldığınız tarihten itibaren 14 gün
        içinde hiçbir gerekçe göstermeksizin iade talebinde bulunabilirsiniz.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        İade Koşulları
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Ürün kullanılmamış ve orijinal ambalajında olmalıdır</li>
        <li>Fatura veya sipariş numarası ibraz edilmelidir</li>
        <li>Hijyen ürünlerinde ambalaj açılmamış olmalıdır</li>
      </ul>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        İade Süreci
      </h2>
      <p>
        destek@femmiens.com adresine sipariş numaranızı belirterek iade talebi
        oluşturabilirsiniz. Onay sonrası kargo bilgileri tarafınıza iletilir.
        Ücret iadesi, ürün depomuza ulaştıktan sonra 14 iş günü içinde
        yapılır.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Puanla Alınan Ürünler
      </h2>
      <p>
        Puanla satın alınan ürünlerin iadesinde, ödenen puan tutarı hesabınıza
        iade edilir. Nakit ödemeli kısımlar banka hesabınıza yansıtılır.
      </p>
    </LegalLayout>
  );
}
