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

  // Schema.org ve SEO Yapılandırması (Rich Snippets & Google Arama Optimizasyonu)
  useEffect(() => {
    const siteUrl = "https://mserman90.github.io/neri-home-el-dokuma/";
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteUrl}#website`,
          url: siteUrl,
          name: "Neri Home | El Dokuma Keçi Kılı & Cicim Tekstil",
          description: "Tekirdağ Saray Küçükyoncalı 1875 Rumeli göç mirası el dokuması kırlent, dolay yastık ve çanta mağazası.",
          inLanguage: "tr-TR",
        },
        {
          "@type": "HomeGoodsStore",
          "@id": `${siteUrl}#store`,
          name: "Neri Home",
          description:
            "Tekirdağ Saray Küçükyoncalı Mahallesi'nde 200 yıllık Rumeli sandık motifleriyle ahşap el tezgâhlarında dokunan doğal keçi kılı ve yün cicim kırlent, dolay yastık, heybe, çanta ve runner atölyesi.",
          url: siteUrl,
          telephone: "+905376966502",
          founder: {
            "@type": "Person",
            name: "Neriman Çakır",
            jobTitle: "Usta Dokumacı & Kurucu",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Küçükyoncalı Mahallesi 5110. Sokak No: 12",
            addressLocality: "Saray",
            addressRegion: "Tekirdağ",
            postalCode: "59600",
            addressCountry: "TR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 41.4428,
            longitude: 27.9239,
          },
          areaServed: ["TR", "US", "EU"],
          priceRange: "₺₺₺",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "28",
            bestRating: "5",
            worstRating: "1",
          },
        },
        {
          "@type": "FAQPage",
          "@id": `${siteUrl}#faq`,
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "ItemList",
          "@id": `${siteUrl}#collection`,
          name: "Neri Home El Dokuma Koleksiyonu",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              "@id": `${siteUrl}?product=${p.id}`,
              name: p.name,
              sku: p.id,
              description: p.shortDesc,
              brand: { "@type": "Brand", name: "Neri Home" },
              material: p.material,
              category: p.category,
              itemCondition: "https://schema.org/NewCondition",
              offers: {
                "@type": "Offer",
                priceCurrency: "TRY",
                price: p.price,
                availability:
                  p.stockStatus === "in_stock"
                    ? "https://schema.org/InStock"
                    : "https://schema.org/PreOrder",
                url: `${siteUrl}?product=${p.id}`,
                seller: {
                  "@type": "Organization",
                  name: "Neri Home",
                },
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 bg-[var(--olive)] hover:bg-[var(--olive-dark)] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl border border-white/20 hover:scale-105 active:scale-95 transition"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
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
