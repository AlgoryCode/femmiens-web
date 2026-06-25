import Link from "next/link";

export function Hero() {
  return (
    <section className="section-rose relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-28 pb-16">
      <div className="mx-auto max-w-4xl text-center">
        <div className="badge-rose glass-shine mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
          <span className="h-2 w-2 rounded-full bg-fem-rose shadow-[0_0_8px_rgba(201,120,138,0.7)]" />
          Kadınlar için özel platform
        </div>

        <h1 className="font-serif mb-6 text-5xl font-semibold leading-tight tracking-tight text-fem-plum sm:text-6xl md:text-7xl">
          Konforunuz,{" "}
          <span className="text-gradient">şıklığınız</span>
          <br />
          önceliğimiz
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-fem-plum/70">
          Femmiens; ayakta çalışan kadınlar için tasarlanan ürünler, puanla
          alışveriş imkânı ve özenle seçilmiş mağaza deneyimi sunar.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#urun"
            className="btn-primary group flex h-12 min-w-[180px] items-center justify-center rounded-xl px-6 text-sm font-medium"
          >
            Ürünü Keşfet
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/magaza"
            className="btn-secondary flex h-12 min-w-[180px] items-center justify-center rounded-xl px-6 text-sm font-medium"
          >
            Mağazaya Git
          </Link>
        </div>
      </div>
    </section>
  );
}
