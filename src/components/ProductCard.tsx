import React from "react";
import { Product } from "../types";
import { Heart, Eye, Plus, CheckCircle2, Clock } from "lucide-react";
import { tl } from "../utils/formatters";

type ProductCardProps = {
  product: Product;
  isFav: boolean;
  onToggleFav: (id: string) => void;
  onOpenModal: (p: Product) => void;
  onAddToCart: (p: Product) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFav,
  onToggleFav,
  onOpenModal,
  onAddToCart,
}) => {
  return (
    <article className="product-card bg-[var(--card)] rounded-2xl border border-[var(--line)] overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Ürün Görseli & Rozetler */}
        <div className="relative aspect-[4/3] bg-[var(--surface-2)] overflow-hidden">
          <button
            type="button"
            onClick={() => onOpenModal(product)}
            className="block w-full h-full cursor-pointer focus:outline-none"
            aria-label={`${product.name} ürününü incele`}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </button>

          {/* Sol Üst: Dokuma Süresi Rozeti */}
          <div className="absolute top-3 left-3 bg-[var(--ink)]/90 text-[var(--surface)] text-[10px] font-semibold px-2.5 py-1 rounded-full shadow">
            {product.weavingTime}
          </div>

          {/* Sağ Üst: Favori Butonu */}
          <button
            type="button"
            onClick={() => onToggleFav(product.id)}
            aria-label={isFav ? `${product.name} favorilerden çıkar` : `${product.name} favorilere ekle`}
            aria-pressed={isFav}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/95 text-[var(--ink)] shadow hover:scale-110 transition-transform focus:outline-none"
          >
            <Heart className={`w-4 h-4 ${isFav ? "fill-[var(--plum)] text-[var(--plum)]" : ""}`} />
          </button>

          {/* Sağ Alt: Hızlı İncele Butonu */}
          <button
            type="button"
            onClick={() => onOpenModal(product)}
            className="absolute bottom-3 right-3 bg-white/95 text-[var(--ink)] text-xs font-semibold px-3 py-1.5 rounded-xl shadow flex items-center gap-1 hover:bg-white transition"
          >
            <Eye className="w-3.5 h-3.5" /> İncele
          </button>

          {/* Sol Alt: Stok Durumu Rozeti */}
          <div className="absolute bottom-3 left-3">
            {product.stockStatus === "in_stock" ? (
              <span className="inline-flex items-center gap-1 bg-[#2D4537]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow backdrop-blur-sm">
                <CheckCircle2 className="w-3 h-3 text-[#A8B184]" /> Stokta Hazır
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-[#4A3B32]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow backdrop-blur-sm">
                <Clock className="w-3 h-3 text-[var(--mustard)]" /> Siparişe Özel
              </span>
            )}
          </div>
        </div>

        {/* Ürün Metin Alanı */}
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--plum)]">
            <span>{product.series}</span>
            <span className="opacity-70 text-[var(--ink)]">{product.size}</span>
          </div>

          <h3 className="font-serif-display text-xl font-bold leading-snug">
            <button
              type="button"
              onClick={() => onOpenModal(product)}
              className="text-left hover:text-[var(--plum)] transition line-clamp-2"
            >
              {product.name}
            </button>
          </h3>

          <p className="text-xs opacity-80 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          <div className="pt-1 flex items-center justify-between">
            <span className="inline-block text-[11px] bg-[var(--surface-2)] px-2.5 py-1 rounded-lg border border-[var(--line)]">
              Motif: <strong>{product.motif}</strong>
            </span>
            {product.stockNote && (
              <span className="text-[10px] opacity-70 italic truncate max-w-[140px]">
                {product.stockNote}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Alt Fiyat ve Sepete Ekle */}
      <div className="px-4 pb-4 pt-2 border-t border-[var(--line)] flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] block opacity-70">El Dokuma Fiyatı</span>
          <span className="font-serif-display text-2xl font-bold">{tl(product.price)}</span>
        </div>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="px-3.5 py-2.5 rounded-xl bg-[var(--ink)] hover:bg-[var(--plum)] text-[var(--surface)] text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" /> Sepete Ekle
        </button>
      </div>
    </article>
  );
};
