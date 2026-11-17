import React from "react";
import { Award, Stamp, CheckCircle, PackageCheck, FileCheck } from "lucide-react";

export const CertificateSection: React.FC = () => {
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
                <Award className="w-4 h-4" /> Coğrafi Menşe ve Zanaat Güvencesi
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold">
                Usta İmzalı Özgünlük & Menşe Belgesi
              </h2>
              <p className="text-sm sm:text-base opacity-85 leading-relaxed">
                Her bir Neri Home dokuması, seri üretim fabrikasyon ürünlerden tamamen farklıdır. Satın aldığınız her parça ile birlikte, atölyemizin resmi mührünü ve eseri ilmek ilmek dokuyan ustanın ıslak imzasını taşıyan <strong>Özgünlük Sertifikası</strong> gönderilir.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-[var(--olive)] shrink-0 mt-0.5" />
                  <span><strong>Dokuyan Usta İmzası:</strong> Eseri tezgâhta tamamlayan ustanın adı ve tamamlanma tarihi.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <Stamp className="w-4 h-4 text-[var(--plum)] shrink-0 mt-0.5" />
                  <span><strong>Küçükyoncalı Menşe Mührü:</strong> Tekirdağ Saray yöresine ait tescilli geleneksel motif kaydı.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <FileCheck className="w-4 h-4 text-[var(--brass)] shrink-0 mt-0.5" />
                  <span><strong>%100 Doğal Lif Onayı:</strong> Boyasız ham keçi kılı ve kök boyalı yün içerik garantisi.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <PackageCheck className="w-4 h-4 text-[var(--olive)] shrink-0 mt-0.5" />
                  <span><strong>Özel Hediye Ambalajı:</strong> Çeyiz ve prestijli kurumsal hediyeler için koruyucu özel kılıf.</span>
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
                    Geleneksel El Dokuma Sertifikası
                  </h3>
                </div>

                <div className="space-y-2 text-xs opacity-90">
                  <div className="flex justify-between py-1 border-b border-[var(--line)]/50">
                    <span className="opacity-70">Ürün Tescili:</span>
                    <strong className="text-[var(--plum)]">Neri Home Koleksiyonu</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--line)]/50">
                    <span className="opacity-70">Dokuma Tekniği:</span>
                    <strong>Ahşap Tezgâh Çift Yüzlü Cicim</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--line)]/50">
                    <span className="opacity-70">Hammadde:</span>
                    <strong>%100 Keçi Kılı & Koyun Yünü</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--line)]/50">
                    <span className="opacity-70">Menşe:</span>
                    <strong>Küçükyoncalı (Küçükmanika)</strong>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] block opacity-70">Atölye Sorumlusu</span>
                    <span className="font-serif-display text-base font-bold text-[var(--ink)] italic">
                      Neriman Çakır
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-[var(--plum)] flex items-center justify-center text-[9px] font-bold text-[var(--plum)] uppercase text-center leading-tight">
                    Mühürlü<br />1875
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
