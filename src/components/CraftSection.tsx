import React from "react";
import { Sparkles, Wind, Layers, Check, ShieldCheck, Shirt } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const CraftSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  const features = [
    {
      icon: Shirt,
      t: t.craftSection.feature1Title,
      d: t.craftSection.feature1Desc,
    },
    {
      icon: Sparkles,
      t: t.craftSection.feature2Title,
      d: t.craftSection.feature2Desc,
    },
    {
      icon: Layers,
      t: t.craftSection.feature3Title,
      d: t.craftSection.feature3Desc,
    },
    {
      icon: Wind,
      t: t.craftSection.feature4Title,
      d: t.craftSection.feature4Desc,
    },
  ];

  return (
    <section id="zanaat" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sol Kolon: Zanaat ve Lif Teknolojisi */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--olive)]">
              {t.craftSection.subtitle}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold mt-1">
              {t.craftSection.title}
            </h2>
            <p className="text-sm sm:text-base opacity-80 mt-2 leading-relaxed">
              {t.craftSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.t}
                className="p-5 rounded-2xl bg-[var(--surface-2)]/70 border border-[var(--line)] space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--ink)] text-[var(--mustard)] flex items-center justify-center">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display text-xl font-bold">{f.t}</h3>
                <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface-2)] p-6">
            <p className="font-serif-display text-2xl font-bold">
              {isEn ? "Stitch by Stitch on Wooden Looms" : "Tezgâhta İlmek İlmek Doğallık"}
            </p>
            <p className="mt-2 text-sm opacity-80 leading-relaxed">
              {isEn
                ? "Bringing Anatolia's traditional weaves to contemporary living spaces. With the legacy of the past, we weave a sustainable future."
                : "Anadolu'nun geleneksel dokumalarını modern yaşam alanları ile buluşturuyoruz. Ahşap tezgâhlarda kök boyalı saf yünle dokunan her parça, geçmişin mirasıyla sürdürülebilir bir gelecek kurar."}
            </p>
            <a
              href="#hikayemiz"
              className="mt-4 inline-flex px-4 py-2.5 rounded-xl bg-[var(--ink)] text-[var(--surface)] text-sm font-semibold hover:bg-[var(--plum)] transition"
            >
              {isEn ? "Read Our Heritage Story" : "Mirasımızın Hikâyesini Oku"}
            </a>
          </div>
        </div>

        {/* Sağ Kolon: Kullanım ve Bakım Rehberi */}
        <div className="lg:col-span-5">
          <div className="bg-[var(--ink)] text-[var(--surface)] p-6 sm:p-8 rounded-3xl shadow-xl border border-[var(--brass)]/40 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[var(--plum)] flex items-center justify-center font-serif-display font-bold text-lg border border-[var(--brass)]">
                NH
              </div>
              <div>
                <h3 className="font-serif-display text-2xl font-bold">
                  {isEn ? "Care & Usage Guide" : "Kullanım & Bakım Talimatı"}
                </h3>
                <p className="text-xs opacity-70">
                  {isEn ? "Official Nery Home garment & textile care" : "Nery Home resmi bakım ve kullanım kılavuzu"}
                </p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm opacity-90">
              <li className="flex gap-2.5">
                <Check className="w-4 h-4 text-[var(--olive)] shrink-0 mt-0.5" />
                <span>
                  <strong>{isEn ? "30°C Delicate & Hand Wash: " : "30°C Yün Hassas Yıkama: "}</strong>
                  {isEn
                    ? "Suitable for machine washing at 30°C on wool/delicate cycle and for gentle hand washing."
                    : "Ürün, makinenin yün hassas ayarında 30 derecede yıkamaya ve elde yıkamaya uygundur."}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Check className="w-4 h-4 text-[var(--mustard)] shrink-0 mt-0.5" />
                <span>
                  <strong>{isEn ? "Iron-Safe: " : "Ütülenebilir: "}</strong>
                  {isEn
                    ? "The natural wool and cotton fibers can be safely ironed at low to medium wool temperatures."
                    : "Ürün, düşük/orta ısıda yün ayarında rahatlıkla ütülenebilir."}
                </span>
              </li>
              <li className="flex gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[var(--brass)] shrink-0 mt-0.5" />
                <span>
                  <strong>{isEn ? "100% Cotton Canvas Lining: " : "%100 Pamuk Ham Bez Astar: "}</strong>
                  {isEn
                    ? "Crafted with 100% unbleached natural cotton fabric for back lining and inner casing."
                    : "Dokuma kırlentin arkasında ve iç astarında %100 pamuk ham bez kullanılmıştır."}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Sparkles className="w-4 h-4 text-[var(--olive)] shrink-0 mt-0.5" />
                <span>
                  <strong>{isEn ? "Resilient Bead Fiber Insert: " : "Boncuk Elyaf Dolgusu: "}</strong>
                  {isEn
                    ? "Filled with premium bead fiber padding that retains fullness and bounce over years."
                    : "Kırlentin dolgu malzemesi, formunu kaybetmeyen birinci sınıf boncuk elyaftır."}
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/20">
              <blockquote className="font-serif-display italic text-base sm:text-lg leading-snug">
                {isEn
                  ? "“Bringing Anatolia's traditional weaves to contemporary living spaces. With the legacy of the past, we weave a sustainable future.”"
                  : "“Anadolu'nun geleneksel dokumalarını modern yaşam alanları ile buluşturuyoruz. Geçmişin mirasıyla, sürdürülebilir bir gelecek dokuyoruz.”"}
              </blockquote>
              <p className="text-xs text-[var(--mustard)] font-semibold mt-2">
                — Nery Home, Küçükyoncalı / Tekirdağ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
