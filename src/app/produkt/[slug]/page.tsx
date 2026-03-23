import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct } from "@/lib/products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Shoplix`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-5xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-text-dim">
          <Link href="/" className="transition-colors hover:text-text-muted">
            Shoplix
          </Link>
          <span>/</span>
          <Link
            href="/#produkty"
            className="transition-colors hover:text-text-muted"
          >
            Produkty
          </Link>
          <span>/</span>
          <span className="text-text-muted">{product.name}</span>
        </nav>

        {/* Hero */}
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <div
              className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
              style={{
                backgroundColor: product.colorLight,
                color: product.color,
              }}
            >
              {product.icon}
            </div>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-text-muted">{product.tagline}</p>
            <p className="mt-6 max-w-xl leading-relaxed text-text-muted">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/pokladna"
                className="inline-flex h-12 items-center gap-2 rounded-xl px-7 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: product.color }}
              >
                Koupit za {product.priceFormatted}/měs
              </Link>
              <span className="text-sm text-text-dim">
                14 dní zdarma · Bez karty
              </span>
            </div>
          </div>

          {/* Stats */}
          {product.stats && (
            <div className="flex flex-col gap-4 md:col-span-2">
              {product.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-bg-card p-5"
                >
                  <div className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-text-dim">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Funkce */}
        <section className="mt-24">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
            Co umí {product.name}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {product.detailFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-bg-card p-6"
              >
                <div className="mb-3 text-2xl">{f.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Všechny funkce */}
        <section className="mt-24">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
            Kompletní výčet funkcí
          </h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span
                  className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md text-xs text-white"
                  style={{ backgroundColor: product.color }}
                >
                  ✓
                </span>
                <span className="text-text-muted">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Integrace */}
        {product.integrations && (
          <section className="mt-24">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
              Podporované integrace
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {product.integrations.map((name) => (
                <span
                  key={name}
                  className="rounded-lg border border-border bg-bg-elevated px-4 py-2 text-sm text-text-muted"
                >
                  {name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-24 rounded-2xl border border-border bg-bg-card p-10 text-center md:p-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
            Vyzkoušejte {product.name} zdarma
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-muted">
            14 dní bez omezení, bez zadání karty. Po skončení se nic
            automaticky neúčtuje.
          </p>
          <Link
            href="/pokladna"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl px-7 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: product.color }}
          >
            Začít trial zdarma
          </Link>
        </section>
      </div>
    </div>
  );
}
