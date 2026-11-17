import React, { useState } from "react";
import { faqs } from "../data/faqs";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const FaqSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="sss" className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--plum)]">
          {t.faqSection.subtitle}
        </span>
        <h2 className="font-serif-display text-3xl sm:text-4xl font-bold mt-1">
          {t.faqSection.title}
        </h2>
        <p className="text-sm opacity-80 mt-2">
          {t.faqSection.description}
        </p>
      </div>

      <div className="space-y-3.5">
        {faqs.map((f, i) => {
          const qText = (isEn && f.qEn) ? f.qEn : f.q;
          const aText = (isEn && f.aEn) ? f.aEn : f.a;

          return (
            <div
              key={f.q}
              className="bg-[var(--surface-2)]/70 rounded-2xl border border-[var(--line)] overflow-hidden transition"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                className="w-full flex items-center justify-between gap-3 p-5 text-left font-serif-display text-xl font-bold hover:text-[var(--plum)] transition cursor-pointer"
              >
                <span>{qText}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--plum)] shrink-0 transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <p className="px-5 pb-5 text-xs sm:text-sm opacity-85 leading-relaxed border-t border-[var(--line)]/40 pt-3">
                  {aText}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
