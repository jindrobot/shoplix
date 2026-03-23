import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obchodní podmínky — Shoplix",
  description: "Obchodní podmínky služby Shoplix.",
};

export default function ObchodniPodminkyPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-3xl px-6">
        <nav className="mb-10 flex items-center gap-2 text-sm text-text-dim">
          <Link href="/" className="transition-colors hover:text-text-muted">
            Shoplix
          </Link>
          <span>/</span>
          <span className="text-text-muted">Obchodní podmínky</span>
        </nav>

        <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
          Obchodní podmínky
        </h1>
        <p className="mt-3 text-text-muted">
          Platné od 1. 1. 2025
        </p>

        <div className="terms-content mt-12 space-y-10 text-sm leading-relaxed text-text-muted">
          <section>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
              I. Provozovatel
            </h2>
            <div className="rounded-xl border border-border bg-bg-card p-5 text-sm">
              <p><strong className="text-text">Šárka Váňová</strong></p>
              <p>IČO: 10817395</p>
              <p>Nová 1415/54, Střekov</p>
              <p>400 03 Ústí nad Labem</p>
              <p>Česká republika</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
              II. Úvodní ustanovení
            </h2>
            <p>
              Tyto obchodní podmínky (dále jen „podmínky") upravují vztahy mezi
              provozovatelem služby Shoplix (dále jen „poskytovatel") a uživateli
              služeb (dále jen „zákazník"). Podmínky se vztahují na všechny služby
              a produkty nabízené prostřednictvím webu shoplix.cz.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
              III. Předmět smlouvy
            </h2>
            <p>
              Předmětem smlouvy je poskytování softwarových nástrojů pro e-commerce
              (QuickCSV, StockAlert, SEO Meta, ShopSync Lite, ReviewBoost, OrderFlow,
              ShopSync Pro, PriceGuard) formou jednorázové licence. Poskytovatel se
              zavazuje zpřístupnit zákazníkovi vybraný produkt po zaplacení licence.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
              IV. Objednávka a uzavření smlouvy
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                Objednávka se považuje za závaznou okamžikem jejího odeslání
                prostřednictvím webového formuláře.
              </li>
              <li>
                Smlouva je uzavřena okamžikem potvrzení objednávky ze strany
                poskytovatele.
              </li>
              <li>
                Každý nový zákazník má nárok na 14denní zkušební období zdarma,
                pokud není uvedeno jinak.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
              V. Ceny a platební podmínky
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Ceny jsou uvedeny bez DPH.</li>
              <li>
                Platba se provádí jednorázově při nákupu licence.
              </li>
              <li>
                Akceptujeme platby kartou a bankovním převodem.
              </li>
              <li>
                V případě prodlení s platbou delším než 14 dní je poskytovatel
                oprávněn omezit přístup k službě.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
              VI. Zkušební období a zrušení
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                Zkušební období trvá 14 dní od aktivace a nevyžaduje zadání
                platební karty.
              </li>
              <li>
                Po uplynutí zkušebního období se služba automaticky neúčtuje —
                zákazník musí aktivně přejít na placený plán.
              </li>
              <li>
                Předplatné lze zrušit kdykoli s účinností ke konci aktuálního
                fakturačního období.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
              VII. Reklamace a odstoupení od smlouvy
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                Zákazník má právo odstoupit od smlouvy do 14 dnů od uzavření
                bez udání důvodu.
              </li>
              <li>
                Reklamace vyřizujeme e-mailem na adrese podpora@shoplix.cz
                v zákonné lhůtě 30 dnů.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
              VIII. Odpovědnost a omezení
            </h2>
            <p>
              Poskytovatel neodpovídá za škody vzniklé nesprávným použitím služby,
              výpadky třetích stran (e-shopové platformy, přepravci) nebo za ušlý
              zisk. Poskytovatel se zavazuje k dostupnosti služby min. 99,5 % času
              v měsíci.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
              IX. Ochrana osobních údajů
            </h2>
            <p>
              Zpracování osobních údajů se řídí nařízením GDPR (EU 2016/679).
              Podrobnosti o zpracování, účelech a právech subjektů údajů jsou
              dostupné na vyžádání.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-text">
              X. Závěrečná ustanovení
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                Tyto podmínky se řídí právním řádem České republiky.
              </li>
              <li>
                Poskytovatel si vyhrazuje právo podmínky jednostranně změnit.
                O změnách bude zákazník informován e-mailem nejméně 30 dní
                předem.
              </li>
              <li>
                Případné spory budou řešeny příslušným soudem v České republice.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
