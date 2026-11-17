import React from "react";
import { Product } from "../types";
import { imgLivingSofa, imgRunnerTable, imgBagEntry, imgFullFlat } from "../data/products";

type LivingSpacesProps = {
  products: Product[];
  openModal: (p: Product) => void;
};

export const LivingSpaces: React.FC<LivingSpacesProps> = ({ products, openModal }) => {
  const items = [
    {
      img: imgLivingSofa,
      label: "Yaşam Alanı / Salonda",
      title: "Koltuk Kombini",
      desc: "Bej koltukta Ganos bel yastığı, dolay silindir ve küçük kare yastık uyumu.",
      id: "ganos-bel",
    },
    {
      img: imgRunnerTable,
      label: "Yaşam Alanı / Sofrada",
      title: "Sofra Çekimi",
      desc: "Ahşap masada pembe gül motifli boncuk püsküllü runner, kahve cezvesi ve ekmek.",
      id: "gul-boncuk-runner",
    },
    {
      img: imgBagEntry,
      label: "Yaşam Alanı / Girişte",
      title: "Giriş Askılığı",
      desc: "Ahşap askıda asılı siyah büzgülü çanta, şapka ve keten ceket kompozisyonu.",
      id: "kucukmanika-siyah-canta",
    },
    {
      img: imgFullFlat,
      label: "Tam Seçki",
      title: "Tam Koleksiyon Düz Çekim",
      desc: "Pencere önünde yastıklar, 2 büzgülü çanta ve 3 boncuklu runner parçası.",
      id: "neri-tam-koleksiyon-set",
    },
  ];

  return (
    <section id="yasam-alanlari" aria-label="Yaşam Alanlarında Neri Home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20">
      <div className="mb-8 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--plum)]">Mekânla Bütünleşen Zanaat</span>
        <h2 className="font-serif-display text-3xl sm:text-4xl font-bold mt-1">Yaşam Alanlarında Neri Home</h2>
        <p className="text-sm sm:text-base opacity-80 mt-2">
          El dokuması ürünlerin evin içinde nasıl durduğunu bu dört yaşam alanı fotoğrafında görebilirsiniz. İlgilendiğiniz kareye dokunarak ürünü detaylıca inceleyebilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => {
          const product = products.find((p) => p.id === item.id);
          return (
            <article
              key={item.id + item.label}
              className="bg-[var(--card)] rounded-2xl border border-[var(--line)] overflow-hidden flex flex-col group hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-2)]">
                <img
                  src={item.img}
                  alt={`${item.title} — ${item.desc}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[var(--ink)]/90 text-[var(--surface)] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow">
                  {item.label}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <h3 className="font-serif-display text-xl font-bold leading-snug">{item.title}</h3>
                <p className="text-xs opacity-80 leading-relaxed flex-1">{item.desc}</p>
                {product && (
                  <button
                    type="button"
                    onClick={() => openModal(product)}
                    className="self-start mt-2 px-4 py-2 rounded-xl bg-[var(--ink)] text-[var(--surface)] text-xs font-semibold hover:bg-[var(--plum)] transition"
                  >
                    Ürünü İncele
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
