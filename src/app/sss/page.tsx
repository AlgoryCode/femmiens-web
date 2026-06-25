import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Sıkça Sorulan Sorular — Femmiens",
  description: "Femmiens hakkında sık sorulan sorular ve yanıtları.",
};

const faqs = [
  {
    q: "Puan nasıl kazanılır?",
    a: "Alışverişleriniz, ürün yorumlarınız ve platform etkinliklerine katılımınızla puan kazanırsınız. 1 ₺ harcama = 5 puan.",
  },
  {
    q: "Puanlarım ne kadar süre geçerli?",
    a: "Kazandığınız puanlar 12 ay boyunca geçerlidir. Süresi dolan puanlar otomatik olarak silinir.",
  },
  {
    q: "Ayakta İşime Aparatı nasıl kullanılır?",
    a: "Ürünle birlikte gelen kullanım kılavuzunu takip edebilirsiniz. Detaylı bilgi için destek@femmiens.com adresine yazabilirsiniz.",
  },
  {
    q: "Kargo ücreti var mı?",
    a: "500 ₺ ve üzeri siparişlerde kargo ücretsizdir. Puanla yapılan siparişlerde de aynı koşul geçerlidir.",
  },
  {
    q: "Hesabımı nasıl silebilirim?",
    a: "Hesap silme talebinizi kvkk@femmiens.com adresine iletebilirsiniz. Talebiniz en geç 30 gün içinde işleme alınır.",
  },
];

export default function SssPage() {
  return (
    <LegalLayout
      title="Sıkça Sorulan Sorular"
      description="Merak ettiklerinizin yanıtları"
    >
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q} className="border-b border-fem-rose-light/30 pb-6 last:border-0">
            <h2 className="mb-2 font-serif text-base font-semibold text-fem-plum">
              {faq.q}
            </h2>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>
    </LegalLayout>
  );
}
