import React from "react";
import { Product } from "../types";
import { Heart, Plus, CheckCircle2, Clock } from "lucide-react";
import { tl } from "../utils/formatters";
import { useLanguage } from "../context/LanguageContext";

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
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  const displayName = (isEn && product.nameEn) ? product.nameEn : product.name;
  const displaySeries = (isEn && product.seriesEn) ? product.seriesEn : product.series;
  const displayDesc = (isEn && product.shortDescEn) ? product.shortDescEn : product.shortDesc;
  const displayMotif = (isEn && product.motifEn) ? product.motifEn : product.motif;
  const displayWeavingTime = (isEn && product.weavingTimeEn) ? product.weavingTimeEn : product.weavingTime;
  const displayStockNote = (isEn && product.stockNoteEn) ? product.stockNoteEn : product.stockNote;

  return (
    <article className="product-card bg-[var(--card)] rounded-2xl border border-[var(--line)] overflow-hidden flex flex-col justify-between group shadow-xs">
      <div>
        {/* Ürün Görseli & Rozetler */}
        <div className="relative aspect-[4/3] bg-[var(--surface-2)] overflow-hidden">
          <button
            type="button"
            onClick={() => onOpenModal(product)}
            className="block w-full h-full cursor-pointer focus:outline-none"
            aria-label={`${displayName} ${t.common.viewProduct}`}
          >
            <img
              src={product.images[0]}
              alt={displayName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </button>

          {/* Sol Üst: Dokuma Süresi Rozeti */}
          <div className="absolute top-2.5 left-2.5 bg-[var(--ink)]/90 text-[var(--surface)] text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow pointer-events-none">
            {displayWeavingTime}
          </div>

          {/* Sol Alt: Stok Durumu Rozeti */}
          <div className="absolute bottom-2.5 left-2.5 pointer-events-none">
            {product.stockStatus === "in_stock" ? (
              <span className="inline-flex items-center gap-1 bg-[#2D4537]/90 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md shadow backdrop-blur-sm">
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#A8B184]" /> {t.common.inStock}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-[#4A3B32]/90 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md shadow backdrop-blur-sm">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[var(--mustard)]" /> {t.common.madeToOrder}
              </span>
            )}
          </div>
        </div>

        {/* Ürün Metin Alanı */}
        <div className="p-3.5 sm:p-4 space-y-1.5 sm:space-y-2">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-semibold">
            <span className="text-[var(--plum)] truncate">{displaySeries}</span>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="opacity-70 text-[var(--ink)]">{product.size}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFav(product.id);
                }}
                aria-label={isFav ? `${displayName} ${isEn ? "remove from favorites" : "favorilerden çıkar"}` : `${displayName} ${isEn ? "add to favorites" : "favorilere ekle"}`}
                aria-pressed={isFav}
                className="p-1 rounded-lg text-[var(--ink)] hover:text-[var(--plum)] hover:bg-[var(--surface-2)] transition focus:outline-none"
              >
                <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isFav ? "fill-[var(--plum)] text-[var(--plum)]" : "opacity-60 hover:opacity-100"}`} />
              </button>
            </div>
          </div>

          <h3 className="font-serif-display text-lg sm:text-xl font-bold leading-snug">
            <button
              type="button"
              onClick={() => onOpenModal(product)}
              className="text-left hover:text-[var(--plum)] transition line-clamp-2"
            >
              {displayName}
            </button>
          </h3>

          <p className="text-[11px] sm:text-xs opacity-80 line-clamp-2 leading-relaxed">
            {displayDesc}
          </p>

          <div className="pt-1 flex items-center justify-between text-[10px] sm:text-[11px]">
            <span className="inline-block bg-[var(--surface-2)] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-[var(--line)]">
              {isEn ? "Motif:" : "Motif:"} <strong>{displayMotif}</strong>
            </span>
            {displayStockNote && (
              <span className="opacity-70 italic truncate max-w-[110px] sm:max-w-[140px]">
                {displayStockNote}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Alt Fiyat ve Sepete Ekle */}
      <div className="p-3 sm:px-4 sm:pb-4 sm:pt-2 border-t border-[var(--line)] flex items-center justify-between gap-2">
        <div>
          <span className="text-[9px] sm:text-[10px] block opacity-70 leading-none mb-0.5">
            {lang === "en" ? "Handloom Price" : "El Dokuma Fiyatı"}
          </span>
          <span className="font-serif-display text-xl sm:text-2xl font-bold leading-tight">{tl(product.price)}</span>
        </div>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-[var(--ink)] hover:bg-[var(--plum)] text-[var(--surface)] text-[11px] sm:text-xs font-semibold flex items-center gap-1 sm:gap-1.5 transition shadow-sm shrink-0 active:scale-95"
        >
          <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {t.common.addToCart}
        </button>
      </div>
    </article>
  );
};
