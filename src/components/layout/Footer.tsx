import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-fem-rose-light/50 bg-fem-rose-pale/30 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-serif text-lg font-semibold text-fem-plum">
              Femmiens
            </p>
            <p className="mt-1 max-w-sm text-sm text-fem-plum/65">
              Kadınlar için tasarlanmış ürünler, puanla alışveriş ve özenli
              deneyim.
            </p>
          </div>
          <div className="flex gap-8">
            <Link
              href="/#urun"
              className="text-sm text-fem-plum/65 transition-colors hover:text-fem-rose"
            >
              Ürün
            </Link>
            <Link
              href="/magaza"
              className="text-sm text-fem-plum/65 transition-colors hover:text-fem-rose"
            >
              Mağaza
            </Link>
            <a
              href="#"
              className="text-sm text-fem-plum/65 transition-colors hover:text-fem-rose"
            >
              Gizlilik
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-fem-plum/50 md:text-left">
          © {new Date().getFullYear()} Femmiens. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
