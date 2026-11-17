import { useState, useEffect, useCallback } from "react";
import { Product } from "../types";

export function useProductDeepLink(products: Product[]) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openProductModal = useCallback(
    (product: Product | null, pushState = true) => {
      setSelectedProduct(product);
      if (pushState) {
        const url = new URL(window.location.href);
        if (product) {
          url.searchParams.set("product", product.id);
        } else {
          url.searchParams.delete("product");
        }
        window.history.pushState({ productId: product?.id || null }, "", url.toString());
      }
    },
    []
  );

  // Sync URL on initial mount & handle browser back/forward (popstate)
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const prodId = params.get("product");
      if (prodId) {
        const found = products.find((p) => p.id === prodId);
        if (found) {
          setSelectedProduct(found);
          return;
        }
      }
      setSelectedProduct(null);
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, [products]);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (selectedProduct) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [selectedProduct]);

  return { selectedProduct, openProductModal, setSelectedProduct };
}
