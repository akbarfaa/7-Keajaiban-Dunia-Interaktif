import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/context/LanguageContext";
import { tr } from "@/data/translations";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "About — WonderSphere" }] }),
});

function AboutPage() {
  const { lang } = useLang();
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="text-center mb-10">
        <div className="text-xs tracking-[0.4em] uppercase text-gold mb-2">{tr("navAbout", lang)}</div>
        <h1 className="font-display text-4xl md:text-6xl">{tr("about", lang)}</h1>
      </div>
      <div className="glass-strong rounded-3xl p-8 md:p-12 space-y-5 text-foreground/85 leading-relaxed">
        <p>{tr("aboutText", lang)}</p>
        <p>
          {lang === "en"
            ? "Built with React, TanStack Router, Framer Motion, and react-globe.gl — designed to feel like a National Geographic feature merged with an interactive museum."
            : "Dibangun dengan React, TanStack Router, Framer Motion, dan react-globe.gl — dirancang agar terasa seperti tayangan National Geographic yang menyatu dengan museum interaktif."}
        </p>
        <div className="pt-4">
          <Link to="/globe" className="inline-flex rounded-full bg-gold px-6 py-3 font-semibold text-primary-foreground glow-gold">
            {tr("startJourney", lang)} →
          </Link>
        </div>
      </div>
    </div>
  );
}
