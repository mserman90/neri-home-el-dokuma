import React, { useState } from "react";
import { Product } from "../types";
import { Sparkles, Eye, ShoppingBag } from "lucide-react";
import { tl } from "../utils/formatters";

type RoomVisualizerProps = {
  products: Product[];
  onOpenModal: (p: Product) => void;
  onAddToCart: (p: Product) => void;
};

const SOFA_COLORS = [
  { id: "cream", name: "Krem & Keten Bej", bg: "bg-[#E6DFD5]", border: "border-[#D1C7BA]" },
  { id: "anthracite", name: "Antrasit Gri", bg: "bg-[#383A3F]", border: "border-[#25262B]", isDark: true },
  { id: "emerald", name: "Zümrüt Yeşili", bg: "bg-[#2D4537]", border: "border-[#1E3025]", isDark: true },
  { id: "tan", name: "Sıcak Taba / Taba Deri", bg: "bg-[#8E5336]", border: "border-[#6E3C23]", isDark: true },
];

export const RoomVisualizer: React.FC<RoomVisualizerProps> = ({
  products,
  onOpenModal,
  onAddToCart,
}) => {
  const visualizerProducts = products.filter(
    (p) => p.id === "ganos-bel" || p.id === "kucukmanika-kare" || p.id === "trakya-dolay" || p.id === "meric-hardal"
  );

  const [selectedProduct, setSelectedProduct] = useState<Product>(visualizerProducts[0] || products[0]);
  const [selectedSofa, setSelectedSofa] = useState(SOFA_COLORS[0]);

  return (
    <section id="onizleme" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
      <div className="bg-[var(--surface-2)] rounded-3xl p-6 sm:p-10 border border-[var(--line)] shadow-sm">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--plum)] text-xs font-bold border border-[var(--line)] mb-2">
            <Sparkles className="w-3.5 h-3.5" /> İnteraktif Mekân Deneyimi
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold">Koltuk & Kırlent Kombin Aracı</h2>
          <p className="text-sm sm:text-base opacity-80 mt-2">
            Evinizdeki oturma grubunun rengini seçin; el dokuması keçi kılı ve cicim kırlentlerimizin farklı kumaş tonlarında nasıl durduğunu keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Koltuk Önizleme Alanı */}
          <div className="lg:col-span-7">
            <div
              className={`relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl ${selectedSofa.bg} border ${selectedSofa.border} flex flex-col items-center justify-center p-6 shadow-inner transition-colors duration-500 overflow-hidden`}
            >
              {/* Koltuk Arkalık İllüstrasyon Efekti */}
              <div className="absolute inset-x-8 bottom-6 top-8 rounded-2xl bg-black/5 border border-black/10 shadow-lg flex items-center justify-center pointer-events-none" />

              {/* Seçili Kırlentin Görseli */}
              <div className="relative z-10 w-48 sm:w-64 md:w-72 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60 transform hover:scale-105 transition-transform duration-300">
                <img
                  src={selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-[var(--ink)]/85 text-[var(--surface)] text-[10px] font-semibold px-2 py-0.5 rounded-md">
                  {selectedProduct.size}
                </span>
              </div>

              {/* Bilgi Etiketi */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm text-neutral-800 dark:text-neutral-200">
                Kumaş: <strong>{selectedSofa.name}</strong>
              </div>
            </div>
          </div>

          {/* Kontrol Paneli */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1. Koltuk Rengi Seçimi */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 opacity-80">
                1. Koltuk Kumaş Renginizi Seçin:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SOFA_COLORS.map((sofa) => (
                  <button
                    key={sofa.id}
                    type="button"
                    onClick={() => setSelectedSofa(sofa)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left text-xs font-semibold transition ${
                      selectedSofa.id === sofa.id
                        ? "bg-[var(--card)] border-[var(--plum)] ring-2 ring-[var(--plum)]/20 shadow-sm"
                        : "bg-[var(--card)]/60 border-[var(--line)] hover:bg-[var(--card)]"
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full ${sofa.bg} border ${sofa.border} shadow-sm shrink-0`} />
                    <span className="truncate">{sofa.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Kırlent Seçimi */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 opacity-80">
                2. Denemek İstediğiniz Dokuma:
              </label>
              <div className="space-y-2">
                {visualizerProducts.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedProduct(p)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left text-xs transition ${
                      selectedProduct.id === p.id
                        ? "bg-[var(--card)] border-[var(--plum)] ring-2 ring-[var(--plum)]/20 shadow-sm"
                        : "bg-[var(--card)]/60 border-[var(--line)] hover:bg-[var(--card)]"
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <div className="font-bold truncate">{p.name}</div>
                      <div className="text-[11px] opacity-70">
                        {p.motif} • {p.size}
                      </div>
                    </div>
                    <div className="font-serif-display font-bold text-sm text-[var(--plum)] shrink-0">
                      {tl(p.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Aksiyonlar */}
            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => onAddToCart(selectedProduct)}
                className="flex-1 py-3 px-4 rounded-xl bg-[var(--ink)] text-[var(--surface)] text-xs font-semibold hover:bg-[var(--plum)] transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" /> Sepete Ekle ({tl(selectedProduct.price)})
              </button>
              <button
                type="button"
                onClick={() => onOpenModal(selectedProduct)}
                className="py-3 px-4 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-xs font-semibold hover:bg-[var(--surface-3)] transition flex items-center gap-1.5"
              >
                <Eye className="w-4 h-4" /> Detayları Gör
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
