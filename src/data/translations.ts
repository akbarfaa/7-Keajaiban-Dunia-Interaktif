export type Lang = "en" | "id";

export const t = {
  appName: { en: "WonderSphere", id: "WonderSphere" },
  tagline: {
    en: "An interactive journey through the 7 Wonders of the World",
    id: "Perjalanan interaktif melalui 7 Keajaiban Dunia",
  },
  welcome: { en: "Welcome to WonderSphere", id: "Selamat Datang di WonderSphere" },
  heroSubtitle: {
    en: "Step inside a cinematic atlas of human wonder. Spin the globe, walk through ancient civilizations, listen to their music, and earn your traveler's passport.",
    id: "Masuki atlas sinematik keajaiban manusia. Putar bola dunia, jelajahi peradaban kuno, dengarkan musiknya, dan dapatkan paspor penjelajahmu.",
  },
  startJourney: { en: "Start Journey", id: "Mulai Perjalanan" },
  exploreWonders: { en: "Explore Wonders", id: "Jelajahi Keajaiban" },
  navHome: { en: "Home", id: "Beranda" },
  navGlobe: { en: "Globe", id: "Globe" },
  navWonders: { en: "Wonders", id: "Keajaiban" },
  navTimeline: { en: "Timeline", id: "Timeline" },
  navQuiz: { en: "Quiz", id: "Kuis" },
  navPassport: { en: "Passport", id: "Paspor" },
  navAbout: { en: "About", id: "Tentang" },
  culture: { en: "Culture", id: "Budaya" },
  history: { en: "History", id: "Sejarah" },
  watchDoc: { en: "Watch Documentary", id: "Tonton Dokumenter" },
  funFacts: { en: "Fun Facts", id: "Fakta Menarik" },
  food: { en: "Traditional Food", id: "Makanan Tradisional" },
  clothes: { en: "Traditional Clothes", id: "Pakaian Tradisional" },
  music: { en: "Local Music", id: "Musik Lokal" },
  festival: { en: "Famous Festival", id: "Festival Terkenal" },
  yearBuilt: { en: "Year Built", id: "Tahun Dibangun" },
  architecture: { en: "Architecture", id: "Arsitektur" },
  visitWonder: { en: "Visit Wonder", id: "Kunjungi Keajaiban" },
  back: { en: "Back", id: "Kembali" },
  passport: { en: "Traveler's Passport", id: "Paspor Penjelajah" },
  passportEmpty: {
    en: "Your passport is empty. Visit a wonder to earn your first stamp!",
    id: "Paspormu masih kosong. Kunjungi keajaiban untuk mendapat cap pertamamu!",
  },
  stampsCollected: { en: "Stamps Collected", id: "Cap Terkumpul" },
  quizTitle: { en: "Test Your Knowledge", id: "Uji Pengetahuanmu" },
  quizStart: { en: "Start Quiz", id: "Mulai Kuis" },
  quizNext: { en: "Next", id: "Lanjut" },
  quizRestart: { en: "Try Again", id: "Coba Lagi" },
  quizScore: { en: "Your Score", id: "Skormu" },
  correct: { en: "Correct!", id: "Benar!" },
  wrong: { en: "Not quite", id: "Belum tepat" },
  loading: { en: "Loading the world…", id: "Memuat dunia…" },
  loadingQuote: {
    en: "“The world is full of wonders waiting to be explored.”",
    id: "“Dunia penuh dengan keajaiban yang menunggu untuk dijelajahi.”",
  },
  introduction: { en: "Introduction", id: "Pendahuluan" },
  historicalBg: { en: "Historical Background", id: "Latar Belakang Sejarah" },
  culturalImp: { en: "Cultural Importance", id: "Pentingnya Budaya" },
  tourismInfo: { en: "Tourism Information", id: "Informasi Wisata" },
  tourismText: {
    en: "Open year-round to visitors. Best visited at sunrise or sunset for cinematic light.",
    id: "Terbuka untuk pengunjung sepanjang tahun. Terbaik dikunjungi saat matahari terbit atau terbenam.",
  },
  achievementUnlocked: { en: "Achievement Unlocked!", id: "Pencapaian Terbuka!" },
  exploreOnGlobe: { en: "Open Interactive Globe", id: "Buka Globe Interaktif" },
  about: { en: "About WonderSphere", id: "Tentang WonderSphere" },
  aboutText: {
    en: "WonderSphere is a cinematic, bilingual cultural exploration of the seven new wonders of the world — built to feel like a premium interactive museum.",
    id: "WonderSphere adalah eksplorasi budaya sinematik dwibahasa terhadap tujuh keajaiban dunia — dibuat agar terasa seperti museum interaktif premium.",
  },
  footer: { en: "Crafted with curiosity for the world.", id: "Dibuat dengan rasa ingin tahu terhadap dunia." },
  timelineTitle: { en: "World Heritage Timeline", id: "Linimasa Warisan Dunia" },
  timelineSubtitle: {
    en: "Drag through millennia of human achievement.",
    id: "Telusuri ribuan tahun pencapaian manusia.",
  },
  totalProgress: { en: "Total Progress", id: "Total Kemajuan" },
};

export type TranslationKey = keyof typeof t;

export function tr(key: TranslationKey, lang: Lang) {
  return t[key][lang];
}
