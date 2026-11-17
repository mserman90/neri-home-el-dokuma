import React from "react";
import { Droplets, Wind, Shield, Layers, X, Check, Sparkles, Ruler } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const CraftSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  const features = [
    {
      icon: Droplets,
      t: t.craftSection.feature1Title,
      d: t.craftSection.feature1Desc,
    },
    {
      icon: Wind,
      t: t.craftSection.feature2Title,
      d: t.craftSection.feature2Desc,
    },
    {
      icon: Shield,
      t: t.craftSection.feature3Title,
      d: t.craftSection.feature3Desc,
    },
    {
      icon: Layers,
      t: t.craftSection.feature4Title,
      d: t.craftSection.feature4Desc,
    },
  ];

  return (
    <section id="zanaat" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sol Kolon: Zanaat ve Lif Teknolojisi */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--olive)]">
              {t.craftSection.subtitle}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold mt-1">
              {t.craftSection.title}
            </h2>
            <p className="text-sm sm:text-base opacity-80 mt-2 leading-relaxed">
              {t.craftSection.description}
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
            <p className="font-serif-display text-2xl font-bold">
              {isEn ? "Stitch by Stitch on the Loom" : "Tezgâhta İlmek İlmek"}
            </p>
            <p className="mt-2 text-sm opacity-80 leading-relaxed">
              {isEn
                ? "Every row progresses with the intuitive tactile memory of our artisans. Containing zero industrial shortcuts, these heirloom pieces are made to endure for generations."
                : "Ahşap el tezgâhında her sıra, ustanın el hafızasıyla ilerler. Fabrikasyon hiçbir parça barındırmayan bu kumaşlar, zamana meydan okuyan dayanıklılıklarıyla nesilden nesile aktarılır."}
            </p>
            <a
              href="#hikayemiz"
              className="mt-4 inline-flex px-4 py-2.5 rounded-xl bg-[var(--ink)] text-[var(--surface)] text-sm font-semibold hover:bg-[var(--plum)] transition"
            >
              {isEn ? "Read Our 1875 Story" : "1875 Hikâyemizi Oku"}
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
                <h3 className="font-serif-display text-2xl font-bold">
                  {isEn ? "Care & Usage Guide" : "Kullanım & Bakım Rehberi"}
                </h3>
                <p className="text-xs opacity-70">
                  {isEn ? "Preserving heirloom beauty for generations" : "Nesiller boyu ilk günkü formunu koruması için"}
                </p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm opacity-90">
              <li className="flex gap-2.5">
                <X className="w-4 h-4 text-[var(--mustard)] shrink-0 mt-0.5" />
                <span>
                  <strong>{isEn ? "Do Not Machine Wash: " : "Çamaşır Makinesinde Yıkanmaz: "}</strong>
                  {isEn
                    ? "To protect natural fibers and vegetable dyes, avoid machine washing or spin drying."
                    : "Doğal keçi kılı, yün lifleri ve kök boya tonlarını korumak için makinede yıkama ve sıkma yapmayınız."}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Check className="w-4 h-4 text-[var(--olive)] shrink-0 mt-0.5" />
                <span>
                  <strong>{isEn ? "Practical Cleaning: " : "Pratik Temizlik: "}</strong>
                  {isEn
                    ? "Gently wipe with a damp white cloth, vacuum on low suction, or use professional dry cleaning."
                    : "Nemli beyaz bir bezle nazikçe silebilir, elektrik süpürgesinin düşük ayarında tozunu alabilir veya profesyonel kuru temizleme yaptırabilirsiniz."}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Sparkles className="w-4 h-4 text-[var(--mustard)] shrink-0 mt-0.5" />
                <span>
                  <strong>{isEn ? "Softened Texture Comfort: " : "Yumuşatılmış Yüzey Konforu: "}</strong>
                  {isEn
                    ? "Through carding and wool blending, fibers are smooth and non-prickly against skin."
                    : "Özel tarama ve yün harmanlama işlemleri sayesinde lifleri pürüzsüzleştirilmiştir; sırt ve bel yastığı kullanımında batma yapmaz."}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Ruler className="w-4 h-4 text-[var(--brass)] shrink-0 mt-0.5" />
                <span>
                  <strong>{isEn ? "Artisan Uniqueness: " : "El İşçiliği Özgünlüğü: "}</strong>
                  {isEn
                    ? "Subtle dimensional variations (±1-2 cm) and natural fiber gradients reflect authentic handloom heritage."
                    : "El tezgâhında dokunduğu için ölçülerde ±1–2 cm farklılık ve doğal lif ton geçişleri görülebilir; bu durum her parçanın tek ve benzersiz olduğunun kanıtıdır."}
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/20">
              <blockquote className="font-serif-display italic text-base sm:text-lg leading-snug">
                {isEn
                  ? "“We call this zigzag motif ‘Waterway’; it embodies pure wellness. Weaving it on the loom feels like the serene quiet of clean mountain streams.”"
                  : "“Bu zikzak desenine ‘Su Yolu’ deriz; bedensel ve ruhsal sağlığı anlatır. Biz onu tezgâhta dokurken sanki dereden su akıyormuş gibi o dinginliği hissederiz.”"}
              </blockquote>
              <p className="text-xs text-[var(--mustard)] font-semibold mt-2">
                — {isEn ? "Master Weavers of Küçükyoncalı, Tekirdağ" : "Küçükyoncalı Dokuma Ustaları, Saray / Tekirdağ"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
