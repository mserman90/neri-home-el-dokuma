import { useEffect, useState } from "react";
import { storage } from "../utils/storage";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = storage.get<"light" | "dark" | null>("neri_theme", null);
    if (saved) return saved;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    storage.set("neri_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
