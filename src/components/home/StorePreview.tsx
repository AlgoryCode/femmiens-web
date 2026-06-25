import Link from "next/link";
import { ProductCard } from "@/components/store/ProductCard";
import { storeProducts } from "@/lib/products";

const previewProducts = storeProducts.slice(0, 3);

export function StorePreview() {
  return (
    <section className="section-rose relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <p className="mb-2 text-sm font-medium tracking-widest text-fem-rose uppercase">
              Mağaza
            </p>
            <h2 className="font-serif text-3xl font-semibold text-fem-plum sm:text-4xl">
              Kadınlara özel seçkiler
            </h2>
          </div>
          <Link
            href="/magaza"
            className="text-sm font-medium text-fem-rose transition-colors hover:text-fem-plum"
          >
            Tümünü Gör →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
