import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

import en from "../i18n/en";
import es from "../i18n/es";

type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");
  const t = lang === "en" ? en : es;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

