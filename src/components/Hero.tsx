import React from "react";
import { Sparkles, Phone, ArrowDownRight, Shield } from "lucide-react";
import { waLink } from "../utils/formatters";
import { imgFullFlat, imgLivingSofa, imgRunnerTable } from "../data/products";

export const Hero: React.FC = () => {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Sol Kolon: Metin ve Slogan */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--brass)]/40 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[var(--plum)]" /> Tekirdağ Saray Küçükyoncalı • 200 Yıllık Sandık Mirası
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12]">
              Bazı Miraslar Yalnızca Anlatılmaz; <span className="text-[var(--plum)] italic">Dokunur, Yaşatılır</span> ve Geleceğe Emanet Edilir.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-90">
              1875 yılında Rumeli’den Tekirdağ Küçükyoncalı’ya (<em>Küçükmanika</em>) göç eden ninelerimizin çeyiz sandıklarından çıkan 200 yıllık özgün motifler; kadın dokuma ustalarımızın ahşap el tezgâhlarında doğal <strong>keçi kılı ve yün</strong> ipliklerle yeniden hayat buluyor.
            </p>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-[var(--surface-2)] p-3.5 rounded-xl border border-[var(--line)]">
                <div className="font-serif-display text-2xl font-bold text-[var(--plum)]">84 İlmek</div>
                <div className="text-xs opacity-80 mt-0.5">Milimetrik Tezgâh Simetrisi</div>
              </div>
              <div className="bg-[var(--surface-2)] p-3.5 rounded-xl border border-[var(--line)]">
                <div className="font-serif-display text-2xl font-bold text-[var(--olive)]">3–10 Gün</div>
                <div className="text-xs opacity-80 mt-0.5">Sıfır Hata El Dokuması</div>
              </div>
              <div className="bg-[var(--surface-2)] p-3.5 rounded-xl border border-[var(--line)] col-span-2 sm:col-span-1">
                <div className="font-serif-display text-2xl font-bold text-[var(--mustard)]">%100 Doğal</div>
                <div className="text-xs opacity-80 mt-0.5">Keçi Kılı & Kök Boya Tonları</div>
              </div>
            </div>

            {/* Aksiyon Linkleri */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#koleksiyon"
                className="px-6 py-3.5 rounded-xl bg-[var(--ink)] text-[var(--surface)] font-semibold text-sm hover:bg-[var(--plum)] transition flex items-center gap-2 shadow-sm"
              >
                Koleksiyonu Keşfet <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href={waLink("Merhaba Neriman Hanım, Neri Home koleksiyonu hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener"
                className="px-5 py-3.5 rounded-xl bg-[var(--surface-2)] border border-[var(--brass)]/50 font-semibold text-sm hover:bg-[var(--surface-3)] transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[var(--olive)]" /> Neriman Çakır ile İletişime Geç
              </a>
            </div>
          </div>

          {/* Sağ Kolon: Kompozisyon Kartı */}
          <div className="lg:col-span-6">
            <div className="relative bg-[var(--surface-2)] p-5 sm:p-7 rounded-3xl border border-[var(--line)] shadow-xl">
              <div className="absolute -top-3.5 right-6 bg-[var(--plum)] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow">
                Sınırlı Sayıda El Üretimi • Usta İmzalı
              </div>

              <div className="grid grid-cols-12 gap-4 items-end">
                <div className="col-span-7 bg-[var(--card)] p-3 rounded-2xl border border-[var(--line)]">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <img
                      src={imgFullFlat}
                      alt="Tam Seçki — pencere önünde yastıklar, 2 büzgülü çanta ve 3 boncuklu runner parçası"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[var(--ink)]/90 text-[var(--surface)] text-[11px] font-semibold px-3 py-1.5 rounded-full">
                      Tam Seçki
                    </span>
                  </div>
                  <div className="mt-2.5 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold">Küçükyoncalı Tam Seçki</p>
                      <p className="text-[11px] opacity-70">Kırlent, Çanta & Runner</p>
                    </div>
                    <span className="text-xs font-bold text-[var(--plum)]">Gerçek Atölye Fotoğrafı</span>
                  </div>
                </div>

                <div className="col-span-5 space-y-4">
                  <div className="bg-[var(--card)] p-3 rounded-2xl border border-[var(--line)]">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                      <img
                        src={imgLivingSofa}
                        alt="Ganos Salon Kombini"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-[var(--ink)]/90 text-[var(--surface)] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        Salonda
                      </span>
                    </div>
                    <div className="p-1.5">
                      <p className="text-xs font-bold">Ganos Salon Kombini</p>
                      <p className="text-[11px] opacity-70 mt-0.5 line-clamp-2">Su Yolu & Dolay Yastık — zikzak motifli bel yastığı ile berjer ve koltuk uyumu.</p>
                      <a href="#koleksiyon" className="mt-2 inline-flex text-xs font-bold text-[var(--plum)] hover:underline">
                        Koleksiyonda Gör →
                      </a>
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
                        Sofrada
                      </span>
                    </div>
                    <div className="p-1.5">
                      <p className="text-xs font-bold">Gül Motifli Runner</p>
                      <p className="text-[11px] opacity-70 mt-0.5 line-clamp-2">El dizimi boncuk püsküllü ve gül motifli zarif masa runner'ı.</p>
                      <a href="#koleksiyon" className="mt-2 inline-flex text-xs font-bold text-[var(--plum)] hover:underline">
                        Koleksiyonda Gör →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-[var(--line)] flex justify-between items-center text-xs">
                <span className="flex items-center gap-1.5 font-medium">
                  <Shield className="w-4 h-4 text-[var(--olive)]" /> Gizli Fermuarlı & Kaliteli İç Astarlı Terzilik
                </span>
                <span className="font-semibold text-[var(--brass)]">Saray / Tekirdağ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dokuma Zikzak Bordürü */}
      <div className="w-full h-4 bg-[var(--ink)] flex items-center justify-center overflow-hidden" aria-hidden="true">
        <svg className="w-full h-3" preserveAspectRatio="none" viewBox="0 0 1200 12" fill="none">
          <path
            d="M0 6 L15 1 L30 11 L45 1 L60 11 L75 1 L90 11 L105 1 L120 11 L135 1 L150 11 L165 1 L180 11 L195 1 L210 11 L225 1 L240 11 L255 1 L270 11 L285 1 L300 11 L315 1 L330 11 L345 1 L360 11 L375 1 L390 11 L405 1 L420 11 L435 1 L450 11 L465 1 L480 11 L495 1 L510 11 L525 1 L540 11 L555 1 L570 11 L585 1 L600 11 L615 1 L630 11 L645 1 L660 11 L675 1 L690 11 L705 1 L720 11 L735 1 L750 11 L765 1 L780 11 L795 1 L810 11 L825 1 L840 11 L855 1 L870 11 L885 1 L900 11 L915 1 L930 11 L945 1 L960 11 L975 1 L990 11 L1005 1 L1020 11 L1035 1 L1050 11 L1065 1 L1080 11 L1095 1 L1110 11 L1125 1 L1140 11 L1155 1 L1170 11 L1185 1 L1200 6"
            stroke="#B89B3E"
            strokeWidth="1.8"
          />
        </svg>
      </div>
    </section>
  );
};
