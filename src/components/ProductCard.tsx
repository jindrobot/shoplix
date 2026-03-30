"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";
import { useTranslations } from "@/lib/i18n";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const t = useTranslations();

  return (
    <Link
      href={`/produkt/${product.slug}`}
      className="group relative flex flex-col rounded-2xl border border-border bg-bg-card transition-all duration-300 hover:border-border-light hover:bg-bg-card-hover hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
    >
      {/* Badge */}
      {product.badge && (
        <div
          className="absolute -top-2.5 right-4 z-10 rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white"
          style={{
            backgroundColor:
              product.badge === "bestseller" ? "#E8553A" : "#10B981",
          }}
        >
          {product.badge === "bestseller"
            ? t.productCard.badgeBestseller
            : t.productCard.badgeNew}
        </div>
      )}

      {/* Accent bar */}
      <div
        className="h-1 w-full rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
        style={{ backgroundColor: product.color }}
      />

      <div className="flex flex-1 flex-col p-7 md:p-8">
        {/* Icon */}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-xl"
          style={{
            backgroundColor: product.colorLight,
            color: product.color,
          }}
        >
          {product.icon}
        </div>

        {/* Content */}
        <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
          {product.tagline}
        </p>

        {/* Features */}
        <ul className="mt-6 flex-1 space-y-2.5">
          {product.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-text-muted"
            >
              <span
                className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full"
                style={{ backgroundColor: product.color }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-8 flex items-end justify-between">
          <div>
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold">
              {product.priceFormatted}
            </span>
          </div>
          <span
            className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-300 group-hover:scale-105"
            style={{
              backgroundColor: product.colorLight,
              color: product.color,
            }}
          >
            {t.productCard.detail}
          </span>
        </div>
      </div>
    </Link>
  );
}
