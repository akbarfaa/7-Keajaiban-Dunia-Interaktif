import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizzes, pickQuestion } from "@/data/quizzes";
import { useLang } from "@/context/LanguageContext";
import { tr } from "@/data/translations";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
  head: () => ({ meta: [{ title: "Quiz — WonderSphere" }] }),
});

function QuizPage() {
  const { lang } = useLang();
  const questions = useMemo(() => quizzes.map((q) => pickQuestion(q, lang)), [lang]);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const q = questions[i];

  const choose = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 >= questions.length) setDone(true);
    else { setI(i + 1); setPicked(null); }
  };
  const restart = () => { setI(0); setScore(0); setPicked(null); setDone(false); };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="text-center mb-8">
        <div className="text-xs tracking-[0.4em] uppercase text-gold mb-2">{tr("navQuiz", lang)}</div>
        <h1 className="font-display text-4xl md:text-5xl">{tr("quizTitle", lang)}</h1>
      </div>

      <div className="glass-strong rounded-3xl p-6 md:p-10">
        {!done ? (
          <>
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
              <span>{i + 1} / {questions.length}</span>
              <span>{tr("quizScore", lang)}: <span className="text-gold">{score}</span></span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-6">
              <motion.div
                className="h-full bg-gold"
                initial={false}
                animate={{ width: `${((i) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-display text-2xl md:text-3xl mb-6">{q.question}</h2>
                <div className="space-y-3">
                  {q.options.map((opt, idx) => {
                    const isPicked = picked === idx;
                    const isCorrect = picked !== null && idx === q.answer;
                    const isWrong = isPicked && idx !== q.answer;
                    return (
                      <button
                        key={idx}
                        onClick={() => choose(idx)}
                        disabled={picked !== null}
                        className={`w-full text-left rounded-2xl px-5 py-4 transition border ${
                          isCorrect
                            ? "bg-emerald-500/15 border-emerald-400/50 text-emerald-200"
                            : isWrong
                            ? "bg-red-500/10 border-red-400/40 text-red-200"
                            : "glass border-transparent hover:bg-white/10"
                        } ${picked !== null && !isPicked && !isCorrect ? "opacity-50" : ""}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {picked !== null && (
                  <div className="mt-6 flex items-center justify-between">
                    <div className={picked === q.answer ? "text-emerald-300" : "text-red-300"}>
                      {picked === q.answer ? tr("correct", lang) : tr("wrong", lang)}
                    </div>
                    <button
                      onClick={next}
                      className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-primary-foreground glow-gold"
                    >
                      {tr("quizNext", lang)} →
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <div className="text-6xl mb-4">{score === questions.length ? "🏆" : score >= questions.length / 2 ? "🌟" : "📜"}</div>
            <div className="text-xs tracking-widest uppercase text-gold">{tr("quizScore", lang)}</div>
            <div className="font-display text-6xl my-3">{score} / {questions.length}</div>
            <button
              onClick={restart}
              className="mt-4 rounded-full bg-gold px-6 py-3 font-semibold text-primary-foreground glow-gold"
            >
              {tr("quizRestart", lang)}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
