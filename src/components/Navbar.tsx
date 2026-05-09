import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { tr } from "@/data/translations";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

export function Navbar() {
  const { lang, toggle } = useLang();
  const loc = useLocation();

  const links = [
    { to: "/", label: tr("navHome", lang) },
    { to: "/globe", label: tr("navGlobe", lang) },
    { to: "/timeline", label: tr("navTimeline", lang) },
    { to: "/quiz", label: tr("navQuiz", lang) },
    { to: "/passport", label: tr("navPassport", lang) },
    { to: "/about", label: tr("navAbout", lang) },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-4">
        <div className="glass-strong rounded-full pl-5 pr-2 py-2 flex items-center gap-2 shadow-[var(--shadow-deep)]">
          <Link to="/" className="flex items-center gap-2 mr-3 group">
            <div className="relative">
              <HiOutlineGlobeAlt className="text-2xl text-gold transition-transform group-hover:rotate-12" />
              <div className="absolute inset-0 blur-lg opacity-60 bg-gold rounded-full" />
            </div>
            <span className="font-display text-lg tracking-wide gradient-text hidden sm:inline">
              WonderSphere
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1 flex-1">
            {links.map((l) => {
              const active = loc.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-3 py-1.5 text-sm rounded-full transition-colors ${
                    active ? "text-gold" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="navdot"
                      className="absolute inset-0 rounded-full bg-gold/10 border border-gold/30 -z-10"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto md:ml-0 flex items-center gap-1">
            <button
              onClick={toggle}
              className="glass rounded-full px-3 py-1.5 text-xs font-semibold tracking-widest hover:bg-white/10 transition flex items-center gap-1"
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "text-gold" : "text-muted-foreground"}>EN</span>
              <span className="text-muted-foreground">/</span>
              <span className={lang === "id" ? "text-gold" : "text-muted-foreground"}>ID</span>
            </button>
          </div>
        </div>
        {/* mobile nav */}
        <div className="md:hidden mt-2 glass rounded-2xl px-2 py-2 flex flex-wrap gap-1 justify-center">
          {links.map((l) => {
            const active = loc.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-1 text-xs rounded-full ${
                  active ? "bg-gold/20 text-gold" : "text-foreground/70"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.header>
  );
}
