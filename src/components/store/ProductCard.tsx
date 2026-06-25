"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [mode, setMode] = useState<"puan" | "nakit">("nakit");

  return (
    <GlassCard
      variant={product.featured ? "rose" : "lavender"}
      className="flex h-full flex-col p-0"
    >
      <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-fem-rose-pale to-fem-lavender-pale">
        <div className="glass-rose h-24 w-24 rounded-2xl" />
        {product.badge && (
          <span className="badge-rose absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-xs font-medium">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1 text-xs font-medium tracking-wide text-fem-lavender uppercase">
          {product.category}
        </p>
        <h3 className="font-serif mb-2 text-lg font-semibold text-fem-plum">
          {product.name}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-fem-plum/65">
          {product.description}
        </p>

        <div className="mb-4 flex rounded-lg bg-fem-rose-pale/60 p-0.5">
          <button
            type="button"
            onClick={() => setMode("nakit")}
            className={`flex-1 rounded-md py-1.5 text-xs font-medium transition-all ${
              mode === "nakit"
                ? "bg-white text-fem-rose shadow-sm"
                : "text-fem-plum/55 hover:text-fem-plum"
            }`}
          >
            Nakit
          </button>
          <button
            type="button"
            onClick={() => setMode("puan")}
            className={`flex-1 rounded-md py-1.5 text-xs font-medium transition-all ${
              mode === "puan"
                ? "bg-white text-fem-lavender shadow-sm"
                : "text-fem-plum/55 hover:text-fem-plum"
            }`}
          >
            Puan
          </button>
        </div>

        <div className="mb-4">
          {mode === "nakit" ? (
            <p className="font-serif text-xl font-semibold text-fem-plum">
              ₺{product.priceCash.toLocaleString("tr-TR")}
            </p>
          ) : (
            <p className="font-serif text-xl font-semibold text-fem-lavender">
              {product.pricePoints.toLocaleString("tr-TR")} puan
            </p>
          )}
        </div>

        <button
          type="button"
          className={`w-full rounded-xl py-2.5 text-sm font-medium ${
            mode === "nakit" ? "btn-primary" : "btn-secondary"
          }`}
        >
          {mode === "nakit" ? "Sepete Ekle" : "Puanla Al"}
        </button>
      </div>
    </GlassCard>
  );
}
