import React, { createContext, useContext, useState, useEffect } from "react";
import { CartRecord, Product } from "../types";
import { storage } from "../utils/storage";

interface CartContextType {
  cart: CartRecord[];
  cartCount: number;
  cartTotal: number;
  addToCart: (product: Product, optionIndex?: number) => void;
  changeQty: (rec: CartRecord, delta: number) => void;
  removeCart: (rec: CartRecord) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{
  children: React.ReactNode;
  onShowToast?: (msg: string) => void;
}> = ({ children, onShowToast }) => {
  const [cart, setCart] = useState<CartRecord[]>(() => storage.get("neri_cart", []));

  useEffect(() => {
    storage.set("neri_cart", cart);
  }, [cart]);

  const cartCount = cart.reduce((s, c) => s + c.value.qty, 0);
  const cartTotal = cart.reduce((s, c) => s + c.value.unitPrice * c.value.qty, 0);

  const addToCart = (product: Product, optionIndex = 0) => {
    const opt = product.options[optionIndex] || product.options[0];
    setCart((prev) => {
      const existing = prev.find(
        (c) => c.value.productId === product.id && c.value.optionIndex === optionIndex
      );
      if (existing) {
        return prev.map((c) =>
          c.id === existing.id ? { ...c, value: { ...c.value, qty: c.value.qty + 1 } } : c
        );
      } else {
        const item: CartRecord = {
          id: `cart-${product.id}-${optionIndex}-${Date.now()}`,
          value: {
            productId: product.id,
            optionIndex,
            qty: 1,
            unitPrice: product.price + opt.extraPrice,
            optionLabel: opt.label,
          },
        };
        return [...prev, item];
      }
    });
    if (onShowToast) {
      onShowToast(`“${product.name}” sepete eklendi.`);
    }
  };

  const changeQty = (rec: CartRecord, delta: number) => {
    setCart((prev) => {
      const nextQty = rec.value.qty + delta;
      return nextQty <= 0
        ? prev.filter((c) => c.id !== rec.id)
        : prev.map((c) => (c.id === rec.id ? { ...c, value: { ...c.value, qty: nextQty } } : c));
    });
  };

  const removeCart = (rec: CartRecord) => {
    setCart((prev) => prev.filter((c) => c.id !== rec.id));
    if (onShowToast) {
      onShowToast("Ürün sepetten silindi.");
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        changeQty,
        removeCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
