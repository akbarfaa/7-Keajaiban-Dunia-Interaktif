import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { wonders } from "@/data/wonders";
import { useLang } from "@/context/LanguageContext";
import { tr } from "@/data/translations";

export const Route = createFileRoute("/timeline")({
  component: TimelinePage,
  head: () => ({
    meta: [
      { title: "Timeline — WonderSphere" },
      { name: "description", content: "A scrollable historical timeline of the 7 Wonders of the World." },
    ],
  }),
});

type Event = { year: string; en: string; id: string; wonder: typeof wonders[number] };

function parseYear(y: string) {
  const m = y.match(/(\d+)/);
  const n = m ? parseInt(m[1], 10) : 0;
  return /BC/i.test(y) ? -n : n;
}

function TimelinePage() {
  const { lang } = useLang();
  const events: Event[] = wonders
    .flatMap((w) => w.timeline.map((e) => ({ ...e, wonder: w })))
    .sort((a, b) => parseYear(a.year) - parseYear(b.year));

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="text-xs tracking-[0.4em] uppercase text-gold mb-2">{tr("timelineTitle", lang)}</div>
        <h1 className="font-display text-4xl md:text-6xl">{tr("history", lang)}</h1>
        <p className="text-foreground/70 mt-3">{tr("timelineSubtitle", lang)}</p>
      </div>

      <div className="relative">
        <span className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-purple-500/30 to-transparent" />
        <ol className="space-y-10">
          {events.map((e, i) => {
            const align = i % 2 === 0;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-10 items-center ${align ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <span
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ring-pulse"
                  style={{ background: e.wonder.accent, boxShadow: `0 0 16px ${e.wonder.accent}` }}
                />
                <div className={`pl-12 md:pl-0 ${align ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="text-xs tracking-widest uppercase text-gold">{e.year}</div>
                  <Link
                    to="/wonder/$id"
                    params={{ id: e.wonder.id }}
                    className="font-display text-2xl hover:text-gold transition"
                  >
                    {e.wonder.flag} {lang === "en" ? e.wonder.englishName : e.wonder.indonesianName}
                  </Link>
                  <p className="text-foreground/75 mt-1 text-sm">{lang === "en" ? e.en : e.id}</p>
                </div>
                <div className="hidden md:block" />
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
