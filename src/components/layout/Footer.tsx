import Link from "next/link";

const platformLinks = [
  { href: "/#urun", label: "Ayakta İşime Aparatı" },
  { href: "/magaza", label: "Mağaza" },
  { href: "/#puan", label: "Puan Sistemi" },
  { href: "/sss", label: "Sıkça Sorulan Sorular" },
];

const legalLinks = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/kullanim-sartlari", label: "Kullanım Şartları" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
  { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
  { href: "/mesafeli-satis-sozlesmesi", label: "Mesafeli Satış Sözleşmesi" },
  { href: "/iade-degisim", label: "İade & Değişim" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-fem-rose-light/50 bg-fem-rose-pale/40 px-4 pt-14 pb-8">
      <div className="mx-auto max-w-6xl">
        {/* Üst bölüm — marka + sütunlar */}
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marka */}
          <div className="lg:col-span-1">
            <p className="font-serif text-xl font-semibold text-fem-plum">
              Femmiens
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fem-plum/65">
              Kadınlar için tasarlanmış ürünler, puanla alışveriş imkânı ve
              özenle seçilmiş bir mağaza deneyimi. Konforunuz ve şıklığınız
              bizim önceliğimiz.
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm text-fem-plum/60">
              <a
                href="mailto:destek@femmiens.com"
                className="transition-colors hover:text-fem-rose"
              >
                destek@femmiens.com
              </a>
              <span>0850 000 00 00</span>
              <span>Pzt–Cum, 09:00–18:00</span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-fem-rose uppercase">
              Platform
            </p>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fem-plum/65 transition-colors hover:text-fem-rose"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-fem-lavender uppercase">
              Yasal
            </p>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fem-plum/65 transition-colors hover:text-fem-rose"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bülten */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-fem-gold uppercase">
              Bülten
            </p>
            <p className="mb-4 text-sm leading-relaxed text-fem-plum/65">
              Yeni ürünler, kampanyalar ve puan fırsatlarından haberdar olun.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="glass-rose w-full rounded-xl px-4 py-2.5 text-sm text-fem-plum placeholder:text-fem-plum/40 focus:outline-none focus:ring-1 focus:ring-fem-rose/40"
              />
              <button
                type="submit"
                className="btn-primary rounded-xl py-2.5 text-sm font-medium"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-fem-rose-light/40 pt-6 sm:flex-row">
          <p className="text-center text-xs text-fem-plum/50 sm:text-left">
            © {new Date().getFullYear()} Femmiens. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {legalLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-fem-plum/45 transition-colors hover:text-fem-rose"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
