import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { wonders } from "@/data/wonders";
import { useLang } from "@/context/LanguageContext";
import { useProgress } from "@/context/ProgressContext";
import { tr } from "@/data/translations";
import {
  HiArrowLeft,
  HiOutlineCake,
  HiOutlineMusicalNote,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlineSpeakerWave,
  HiOutlineSpeakerXMark,
} from "react-icons/hi2";
import { GiBigDiamondRing, GiTempleDoor } from "react-icons/gi";

export const Route = createFileRoute("/wonder/$id")({
  component: WonderDetail,
  loader: ({ params }) => {
    const w = wonders.find((x) => x.id === params.id);
    if (!w) throw notFound();
    return { wonder: w };
  },
  head: ({ loaderData }) => {
    const w = loaderData?.wonder;
    if (!w) return { meta: [{ title: "Wonder — WonderSphere" }] };
    return {
      meta: [
        { title: `${w.englishName} — WonderSphere` },
        { name: "description", content: w.shortEN },
        { property: "og:title", content: `${w.englishName} — WonderSphere` },
        { property: "og:description", content: w.shortEN },
        { property: "og:image", content: w.image },
        { name: "twitter:image", content: w.image },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

function WonderDetail() {
  const { wonder } = Route.useLoaderData() as { wonder: (typeof wonders)[number] };
  const { lang } = useLang();
  const { visit } = useProgress();
  const [unlocked, setUnlocked] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playingDoc, setPlayingDoc] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Parallax effect for the hero image
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  useEffect(() => {
    const isNew = visit(wonder.id);
    if (isNew) {
      setUnlocked(true);
      const t = setTimeout(() => setUnlocked(false), 4200);
      return () => clearTimeout(t);
    }
  }, [wonder.id, visit]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  return (
    <div className="relative -mt-28">
      {/* HERO */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <motion.img
            src={wonder.image}
            alt={wonder.englishName}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-60"
          style={{ background: `radial-gradient(circle at 30% 70%, ${wonder.accent}55, transparent 60%)` }}
        />

        <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <Link
            to="/globe"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold/80 hover:text-gold transition mb-4 w-fit"
          >
            <HiArrowLeft /> {tr("back", lang)}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 text-sm tracking-widest uppercase text-gold/90"
          >
            <span className="text-3xl">{wonder.flag}</span>
            <span>
              {wonder.country} · {wonder.continent}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl mt-3"
          >
            {lang === "en" ? wonder.englishName : wonder.indonesianName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-4 max-w-2xl text-foreground/80 text-lg"
          >
            {lang === "en" ? wonder.shortEN : wonder.shortID}
          </motion.p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setMuted((m) => !m);
                if (audioRef.current && muted) audioRef.current.play().catch(() => {});
              }}
              className="glass rounded-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-white/10"
            >
              {muted ? <HiOutlineSpeakerXMark /> : <HiOutlineSpeakerWave />}
              {muted
                ? lang === "en"
                  ? "Play ambience"
                  : "Putar suasana"
                : lang === "en"
                ? "Mute ambience"
                : "Bisukan suasana"}
            </button>
            <a
              href={`https://www.google.com/maps?q=${wonder.coordinates.lat},${wonder.coordinates.lng}`}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-white/10"
            >
              <HiOutlineGlobeAlt /> {wonder.coordinates.lat.toFixed(2)}°, {wonder.coordinates.lng.toFixed(2)}°
            </a>
          </div>
        </div>

        <audio ref={audioRef} src={wonder.ambientSound} loop />
      </section>

      {/* QUICK FACTS */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="glass-strong rounded-3xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Fact label={tr("yearBuilt", lang)} value={wonder.yearBuilt} icon={<GiTempleDoor />} accent={wonder.accent} />
          <Fact label={tr("architecture", lang)} value={wonder.architecturalStyle} icon={<GiBigDiamondRing />} accent={wonder.accent} />
          <Fact label={tr("food", lang)} value={wonder.traditionalFood} icon={<HiOutlineCake />} accent={wonder.accent} />
          <Fact label={tr("music", lang)} value={wonder.localMusic} icon={<HiOutlineMusicalNote />} accent={wonder.accent} />
        </div>
      </section>

      {/* HISTORY */}
      <section className="max-w-6xl mx-auto px-6 mt-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          <Block title={tr("introduction", lang)} accent={wonder.accent}>
            <p className="text-foreground/80 leading-relaxed">
              {lang === "en" ? wonder.shortEN : wonder.shortID}
            </p>
          </Block>
          <Block title={tr("historicalBg", lang)} accent={wonder.accent}>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
              {lang === "en" ? wonder.historyEN : wonder.historyID}
            </p>
          </Block>
          <Block title={tr("culturalImp", lang)} accent={wonder.accent}>
            <p className="text-foreground/80 leading-relaxed">
              {lang === "en" ? wonder.cultureEN : wonder.cultureID}
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              <CultureChip label={tr("clothes", lang)} value={wonder.traditionalClothes} />
              <CultureChip label={tr("festival", lang)} value={wonder.famousFestival} />
            </div>
          </Block>

          {/* Documentary */}
          <Block title={tr("watchDoc", lang)} accent={wonder.accent} icon={<HiOutlineSparkles />}>
            <div
              className="relative aspect-video rounded-2xl overflow-hidden glass-strong"
              style={{ boxShadow: `0 0 60px -10px ${wonder.accent}55` }}
            >
              {playingDoc ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${wonder.youtubeId}?autoplay=1&rel=0`}
                  title={`${wonder.englishName} documentary`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setPlayingDoc(true)}
                  className="absolute inset-0 group"
                  aria-label="Play documentary"
                >
                  <img
                    src={`https://img.youtube.com/vi/${wonder.youtubeId}/maxresdefault.jpg`}
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${wonder.youtubeId}/hqdefault.jpg`;
                    }}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div
                      className="w-20 h-20 rounded-full grid place-items-center bg-gold text-primary-foreground shadow-[0_0_60px] transition-transform group-hover:scale-110"
                      style={{ boxShadow: `0 0 80px ${wonder.accent}` }}
                    >
                      <span className="ml-1 text-2xl">▶</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="text-xs tracking-widest uppercase text-gold/90">
                      {tr("watchDoc", lang)}
                    </div>
                    <div className="font-display text-xl">{wonder.englishName}</div>
                  </div>
                </button>
              )}
            </div>
          </Block>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="glass-strong rounded-3xl p-6">
            <div className="text-xs tracking-widest uppercase text-gold mb-3">
              {tr("funFacts", lang)}
            </div>
            <ul className="space-y-3">
              {wonder.funFacts.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/85">
                  <span className="text-gold mt-0.5">✦</span>
                  <span>{lang === "en" ? f.en : f.id}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-strong rounded-3xl p-6">
            <div className="text-xs tracking-widest uppercase text-gold mb-3">
              {tr("tourismInfo", lang)}
            </div>
            <p className="text-sm text-foreground/80">{tr("tourismText", lang)}</p>
          </div>

          {/* Mini timeline */}
          <div className="glass-strong rounded-3xl p-6">
            <div className="text-xs tracking-widest uppercase text-gold mb-4">
              {tr("history", lang)}
            </div>
            <ol className="space-y-4 relative">
              <span
                className="absolute left-[7px] top-1 bottom-1 w-px"
                style={{ background: `linear-gradient(to bottom, ${wonder.accent}, transparent)` }}
              />
              {wonder.timeline.map((e, i) => (
                <li key={i} className="relative pl-6">
                  <span
                    className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full"
                    style={{ background: wonder.accent, boxShadow: `0 0 12px ${wonder.accent}` }}
                  />
                  <div className="text-xs text-gold tracking-widest">{e.year}</div>
                  <div className="text-sm text-foreground/80">
                    {lang === "en" ? e.en : e.id}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </section>

      {/* Achievement unlocked toast */}
      <AnimatePresence>
        {unlocked && (
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-strong rounded-2xl px-6 py-4 flex items-center gap-4 glow-gold"
          >
            <div
              className="w-12 h-12 rounded-full grid place-items-center text-2xl"
              style={{ background: `${wonder.accent}33`, boxShadow: `0 0 30px ${wonder.accent}` }}
            >
              {wonder.flag}
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">
                {tr("achievementUnlocked", lang)}
              </div>
              <div className="font-display text-lg">
                {lang === "en" ? wonder.achievementBadge.en : wonder.achievementBadge.id}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Fact({ label, value, icon, accent }: { label: string; value: string; icon: React.ReactNode; accent: string }) {
  return (
    <div>
      <div
        className="w-10 h-10 rounded-xl grid place-items-center text-xl mb-2"
        style={{ background: `${accent}22`, color: accent }}
      >
        {icon}
      </div>
      <div className="text-[10px] tracking-widest uppercase text-muted-foreground">{label}</div>
      <div className="text-sm font-medium mt-1">{value}</div>
    </div>
  );
}

function Block({ title, children, accent, icon }: { title: string; children: React.ReactNode; accent: string; icon?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-10" style={{ background: accent }} />
        <h2 className="font-display text-3xl md:text-4xl flex items-center gap-2">
          {icon}
          {title}
        </h2>
      </div>
      <div className="pl-0 md:pl-12">{children}</div>
    </motion.div>
  );
}

function CultureChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-xl p-4">
      <div className="text-[10px] tracking-widest uppercase text-gold/80">{label}</div>
      <div className="text-sm mt-1">{value}</div>
    </div>
  );
}
