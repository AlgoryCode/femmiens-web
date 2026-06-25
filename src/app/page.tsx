import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { PointsSystem } from "@/components/home/PointsSystem";
import { StorePreview } from "@/components/home/StorePreview";

export default function Home() {
  return (
    <>
      <div className="bg-orbs grid-overlay fixed inset-0" aria-hidden />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <ProductShowcase />
          <PointsSystem />
          <StorePreview />
        </main>
        <Footer />
      </div>
    </>
  );
}
