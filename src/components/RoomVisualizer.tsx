import React, { useState } from "react";
import { Product } from "../types";
import { Sparkles, Eye, ShoppingBag, Check, Layers, Sparkle } from "lucide-react";
import { tl } from "../utils/formatters";
import { imgGanos, imgKareAlt, imgMeric, imgGocAlt } from "../data/products";

type RoomVisualizerProps = {
  products: Product[];
  onOpenModal: (p: Product) => void;
  onAddToCart: (p: Product) => void;
};

type SofaColor = {
  id: string;
  name: string;
  hex: string;
  darkHex: string;
  highlight: string;
  advice: string;
};

const SOFA_COLORS: SofaColor[] = [
  {
    id: "cream",
    name: "Krem & Keten Bej",
    hex: "#E5DEC9",
    darkHex: "#D0C8B0",
    highlight: "#F5F0E4",
    advice: "Krem ve keten tonları, ham keçi kılı ve yün dokumaların doğal el işçiliğini ön plana çıkararak aydınlık, ferah ve dingin bir salon atmosferi yaratır.",
  },
  {
    id: "anthracite",
    name: "Antrasit Gri",
    hex: "#34383F",
    darkHex: "#24272C",
    highlight: "#484E57",
    advice: "Koyu antrasit kumaş üzerinde mürdüm şeritler ve Su Yolu zikzakları yüksek kontrast yakalayarak modern, sofistike ve güçlü bir odak noktası oluşturur.",
  },
  {
    id: "emerald",
    name: "Zümrüt Yeşili",
    hex: "#264132",
    darkHex: "#1A2E23",
    highlight: "#355946",
    advice: "Zümrüt yeşili oturma gruplarında zeytin yeşili ve hardal tonları zengin bir ton-sür-ton uyum sağlayarak yaşam alanınıza asil bir doğallık katar.",
  },
  {
    id: "tan",
    name: "Sıcak Taba / Deri",
    hex: "#8C4E31",
    darkHex: "#6F3920",
    highlight: "#AA603D",
    advice: "Taba ve konyak tonları, Küçükyoncalı dokumalarının boyasız toprak ve kahve keçi kılı lifleriyle birleştiğinde sıcak bir İskandinav-Bohem hava yakalar.",
  },
  {
    id: "navy",
    name: "Gece Mavisi / İndigo",
    hex: "#243247",
    darkHex: "#182231",
    highlight: "#364863",
    advice: "Derin gece mavisi zemin, ekru ve mürdüm tonlarını parlatarak salonunuza sanatsal, dingin ve zamansız bir Rumeli zarafeti kazandırır.",
  },
];

type VisualizerCushion = {
  id: string;
  name: string;
  motif: string;
  size: string;
  price: number;
  image: string;
  aspect: string;
};

export const RoomVisualizer: React.FC<RoomVisualizerProps> = ({
  products,
  onOpenModal,
  onAddToCart,
}) => {
  const cushions: VisualizerCushion[] = [
    {
      id: "ganos-bel",
      name: "Ganos Zikzak Bel Yastığı",
      motif: "Su Yolu & Usta Damgası",
      size: "35 x 55 cm",
      price: 1450,
      image: imgGanos,
      aspect: "aspect-[55/35]",
    },
    {
      id: "kucukmanika-kare",
      name: "Küçükmanika Zeytin Kare Kırlent",
      motif: "Su Yolu & Göç Yolları",
      size: "45 x 45 cm",
      price: 1350,
      image: imgKareAlt,
      aspect: "aspect-square",
    },
    {
      id: "meric-hardal",
      name: "Meriç Hardal Çizgili Bel Yastığı",
      motif: "Elif & İnce Sofra Çizgileri",
      size: "35 x 55 cm",
      price: 1250,
      image: imgMeric,
      aspect: "aspect-[55/35]",
    },
    {
      id: "goc-yollari-bel",
      name: "Göç Yolları Ham Ekru Yastık",
      motif: "Göç Yolları & Sofra Şeridi",
      size: "35 x 55 cm",
      price: 1290,
      image: imgGocAlt,
      aspect: "aspect-[55/35]",
    },
  ];

  const [selectedSofa, setSelectedSofa] = useState<SofaColor>(SOFA_COLORS[0]);
  const [selectedCushion, setSelectedCushion] = useState<VisualizerCushion>(cushions[0]);
  const [isDuoMode, setIsDuoMode] = useState(false);

  const activeProduct = products.find((p) => p.id === selectedCushion.id) || products[0];
  const secondaryProduct = products.find((p) => p.id === "kucukmanika-kare") || products[1];

  const handleAddCurrent = () => {
    onAddToCart(activeProduct);
    if (isDuoMode && secondaryProduct && secondaryProduct.id !== activeProduct.id) {
      onAddToCart(secondaryProduct);
    }
  };

  return (
    <section id="onizleme" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
      <div className="bg-[var(--surface-2)] rounded-3xl p-6 sm:p-10 border border-[var(--line)] shadow-sm">
        {/* Başlık Alanı */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--plum)] text-xs font-bold border border-[var(--line)] mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> Canlı Koltuk & Kırlent Simülatörü
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold">
            Koltuk & Kırlent Kombin Aracı
          </h2>
          <p className="text-sm sm:text-base opacity-80 mt-2 leading-relaxed">
            Evinizdeki koltuğun kumaş rengini seçin; el tezgâhı keçi kılı ve cicim kırlentlerimizin gerçek renk tonlarında nasıl durduğunu anında deneyimleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sol Kolon: İnteraktif Koltuk Sahnesi */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-[var(--line)] shadow-xl bg-gradient-to-b from-[#F2ECE1] to-[#E5DEC8] dark:from-[#241D17] dark:to-[#18130F] flex flex-col justify-end p-4 sm:p-8 select-none">
              {/* Arka Plan Duvar ve Işık Efekti */}
              <div className="absolute inset-0 bg-radial from-white/20 via-transparent to-black/15 pointer-events-none" />

              {/* Parke / Zemin Çizgisi */}
              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-black/15 to-transparent border-t border-black/5 pointer-events-none" />

              {/* Koltuk SVG İllüstrasyonu - Seçili Kumaş Rengini Dinamik Alır */}
              <div className="relative w-full max-w-[580px] mx-auto z-10 transition-transform duration-300">
                <svg
                  viewBox="0 0 600 320"
                  className="w-full h-auto drop-shadow-2xl transition-colors duration-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Koltuk Ayakları */}
                  <g className="text-[#3A2A1E]">
                    <polygon points="85,295 100,295 92,320 80,320" fill="currentColor" opacity="0.9" />
                    <polygon points="190,295 205,295 200,320 188,320" fill="currentColor" opacity="0.8" />
                    <polygon points="400,295 415,295 412,320 400,320" fill="currentColor" opacity="0.8" />
                    <polygon points="505,295 520,295 520,320 508,320" fill="currentColor" opacity="0.9" />
                  </g>

                  {/* Koltuk Arkalığı - Sol Minder */}
                  <rect
                    x="80"
                    y="50"
                    width="215"
                    height="160"
                    rx="24"
                    fill={selectedSofa.hex}
                    className="transition-colors duration-500"
                  />
                  <rect
                    x="80"
                    y="50"
                    width="215"
                    height="160"
                    rx="24"
                    fill="url(#sofaHighlight)"
                    opacity="0.4"
                  />
                  <rect
                    x="80"
                    y="50"
                    width="215"
                    height="160"
                    rx="24"
                    stroke={selectedSofa.darkHex}
                    strokeWidth="3"
                    opacity="0.6"
                  />

                  {/* Koltuk Arkalığı - Sağ Minder */}
                  <rect
                    x="305"
                    y="50"
                    width="215"
                    height="160"
                    rx="24"
                    fill={selectedSofa.hex}
                    className="transition-colors duration-500"
                  />
                  <rect
                    x="305"
                    y="50"
                    width="215"
                    height="160"
                    rx="24"
                    fill="url(#sofaHighlight)"
                    opacity="0.4"
                  />
                  <rect
                    x="305"
                    y="50"
                    width="215"
                    height="160"
                    rx="24"
                    stroke={selectedSofa.darkHex}
                    strokeWidth="3"
                    opacity="0.6"
                  />

                  {/* Oturma Minderi (Plush Seat Cushion) */}
                  <rect
                    x="65"
                    y="180"
                    width="470"
                    height="85"
                    rx="20"
                    fill={selectedSofa.hex}
                    className="transition-colors duration-500"
                  />
                  <rect
                    x="65"
                    y="180"
                    width="470"
                    height="85"
                    rx="20"
                    fill="url(#seatGrad)"
                    opacity="0.5"
                  />
                  <rect
                    x="65"
                    y="180"
                    width="470"
                    height="85"
                    rx="20"
                    stroke={selectedSofa.darkHex}
                    strokeWidth="3"
                    opacity="0.5"
                  />

                  {/* Koltuk Ön Etekliği (Base Plank) */}
                  <rect
                    x="60"
                    y="250"
                    width="480"
                    height="45"
                    rx="12"
                    fill={selectedSofa.darkHex}
                    className="transition-colors duration-500"
                  />

                  {/* Sol Kolçak (Left Armrest) */}
                  <rect
                    x="35"
                    y="110"
                    width="55"
                    height="165"
                    rx="22"
                    fill={selectedSofa.hex}
                    className="transition-colors duration-500"
                  />
                  <rect
                    x="35"
                    y="110"
                    width="55"
                    height="165"
                    rx="22"
                    fill="url(#sofaHighlight)"
                    opacity="0.5"
                  />
                  <rect
                    x="35"
                    y="110"
                    width="55"
                    height="165"
                    rx="22"
                    stroke={selectedSofa.darkHex}
                    strokeWidth="3"
                    opacity="0.7"
                  />

                  {/* Sağ Kolçak (Right Armrest) */}
                  <rect
                    x="510"
                    y="110"
                    width="55"
                    height="165"
                    rx="22"
                    fill={selectedSofa.hex}
                    className="transition-colors duration-500"
                  />
                  <rect
                    x="510"
                    y="110"
                    width="55"
                    height="165"
                    rx="22"
                    fill="url(#sofaHighlight)"
                    opacity="0.5"
                  />
                  <rect
                    x="510"
                    y="110"
                    width="55"
                    height="165"
                    rx="22"
                    stroke={selectedSofa.darkHex}
                    strokeWidth="3"
                    opacity="0.7"
                  />

                  {/* Gradyan Tanımları */}
                  <defs>
                    <linearGradient id="sofaHighlight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
                    </linearGradient>
                    <linearGradient id="seatGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                      <stop offset="70%" stopColor="transparent" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Koltuk Üzerinde Gerçek Kırlent Yerleşimi */}
                <div className="absolute inset-0 flex items-center justify-center pb-8 pointer-events-none">
                  {isDuoMode ? (
                    /* İkili Salon Kombini: Bel Yastığı + Kare Kırlent */
                    <div className="relative flex items-center justify-center gap-[-20px] transition-all duration-300">
                      {/* Arkadaki Kare Kırlent */}
                      <div className="w-28 sm:w-36 md:w-44 aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-white/70 -rotate-3 transform -translate-x-3 translate-y-[-10px]">
                        <img
                          src={imgKareAlt}
                          alt="Küçükmanika Kare Kırlent"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Öndeki Bel Yastığı */}
                      <div className="w-36 sm:w-48 md:w-56 aspect-[55/35] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 rotate-2 transform translate-x-2 translate-y-[15px] z-10">
                        <img
                          src={selectedCushion.image}
                          alt={selectedCushion.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Tekli Kırlent Modu */
                    <div
                      className={`w-36 sm:w-52 md:w-60 ${selectedCushion.aspect} rounded-2xl overflow-hidden shadow-2xl border-2 border-white/75 transform hover:scale-105 transition-transform duration-300 -rotate-1`}
                    >
                      <img
                        src={selectedCushion.image}
                        alt={selectedCushion.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Koltuk Kumaş Bilgi Rozeti */}
              <div className="absolute top-4 left-4 z-20 bg-[var(--card)]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm border border-[var(--line)] flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full border border-black/20 shadow-xs"
                  style={{ backgroundColor: selectedSofa.hex }}
                />
                <span>Kumaş: <strong>{selectedSofa.name}</strong></span>
              </div>

              {/* Kombin Modu Rozeti */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  type="button"
                  onClick={() => setIsDuoMode(!isDuoMode)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border shadow-sm transition flex items-center gap-1.5 ${
                    isDuoMode
                      ? "bg-[var(--plum)] text-white border-[var(--plum)]"
                      : "bg-[var(--card)]/90 text-[var(--ink)] border-[var(--line)]"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{isDuoMode ? "İkili Kombin Aktif" : "İkili Kombini Dene"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Kontrol Paneli ve Kumaş Seçimi */}
          <div className="lg:col-span-5 space-y-5">
            {/* 1. Adım: Koltuk Rengi Seçimi */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 opacity-80">
                1. Koltuğunuzun Kumaş Rengini Seçin:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SOFA_COLORS.map((sofa) => (
                  <button
                    key={sofa.id}
                    type="button"
                    onClick={() => setSelectedSofa(sofa)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs font-semibold transition ${
                      selectedSofa.id === sofa.id
                        ? "bg-[var(--card)] border-[var(--plum)] ring-2 ring-[var(--plum)]/30 shadow-md scale-102"
                        : "bg-[var(--card)]/60 border-[var(--line)] hover:bg-[var(--card)]"
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-black/20 shadow-xs shrink-0 flex items-center justify-center text-white"
                      style={{ backgroundColor: sofa.hex }}
                    >
                      {selectedSofa.id === sofa.id && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </span>
                    <span className="truncate">{sofa.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Adım: Dokuma Kırlent Seçimi */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 opacity-80">
                2. Koltukta Görmek İstediğiniz Parça:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cushions.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCushion(c)}
                    className={`flex items-center gap-2.5 p-2 rounded-xl border text-left text-xs transition ${
                      selectedCushion.id === c.id
                        ? "bg-[var(--card)] border-[var(--plum)] ring-2 ring-[var(--plum)]/20 shadow-sm"
                        : "bg-[var(--card)]/60 border-[var(--line)] hover:bg-[var(--card)]"
                    }`}
                  >
                    <div className="w-12 h-10 rounded-lg overflow-hidden shrink-0 border border-[var(--line)] bg-[var(--surface-3)]">
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold truncate">{c.name}</div>
                      <div className="text-[10px] opacity-70 truncate">{c.size}</div>
                    </div>
                    <div className="font-serif-display font-bold text-xs text-[var(--plum)] shrink-0 pr-1">
                      {tl(c.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Renk Uyumu ve Dekorasyon İpucu */}
            <div className="p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] text-xs space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-[var(--plum)]">
                <Sparkle className="w-3.5 h-3.5" /> Dekorasyon & Renk Uyumu Önerisi
              </div>
              <p className="opacity-85 leading-relaxed">{selectedSofa.advice}</p>
            </div>

            {/* Aksiyon Butonları */}
            <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={handleAddCurrent}
                className="flex-1 py-3 px-4 rounded-xl bg-[var(--ink)] hover:bg-[var(--plum)] text-[var(--surface)] text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {isDuoMode
                    ? `İkili Seti Sepete Ekle (${tl(selectedCushion.price + 1350)})`
                    : `Sepete Ekle (${tl(selectedCushion.price)})`}
                </span>
              </button>
              <button
                type="button"
                onClick={() => onOpenModal(activeProduct)}
                className="py-3 px-4 rounded-xl bg-[var(--card)] border border-[var(--line)] text-xs font-semibold hover:bg-[var(--surface-3)] transition flex items-center justify-center gap-1.5"
              >
                <Eye className="w-4 h-4" /> Ürünü İncele
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
