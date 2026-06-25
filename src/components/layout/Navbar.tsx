import Link from "next/link";

const navLinks = [
  { href: "/#urun", label: "Ürün" },
  { href: "/magaza", label: "Mağaza" },
  { href: "/#puan", label: "Puan Sistemi" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="glass-rose mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-fem-plum"
        >
          Femmiens
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-fem-plum/70 transition-colors hover:text-fem-rose"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="badge-lavender hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium sm:flex">
            <span className="text-fem-gold">✦</span>
            2.450 puan
          </span>
          <Link
            href="/magaza"
            className="btn-primary rounded-xl px-4 py-2 text-sm font-medium"
          >
            Mağazaya Git
          </Link>
        </div>
      </nav>
    </header>
  );
}
