import React from "react";
import { MessageCircle, Heart, ShoppingBag, Menu, Sun, Moon, Globe } from "lucide-react";
import { waLink } from "../utils/formatters";
import { useLanguage } from "../context/LanguageContext";

type HeaderProps = {
  cartCount: number;
  favCount: number;
  favOnly: boolean;
  setFavOnly: (v: boolean) => void;
  openCart: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  favCount,
  favOnly,
  setFavOnly,
  openCart,
  theme,
  toggleTheme,
}) => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const nav = [
    { href: "#koleksiyon", label: t.nav.collection },
    { href: "#yasam-alanlari", label: t.nav.livingSpaces },
    { href: "#motifler", label: t.nav.motifs },
    { href: "#zanaat", label: t.nav.craft },
    { href: "#sertifika", label: t.nav.certificate },
    { href: "#hikayemiz", label: t.nav.heritage },
    { href: "#yorumlar", label: t.nav.reviews },
    { href: "#ozel-siparis", label: t.nav.customOrder },
    { href: "#iletisim", label: t.nav.contact },
  ];

  return (
    <>
      {/* Ana Header */}
      <header className="sticky top-0 z-40 bg-[var(--surface)]/95 backdrop-blur-md border-b border-[var(--line)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#top" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-[var(--ink)] flex items-center justify-center border border-[var(--brass)] shadow-sm group-hover:scale-105 transition-transform">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M3 9L8 4L14 10L20 4L25 9" stroke="#F9F6F0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 16L8 11L14 17L20 11L25 16" stroke="#B89B3E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 23L8 18L14 24L20 18L25 23" stroke="#F9F6F0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="font-serif-display text-2xl sm:text-3xl font-bold leading-none block">Neri Home</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--brass)] font-semibold">Küçükyoncalı • 1875</span>
              </div>
            </a>

            {/* Masaüstü Navigasyon */}
            <nav className="hidden xl:flex items-center gap-5 text-sm font-medium" aria-label="Ana menü">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-[var(--plum)] transition">
                  {n.label}
                </a>
              ))}
            </nav>

            {/* Aksiyon Butonları */}
            <div className="flex items-center gap-2">
              {/* Dil Değiştirici (TR / EN) */}
              <button
                type="button"
                onClick={toggleLang}
                aria-label="Dili değiştir / Change language"
                className="px-2.5 py-2 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] hover:bg-[var(--surface-3)] transition flex items-center gap-1.5 text-xs font-bold tracking-wider"
                title={lang === "tr" ? "Switch to English" : "Türkçe'ye geç"}
              >
                <Globe className="w-3.5 h-3.5 text-[var(--plum)]" />
                <span>{lang.toUpperCase()}</span>
              </button>

              {/* WhatsApp Butonu */}
              <a
                href={waLink("Merhaba Neriman Hanım, Neri Home el dokuma ürünleriniz hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--olive)] text-white text-xs font-semibold hover:bg-[var(--olive-dark)] transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>

              {/* Tema Değiştirici */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Açık veya koyu temayı değiştir"
                className="p-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] hover:bg-[var(--surface-3)] transition"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-[var(--mustard)]" /> : <Moon className="w-5 h-5 opacity-80" />}
              </button>

              {/* Favoriler Butonu */}
              <button
                type="button"
                onClick={() => {
                  setFavOnly(!favOnly);
                  document.getElementById("koleksiyon")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative p-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] hover:bg-[var(--surface-3)] transition"
                aria-label="Favorileri göster"
              >
                <Heart className={`w-4 h-4 ${favOnly ? "fill-[var(--plum)] text-[var(--plum)]" : ""}`} />
                <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-[var(--plum)] text-white text-[11px] font-bold flex items-center justify-center">
                  {favCount}
                </span>
              </button>

              {/* Sepet Butonu */}
              <button
                type="button"
                onClick={openCart}
                className="relative p-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] hover:bg-[var(--surface-3)] transition"
                aria-label="Sepeti aç"
              >
                <ShoppingBag className="w-4 h-4 text-[var(--plum)]" />
                <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-[var(--ink)] text-[var(--surface)] text-[11px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              {/* Mobil Menü Butonu */}
              <button
                type="button"
                onClick={() => setMobileMenu(!mobileMenu)}
                className="xl:hidden p-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--line)]"
                aria-label="Menüyü aç/kapat"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobil Menü Çekmecesi */}
        {mobileMenu && (
          <div className="xl:hidden border-t border-[var(--line)] bg-[var(--surface)] px-4 py-4 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--line)]">
              <span className="text-xs font-semibold opacity-70">Dil Seçimi / Language:</span>
              <button
                type="button"
                onClick={toggleLang}
                className="px-3 py-1 rounded-lg bg-[var(--surface-2)] border border-[var(--line)] text-xs font-bold"
              >
                {lang === "tr" ? "🇹🇷 Türkçe (Switch to EN)" : "🇬🇧 English (Türkçe'ye geç)"}
              </button>
            </div>
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenu(false)}
                className="block py-2 text-sm font-medium hover:text-[var(--plum)]"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
