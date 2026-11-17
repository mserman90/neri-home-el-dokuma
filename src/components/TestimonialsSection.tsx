import React from "react";
import { testimonials } from "../data/testimonials";
import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const TestimonialsSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  return (
    <section id="yorumlar" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--plum)]">
          {t.testimonialsSection.subtitle}
        </span>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-1">
          {t.testimonialsSection.title}
        </h2>
        <p className="text-sm sm:text-base opacity-80 mt-3">
          {t.testimonialsSection.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => {
          const text = (isEn && item.textEn) ? item.textEn : item.text;
          const prodName = (isEn && item.productNameEn) ? item.productNameEn : item.productName;

          return (
            <div
              key={item.id}
              className="bg-[var(--card)] p-6 sm:p-7 rounded-3xl border border-[var(--line)] shadow-xs flex flex-col justify-between relative group hover:shadow-md transition"
            >
              <div className="space-y-3">
                {/* Yıldızlar ve Tarih */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[var(--mustard)]">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] opacity-60">{item.date}</span>
                </div>

                {/* Yorum Metni */}
                <p className="text-xs sm:text-sm opacity-85 leading-relaxed italic">
                  "{text}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--line)] flex items-center justify-between">
                <div>
                  <h4 className="font-serif-display font-bold text-base">{item.name}</h4>
                  <p className="text-[11px] opacity-70">{item.city}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[11px] font-semibold text-[var(--plum)] bg-[var(--surface-2)] px-2.5 py-1 rounded-lg border border-[var(--line)]">
                    {prodName}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
