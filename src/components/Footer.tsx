import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { tr } from "@/data/translations";

export function Footer() {
  const { lang } = useLang();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative mt-32 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg gradient-text">WonderSphere</div>
        <p className="text-sm text-muted-foreground">{tr("footer", lang)}</p>
        <div className="text-xs text-muted-foreground tracking-widest">© {new Date().getFullYear()}</div>
      </div>
    </motion.footer>
  );
}
