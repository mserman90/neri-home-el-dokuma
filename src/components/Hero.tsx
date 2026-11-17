import React from "react";
import { Sparkles, Phone, ArrowDownRight } from "lucide-react";
import { waLink } from "../utils/formatters";
import { imgFullFlat, imgLivingSofa, imgRunnerTable } from "../data/products";
import { useLanguage } from "../context/LanguageContext";

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Sol Kolon: Metin ve Slogan */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--brass)]/40 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[var(--plum)]" /> {t.hero.badge}
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12]">
              {t.hero.title1}{" "}
              <span className="text-[var(--plum)] italic">
                {lang === "tr" ? "Dokunur, Yaşatılır" : "Woven & Alive"}
              </span>{" "}
              {t.hero.title2}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-90">
              {t.hero.description}
            </p>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-[var(--surface-2)] p-3.5 rounded-xl border border-[var(--line)]">
                <div className="font-serif-display text-2xl font-bold text-[var(--plum)]">
                  {lang === "tr" ? "84 İlmek" : "84 Knots"}
                </div>
                <div className="text-xs opacity-80 mt-0.5">
                  {lang === "tr" ? "Milimetrik Tezgâh Simetrisi" : "Millimetric Loom Symmetry"}
                </div>
              </div>
              <div className="bg-[var(--surface-2)] p-3.5 rounded-xl border border-[var(--line)]">
                <div className="font-serif-display text-2xl font-bold text-[var(--olive)]">
                  {lang === "tr" ? "3–10 Gün" : "3–10 Days"}
                </div>
                <div className="text-xs opacity-80 mt-0.5">
                  {lang === "tr" ? "Sıfır Hata El Dokuması" : "Master Handloom Weaving"}
                </div>
              </div>
              <div className="bg-[var(--surface-2)] p-3.5 rounded-xl border border-[var(--line)] col-span-2 sm:col-span-1">
                <div className="font-serif-display text-2xl font-bold text-[var(--mustard)]">%100 Doğal</div>
                <div className="text-xs opacity-80 mt-0.5">{t.hero.stat2Label}</div>
              </div>
            </div>

            {/* Aksiyon Linkleri */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#koleksiyon"
                className="px-6 py-3.5 rounded-xl bg-[var(--ink)] text-[var(--surface)] font-semibold text-sm hover:bg-[var(--plum)] transition flex items-center gap-2 shadow-sm"
              >
                {t.hero.exploreBtn} <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href={waLink("Merhaba Neriman Hanım, Neri Home koleksiyonu hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener"
                className="px-5 py-3.5 rounded-xl bg-[var(--surface-2)] border border-[var(--brass)]/50 font-semibold text-sm hover:bg-[var(--surface-3)] transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[var(--olive)]" /> {t.common.quickWhatsApp}
              </a>
            </div>
          </div>

          {/* Sağ Kolon: Kompozisyon Kartı */}
          <div className="lg:col-span-6">
            <div className="relative bg-[var(--surface-2)] p-5 sm:p-7 rounded-3xl border border-[var(--line)] shadow-xl">
              <div className="absolute -top-3.5 right-6 bg-[var(--plum)] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow">
                {lang === "tr" ? "Sınırlı Sayıda El Üretimi • Usta İmzalı" : "Limited Edition • Artisan Signed"}
              </div>

              <div className="grid grid-cols-12 gap-4 items-end">
                <div className="col-span-7 bg-[var(--card)] p-3 rounded-2xl border border-[var(--line)]">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <img
                      src={imgFullFlat}
                      alt="Tam Seçki"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[var(--ink)]/90 text-[var(--surface)] text-[11px] font-semibold px-3 py-1.5 rounded-full">
                      {lang === "tr" ? "Tam Seçki" : "Full Collection"}
                    </span>
                  </div>
                  <div className="mt-2.5 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold">{lang === "tr" ? "Küçükyoncalı Tam Seçki" : "Küçükyoncalı Set"}</p>
                      <p className="text-[11px] opacity-70">{lang === "tr" ? "Kırlent, Çanta & Runner" : "Cushion, Bag & Runner"}</p>
                    </div>
                    <span className="text-xs font-bold text-[var(--plum)]">
                      {lang === "tr" ? "Atölye Seçkisi" : "Studio Selection"}
                    </span>
                  </div>
                </div>

                <div className="col-span-5 space-y-4">
                  <div className="bg-[var(--card)] p-3 rounded-2xl border border-[var(--line)]">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                      <img
                        src={imgLivingSofa}
                        alt="Salon Kombini"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-[var(--ink)]/90 text-[var(--surface)] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        {lang === "tr" ? "Salonda" : "Living Room"}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[var(--card)] p-3 rounded-2xl border border-[var(--line)]">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                      <img
                        src={imgRunnerTable}
                        alt="Sofrada Runner"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-[var(--ink)]/90 text-[var(--surface)] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        {lang === "tr" ? "Sofrada" : "Dining Table"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
