import React from "react";
import { Droplets, Wind, Shield, Layers, X, Check, Sparkles, Ruler } from "lucide-react";

export const CraftSection: React.FC = () => {
  const features = [
    {
      icon: Droplets,
      t: "Su İtici & Dört Mevsim Kullanım",
      d: "Keçi kılı doğal yapısı gereği suyu iter ve nemi hapsetmez. Salonunuzun yanı sıra balkon, teras ve kış bahçelerinde güvenle kullanılır.",
    },
    {
      icon: Wind,
      t: "Nefes Alan Termal Denge",
      d: "Doğal lif yapısı kışın sıcak, yazın serin tutar. Terletmez, koku yapmaz ve yıl boyu konforlu bir oturma deneyimi sağlar.",
    },
    {
      icon: Shield,
      t: "Antistatik, Toz & Güve Tutmaz",
      d: "Sentetik kumaşlar gibi elektriklenme yapmaz; tozu içine çekmez ve doğal yapısı sayesinde güve gibi tekstil zararlılarını uzak tutar.",
    },
    {
      icon: Layers,
      t: "Modern Terzilik: Astar & Gizli Fermuar",
      d: "84 ilmeklik simetriyle (“3 al, 2 bırak”) dokunan kumaşlarımız, iç astar ve gizli fermuar işçiliğiyle günlük kullanıma uygun dikilir.",
    },
  ];

  return (
    <section id="zanaat" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sol Kolon: Zanaat ve Lif Teknolojisi */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--olive)]">
              Doğal Lif Teknolojisi & Zanaat
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold mt-1">
              Neden Keçi Kılı ve Cicim Dokuma?
            </h2>
            <p className="text-sm sm:text-base opacity-80 mt-2 leading-relaxed">
              Cicim dokuma; çözgü ve atkı iplikleriyle oluşturulan sık zemin dokusunun üzerine, dokuma sırasında renkli desen ipliklerinin sıkıştırılmasıyla elde edilen <strong>kabartmalı ve çift yüzlü</strong> kadim bir el dokuma tekniğidir.
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
            <p className="font-serif-display text-2xl font-bold">Tezgâhta İlmek İlmek</p>
            <p className="mt-2 text-sm opacity-80 leading-relaxed">
              Ahşap el tezgâhında her sıra, ustanın el hafızasıyla ilerler. Fabrikasyon hiçbir parça barındırmayan bu kumaşlar, zamana meydan okuyan dayanıklılıklarıyla nesilden nesile aktarılır.
            </p>
            <a
              href="#hikayemiz"
              className="mt-4 inline-flex px-4 py-2.5 rounded-xl bg-[var(--ink)] text-[var(--surface)] text-sm font-semibold hover:bg-[var(--plum)] transition"
            >
              1875 Hikâyemizi Oku
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
                <h3 className="font-serif-display text-2xl font-bold">Kullanım & Bakım Rehberi</h3>
                <p className="text-xs opacity-70">Nesiller boyu ilk günkü formunu koruması için</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm opacity-90">
              <li className="flex gap-2.5">
                <X className="w-4 h-4 text-[var(--mustard)] shrink-0 mt-0.5" />
                <span>
                  <strong>Çamaşır Makinesinde Yıkanmaz:</strong> Doğal keçi kılı, yün lifleri ve kök boya tonlarını korumak için makinede yıkama ve sıkma yapmayınız.
                </span>
              </li>
              <li className="flex gap-2.5">
                <Check className="w-4 h-4 text-[var(--olive)] shrink-0 mt-0.5" />
                <span>
                  <strong>Pratik Temizlik:</strong> Nemli beyaz bir bezle nazikçe silebilir, elektrik süpürgesinin düşük ayarında tozunu alabilir veya profesyonel kuru temizleme yaptırabilirsiniz.
                </span>
              </li>
              <li className="flex gap-2.5">
                <Sparkles className="w-4 h-4 text-[var(--mustard)] shrink-0 mt-0.5" />
                <span>
                  <strong>Yumuşatılmış Yüzey Konforu:</strong> Özel tarama ve yün harmanlama işlemleri sayesinde lifleri pürüzsüzleştirilmiştir; sırt ve bel yastığı kullanımında batma yapmaz.
                </span>
              </li>
              <li className="flex gap-2.5">
                <Ruler className="w-4 h-4 text-[var(--brass)] shrink-0 mt-0.5" />
                <span>
                  <strong>El İşçiliği Özgünlüğü:</strong> El tezgâhında dokunduğu için ölçülerde ±1–2 cm farklılık ve doğal lif ton geçişleri görülebilir; bu durum her parçanın tek ve benzersiz olduğunun kanıtıdır.
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/20">
              <blockquote className="font-serif-display italic text-base sm:text-lg leading-snug">
                “Bu zikzak desenine ‘Su Yolu’ deriz; bedensel ve ruhsal sağlığı anlatır. Biz onu tezgâhta dokurken sanki dereden su akıyormuş gibi o dinginliği hissederiz.”
              </blockquote>
              <p className="text-xs text-[var(--mustard)] font-semibold mt-2">
                — Küçükyoncalı Dokuma Ustaları, Saray / Tekirdağ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
