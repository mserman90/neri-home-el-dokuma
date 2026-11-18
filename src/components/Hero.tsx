import React from "react";
import { Sparkles, Phone, ArrowDownRight } from "lucide-react";
import { waLink } from "../utils/formatters";
import { imgFullFlat, imgNery741Lifestyle, imgRunnerTable } from "../data/products";
import { useLanguage } from "../context/LanguageContext";

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="border-b border-[var(--line)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Sol Kolon: Metin ve Slogan */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--brass)]/40 text-[11px] sm:text-xs font-semibold max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-[var(--plum)] shrink-0" />
              <span className="truncate">{t.hero.badge}</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.18] sm:leading-[1.12]">
              {t.hero.title1}{" "}
              <span className="text-[var(--plum)] italic block sm:inline">
                {lang === "tr" ? "Dokunur, Yaşatılır" : "Woven & Alive"}
              </span>{" "}
              {t.hero.title2}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90">
              {t.hero.description}
            </p>

            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="bg-[var(--surface-2)] p-2.5 sm:p-3.5 rounded-xl border border-[var(--line)]">
                <div className="font-serif-display text-lg sm:text-2xl font-bold text-[var(--plum)]">
                  {lang === "tr" ? "84 İlmek" : "84 Knots"}
                </div>
                <div className="text-[10px] sm:text-xs opacity-80 mt-0.5 leading-tight">
                  {lang === "tr" ? "Milimetrik Simetri" : "Loom Symmetry"}
                </div>
              </div>
              <div className="bg-[var(--surface-2)] p-2.5 sm:p-3.5 rounded-xl border border-[var(--line)]">
                <div className="font-serif-display text-lg sm:text-2xl font-bold text-[var(--olive)]">
                  {lang === "tr" ? "3–10 Gün" : "3–10 Days"}
                </div>
                <div className="text-[10px] sm:text-xs opacity-80 mt-0.5 leading-tight">
                  {lang === "tr" ? "Sıfır Hata İşçilik" : "Handloom Weaving"}
                </div>
              </div>
              <div className="bg-[var(--surface-2)] p-2.5 sm:p-3.5 rounded-xl border border-[var(--line)]">
                <div className="font-serif-display text-lg sm:text-2xl font-bold text-[var(--mustard)]">
                  {lang === "tr" ? "%100 Doğal" : "100% Natural"}
                </div>
                <div className="text-[10px] sm:text-xs opacity-80 mt-0.5 leading-tight">{t.hero.stat2Label}</div>
              </div>
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
              <a
                href="#koleksiyon"
                className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[var(--ink)] text-[var(--surface)] font-semibold text-xs sm:text-sm hover:bg-[var(--plum)] transition flex items-center justify-center gap-2 shadow-sm text-center"
              >
                {t.hero.exploreBtn} <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href={waLink(lang === "tr" ? "Merhaba Neriman Hanım, Nery Home koleksiyonu hakkında bilgi almak istiyorum." : "Hello Ms. Neriman, I would like to inquire about the Nery Home collection.")}
                target="_blank"
                rel="noopener"
                className="w-full sm:w-auto px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-[var(--surface-2)] border border-[var(--brass)]/50 font-semibold text-xs sm:text-sm hover:bg-[var(--surface-3)] transition flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-[var(--olive)]" /> {t.common.quickWhatsApp}
              </a>
            </div>
          </div>

          {/* Sağ Kolon: Kompozisyon Kartı */}
          <div className="lg:col-span-6 mt-4 lg:mt-0">
            <div className="relative bg-[var(--surface-2)] p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-[var(--line)] shadow-xl">
              <div className="hidden sm:block absolute -top-3.5 right-6 bg-[var(--plum)] text-white text-[11px] sm:text-xs font-semibold px-4 py-1.5 rounded-full shadow">
                {lang === "tr" ? "Sınırlı Sayıda El Üretimi • Usta İmzalı" : "Limited Edition • Artisan Signed"}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-end">
                {/* Ana Büyük Görsel */}
                <div className="sm:col-span-7 bg-[var(--card)] p-2.5 sm:p-3 rounded-2xl border border-[var(--line)]">
                  <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-xl overflow-hidden">
                    <img
                      src={imgFullFlat}
                      alt="Tam Seçki"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[var(--ink)]/90 text-[var(--surface)] text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      {lang === "tr" ? "Tam Seçki" : "Full Collection"}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between items-center text-xs">
                    <div>
                      <p className="font-bold leading-tight">{lang === "tr" ? "Küçükyoncalı Koleksiyonu" : "Küçükyoncalı Set"}</p>
                      <p className="text-[10px] sm:text-[11px] opacity-70">{lang === "tr" ? "Kırlent, Çanta & Runner" : "Cushion, Bag & Runner"}</p>
                    </div>
                    <span className="font-bold text-[var(--plum)] text-[11px]">
                      {lang === "tr" ? "Atölye Seçkisi" : "Studio Selection"}
                    </span>
                  </div>
                </div>

                {/* Küçük Yan Görseller */}
                <div className="grid grid-cols-2 sm:grid-cols-1 sm:col-span-5 gap-2.5 sm:gap-3">
                  <div className="bg-[var(--card)] p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border border-[var(--line)]">
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden">
                      <img
                        src={imgNery741Lifestyle}
                        alt="Berjerde Nery 741"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 bg-[var(--ink)]/90 text-[var(--surface)] text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {lang === "tr" ? "Berjerde" : "Armchair"}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[var(--card)] p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border border-[var(--line)]">
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden">
                      <img
                        src={imgRunnerTable}
                        alt="Sofrada Runner"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 bg-[var(--ink)]/90 text-[var(--surface)] text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full">
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
