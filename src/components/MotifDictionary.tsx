import React, { useState } from "react";
import { motifs } from "../data/motifs";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const MotifDictionary: React.FC = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";
  const [activeMotif, setActiveMotif] = useState(0);

  const cur = motifs[activeMotif];
  const curName = (isEn && cur.nameEn) ? cur.nameEn : cur.name;
  const curTag = (isEn && cur.tagEn) ? cur.tagEn : cur.tag;
  const curDesc = (isEn && cur.descEn) ? cur.descEn : cur.desc;

  return (
    <section id="motifler" className="py-16 sm:py-24 bg-[var(--surface-2)] border-y border-[var(--line)] woven-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--plum)]">
            {t.motifsSection.subtitle}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-1">
            {t.motifsSection.title}
          </h2>
          <p className="text-sm sm:text-base opacity-80 mt-3">
            {t.motifsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Sol Kolon: Motif Kartları Izgarası */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {motifs.map((m, i) => {
              const name = (isEn && m.nameEn) ? m.nameEn : m.name;
              const tag = (isEn && m.tagEn) ? m.tagEn : m.tag;
              const desc = (isEn && m.descEn) ? m.descEn : m.desc;

              return (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => setActiveMotif(i)}
                  aria-pressed={activeMotif === i}
                  className={`text-left p-6 rounded-2xl border shadow-xs space-y-3 transition ${
                    activeMotif === i
                      ? "bg-[var(--card)] border-[var(--plum)] ring-2 ring-[var(--plum)]/20 shadow-md"
                      : "bg-[var(--card)] border-[var(--line)] hover:border-[var(--brass)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif-display text-2xl font-bold">{name}</h3>
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${m.color}`}>
                      {tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{desc}</p>
                  <span className="text-xs font-bold text-[var(--plum)] inline-flex gap-1 items-center">
                    {t.motifsSection.selectStory} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sağ Kolon: Sabit Seçili Motif Detay Panosu */}
          <aside className="bg-[var(--ink)] text-[var(--surface)] p-6 sm:p-8 rounded-3xl border border-[var(--brass)]/40 h-fit lg:sticky lg:top-28 shadow-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--mustard)] font-bold">
              {t.motifsSection.selectedMotif}
            </p>
            <h3 className="font-serif-display text-3xl font-bold mt-2">
              {curName}
            </h3>
            <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-[var(--surface)]/10 text-[var(--mustard)] border border-[var(--mustard)]/30">
              {curTag}
            </span>
            <p className="mt-4 text-xs sm:text-sm opacity-85 leading-relaxed">
              {curDesc}
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs opacity-75 flex items-center justify-between">
              <span>{isEn ? "Küçükyoncalı / Tekirdağ" : "Tekirdağ / Küçükyoncalı"}</span>
              <span>{isEn ? "1875 Heritage" : "1875 Mirası"}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
