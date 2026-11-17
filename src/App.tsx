import { useState, useEffect, useRef } from "react";
import { products } from "./data/products";
import { faqs } from "./data/faqs";
import { CartRecord } from "./types";
import { waLink } from "./utils/formatters";
import { useTheme } from "./hooks/useTheme";
import { useProductDeepLink } from "./hooks/useProductDeepLink";
import { useJsonLd } from "./hooks/useJsonLd";
import { CartProvider, useCart } from "./context/CartContext";
import { FavoritesProvider, useFavorites } from "./context/FavoritesContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LivingSpaces } from "./components/LivingSpaces";
import { ProductGrid } from "./components/ProductGrid";
import { ProductModal } from "./components/ProductModal";
import { CartDrawer } from "./components/CartDrawer";
import { MotifDictionary } from "./components/MotifDictionary";
import { CraftSection } from "./components/CraftSection";
import { CertificateSection } from "./components/CertificateSection";
import { HistorySection } from "./components/HistorySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CustomOrderSection } from "./components/CustomOrderSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";

import { MessageCircle, Check } from "lucide-react";

function MainAppContent() {
  const { theme, toggleTheme } = useTheme();
  const { lang, t } = useLanguage();
  const { cart, cartCount, addToCart, changeQty, removeCart } = useCart();
  const { favIds, favCount, toggleFav } = useFavorites();

  const [toast, setToast] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [favOnly, setFavOnly] = useState(false);

  const { selectedProduct, openProductModal } = useProductDeepLink(products);
  useJsonLd(products, faqs);

  const toastTimer = useRef<number | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2800);
  };

  // Keyboard Escape listener
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        openProductModal(null);
        setCartOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openProductModal]);

  // Lock scroll when CartDrawer is open
  useEffect(() => {
    if (cartOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [cartOpen]);

  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)] woven-bg transition-colors duration-300">
      {/* 1. Header */}
      <Header
        cartCount={cartCount}
        favCount={favCount}
        favOnly={favOnly}
        setFavOnly={setFavOnly}
        openCart={() => setCartOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main id="top">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Living Spaces */}
        <LivingSpaces products={products} openModal={(p) => openProductModal(p)} />

        {/* 4. Collection & Filters */}
        <ProductGrid
          products={products}
          favIds={favIds}
          favOnly={favOnly}
          setFavOnly={setFavOnly}
          onToggleFav={toggleFav}
          onOpenModal={(p) => openProductModal(p)}
          onAddToCart={(p) => addToCart(p, 0)}
        />

        {/* 5. Motif Dictionary */}
        <MotifDictionary />

        {/* 6. Craft Section */}
        <CraftSection />

        {/* 7. Certificate of Provenance */}
        <CertificateSection />

        {/* 8. 1875 Heritage History */}
        <HistorySection />

        {/* 9. Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 10. B2B & Custom Weaving */}
        <CustomOrderSection />

        {/* 11. FAQ */}
        <FaqSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <a
        href={waLink(
          lang === "en"
            ? "Hello Ms. Neriman, I would like to inquire about Nery Home handwoven textiles."
            : "Merhaba Neriman Hanım, Nery Home el dokuma ürünleriniz hakkında bilgi almak istiyorum."
        )}
        target="_blank"
        rel="noopener"
        aria-label={t.common.quickWhatsApp}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 bg-[var(--olive)] hover:bg-[var(--olive-dark)] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl border border-white/20 hover:scale-105 active:scale-95 transition"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="text-xs font-bold hidden sm:inline">{t.common.quickWhatsApp}</span>
      </a>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => openProductModal(null)}
          onAddToCart={(p, optIdx) => addToCart(p, optIdx)}
        />
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          products={products}
          onClose={() => setCartOpen(false)}
          onChangeQty={(rec: CartRecord, delta: number) => changeQty(rec, delta)}
          onRemoveCart={(rec: CartRecord) => removeCart(rec)}
          onShowToast={showToast}
        />
      )}

      {/* Toast Notification */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-[var(--ink)] text-[var(--surface)] px-5 py-3 rounded-2xl shadow-2xl border border-[var(--brass)] text-xs sm:text-sm font-medium flex items-center gap-2 max-w-[92vw] animate-fade-in"
        >
          <Check className="w-4 h-4 text-[var(--mustard)] shrink-0" />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <FavoritesProvider>
        <CartProvider>
          <MainAppContent />
        </CartProvider>
      </FavoritesProvider>
    </LanguageProvider>
  );
}
