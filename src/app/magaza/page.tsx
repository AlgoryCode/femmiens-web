import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/store/ProductCard";
import { storeProducts } from "@/lib/products";

export const metadata = {
  title: "Mağaza — Femmiens",
  description: "Puanla veya nakitle alışveriş yapın.",
};

const categories = [
  "Tümü",
  "Ana Ürün",
  "Aksesuar",
  "Bakım",
  "Wellness",
  "Yaşam",
];

export default function MagazaPage() {
  return (
    <>
      <div className="bg-orbs grid-overlay fixed inset-0" aria-hidden />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="section-lavender flex-1 px-4 pt-28 pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-sm font-medium tracking-widest text-fem-rose uppercase">
                  Femmiens Mağaza
                </p>
                <h1 className="font-serif text-4xl font-semibold text-fem-plum">
                  Mağaza
                </h1>
                <p className="mt-2 max-w-lg text-fem-plum/65">
                  Ürünleri nakit veya biriktirdiğiniz puanlarla satın alın.
                </p>
              </div>
              <div className="badge-lavender glass-lavender inline-flex items-center gap-2 self-start rounded-xl px-4 py-2.5 sm:self-auto">
                <span className="text-fem-gold">✦</span>
                <span className="text-sm text-fem-plum/65">Bakiyeniz:</span>
                <span className="font-serif text-lg font-semibold text-fem-lavender">
                  2.450 puan
                </span>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  type="button"
                  className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                    i === 0
                      ? "btn-primary"
                      : "glass-rose text-fem-plum/70 hover:text-fem-rose"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {storeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
