import React, { useState } from "react";
import { CartRecord, Product } from "../types";
import { ShoppingBag, X, Plus, Minus, Trash2, Package, MessageCircle, CreditCard, ShieldCheck, Gift } from "lucide-react";
import { tl, waLink, FREE_SHIPPING, PHONE } from "../utils/formatters";

type CartDrawerProps = {
  cart: CartRecord[];
  products: Product[];
  onClose: () => void;
  onChangeQty: (rec: CartRecord, delta: number) => void;
  onRemoveCart: (rec: CartRecord) => void;
  onShowToast: (msg: string) => void;
};

export const CartDrawer: React.FC<CartDrawerProps> = ({
  cart,
  products,
  onClose,
  onChangeQty,
  onRemoveCart,
  onShowToast,
}) => {
  const [custName, setCustName] = useState("");
  const [custCity, setCustCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"whatsapp" | "card">("whatsapp");
  const [isGift, setIsGift] = useState(false);
  const [giftNote, setGiftNote] = useState("");

  const productById = (id: string) => products.find((p) => p.id === id);

  const cartTotal = cart.reduce((s, c) => s + c.value.unitPrice * c.value.qty, 0);
  const progress = Math.min(100, (cartTotal / FREE_SHIPPING) * 100);

  const checkout = (method: "whatsapp" | "card") => {
    if (!cart.length) {
      onShowToast("Lütfen önce sepetinize ürün ekleyiniz.");
      return;
    }

    const lines = [
      "Merhaba Neriman Hanım, Neri Home web sitesi üzerinden sipariş oluşturmak istiyorum:",
      "",
      "📋 SİPARİŞ LİSTESİ:",
    ];

    cart.forEach((c, i) => {
      const p = productById(c.value.productId);
      if (p) {
        lines.push(
          `${i + 1}. ${p.name} (${p.size} | ${c.value.optionLabel}) x ${c.value.qty} Adet = ${tl(
            c.value.unitPrice * c.value.qty
          )}`
        );
      }
    });

    lines.push(
      "",
      `💰 Toplam Tutar: ${tl(cartTotal)}`,
      `👤 Müşteri: ${custName.trim() || "Belirtilmedi"}`,
      `📍 Teslimat İl/İlçe: ${custCity.trim() || "Belirtilmedi"}`,
      `💳 Tercih Edilen Ödeme: ${
        method === "card"
          ? "Kredi Kartı / Taksitli Güvenli Ödeme Linki (Shopier / iyzico)"
          : "WhatsApp üzerinden Havale / EFT / Kapıda Bilgi"
      }`
    );

    if (isGift) {
      lines.push(
        `🎁 Hediye Paketi Talebi: Evet`,
        `📝 Hediye Notu: "${giftNote.trim() || "Özel hediye paketi rica olunur."}"`
      );
    }

    lines.push(
      "",
      cartTotal >= FREE_SHIPPING
        ? "✨ Ücretsiz Kargo eşiğine ulaşılmıştır."
        : `📦 Kargo durumu: ${tl(FREE_SHIPPING - cartTotal)} tutarında ürün eklenirse kargo ücretsiz olacaktır.`,
      "",
      "Sipariş onayı ve kargo detayları için dönüşünüzü rica ederim."
    );

    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Sepet">
      {/* Arka Plan Perdesi */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      {/* Sepet Çekmecesi */}
      <div className="relative w-full max-w-md bg-[var(--surface)] shadow-2xl border-l border-[var(--line)] flex flex-col h-full z-10">
        {/* Çekmece Başlığı */}
        <div className="px-6 py-4 bg-[var(--surface-2)] border-b border-[var(--line)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[var(--plum)]" />
            <h3 className="font-serif-display text-2xl font-bold">Sepetiniz</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Sepeti kapat"
            className="p-1.5 rounded-lg hover:bg-[var(--surface-3)] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sepet Ürünleri Listesi */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[var(--surface-2)] mx-auto flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 opacity-50" />
              </div>
              <p className="font-serif-display text-2xl font-bold">Sepetiniz Boş</p>
              <p className="text-xs opacity-80 max-w-xs mx-auto">
                Küçükyoncalı kadın dokuma ustalarının el tezgâhlarında hazırladığı eşsiz parçaları koleksiyonumuzdan seçebilirsiniz.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 px-5 py-2.5 rounded-xl bg-[var(--ink)] text-[var(--surface)] text-xs font-semibold hover:bg-[var(--plum)] transition"
              >
                Koleksiyona Dön
              </button>
            </div>
          ) : (
            cart.map((c) => {
              const p = productById(c.value.productId);
              if (!p) return null;
              return (
                <div
                  key={c.id}
                  className="flex gap-3 p-3.5 rounded-2xl bg-[var(--surface-2)]/70 border border-[var(--line)] items-center"
                >
                  <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0 border border-[var(--line)] bg-[var(--surface-3)]">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif-display text-base font-bold truncate">{p.name}</h4>
                    <p className="text-[11px] opacity-70 truncate">
                      {p.size} • {c.value.optionLabel}
                    </p>
                    <div className="text-xs font-bold text-[var(--plum)] mt-0.5">
                      {tl(c.value.unitPrice * c.value.qty)}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 bg-[var(--card)] px-2 py-1 rounded-xl border border-[var(--line)]">
                      <button
                        type="button"
                        onClick={() => onChangeQty(c, -1)}
                        aria-label="Adedi azalt"
                        className="w-6 h-6 flex items-center justify-center font-bold hover:text-[var(--plum)]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{c.value.qty}</span>
                      <button
                        type="button"
                        onClick={() => onChangeQty(c, 1)}
                        aria-label="Adedi artır"
                        className="w-6 h-6 flex items-center justify-center font-bold hover:text-[var(--plum)]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveCart(c)}
                      aria-label={`${p.name} sepetten sil`}
                      className="p-1 text-[var(--plum)] hover:opacity-75 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Sepet Alt Özeti ve Ödeme Alanı */}
        {cart.length > 0 && (
          <div className="p-5 bg-[var(--surface-2)] border-t border-[var(--line)] space-y-3.5">
            {/* Ücretsiz Kargo Çubuğu */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span>
                  {cartTotal >= FREE_SHIPPING
                    ? "🎉 Ücretsiz kargo eşiğine ulaştınız!"
                    : `Ücretsiz kargo için ${tl(FREE_SHIPPING - cartTotal)} kaldı`}
                </span>
                <span className="font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 rounded-full bg-[var(--surface-3)] overflow-hidden">
                <div
                  className="h-full bg-[var(--olive)] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[11px] opacity-70 mt-1.5 flex items-center gap-1">
                <Package className="w-3.5 h-3.5 shrink-0" /> {tl(FREE_SHIPPING)} ve üzeri siparişlerde kargo ücretsizdir.
              </p>
            </div>

            {/* Sosyal Etki Katkısı */}
            <div className="flex justify-between text-xs opacity-80 pt-1">
              <span>Sosyal Etki & Kadın Emeği Katkısı:</span>
              <span className="font-semibold text-[var(--olive)]">Küçükyoncalı Üreticiler</span>
            </div>

            {/* Ara Toplam */}
            <div className="flex justify-between text-base font-bold border-t border-[var(--line)] pt-2">
              <span>Ara Toplam:</span>
              <span className="font-serif-display text-2xl text-[var(--plum)]">{tl(cartTotal)}</span>
            </div>

            {/* Müşteri Bilgileri */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={custName}
                onChange={(e) => setCustName(e.target.value)}
                placeholder="Adınız Soyadınız"
                aria-label="Adınız Soyadınız"
                className="px-3 py-2 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-xs focus:outline-none focus:ring-1 focus:ring-[var(--mustard)]"
              />
              <input
                type="text"
                value={custCity}
                onChange={(e) => setCustCity(e.target.value)}
                placeholder="Teslimat İl / İlçe"
                aria-label="Teslimat İl / İlçe"
                className="px-3 py-2 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-xs focus:outline-none focus:ring-1 focus:ring-[var(--mustard)]"
              />
            </div>

            {/* Hediye Paketi & Notu */}
            <div className="bg-[var(--surface)] p-2.5 rounded-xl border border-[var(--line)] space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold select-none">
                <input
                  type="checkbox"
                  checked={isGift}
                  onChange={(e) => setIsGift(e.target.checked)}
                  className="rounded text-[var(--plum)] focus:ring-[var(--plum)]"
                />
                <Gift className="w-3.5 h-3.5 text-[var(--plum)]" />
                <span>Hediye Paketi & Özel Not Ekle (Ücretsiz)</span>
              </label>
              {isGift && (
                <input
                  type="text"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="Hediye notunuzu yazın (örn: Sevgilerle...)"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--line)] text-xs focus:outline-none focus:ring-1 focus:ring-[var(--mustard)]"
                />
              )}
            </div>

            {/* Ödeme Yöntemi Seçimi */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold uppercase tracking-wider opacity-75">
                Ödeme Yöntemi Tercihiniz:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("whatsapp")}
                  className={`p-2 rounded-xl border text-left text-xs font-semibold flex items-center gap-2 transition ${
                    paymentMethod === "whatsapp"
                      ? "bg-[var(--card)] border-[var(--olive)] ring-1 ring-[var(--olive)]"
                      : "bg-[var(--surface)] border-[var(--line)] opacity-80"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-[var(--olive)] shrink-0" />
                  <span className="truncate">Havale / WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-2 rounded-xl border text-left text-xs font-semibold flex items-center gap-2 transition ${
                    paymentMethod === "card"
                      ? "bg-[var(--card)] border-[var(--plum)] ring-1 ring-[var(--plum)]"
                      : "bg-[var(--surface)] border-[var(--line)] opacity-80"
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[var(--plum)] shrink-0" />
                  <span className="truncate">Kredi Kartı / Taksit</span>
                </button>
              </div>
            </div>

            {/* Siparişi Tamamla Butonu */}
            <button
              type="button"
              onClick={() => checkout(paymentMethod)}
              className={`w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition ${
                paymentMethod === "card"
                  ? "bg-[var(--plum)] hover:bg-[var(--plum-dark)]"
                  : "bg-[var(--olive)] hover:bg-[var(--olive-dark)]"
              }`}
            >
              {paymentMethod === "card" ? (
                <>
                  <CreditCard className="w-4 h-4" /> Kredi Kartı / Güvenli Link ile Sipariş Ver
                </>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4" /> Siparişi WhatsApp ile Tamamla
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-center opacity-75">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--olive)]" />
              <span>
                Doğrudan <strong>Neriman Çakır ({PHONE})</strong> hattına iletilir. Sitede şifre veya kart bilgisi saklanmaz.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
