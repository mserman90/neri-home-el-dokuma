import React, { useState } from "react";
import { motifs } from "../data/motifs";
import { ArrowRight } from "lucide-react";

export const MotifDictionary: React.FC = () => {
  const [activeMotif, setActiveMotif] = useState(0);

  return (
    <section id="motifler" className="py-16 sm:py-24 bg-[var(--surface-2)] border-y border-[var(--line)] woven-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--plum)]">
            200 Yıllık Sandık Sembolleri
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-1">
            Motiflerin Gizli Dili
          </h2>
          <p className="text-sm sm:text-base opacity-80 mt-3">
            Küçükyoncalı dokumalarında hiçbir çizgi rastgele değildir. Bir motife dokunarak asırlık manasını ve taşıdığı dileği okuyabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Sol Kolon: Motif Kartları Izgarası */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {motifs.map((m, i) => (
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
                  <h3 className="font-serif-display text-2xl font-bold">{m.name}</h3>
                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${m.color}`}>
                    {m.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{m.desc}</p>
                <span className="text-xs font-bold text-[var(--plum)] inline-flex gap-1 items-center">
                  Hikâyeyi Seç <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            ))}
          </div>

          {/* Sağ Kolon: Sabit Seçili Motif Detay Panosu */}
          <aside className="bg-[var(--ink)] text-[var(--surface)] p-6 sm:p-8 rounded-3xl border border-[var(--brass)]/40 h-fit lg:sticky lg:top-28 shadow-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--mustard)] font-bold">
              Seçili Motif
            </p>
            <h3 className="font-serif-display text-3xl font-bold mt-2">
              {motifs[activeMotif].name}
            </h3>
            <span
              className={`inline-block mt-3 text-[11px] font-semibold px-3 py-1 rounded-full ${motifs[activeMotif].color}`}
            >
              {motifs[activeMotif].tag}
            </span>
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              {motifs[activeMotif].desc}
            </p>
            <p className="mt-5 pt-4 border-t border-white/20 text-xs opacity-80">
              Bu motifleri taşıyan özgün parçaları koleksiyonumuzda motif adıyla aratarak listeleyebilirsiniz.
            </p>
            <a
              href="#koleksiyon"
              className="mt-5 inline-flex px-5 py-2.5 rounded-xl bg-[var(--surface)] text-[var(--ink)] text-sm font-semibold hover:bg-[var(--mustard)] transition shadow-sm"
            >
              Koleksiyonda Ara
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};
