import { GlassCard } from "@/components/ui/GlassCard";

const steps = [
  {
    step: "01",
    title: "Üye Ol",
    description:
      "Femmiens ailesine katılın ve hoş geldin puanlarınızı kazanın.",
    variant: "rose" as const,
  },
  {
    step: "02",
    title: "Puan Kazan",
    description:
      "Alışverişleriniz, yorumlarınız ve etkinliklere katılımınızla puan biriktirin.",
    variant: "lavender" as const,
  },
  {
    step: "03",
    title: "Alışveriş Yap",
    description:
      "Biriktirdiğiniz puanlarla mağazamızdan ürün alın veya nakit ödeyin.",
    variant: "rose" as const,
  },
];

export function PointsSystem() {
  return (
    <section id="puan" className="section-warm relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-fem-lavender uppercase">
            Puan Sistemi
          </p>
          <h2 className="font-serif text-3xl font-semibold text-fem-plum sm:text-4xl">
            Puanla veya nakitle alışveriş
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-fem-plum/65">
            İstediğiniz ödeme yöntemini seçin — esneklik sizin elinizde.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item, index) => (
            <GlassCard
              key={item.step}
              variant={item.variant}
              shine={index === 1}
            >
              <span className="font-serif text-3xl font-light text-fem-gold">
                {item.step}
              </span>
              <h3 className="mt-4 mb-2 font-serif text-xl font-semibold text-fem-plum">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-fem-plum/65">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>

        <GlassCard variant="lavender" className="mt-8 text-center">
          <p className="text-sm text-fem-plum/70">
            <span className="font-semibold text-fem-rose">1 ₺ = 5 puan</span>{" "}
            kazanma oranı · Puanlarınız 12 ay geçerlidir
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
