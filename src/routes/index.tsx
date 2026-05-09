import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { tr } from "@/data/translations";
import { wonders } from "@/data/wonders";
import { WonderCard } from "@/components/WonderCard";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "WonderSphere — Interactive Journey Through The 7 Wonders" },
      {
        name: "description",
        content:
          "A cinematic, bilingual exploration of the 7 Wonders of the World — spin the globe, explore cultures, and earn a traveler's passport.",
      },
    ],
  }),
});

function Landing() {
  const { lang } = useLang();

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] h-[120vmin] rounded-full opacity-70 animate-drift"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, oklch(0.55 0.18 240) 0%, oklch(0.18 0.08 270) 45%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #2a4a8a 0%, #0a1230 60%, transparent 75%)",
              boxShadow: "0 0 120px 30px rgba(120, 180, 255, 0.25), inset -40px -40px 120px rgba(0,0,0,0.7)",
            }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full pointer-events-none"
            style={{ boxShadow: "inset 0 0 80px 10px rgba(251,191,36,0.4)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-gold mb-8"
          >
            <HiSparkles /> {tr("tagline", lang)}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl leading-[1.05]"
          >
            <span className="block">{tr("welcome", lang).split(" ").slice(0, -1).join(" ")}</span>
            <span className="block shimmer">{tr("welcome", lang).split(" ").slice(-1)}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            {tr("heroSubtitle", lang)}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/globe"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-primary-foreground font-semibold glow-gold transition-transform hover:scale-105 active:scale-95"
            >
              {tr("startJourney", lang)}
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/globe"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 font-semibold hover:bg-white/10 transition"
            >
              {tr("exploreWonders", lang)}
            </Link>
          </motion.div>

          {/* Floating wonder icons */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {wonders.map((w, i) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.08, duration: 0.6 }}
                className="text-3xl select-none"
                style={{ filter: `drop-shadow(0 0 12px ${w.accent})` }}
              >
                {w.flag}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WONDERS GRID */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.4em] uppercase text-gold mb-3">
            {lang === "en" ? "The Seven Wonders" : "Tujuh Keajaiban"}
          </div>
          <h2 className="font-display text-4xl md:text-6xl">
            {lang === "en" ? "Walk among legends" : "Berjalan di antara legenda"}
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            {lang === "en"
              ? "From cliffside cities to floating marble — every wonder tells a story written in stone, music, food and faith."
              : "Dari kota di tebing hingga marmer melayang — setiap keajaiban menyimpan kisah yang ditulis dalam batu, musik, makanan, dan keyakinan."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wonders.map((w, i) => (
            <WonderCard key={w.id} wonder={w} index={i} />
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative max-w-7xl mx-auto px-6 pb-12">
        <div className="glass-strong rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-4xl">
              {lang === "en" ? "Ready to spin the planet?" : "Siap memutar planet?"}
            </h3>
            <p className="text-foreground/70 mt-2 max-w-xl">
              {lang === "en"
                ? "Open the interactive globe and click any glowing marker to begin."
                : "Buka globe interaktif dan klik penanda berkilau mana pun untuk memulai."}
            </p>
          </div>
          <Link
            to="/globe"
            className="relative inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-primary-foreground glow-gold whitespace-nowrap"
          >
            {tr("exploreOnGlobe", lang)} <HiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
