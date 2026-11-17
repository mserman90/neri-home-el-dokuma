import React, { useState, useEffect, useRef } from "react";
import { products } from "./data/products";
import { faqs } from "./data/faqs";
import { Product, CartRecord } from "./types";
import { waLink } from "./utils/formatters";
import { useTheme } from "./hooks/useTheme";
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
  const { cart, cartCount, addToCart, changeQty, removeCart } = useCart();
  const { favs, favIds, favCount, toggleFav } = useFavorites();

  const [toast, setToast] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favOnly, setFavOnly] = useState(false);

  const toastTimer = useRef<number | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2800);
  };

  // URL Query Param & Hash Senkronizasyonu (Deep Linking)
  const openProductModal = (product: Product | null, pushState = true) => {
    setSelectedProduct(product);
    if (pushState) {
      const url = new URL(window.location.href);
      if (product) {
        url.searchParams.set("product", product.id);
      } else {
        url.searchParams.delete("product");
      }
      window.history.pushState({ productId: product?.id || null }, "", url.toString());
    }
  };

  // İlk yüklemede URL'den ürünü açma ve PopState dinleyicisi
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const prodId = params.get("product");
      if (prodId) {
        const found = products.find((p) => p.id === prodId);
        if (found) {
          setSelectedProduct(found);
          return;
        }
      }
      setSelectedProduct(null);
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  // Klavye Escape dinleyicisi
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        openProductModal(null);
        setCartOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Schema.org ve SEO Yapılandırması
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HomeGoodsStore",
          name: "Neri Home",
          description:
            "Tekirdağ Saray Küçükyoncalı Mahallesi'nde 200 yıllık Rumeli sandık motifleriyle el tezgâhlarında dokunan doğal keçi kılı ve yün cicim kırlent, dolay yastık, heybe, çanta ve runner mağazası.",
          url: "https://nerihome.com.tr/",
          telephone: "+905376966502",
          founder: { "@type": "Person", name: "Neriman Çakır" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Küçükyoncalı Mahallesi 5110. Sokak No: 12",
            addressLocality: "Saray",
            addressRegion: "Tekirdağ",
            postalCode: "59600",
            addressCountry: "TR",
          },
          areaServed: "TR",
          priceRange: "₺₺",
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "ItemList",
          name: "Neri Home El Dokuma Koleksiyonu",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: p.name,
              description: p.shortDesc,
              brand: { "@type": "Brand", name: "Neri Home" },
              material: p.material,
              offers: {
                "@type": "Offer",
                priceCurrency: "TRY",
                price: p.price,
                availability: "https://schema.org/InStock",
              },
            },
          })),
        },
      ],
    });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

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
        {/* 2. Hero Bölümü */}
        <Hero />

        {/* 3. Yaşam Alanlarında Neri Home */}
        <LivingSpaces products={products} openModal={(p) => openProductModal(p)} />

        {/* 4. Koleksiyon & Filtreler */}
        <ProductGrid
          products={products}
          favIds={favIds}
          favOnly={favOnly}
          setFavOnly={setFavOnly}
          onToggleFav={toggleFav}
          onOpenModal={(p) => openProductModal(p)}
          onAddToCart={(p) => addToCart(p, 0)}
        />

        {/* 6. Motiflerin Gizli Dili Sözlüğü */}
        <MotifDictionary />

        {/* 7. Doğal Keçi Kılı & Cicim Zanaati */}
        <CraftSection />

        {/* 8. Usta İmzalı Menşe & Özgünlük Sertifikası */}
        <CertificateSection />

        {/* 9. 1875 Mirasımız (Zaman Çizelgesi) */}
        <HistorySection />

        {/* 10. Müşteri Deneyimi & Sosyal Kanıt */}
        <TestimonialsSection />

        {/* 11. B2B & Kurumsal Özel Dokuma */}
        <CustomOrderSection />

        {/* 12. Sıkça Sorulan Sorular */}
        <FaqSection />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Sabit Kayan WhatsApp Sipariş Butonu */}
      <a
        href={waLink("Merhaba Neriman Hanım, Neri Home el dokuma ürünleriniz hakkında bilgi almak istiyorum.")}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp ile Neriman Çakır'a yazın"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[var(--olive)] hover:bg-[var(--olive-dark)] text-white px-4 py-3 rounded-full shadow-2xl border border-white/20 hover:scale-105 transition"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs font-bold hidden sm:inline">WhatsApp Sipariş & Danışma</span>
      </a>

      {/* Ürün Detay Modalı */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => openProductModal(null)}
          onAddToCart={(p, optIdx) => addToCart(p, optIdx)}
        />
      )}

      {/* Sepet Çekmecesi */}
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

      {/* Toast Bildirim Kutusu */}
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
