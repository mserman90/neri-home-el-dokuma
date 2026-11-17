import React, { useState, useRef } from "react";
import { Product } from "../types";
import { X, Sparkles, ShoppingBag, MessageCircle, ZoomIn, CheckCircle2, Clock, Share2, Check } from "lucide-react";
import { tl, waLink } from "../utils/formatters";
import { livingLabel } from "../data/products";

type ProductModalProps = {
  product: Product;
  onClose: () => void;
  onAddToCart: (p: Product, optionIndex: number) => void;
};

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [modalImg, setModalImg] = useState(0);
  const [modalOpt, setModalOpt] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [copiedLink, setCopiedLink] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const selectedOpt = product.options[modalOpt] || product.options[0];
  const modalPrice = product.price + (selectedOpt?.extraPrice || 0);

  const updateCoordinates = (clientX: number, clientY: number) => {
    if (!imageContainerRef.current) return;
    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setZoomPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateCoordinates(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleShare = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set("product", product.id);
    const shareUrl = url.toString();

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Neri Home | ${product.name}`,
          text: product.shortDesc,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // Kullanıcı paylaşımı iptal ettiyse veya desteklenmiyorsa panoya kopyala
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    } catch {
      // Fallback
    }
  };

  const currentImg = product.images[modalImg] || product.images[0];
  const label = livingLabel(currentImg);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} ürün detayı`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[var(--surface)] rounded-3xl max-w-3xl w-full border border-[var(--line)] shadow-2xl overflow-hidden my-8">
        {/* Üst Başlık ve Kapat Butonu */}
        <div className="flex items-center justify-between px-6 py-4 bg-[var(--surface-2)] border-b border-[var(--line)]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--plum)]">
              {product.series} • {product.weavingTime}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Ürün bağlantısını paylaş"
              className="p-1.5 rounded-lg hover:bg-[var(--surface-3)] transition flex items-center gap-1 text-xs font-semibold px-2.5"
              title="Ürün bağlantısını kopyala"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600">Kopyalandı</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 opacity-80" />
                  <span className="hidden sm:inline opacity-80">Paylaş</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Ürün detayını kapat"
              className="p-1.5 rounded-lg hover:bg-[var(--surface-3)] transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Sol Kolon: Görsel Galerisi & Doku Büyüteci */}
          <div className="space-y-3">
            <div
              ref={imageContainerRef}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsZooming(true)}
              onTouchEnd={() => setIsZooming(false)}
              onTouchMove={handleTouchMove}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--surface-2)] cursor-crosshair select-none touch-none"
            >
              <img
                src={currentImg}
                alt={product.name}
                className="w-full h-full object-cover"
                style={
                  isZooming
                    ? {
                        transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                        transform: "scale(2.2)",
                        transition: "transform 0.1s ease-out",
                      }
                    : { transform: "scale(1)", transition: "transform 0.3s ease-out" }
                }
              />

              {/* Yaşam Alanı veya Kapak Etiketi */}
              {label && (
                <span className="absolute top-3 left-3 bg-[var(--ink)]/90 text-[var(--surface)] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow pointer-events-none">
                  {label}
                </span>
              )}

              {/* Büyüteç İpucu Rozeti */}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-md flex items-center gap-1 pointer-events-none">
                <ZoomIn className="w-3 h-3" /> {isZooming ? "Doku İnceleniyor" : "Yakınlaştırmak için dokunun veya üzerine gelin"}
              </div>
            </div>
              </div>
            </div>

            {/* Küçük Görsel Küçük Resimleri */}
            <div className="flex gap-2.5 flex-wrap">
              {product.images.map((img, idx) => (
                <button
                  key={img + idx}
                  type="button"
                  onClick={() => setModalImg(idx)}
                  aria-label={`${product.name} görünüm ${idx + 1}`}
                  aria-pressed={modalImg === idx}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition ${
                    idx === modalImg
                      ? "border-[var(--plum)] ring-2 ring-[var(--plum)]/30 scale-105"
                      : "border-[var(--line)] opacity-75 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Motif Hikayesi Kutusu */}
            <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] text-xs space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-[var(--plum)]">
                <Sparkles className="w-4 h-4" /> Bu Üründeki Motifin Hikâyesi
              </div>
              <p className="opacity-85 leading-relaxed">{product.motifStory}</p>
            </div>
          </div>

          {/* Sağ Kolon: Bilgiler ve Sipariş */}
          <div className="space-y-4">
            <div>
              {/* Stok Durumu */}
              <div className="mb-1.5">
                {product.stockStatus === "in_stock" ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5A6344]">
                    <CheckCircle2 className="w-4 h-4" /> {product.stockNote || "Atölyede Hazır Stok • Aynı Gün Kargo"}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--mustard)]">
                    <Clock className="w-4 h-4" /> {product.stockNote || "Siparişe Özel Dokunur (3–7 Gün)"}
                  </span>
                )}
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold leading-tight">
                {product.name}
              </h3>
            </div>

            <div className="font-serif-display text-3xl font-bold text-[var(--plum)]">
              {tl(modalPrice)}
            </div>

            <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Özellikler Tablosu */}
            <div className="space-y-2 text-xs border-y border-[var(--line)] py-3">
              <div className="flex justify-between gap-3">
                <span className="opacity-70">Ölçü:</span>
                <strong className="text-right">{product.size} (±1-2 cm el tezgâhı)</strong>
              </div>
              <div className="flex justify-between gap-3">
                <span className="opacity-70">Materyal:</span>
                <strong className="text-right">{product.material}</strong>
              </div>
              <div className="flex justify-between gap-3">
                <span className="opacity-70">Motif:</span>
                <strong className="text-right">{product.motif}</strong>
              </div>
              <div className="flex justify-between gap-3">
                <span className="opacity-70">Üretim Yeri:</span>
                <strong className="text-right">Küçükyoncalı, Saray / Tekirdağ</strong>
              </div>
              <div className="flex justify-between gap-3">
                <span className="opacity-70">Sertifika:</span>
                <strong className="text-right text-[var(--olive)]">Usta İmzalı Menşe Belgesi Dahil</strong>
              </div>
            </div>

            {/* Seçenek Seçimi */}
            <div>
              <label htmlFor="modal-option" className="block text-xs font-bold mb-1.5">
                {product.optionsLabel}:
              </label>
              <select
                id="modal-option"
                value={modalOpt}
                onChange={(e) => setModalOpt(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--mustard)]"
              >
                {product.options.map((o, i) => (
                  <option key={o.label} value={i}>
                    {o.label}{" "}
                    {o.extraPrice > 0
                      ? `(+${tl(o.extraPrice)})`
                      : o.extraPrice < 0
                      ? `(${tl(o.extraPrice)})`
                      : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => {
                  onAddToCart(product, modalOpt);
                  onClose();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-[var(--ink)] hover:bg-[var(--plum)] text-[var(--surface)] font-semibold text-sm flex items-center justify-center gap-2 transition shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" /> Sepete Ekle
              </button>
              <a
                href={waLink(
                  `Merhaba Neriman Hanım, ${product.name} (${selectedOpt.label}) ürünü hakkında bilgi/sipariş almak istiyorum. Tutar: ${tl(modalPrice)}`
                )}
                target="_blank"
                rel="noopener"
                className="py-3 px-4 rounded-xl bg-[var(--olive)] hover:bg-[var(--olive-dark)] text-white font-semibold text-sm flex items-center justify-center gap-2 transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4" /> Hızlı WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
