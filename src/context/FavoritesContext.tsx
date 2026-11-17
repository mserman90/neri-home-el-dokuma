import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { FavRecord } from "../types";
import { storage } from "../utils/storage";

interface FavoritesContextType {
  favs: FavRecord[];
  favIds: Set<string>;
  favCount: number;
  toggleFav: (productId: string) => void;
  isFav: (productId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favs, setFavs] = useState<FavRecord[]>(() => storage.get("neri_favorites", []));

  useEffect(() => {
    storage.set("neri_favorites", favs);
  }, [favs]);

  const favIds = useMemo(() => new Set(favs.map((f) => f.value.productId)), [favs]);

  const toggleFav = (productId: string) => {
    setFavs((prev) => {
      const existing = prev.find((f) => f.value.productId === productId);
      if (existing) {
        return prev.filter((f) => f.value.productId !== productId);
      }
      return [...prev, { id: `fav-${productId}-${Date.now()}`, value: { productId } }];
    });
  };

  const isFav = (productId: string) => favIds.has(productId);

  return (
    <FavoritesContext.Provider
      value={{
        favs,
        favIds,
        favCount: favs.length,
        toggleFav,
        isFav,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
