import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "KVKK Aydınlatma Metni — Femmiens",
  description: "6698 sayılı KVKK kapsamında aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <LegalLayout
      title="KVKK Aydınlatma Metni"
      description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında"
    >
      <p>
        Femmiens olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (&quot;KVKK&quot;) uyarınca veri sorumlusu sıfatıyla kişisel
        verilerinizi aşağıda açıklanan çerçevede işlemekteyiz.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Veri Sorumlusu
      </h2>
      <p>
        Femmiens<br />
        E-posta: kvkk@femmiens.com
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        İşlenen Kişisel Veriler
      </h2>
      <p>
        Kimlik, iletişim, müşteri işlem, pazarlama ve güvenlik verileriniz;
        üyelik, alışveriş ve puan işlemleri kapsamında işlenebilir.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Hukuki Sebepler
      </h2>
      <p>
        Verileriniz; sözleşmenin kurulması ve ifası, hukuki yükümlülüklerin
        yerine getirilmesi ve meşru menfaatlerimiz kapsamında KVKK&apos;nın
        5. ve 6. maddelerine uygun olarak işlenir.
      </p>

      <h2 className="font-serif text-lg font-semibold text-fem-plum">
        Başvuru Hakkı
      </h2>
      <p>
        KVKK&apos;nın 11. maddesi kapsamındaki taleplerinizi yazılı olarak
        veya kayıtlı elektronik posta (KEP) yoluyla iletebilirsiniz. Başvurular
        en geç 30 gün içinde yanıtlanır.
      </p>
    </LegalLayout>
  );
}
