import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobeScene } from "@/components/GlobeScene";
import { wonders, type Wonder } from "@/data/wonders";
import { useLang } from "@/context/LanguageContext";
import { tr } from "@/data/translations";

export const Route = createFileRoute("/globe")({
  component: GlobeExplorer,
  ssr: false,
  head: () => ({
    meta: [
      { title: "Interactive Globe — WonderSphere" },
      {
        name: "description",
        content: "Spin a 3D Earth and click glowing markers to explore the 7 Wonders of the World.",
      },
    ],
  }),
});

function GlobeExplorer() {
  const { lang } = useLang();
  const [hovered, setHovered] = useState<Wonder | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-6">
        <div className="text-xs tracking-[0.4em] uppercase text-gold mb-2">
          {lang === "en" ? "Interactive Earth" : "Bumi Interaktif"}
        </div>
        <h1 className="font-display text-3xl md:text-5xl">
          {lang === "en" ? "Touch a wonder, fly there" : "Sentuh keajaiban, terbang ke sana"}
        </h1>
        <p className="text-foreground/70 mt-2 text-sm">
          {lang === "en"
            ? "Drag to rotate · Scroll to zoom · Click a glowing marker"
            : "Seret untuk memutar · Gulir untuk zoom · Klik penanda berkilau"}
        </p>
      </div>

      <div className="relative h-[70vh] min-h-[520px] w-full rounded-3xl overflow-hidden glass-strong">
        {mounted && <GlobeScene onHover={setHovered} />}
        {/* corner overlay */}
        <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-[10px] tracking-widest uppercase text-gold/80 pointer-events-none">
          {wonders.length} {lang === "en" ? "wonders mapped" : "keajaiban dipetakan"}
        </div>
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm glass-strong rounded-2xl p-4 pointer-events-none"
            >
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-gold/80">
                <span>{hovered.flag}</span>
                <span>{hovered.country}</span>
              </div>
              <div className="font-display text-xl mt-1">
                {lang === "en" ? hovered.englishName : hovered.indonesianName}
              </div>
              <p className="text-xs text-foreground/70 mt-1 line-clamp-2">
                {lang === "en" ? hovered.shortEN : hovered.shortID}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick list */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {wonders.map((w) => (
          <Link
            key={w.id}
            to="/wonder/$id"
            params={{ id: w.id }}
            className="group glass rounded-2xl p-3 flex items-center gap-3 hover:bg-white/10 transition"
          >
            <div
              className="w-10 h-10 rounded-xl grid place-items-center text-xl"
              style={{ background: `${w.accent}22`, boxShadow: `0 0 20px ${w.accent}33` }}
            >
              {w.flag}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">
                {lang === "en" ? w.englishName : w.indonesianName}
              </div>
              <div className="text-[10px] text-muted-foreground tracking-widest uppercase">{w.country}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10 text-xs text-muted-foreground">
        {tr("totalProgress", lang)} →{" "}
        <Link to="/passport" className="text-gold underline-offset-4 hover:underline">
          {tr("navPassport", lang)}
        </Link>
      </div>
    </div>
  );
}
