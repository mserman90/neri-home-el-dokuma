import React from "react";
import { UserCheck, MapPin, Phone, MessageCircle } from "lucide-react";
import { PHONE, waLink } from "../utils/formatters";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  return (
    <footer id="iletisim" className="bg-[var(--surface-2)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 1. Sütun: Marka Tanıtımı */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[var(--ink)] flex items-center justify-center border border-[var(--brass)]">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M3 9L8 4L14 10L20 4L25 9" stroke="#F9F6F0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 16L8 11L14 17L20 11L25 16" stroke="#B89B3E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 23L8 18L14 24L20 18L25 23" stroke="#F9F6F0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-serif-display text-2xl font-bold">Neri Home</span>
            </div>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
              {t.footer.about}
            </p>
            <p className="text-xs font-semibold text-[var(--plum)] italic pt-1">
              {t.footer.quote}
            </p>
          </div>

          {/* 2. Sütun: Hızlı Bağlantılar */}
          <div className="space-y-2.5 text-sm">
            <h4 className="font-serif-display text-xl font-bold">{t.footer.col1Title}</h4>
            <ul className="space-y-2 opacity-80 text-xs sm:text-sm">
              <li>
                <a href="#koleksiyon" className="hover:text-[var(--plum)] transition">
                  {t.collection.title}
                </a>
              </li>
              <li>
                <a href="#yasam-alanlari" className="hover:text-[var(--plum)] transition">
                  {t.livingSpaces.title}
                </a>
              </li>
              <li>
                <a href="#motifler" className="hover:text-[var(--plum)] transition">
                  {t.motifsSection.title}
                </a>
              </li>
              <li>
                <a href="#sertifika" className="hover:text-[var(--plum)] transition">
                  {t.certificateSection.title}
                </a>
              </li>
              <li>
                <a href="#zanaat" className="hover:text-[var(--plum)] transition">
                  {t.craftSection.title}
                </a>
              </li>
            </ul>
          </div>

          {/* 3. ve 4. Sütun: Atölye ve Doğrudan İletişim */}
          <div className="space-y-3.5 text-sm lg:col-span-2">
            <h4 className="font-serif-display text-xl font-bold">{t.footer.col3Title}</h4>
            <address className="not-italic bg-[var(--card)] p-5 rounded-2xl border border-[var(--line)] space-y-3 text-xs sm:text-sm shadow-xs">
              <div className="flex gap-2.5">
                <UserCheck className="w-4 h-4 text-[var(--plum)] shrink-0 mt-0.5" />
                <span>
                  <strong>{isEn ? "Master Weaver & Founder:" : "İrtibat Yetkilisi:"}</strong> Neriman Çakır
                </span>
              </div>
              <div className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--plum)] shrink-0 mt-0.5" />
                <span>
                  <strong>{isEn ? "Address:" : "Adres:"}</strong> {t.footer.address}
                </span>
              </div>
              <div className="flex gap-2.5">
                <Phone className="w-4 h-4 text-[var(--olive)] shrink-0 mt-0.5" />
                <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className="font-semibold hover:text-[var(--plum)] transition">
                  {PHONE}
                </a>
              </div>
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={waLink(isEn ? "Hello Ms. Neriman, I am contacting you via Neri Home website." : "Merhaba Neriman Hanım, Neri Home web sitenizden ulaşıyorum.")}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--olive)] hover:bg-[var(--olive-dark)] text-white text-xs font-semibold shadow-xs transition"
                >
                  <MessageCircle className="w-4 h-4" /> {isEn ? "Message via WhatsApp" : "WhatsApp Hattı ile Hemen Yazın"}
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=K%C3%BC%C3%A7%C3%BCkyoncal%C4%B1+Mahallesi+Saray+Tekirda%C4%9F"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] hover:bg-[var(--surface-3)] text-xs font-semibold transition"
                >
                  <MapPin className="w-4 h-4 text-[var(--plum)]" /> {isEn ? "View on Google Maps" : "Google Haritalarda Gör"}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Alt Telif ve Konum */}
        <div className="mt-12 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-75">
          <span>
            {t.footer.rights}
          </span>
          <span>{isEn ? "Tekirdağ • Saray • Küçükyoncalı, Turkey" : "Tekirdağ • Saray • Küçükyoncalı (Küçükmanika)"}</span>
        </div>
      </div>
    </footer>
  );
};
