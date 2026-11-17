import React, { useMemo, useState } from "react";
import { Product } from "../types";
import { ProductCard } from "./ProductCard";
import { Search, Heart, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

type ProductGridProps = {
  products: Product[];
  favIds: Set<string>;
  favOnly: boolean;
  setFavOnly: (v: boolean) => void;
  onToggleFav: (id: string) => void;
  onOpenModal: (p: Product) => void;
  onAddToCart: (p: Product) => void;
};

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  favIds,
  favOnly,
  setFavOnly,
  onToggleFav,
  onOpenModal,
  onAddToCart,
}) => {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("recommended");
  const [inStockOnly, setInStockOnly] = useState(false);

  const categories = [
    { id: "all", label: `${t.collection.catAll} (${products.length})` },
    { id: "bel", label: t.collection.catBel },
    { id: "kare-dolay", label: t.collection.catKare },
    { id: "aksesuar", label: t.collection.catAksesuar },
    { id: "set", label: t.collection.catSet },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (!favOnly || favIds.has(p.id)) &&
        (!inStockOnly || p.stockStatus === "in_stock") &&
        (!q ||
          [p.name, p.nameEn, p.motif, p.motifEn, p.series, p.seriesEn, p.shortDesc, p.shortDescEn]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(q))
    );

    if (sort === "price-asc") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") {
      return [...list].sort((a, b) =>
        isEn
          ? (a.nameEn || a.name).localeCompare(b.nameEn || b.name, "en")
          : a.name.localeCompare(b.name, "tr")
      );
    }
    return list;
  }, [products, category, query, sort, favOnly, favIds, inStockOnly, isEn]);

  return (
    <section id="koleksiyon" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Başlık ve Açıklama */}
      <div className="max-w-3xl mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--plum)]">
          {t.collection.subtitle}
        </span>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-1">
          {t.collection.title}
        </h2>
        <p className="text-sm sm:text-base opacity-80 mt-2">
          {t.collection.description}
        </p>
      </div>

      {/* Filtre ve Arama Çubuğu */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Arama */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-60" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.collection.searchPlaceholder}
              aria-label={t.collection.searchPlaceholder}
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--mustard)]"
            />
          </div>

          {/* Sıralama */}
          <label className="flex items-center gap-2 text-sm shrink-0">
            <span className="opacity-80">{t.collection.sortLabel}</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--line)] text-sm focus:outline-none"
            >
              <option value="recommended">{t.collection.sortRecommended}</option>
              <option value="price-asc">{t.collection.sortPriceAsc}</option>
              <option value="price-desc">{t.collection.sortPriceDesc}</option>
              <option value="name">{t.collection.sortName}</option>
            </select>
          </label>

          {/* Stok Filtresi */}
          <button
            type="button"
            onClick={() => setInStockOnly(!inStockOnly)}
            aria-pressed={inStockOnly}
            className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold border flex items-center gap-1.5 transition shrink-0 ${
              inStockOnly
                ? "bg-[#2D4537] text-white border-[#2D4537] shadow-sm"
                : "bg-[var(--surface-2)] border-[var(--line)] hover:bg-[var(--surface-3)]"
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${inStockOnly ? "text-[#A8B184]" : "opacity-70"}`} />
            {t.collection.inStockOnly}
          </button>

          {/* Favoriler Filtresi */}
          <button
            type="button"
            onClick={() => setFavOnly(!favOnly)}
            aria-pressed={favOnly}
            className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold border flex items-center gap-1.5 transition shrink-0 ${
              favOnly
                ? "bg-[var(--plum)] text-white border-[var(--plum)] shadow-sm"
                : "bg-[var(--surface-2)] border-[var(--line)] hover:bg-[var(--surface-3)]"
            }`}
          >
            <Heart className={`w-4 h-4 ${favOnly ? "fill-white" : ""}`} />
            {t.collection.favOnly} ({favIds.size})
          </button>
        </div>

        {/* Kategori Butonları */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Kategori filtreleri">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              aria-pressed={category === c.id}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                category === c.id
                  ? "bg-[var(--ink)] text-[var(--surface)] shadow-sm"
                  : "bg-[var(--surface-2)] hover:bg-[var(--surface-3)]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <p className="text-sm opacity-80" aria-live="polite">
          {filtered.length} {t.collection.listedCount} {favOnly && `• ${t.collection.favOnly}`}
        </p>
      </div>

      {/* Ürün Listesi veya Boş Durum */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-[var(--surface-2)] rounded-3xl border border-[var(--line)] space-y-3">
          <p className="font-serif-display text-2xl font-bold">{t.collection.emptyTitle}</p>
          <p className="text-sm opacity-80 max-w-md mx-auto">
            {t.collection.emptyDesc}
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setFavOnly(false);
              setSort("recommended");
            }}
            className="mt-2 px-5 py-2.5 rounded-xl bg-[var(--ink)] text-[var(--surface)] text-xs font-semibold hover:bg-[var(--plum)] transition"
          >
            {t.collection.showAllBtn}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFav={favIds.has(product.id)}
              onToggleFav={onToggleFav}
              onOpenModal={onOpenModal}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
};
