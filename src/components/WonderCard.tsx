import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Wonder } from "@/data/wonders";
import { useLang } from "@/context/LanguageContext";
import { useProgress } from "@/context/ProgressContext";
import { tr } from "@/data/translations";
import { HiArrowRight } from "react-icons/hi2";

export function WonderCard({ wonder, index = 0 }: { wonder: Wonder; index?: number }) {
  const { lang } = useLang();
  const { isVisited } = useProgress();
  const visited = isVisited(wonder.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl overflow-hidden glass-strong shadow-[var(--shadow-deep)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={wonder.image}
          alt={wonder.englishName}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `radial-gradient(circle at 50% 80%, ${wonder.accent}33, transparent 60%)` }}
        />
        {visited && (
          <div className="absolute top-3 right-3 glass rounded-full px-2.5 py-1 text-[10px] tracking-widest text-gold flex items-center gap-1">
            ★ {tr("stampsCollected", lang)}
          </div>
        )}
        <div className="absolute top-3 left-3 text-2xl drop-shadow-lg">{wonder.flag}</div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-[11px] tracking-[0.3em] uppercase text-gold/80 mb-1">
            {wonder.country} · {wonder.continent}
          </div>
          <h3 className="font-display text-2xl leading-tight text-foreground">
            {lang === "en" ? wonder.englishName : wonder.indonesianName}
          </h3>
          <p className="text-sm text-foreground/70 mt-2 line-clamp-2">
            {lang === "en" ? wonder.shortEN : wonder.shortID}
          </p>
          <Link
            to="/wonder/$id"
            params={{ id: wonder.id }}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold group/link"
          >
            {tr("visitWonder", lang)}
            <HiArrowRight className="transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
