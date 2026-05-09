import type { Lang } from "./translations";

export type Quiz = {
  q: { en: string; id: string };
  options: { en: string; id: string }[];
  answer: number;
};

export const quizzes: Quiz[] = [
  {
    q: { en: "Which wonder is located in Peru?", id: "Keajaiban dunia mana yang berada di Peru?" },
    options: [
      { en: "Petra", id: "Petra" },
      { en: "Machu Picchu", id: "Machu Picchu" },
      { en: "Taj Mahal", id: "Taj Mahal" },
      { en: "Colosseum", id: "Koloseum" },
    ],
    answer: 1,
  },
  {
    q: { en: "Who commissioned the Taj Mahal?", id: "Siapa yang memerintahkan pembangunan Taj Mahal?" },
    options: [
      { en: "Akbar the Great", id: "Akbar yang Agung" },
      { en: "Aurangzeb", id: "Aurangzeb" },
      { en: "Shah Jahan", id: "Shah Jahan" },
      { en: "Babur", id: "Babur" },
    ],
    answer: 2,
  },
  {
    q: { en: "Which wonder is carved into rose-red cliffs?", id: "Keajaiban mana yang dipahat di tebing merah-mawar?" },
    options: [
      { en: "Chichen Itza", id: "Chichen Itza" },
      { en: "Petra", id: "Petra" },
      { en: "Great Wall", id: "Tembok Besar" },
      { en: "Colosseum", id: "Koloseum" },
    ],
    answer: 1,
  },
  {
    q: { en: "Where does the serpent shadow appear at equinox?", id: "Di mana bayangan ular muncul saat ekuinoks?" },
    options: [
      { en: "Machu Picchu", id: "Machu Picchu" },
      { en: "Chichen Itza", id: "Chichen Itza" },
      { en: "Petra", id: "Petra" },
      { en: "Taj Mahal", id: "Taj Mahal" },
    ],
    answer: 1,
  },
  {
    q: { en: "When was Christ the Redeemer completed?", id: "Kapan Patung Kristus Penebus diselesaikan?" },
    options: [
      { en: "1901", id: "1901" },
      { en: "1931", id: "1931" },
      { en: "1955", id: "1955" },
      { en: "1888", id: "1888" },
    ],
    answer: 1,
  },
  {
    q: { en: "Which dynasty rebuilt most of the Great Wall?", id: "Dinasti mana yang membangun ulang sebagian besar Tembok Besar?" },
    options: [
      { en: "Tang", id: "Tang" },
      { en: "Han", id: "Han" },
      { en: "Ming", id: "Ming" },
      { en: "Qing", id: "Qing" },
    ],
    answer: 2,
  },
  {
    q: { en: "What was the Colosseum originally called?", id: "Apa nama asli Koloseum?" },
    options: [
      { en: "Flavian Amphitheatre", id: "Amfiteater Flavian" },
      { en: "Forum Romanum", id: "Forum Romanum" },
      { en: "Pantheon", id: "Pantheon" },
      { en: "Circus Maximus", id: "Circus Maximus" },
    ],
    answer: 0,
  },
];

export function pickQuestion(q: Quiz, lang: Lang) {
  return {
    question: q.q[lang],
    options: q.options.map((o) => o[lang]),
    answer: q.answer,
  };
}
