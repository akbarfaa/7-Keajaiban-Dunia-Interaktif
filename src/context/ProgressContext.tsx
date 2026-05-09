import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type ProgressCtx = {
  visited: string[];
  visit: (id: string) => boolean; // returns true if newly unlocked
  isVisited: (id: string) => boolean;
  reset: () => void;
};

const Ctx = createContext<ProgressCtx | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [visited, setVisited] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem("ws_visited");
      if (raw) setVisited(JSON.parse(raw));
    } catch {}
  }, []);

  const persist = (next: string[]) => {
    setVisited(next);
    if (typeof window !== "undefined") localStorage.setItem("ws_visited", JSON.stringify(next));
  };

  const visit = useCallback(
    (id: string) => {
      if (visited.includes(id)) return false;
      const next = [...visited, id];
      persist(next);
      return true;
    },
    [visited],
  );

  const isVisited = useCallback((id: string) => visited.includes(id), [visited]);

  const reset = () => persist([]);

  return <Ctx.Provider value={{ visited, visit, isVisited, reset }}>{children}</Ctx.Provider>;
}

export function useProgress() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
}
