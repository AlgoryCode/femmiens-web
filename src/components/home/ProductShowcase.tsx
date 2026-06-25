import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { featuredProduct } from "@/lib/products";

export function ProductShowcase() {
  return (
    <section id="urun" className="section-lavender relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-fem-rose uppercase">
            Öne Çıkan Ürün
          </p>
          <h2 className="font-serif text-3xl font-semibold text-fem-plum sm:text-4xl">
            {featuredProduct.name}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-fem-plum/65">
            {featuredProduct.tagline}
          </p>
        </div>

        <GlassCard shine variant="rose" className="overflow-hidden p-0">
          <div className="grid lg:grid-cols-2">
            <div className="relative flex min-h-[320px] items-center justify-center bg-gradient-to-br from-fem-rose-pale via-fem-lavender-pale to-fem-gold-light/40 p-10">
              <div className="relative">
                <div className="glass-rose h-56 w-56 rounded-3xl shadow-[0_20px_60px_rgba(201,120,138,0.2)]" />
                <div className="glass-lavender absolute -bottom-4 -right-4 h-20 w-20 rounded-2xl" />
                <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full border-2 border-fem-rose-light bg-fem-rose-pale/80" />
              </div>
              <span className="badge-rose absolute bottom-6 left-6 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                Yeni Sezon
              </span>
            </div>

            <div className="flex flex-col justify-center bg-surface/50 p-8 md:p-12">
              <p className="mb-6 leading-relaxed text-fem-plum/70">
                {featuredProduct.description}
              </p>

              <ul className="mb-8 space-y-3">
                {featuredProduct.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-fem-plum/80"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fem-rose-pale text-xs text-fem-rose">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mb-8 flex flex-wrap gap-4">
                <div className="glass-rose rounded-xl px-5 py-3">
                  <p className="text-xs text-fem-plum/55">Nakit Fiyat</p>
                  <p className="font-serif text-2xl font-semibold text-fem-plum">
                    ₺{featuredProduct.priceCash.toLocaleString("tr-TR")}
                  </p>
                </div>
                <div className="glass-lavender rounded-xl px-5 py-3">
                  <p className="text-xs text-fem-plum/55">Puan ile</p>
                  <p className="font-serif text-2xl font-semibold text-fem-lavender">
                    {featuredProduct.pricePoints.toLocaleString("tr-TR")} puan
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/magaza"
                  className="btn-primary flex h-11 items-center justify-center rounded-xl px-6 text-sm font-medium"
                >
                  Satın Al
                </Link>
                <Link
                  href="/magaza"
                  className="btn-secondary flex h-11 items-center justify-center rounded-xl px-6 text-sm font-medium"
                >
                  Puanla Al
                </Link>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
