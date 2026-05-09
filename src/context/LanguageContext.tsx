import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/data/translations";

type LanguageCtx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };
const Ctx = createContext<LanguageCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("ws_lang") as Lang | null) : null;
    if (stored === "en" || stored === "id") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("ws_lang", l);
  };

  return (
    <Ctx.Provider value={{ lang, setLang, toggle: () => setLang(lang === "en" ? "id" : "en") }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
