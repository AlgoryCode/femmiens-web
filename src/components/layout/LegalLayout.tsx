import Link from "next/link";
import { type ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface LegalLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function LegalLayout({ title, description, children }: LegalLayoutProps) {
  return (
    <>
      <div className="bg-orbs grid-overlay fixed inset-0" aria-hidden />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-4 pt-28 pb-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-1 text-sm text-fem-plum/65 transition-colors hover:text-fem-rose"
            >
              ← Ana Sayfa
            </Link>
            <div className="glass-rose rounded-2xl p-8 md:p-12">
              <p className="mb-2 text-sm font-medium tracking-widest text-fem-rose uppercase">
                Femmiens
              </p>
              <h1 className="font-serif mb-3 text-3xl font-semibold text-fem-plum">
                {title}
              </h1>
              <p className="mb-8 text-sm text-fem-plum/60">{description}</p>
              <div className="space-y-5 text-sm leading-relaxed text-fem-plum/75">
                {children}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
