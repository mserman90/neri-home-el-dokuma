import React from "react";
import { testimonials } from "../data/testimonials";
import { Star, CheckCircle, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="yorumlar" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--plum)]">
          Sosyal Kanıt & Memnuniyet
        </span>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-1">
          Neri Home ile Yaşayan Evler
        </h2>
        <p className="text-sm sm:text-base opacity-80 mt-3">
          El dokumalarımızı evlerine, projelerine ve günlük yaşamlarına katan değerli misafirlerimizin gerçek deneyimleri.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[var(--card)] p-6 sm:p-7 rounded-3xl border border-[var(--line)] shadow-xs flex flex-col justify-between relative group hover:shadow-md transition"
          >
            <div className="space-y-3">
              {/* Yıldızlar ve Tarih */}
              <div className="flex items-center justify-between">
                <div className="flex text-[var(--mustard)]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] opacity-60">{t.date}</span>
              </div>

              {/* Yorum Metni */}
              <p className="text-xs sm:text-sm opacity-85 leading-relaxed italic">
                "{t.text}"
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--line)] flex items-center justify-between">
              <div>
                <h4 className="font-serif-display font-bold text-base">{t.name}</h4>
                <p className="text-[11px] opacity-70">{t.city}</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--olive)]">
                  <CheckCircle className="w-3 h-3" /> Doğrulanmış Sipariş
                </span>
                <span className="block text-[10px] opacity-70">{t.productName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
