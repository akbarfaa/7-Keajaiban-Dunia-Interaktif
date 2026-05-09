import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { wonders } from "@/data/wonders";
import { useLang } from "@/context/LanguageContext";
import { useProgress } from "@/context/ProgressContext";
import { tr } from "@/data/translations";

export const Route = createFileRoute("/passport")({
  component: PassportPage,
  head: () => ({ meta: [{ title: "Passport — WonderSphere" }] }),
});

function PassportPage() {
  const { lang } = useLang();
  const { visited, reset } = useProgress();
  const pct = Math.round((visited.length / wonders.length) * 100);

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-10">
        <div className="text-xs tracking-[0.4em] uppercase text-gold mb-2">{tr("passport", lang)}</div>
        <h1 className="font-display text-4xl md:text-6xl">{tr("totalProgress", lang)}</h1>
        <div className="mt-6 max-w-md mx-auto">
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gold"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            {visited.length} / {wonders.length} · {pct}%
          </div>
        </div>
      </div>

      {visited.length === 0 ? (
        <div className="glass-strong rounded-3xl p-10 text-center">
          <p className="text-foreground/70">{tr("passportEmpty", lang)}</p>
          <Link to="/globe" className="mt-5 inline-flex rounded-full bg-gold px-6 py-2.5 font-semibold text-primary-foreground glow-gold">
            {tr("exploreOnGlobe", lang)}
          </Link>
        </div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wonders.map((w, i) => {
          const got = visited.includes(w.id);
          return (
            <motion.div
              key={w.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`relative glass-strong rounded-3xl p-6 ${got ? "" : "opacity-50 grayscale"}`}
              style={got ? { boxShadow: `0 0 40px -10px ${w.accent}66` } : undefined}
            >
              <div
                className="w-16 h-16 rounded-full grid place-items-center text-3xl mb-3"
                style={{ background: `${w.accent}22`, boxShadow: got ? `0 0 30px ${w.accent}55` : undefined }}
              >
                {w.flag}
              </div>
              <div className="text-[10px] tracking-widest uppercase text-gold/80">{w.country}</div>
              <div className="font-display text-xl">{lang === "en" ? w.englishName : w.indonesianName}</div>
              <div className="mt-3 text-sm text-foreground/80">
                {got
                  ? `★ ${lang === "en" ? w.achievementBadge.en : w.achievementBadge.id}`
                  : lang === "en"
                  ? "Locked — visit this wonder"
                  : "Terkunci — kunjungi keajaiban ini"}
              </div>
              <Link
                to="/wonder/$id"
                params={{ id: w.id }}
                className="mt-4 inline-block text-sm text-gold hover:underline"
              >
                {tr("visitWonder", lang)} →
              </Link>
            </motion.div>
          );
        })}
      </div>

      {visited.length > 0 && (
        <div className="text-center mt-10">
          <button onClick={reset} className="text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
            {lang === "en" ? "Reset passport" : "Atur ulang paspor"}
          </button>
        </div>
      )}
    </div>
  );
}
