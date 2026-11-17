import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const HistorySection: React.FC = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  const steps = [
    {
      y: isEn ? "1875 • The Great Rumelian Migration" : "1875 • Büyük Rumeli Göçü",
      t: isEn ? "Journey from the Balkans to Thrace" : "Balkanlar’dan Tekirdağ’a Yolculuk",
      d: isEn
        ? "Families carried century-old motifs, loom memories, and hope to Tekirdağ Saray Küçükyoncalı (historically known as Küçükmanika)."
        : "Aileler, çeyiz sandıklarında sakladıkları asırlık motifleri, tezgâh hafızalarını ve yaşama umutlarını Tekirdağ Saray Küçükyoncalı’ya (tarihi adıyla Küçükmanika) taşıdı.",
    },
    {
      y: isEn ? "The Silent Language of Chests" : "Sandıkların Sessiz Dili",
      t: isEn ? "Prayers Woven into Stitches" : "İlmeklere Dönüşen Dualar",
      d: isEn
        ? "Waterway, Migration Routes, Burdock, and Three Roses were woven by mothers and daughters to express hospitality, joy, and spiritual protection."
        : "Su Yolu, Göç Yolları, Pıtrak ve Üç Güller motifleri; sevinçleri, koruyucu inançları ve misafirperverliği anlatmak üzere genç kızların ve annelerin ellerinde dokundu.",
    },
    {
      y: isEn ? "Today • A Living Women's Atelier" : "Bugün • Yaşayan Kadın Atölyesi",
      t: isEn ? "Wooden Handlooms of Master Artisans" : "Kadın Ustaların Ahşap Tezgâhı",
      d: isEn
        ? "Led by Neriman Çakır, these motifs continue on wooden looms with raw undyed goat hair and wool, bringing soulful heritage to contemporary living spaces."
        : "Aynı motifler, Tekirdağ Saray atölyemizde Neriman Çakır öncülüğündeki kadın dokuma ustalarımızın ellerinde boyasız keçi kılı ve yünle modern evlere yeniden can veriyor.",
    },
  ];

  return (
    <section id="hikayemiz" className="py-16 sm:py-24 bg-[var(--surface-2)] border-y border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Kolon: Zaman Çizelgesi */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--plum)]">
              {t.historySection.subtitle}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-1">
              {t.historySection.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base opacity-80 leading-relaxed">
              {t.historySection.description}
            </p>

            <ol className="mt-8 space-y-0">
              {steps.map((s) => (
                <li
                  key={s.y}
                  className="relative pl-10 pb-8 border-l-2 border-[var(--brass)]/50 last:pb-0"
                >
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--plum)] border-2 border-[var(--surface)]" />
                  <p className="text-xs font-bold text-[var(--plum)] uppercase tracking-wider">
                    {s.y}
                  </p>
                  <h3 className="font-serif-display text-2xl font-bold mt-0.5">{s.t}</h3>
                  <p className="text-sm opacity-80 mt-1.5 leading-relaxed">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Sağ Kolon: Atölye Kartı */}
          <div className="rounded-3xl border border-[var(--line)] shadow-xl bg-[var(--card)] p-4 sm:p-5">
            <div className="w-full aspect-[4/3] rounded-2xl bg-[var(--surface-2)] flex flex-col items-center justify-center gap-3 text-center px-6 py-8 border border-[var(--line)]">
              <div className="w-14 h-14 rounded-full bg-[var(--plum)] text-white flex items-center justify-center font-serif-display text-xl font-bold shadow">
                1875
              </div>
              <p className="font-serif-display text-3xl font-bold text-[var(--ink)]">
                {isEn ? "Küçükyoncalı Atelier" : "Küçükyoncalı Atölyesi"}
              </p>
              <p className="text-sm opacity-80 max-w-sm leading-relaxed">
                {isEn
                  ? "A timeless handweaving heritage where every centimeter is crafted with human dedication. Support women master weavers directly."
                  : "Ahşap tezgâhta, her santimetresi hesaplanarak devam eden kadim dokuma geleneği. Kadın üreticilerimizin emeğini doğrudan evinizde yaşatın."}
              </p>
              <p className="text-xs font-bold text-[var(--plum)] uppercase tracking-widest mt-1">
                Saray • Tekirdağ
              </p>
            </div>
            <div className="px-3 py-3.5 flex justify-between items-center text-xs opacity-80">
              <span className="font-semibold">
                {isEn ? "Nery Home Women Weaving Collective" : "Nery Home Kadın Dokuma İnisiyatifi"}
              </span>
              <span>Küçükyoncalı</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
