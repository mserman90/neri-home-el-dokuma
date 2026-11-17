import React from "react";
import { Award, Stamp, CheckCircle, PackageCheck, FileCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const CertificateSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  return (
    <section id="sertifika" className="py-16 sm:py-24 bg-[var(--surface-2)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--card)] rounded-3xl p-6 sm:p-12 border border-[var(--brass)]/50 shadow-xl relative overflow-hidden">
          {/* Arka Plan Mühür Fligranı */}
          <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none">
            <svg width="350" height="350" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" fill="none" />
              <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sol: Başlık ve Açıklamalar */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-2)] text-[var(--plum)] text-xs font-bold border border-[var(--line)]">
                <Award className="w-4 h-4" /> {t.certificateSection.badge}
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold">
                {t.certificateSection.title}
              </h2>
              <p className="text-sm sm:text-base opacity-85 leading-relaxed">
                {t.certificateSection.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-[var(--olive)] shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.certificateSection.p1Title}:</strong> {t.certificateSection.p1Desc}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <Stamp className="w-4 h-4 text-[var(--plum)] shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.certificateSection.p2Title}:</strong> {t.certificateSection.p2Desc}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <FileCheck className="w-4 h-4 text-[var(--brass)] shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.certificateSection.p3Title}:</strong> {t.certificateSection.p3Desc}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <PackageCheck className="w-4 h-4 text-[var(--olive)] shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.certificateSection.p4Title}:</strong> {t.certificateSection.p4Desc}
                  </span>
                </div>
              </div>
            </div>

            {/* Sağ: Temsili Sertifika Görünümü */}
            <div className="lg:col-span-5">
              <div className="bg-[var(--surface)] p-6 sm:p-7 rounded-2xl border-2 border-[var(--brass)] shadow-lg space-y-4 relative">
                <div className="text-center pb-3 border-b border-[var(--line)]">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--brass)] font-bold block">
                    Tekirdağ Saray Küçükyoncalı
                  </span>
                  <h3 className="font-serif-display text-2xl font-bold text-[var(--ink)] mt-0.5">
                    {isEn ? "Traditional Handloom Certificate" : "Geleneksel El Dokuma Sertifikası"}
                  </h3>
                </div>

                <div className="space-y-2 text-xs opacity-90">
                  <div className="flex justify-between py-1 border-b border-[var(--line)]/50">
                    <span className="opacity-70">{isEn ? "Registration:" : "Ürün Tescili:"}</span>
                    <strong className="text-[var(--plum)]">Neri Home Collection</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--line)]/50">
                    <span className="opacity-70">{isEn ? "Weaving Technique:" : "Dokuma Tekniği:"}</span>
                    <strong>{isEn ? "Double-Sided Wooden Loom Cicim" : "Ahşap Tezgâh Çift Yüzlü Cicim"}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--line)]/50">
                    <span className="opacity-70">{isEn ? "Raw Materials:" : "Hammadde:"}</span>
                    <strong>{isEn ? "100% Goat Hair & Virgin Wool" : "%100 Keçi Kılı & Koyun Yünü"}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--line)]/50">
                    <span className="opacity-70">{isEn ? "Provenance:" : "Menşe:"}</span>
                    <strong>Küçükyoncalı (Küçükmanika)</strong>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] block opacity-70">
                      {isEn ? "Master Artisan" : "Atölye Sorumlusu"}
                    </span>
                    <span className="font-serif-display text-base font-bold text-[var(--ink)] italic">
                      Neriman Çakır
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-[var(--plum)] flex items-center justify-center text-[9px] font-bold text-[var(--plum)] uppercase text-center leading-tight">
                    {isEn ? "SEALED\n1875" : "Mühürlü\n1875"}
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
