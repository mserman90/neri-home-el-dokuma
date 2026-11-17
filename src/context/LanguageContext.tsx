import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "../i18n/translations";
import { storage } from "../utils/storage";

type TranslationsType = typeof translations.tr;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationsType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = storage.get("neri_lang", "");
    if (saved === "tr" || saved === "en") return saved;
    // Tarayıcı diline göre varsayılan belirleme
    if (typeof navigator !== "undefined" && navigator.language?.startsWith("en")) {
      return "en";
    }
    return "tr";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    storage.set("neri_lang", newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    setLang(lang === "tr" ? "en" : "tr");
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang] || translations.tr;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
