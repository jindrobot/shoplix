"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/i18n";

export default function ObchodniPodminkyPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-3xl px-6">
        <nav className="mb-10 flex items-center gap-2 text-sm text-text-dim">
          <Link href="/" className="transition-colors hover:text-text-muted">
            Modkit
          </Link>
          <span>/</span>
          <span className="text-text-muted">{t.terms.breadcrumb}</span>
        </nav>

        <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
          {t.terms.title}
        </h1>
        <p className="mt-3 text-text-muted">
          {t.terms.effectiveDate}
        </p>

        <div className="terms-content mt-12 space-y-10 text-sm leading-relaxed text-text-muted">
          {t.terms.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
                {section.title}
              </h2>
              {section.isCard ? (
                <div
                  className="rounded-xl border border-border bg-bg-card p-5 text-sm [&_strong]:text-text"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              ) : section.isList ? (
                <ol className="list-decimal space-y-2 pl-5">
                  {section.content.split("\n").map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ) : (
                <p>{section.content}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
