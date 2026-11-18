import React from "react";
import { Newspaper, ExternalLink, Quote, Award, Sparkles } from "lucide-react";
import { pressItems, GOOGLE_NEWS_QUERY_URL } from "../data/press";
import { useLanguage } from "../context/LanguageContext";

export const PressSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  return (
    <section id="basinda-biz" className="py-16 sm:py-24 bg-[var(--surface-2)]/50 border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bölüm Başlığı */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--plum)] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {t.pressSection.subtitle}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-1">
              {t.pressSection.title}
            </h2>
            <p className="text-sm sm:text-base opacity-80 mt-3 leading-relaxed">
              {t.pressSection.description}
            </p>
          </div>

          <a
            href={GOOGLE_NEWS_QUERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--ink)] hover:bg-[var(--plum)] text-[var(--surface)] text-xs sm:text-sm font-semibold transition shadow-sm shrink-0 self-start md:self-end"
          >
            <Newspaper className="w-4 h-4" />
            <span>{t.pressSection.googleNewsBtn}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Haber Kartları Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pressItems.map((item) => {
            const title = isEn && item.titleEn ? item.titleEn : item.title;
            const summary = isEn && item.summaryEn ? item.summaryEn : item.summary;
            const quote = isEn && item.quoteEn ? item.quoteEn : item.quote;
            const badge = isEn && item.badgeEn ? item.badgeEn : item.badge;
            const date = isEn && item.dateEn ? item.dateEn : item.date;

            return (
              <article
                key={item.id}
                className="bg-[var(--card)] p-6 sm:p-7 rounded-3xl border border-[var(--line)] shadow-xs flex flex-col justify-between group hover:shadow-md hover:border-[var(--plum)]/30 transition duration-300 relative"
              >
                <div className="space-y-4">
                  {/* Kaynak & Etiket */}
                  <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[var(--surface-2)] flex items-center justify-center text-[var(--plum)] border border-[var(--line)]">
                        <Newspaper className="w-3.5 h-3.5" />
                      </span>
                      <strong className="font-semibold text-xs text-[var(--ink)]">
                        {item.source}
                      </strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--surface-2)] text-[var(--plum)] border border-[var(--line)]">
                        {badge}
                      </span>
                      <span className="text-[11px] opacity-60 font-medium">
                        {date}
                      </span>
                    </div>
                  </div>

                  {/* Haber Başlığı */}
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold leading-snug group-hover:text-[var(--plum)] transition">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {title}
                    </a>
                  </h3>

                  {/* Haber Özeti */}
                  <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                    {summary}
                  </p>

                  {/* Alıntı Bloğu */}
                  {quote && (
                    <div className="p-3.5 rounded-xl bg-[var(--surface-2)]/60 border-l-2 border-[var(--mustard)] text-xs sm:text-[13px] opacity-90 italic flex gap-2.5">
                      <Quote className="w-4 h-4 shrink-0 text-[var(--mustard)] mt-0.5" />
                      <span>"{quote}"</span>
                    </div>
                  )}
                </div>

                {/* Kart Altı Link */}
                <div className="mt-5 pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs">
                  <span className="text-[11px] opacity-60 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[var(--olive)]" />
                    {isEn ? "Heritage & Living Craft Archive" : "Kültür & Zanaat Arşivi"}
                  </span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[var(--plum)] hover:underline"
                  >
                    <span>{t.pressSection.readMore}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
