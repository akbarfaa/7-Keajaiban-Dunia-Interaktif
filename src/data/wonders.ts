import chichenItzaSound from '../soundtheme/Chichen Itza.mp3';
import christTheRedeemerSound from '../soundtheme/Christ the Redeemer.mp3';
import colosseumSound from '../soundtheme/Colloseum.mp3';
import greatWallSound from '../soundtheme/Great Wall of China.mp3';
import machuPicchuSound from '../soundtheme/Machu Picchu.mp3';
import tajMahalSound from '../soundtheme/Taj Mahal.mp3';
import petraSound from '../soundtheme/Petra.mp3';

export type Wonder = {
  id: string;
  englishName: string;
  indonesianName: string;
  country: string;
  flag: string;
  continent: string;
  coordinates: { lat: number; lng: number };
  image: string;
  shortEN: string;
  shortID: string;
  historyEN: string;
  historyID: string;
  cultureEN: string;
  cultureID: string;
  traditionalFood: string;
  traditionalClothes: string;
  localMusic: string;
  famousFestival: string;
  yearBuilt: string;
  architecturalStyle: string;
  funFacts: { en: string; id: string }[];
  youtubeId: string;
  ambientSound: string;
  achievementBadge: { en: string; id: string };
  accent: string;
  timeline: { year: string; en: string; id: string }[];
};

export const wonders: Wonder[] = [
  {
    id: "great-wall",
    englishName: "Great Wall of China",
    indonesianName: "Tembok Besar Cina",
    country: "China",
    flag: "🇨🇳",
    continent: "Asia",
    coordinates: { lat: 40.4319, lng: 116.5704 },
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&q=80",
    shortEN: "A 21,000 km defensive marvel snaking across mountains, deserts and grasslands.",
    shortID: "Keajaiban pertahanan sepanjang 21.000 km yang membentang melintasi pegunungan, gurun, dan padang rumput.",
    historyEN: "Construction began in the 7th century BC under various warring states. Emperor Qin Shi Huang unified the walls around 220 BC. The most iconic sections were rebuilt during the Ming Dynasty (1368–1644) using stone and brick to protect against northern nomadic tribes.",
    historyID: "Pembangunan dimulai pada abad ke-7 SM oleh berbagai negara yang berperang. Kaisar Qin Shi Huang menyatukan tembok sekitar tahun 220 SM. Bagian paling ikonik dibangun ulang pada Dinasti Ming (1368–1644) dengan batu dan bata untuk melindungi dari suku nomaden utara.",
    cultureEN: "Chinese culture blends Confucian harmony, Taoist nature reverence, and centuries of imperial artistry expressed through calligraphy, opera, tea ceremonies and silk weaving.",
    cultureID: "Budaya Cina memadukan harmoni Konfusianisme, penghormatan alam Taoisme, dan seni kekaisaran yang diwujudkan melalui kaligrafi, opera, upacara teh, dan tenunan sutra.",
    traditionalFood: "Peking Duck, Dim Sum, Dumplings",
    traditionalClothes: "Hanfu, Qipao",
    localMusic: "Guqin, Bamboo Flute (Dizi)",
    famousFestival: "Spring Festival (Lunar New Year)",
    yearBuilt: "7th century BC – 1644 AD",
    architecturalStyle: "Imperial Chinese Defensive",
    funFacts: [
      { en: "Visible features can be seen from low Earth orbit under perfect conditions.", id: "Fitur tertentu dapat terlihat dari orbit rendah Bumi dalam kondisi sempurna." },
      { en: "Sticky rice mortar held the bricks together.", id: "Mortar nasi ketan merekatkan batu batanya." },
    ],
    youtubeId: "do1Go22Wu8o",
    ambientSound: greatWallSound,
    achievementBadge: { en: "Dragon Wall Wanderer", id: "Pengembara Tembok Naga" },
    accent: "#f59e0b",
    timeline: [
      { year: "700 BC", en: "First defensive walls erected by Chu state.", id: "Tembok pertahanan pertama oleh negara Chu." },
      { year: "220 BC", en: "Qin Shi Huang unifies the walls.", id: "Qin Shi Huang menyatukan tembok-tembok." },
      { year: "1368", en: "Ming Dynasty rebuilds with brick & stone.", id: "Dinasti Ming membangun ulang dengan bata & batu." },
      { year: "1987", en: "Declared UNESCO World Heritage Site.", id: "Ditetapkan sebagai Situs Warisan Dunia UNESCO." },
    ],
  },
  {
    id: "petra",
    englishName: "Petra",
    indonesianName: "Petra",
    country: "Jordan",
    flag: "🇯🇴",
    continent: "Asia",
    coordinates: { lat: 30.3285, lng: 35.4444 },
    image: "https://images.pexels.com/photos/18717382/pexels-photo-18717382.jpeg",
    shortEN: "The rose-red city carved directly into towering sandstone cliffs by the Nabataeans.",
    shortID: "Kota merah-mawar yang dipahat langsung ke tebing batu pasir menjulang oleh bangsa Nabatea.",
    historyEN: "Established possibly as early as 312 BC as the capital of the Nabataean Kingdom, Petra flourished as a major trading hub on the spice and silk routes. After Roman annexation and a series of earthquakes, it was lost to the Western world until rediscovered by Johann Burckhardt in 1812.",
    historyID: "Didirikan mungkin sejak 312 SM sebagai ibu kota Kerajaan Nabatea, Petra berkembang sebagai pusat perdagangan utama jalur rempah dan sutra. Setelah aneksasi Romawi dan serangkaian gempa bumi, kota ini hilang dari dunia Barat hingga ditemukan kembali oleh Johann Burckhardt pada 1812.",
    cultureEN: "Jordanian Bedouin culture honors hospitality, oral poetry, mansaf feasts, and intricate desert craftsmanship.",
    cultureID: "Budaya Badui Yordania menghargai keramahan, puisi lisan, jamuan mansaf, dan kerajinan gurun yang rumit.",
    traditionalFood: "Mansaf, Maqluba, Falafel",
    traditionalClothes: "Thobe, Keffiyeh",
    localMusic: "Oud, Rababa",
    famousFestival: "Jerash Festival of Culture",
    yearBuilt: "c. 312 BC",
    architecturalStyle: "Nabataean Rock-Cut",
    funFacts: [
      { en: "Petra means 'rock' in Greek.", id: "Petra berarti 'batu' dalam bahasa Yunani." },
      { en: "Featured in Indiana Jones and the Last Crusade.", id: "Tampil dalam film Indiana Jones and the Last Crusade." },
    ],
    youtubeId: "ezDiSkOU0wc",
    ambientSound: petraSound,
    achievementBadge: { en: "Desert Rose Seeker", id: "Pencari Mawar Gurun" },
    accent: "#ef4444",
    timeline: [
      { year: "312 BC", en: "Nabataeans establish Petra.", id: "Bangsa Nabatea mendirikan Petra." },
      { year: "106 AD", en: "Annexed by the Roman Empire.", id: "Dianeksasi oleh Kekaisaran Romawi." },
      { year: "363 AD", en: "Major earthquake devastates the city.", id: "Gempa bumi besar menghancurkan kota." },
      { year: "1812", en: "Rediscovered by Johann Burckhardt.", id: "Ditemukan kembali oleh Johann Burckhardt." },
    ],
  },
  {
    id: "christ-redeemer",
    englishName: "Christ the Redeemer",
    indonesianName: "Patung Kristus Penebus",
    country: "Brazil",
    flag: "🇧🇷",
    continent: "South America",
    coordinates: { lat: -22.9519, lng: -43.2105 },
    image: "https://i.pinimg.com/1200x/e7/3a/21/e73a218da2211e78d7a2b3290b920f06.jpg",
    shortEN: "A 38-meter Art Deco statue watching over Rio de Janeiro from the Corcovado peak.",
    shortID: "Patung Art Deco setinggi 38 meter yang mengawasi Rio de Janeiro dari puncak Corcovado.",
    historyEN: "Designed by Heitor da Silva Costa and sculpted by Paul Landowski, the statue was completed in 1931 after nine years of construction. Built from reinforced concrete and soapstone, it was funded largely through donations from Brazilian Catholics.",
    historyID: "Dirancang oleh Heitor da Silva Costa dan dipahat oleh Paul Landowski, patung ini selesai pada tahun 1931 setelah sembilan tahun pembangunan. Terbuat dari beton bertulang dan batu sabun, sebagian besar didanai dari sumbangan umat Katolik Brasil.",
    cultureEN: "Brazilian culture pulses with samba rhythms, capoeira, vibrant Carnival, and the joyful spirit of Rio's beach life.",
    cultureID: "Budaya Brasil berdenyut dengan irama samba, capoeira, Karnaval yang semarak, dan semangat ceria kehidupan pantai Rio.",
    traditionalFood: "Feijoada, Pão de Queijo, Açaí",
    traditionalClothes: "Baiana Dress",
    localMusic: "Samba, Bossa Nova",
    famousFestival: "Rio Carnival",
    yearBuilt: "1922 – 1931",
    architecturalStyle: "Art Deco",
    funFacts: [
      { en: "Struck by lightning multiple times every year.", id: "Tersambar petir beberapa kali setiap tahun." },
      { en: "Arms span 28 meters wide.", id: "Rentang lengan selebar 28 meter." },
    ],
    youtubeId: "2tMbosos1QQ",
    ambientSound: christTheRedeemerSound,
    achievementBadge: { en: "Samba Sky Pilgrim", id: "Peziarah Langit Samba" },
    accent: "#10b981",
    timeline: [
      { year: "1922", en: "Construction begins atop Corcovado.", id: "Pembangunan dimulai di puncak Corcovado." },
      { year: "1931", en: "Statue inaugurated on October 12.", id: "Patung diresmikan pada 12 Oktober." },
      { year: "2007", en: "Named one of the New 7 Wonders.", id: "Dinobatkan sebagai salah satu 7 Keajaiban Baru." },
    ],
  },
  {
    id: "machu-picchu",
    englishName: "Machu Picchu",
    indonesianName: "Machu Picchu",
    country: "Peru",
    flag: "🇵🇪",
    continent: "South America",
    coordinates: { lat: -13.1631, lng: -72.545 },
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1600&q=80",
    shortEN: "The mist-wrapped Inca citadel perched 2,430 m above sea level in the Andes.",
    shortID: "Benteng Inca yang diselimuti kabut, terletak 2.430 m di atas permukaan laut di Pegunungan Andes.",
    historyEN: "Built around 1450 during the reign of Inca emperor Pachacuti, Machu Picchu was abandoned a century later during the Spanish conquest, though the conquistadors never found it. American historian Hiram Bingham brought it to global attention in 1911.",
    historyID: "Dibangun sekitar tahun 1450 pada masa pemerintahan kaisar Inca Pachacuti, Machu Picchu ditinggalkan seabad kemudian saat penaklukan Spanyol, meski para penakluk tidak pernah menemukannya. Sejarawan Amerika Hiram Bingham memperkenalkannya ke dunia pada tahun 1911.",
    cultureEN: "Andean Quechua culture honors Pachamama (Mother Earth), weaves rich textiles, and celebrates Inti Raymi, the sun festival.",
    cultureID: "Budaya Quechua Andes menghormati Pachamama (Ibu Bumi), menenun tekstil yang kaya, dan merayakan Inti Raymi, festival matahari.",
    traditionalFood: "Ceviche, Lomo Saltado, Quinoa Soup",
    traditionalClothes: "Poncho, Lliclla",
    localMusic: "Pan flute, Charango",
    famousFestival: "Inti Raymi",
    yearBuilt: "c. 1450 AD",
    architecturalStyle: "Inca Dry-Stone Masonry",
    funFacts: [
      { en: "Built without mortar — stones fit perfectly.", id: "Dibangun tanpa mortar — batu-batu tersusun sempurna." },
      { en: "Earthquake-resistant Inca engineering.", id: "Teknik Inca yang tahan gempa." },
    ],
    youtubeId: "cnMa-Sm9H4k",
    ambientSound: machuPicchuSound,
    achievementBadge: { en: "Andes Cloud Walker", id: "Penjelajah Awan Andes" },
    accent: "#22c55e",
    timeline: [
      { year: "1450", en: "Construction under Emperor Pachacuti.", id: "Pembangunan oleh Kaisar Pachacuti." },
      { year: "1572", en: "Abandoned during Spanish conquest.", id: "Ditinggalkan saat penaklukan Spanyol." },
      { year: "1911", en: "Rediscovered by Hiram Bingham.", id: "Ditemukan kembali oleh Hiram Bingham." },
      { year: "1983", en: "UNESCO World Heritage Site.", id: "Situs Warisan Dunia UNESCO." },
    ],
  },
  {
    id: "chichen-itza",
    englishName: "Chichen Itza",
    indonesianName: "Chichen Itza",
    country: "Mexico",
    flag: "🇲🇽",
    continent: "North America",
    coordinates: { lat: 20.6843, lng: -88.5678 },
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1600&q=80",
    shortEN: "The mighty Mayan city crowned by the pyramid of Kukulcán, where serpents dance with sunlight.",
    shortID: "Kota Maya yang perkasa, dimahkotai piramida Kukulcán, tempat ular menari dengan cahaya matahari.",
    historyEN: "Founded around 600 AD, Chichen Itza became one of the largest Mayan cities and a major political and economic center. The pyramid El Castillo aligns with the equinoxes, casting a serpent-shaped shadow descending its steps.",
    historyID: "Didirikan sekitar tahun 600 M, Chichen Itza menjadi salah satu kota Maya terbesar dan pusat politik serta ekonomi utama. Piramida El Castillo sejajar dengan ekuinoks, menciptakan bayangan berbentuk ular yang menuruni anak tangganya.",
    cultureEN: "Mayan and Mexican culture blends ancient cosmology, Day of the Dead celebrations, mariachi rhythms, and vibrant folk art.",
    cultureID: "Budaya Maya dan Meksiko memadukan kosmologi kuno, perayaan Hari Orang Mati, irama mariachi, dan seni rakyat yang semarak.",
    traditionalFood: "Tacos, Cochinita Pibil, Mole",
    traditionalClothes: "Huipil, Sombrero",
    localMusic: "Mariachi, Marimba",
    famousFestival: "Día de los Muertos",
    yearBuilt: "c. 600 AD",
    architecturalStyle: "Mayan-Toltec",
    funFacts: [
      { en: "Clap at the pyramid base — it echoes like a quetzal bird.", id: "Tepuk tangan di kaki piramida — gemanya seperti burung quetzal." },
      { en: "Serpent shadow appears each equinox.", id: "Bayangan ular muncul setiap ekuinoks." },
    ],
    youtubeId: "0lIuz5lelYQ",
    ambientSound: chichenItzaSound,
    achievementBadge: { en: "Serpent Shadow Sage", id: "Bijak Bayangan Ular" },
    accent: "#84cc16",
    timeline: [
      { year: "600 AD", en: "City founded by the Maya.", id: "Kota didirikan oleh bangsa Maya." },
      { year: "1000", en: "Toltec influence reshapes architecture.", id: "Pengaruh Toltec membentuk ulang arsitektur." },
      { year: "1200", en: "Decline begins, abandoned later.", id: "Kemunduran dimulai, lalu ditinggalkan." },
    ],
  },
  {
    id: "colosseum",
    englishName: "Colosseum",
    indonesianName: "Koloseum",
    country: "Italy",
    flag: "🇮🇹",
    continent: "Europe",
    coordinates: { lat: 41.8902, lng: 12.4922 },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=80",
    shortEN: "The colossal Roman amphitheatre that once roared with 80,000 spectators and gladiator combat.",
    shortID: "Amfiteater Romawi raksasa yang dulu bergemuruh dengan 80.000 penonton dan pertarungan gladiator.",
    historyEN: "Commissioned by Emperor Vespasian in 70 AD and completed under Titus in 80 AD, the Flavian Amphitheatre hosted gladiatorial games, mock sea battles, and public spectacles for nearly 400 years.",
    historyID: "Dipesan oleh Kaisar Vespasian pada tahun 70 M dan diselesaikan di bawah Titus pada tahun 80 M, Amfiteater Flavian menjadi tuan rumah pertarungan gladiator, simulasi pertempuran laut, dan tontonan publik selama hampir 400 tahun.",
    cultureEN: "Italian culture celebrates art, opera, family, slow food, and the layered legacy of Roman, Renaissance and modern brilliance.",
    cultureID: "Budaya Italia merayakan seni, opera, keluarga, makanan lambat, dan warisan berlapis dari kejeniusan Romawi, Renaisans, dan modern.",
    traditionalFood: "Pizza, Pasta, Gelato",
    traditionalClothes: "Renaissance Tunic",
    localMusic: "Opera, Tarantella",
    famousFestival: "Carnevale di Venezia",
    yearBuilt: "70 – 80 AD",
    architecturalStyle: "Roman Imperial",
    funFacts: [
      { en: "Could be flooded for naval battles called naumachiae.", id: "Bisa dibanjiri untuk pertempuran laut bernama naumachiae." },
      { en: "Used a retractable awning called the velarium.", id: "Menggunakan kanopi tarik bernama velarium." },
    ],
    youtubeId: "evmyQGmuzqA",
    ambientSound: colosseumSound,
    achievementBadge: { en: "Roman Arena Champion", id: "Juara Arena Romawi" },
    accent: "#a855f7",
    timeline: [
      { year: "70 AD", en: "Construction begins under Vespasian.", id: "Pembangunan dimulai di bawah Vespasian." },
      { year: "80 AD", en: "Inaugurated with 100 days of games.", id: "Diresmikan dengan 100 hari permainan." },
      { year: "404 AD", en: "Last gladiator games held.", id: "Permainan gladiator terakhir diadakan." },
    ],
  },
  {
    id: "taj-mahal",
    englishName: "Taj Mahal",
    indonesianName: "Taj Mahal",
    country: "India",
    flag: "🇮🇳",
    continent: "Asia",
    coordinates: { lat: 27.1751, lng: 78.0421 },
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=80",
    shortEN: "The ivory-white marble mausoleum built by Shah Jahan as an eternal monument to love.",
    shortID: "Mausoleum marmer putih gading yang dibangun Shah Jahan sebagai monumen cinta abadi.",
    historyEN: "Commissioned in 1632 by Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal took 22 years and over 20,000 artisans to complete. It blends Persian, Islamic, and Indian architectural traditions.",
    historyID: "Dipesan pada tahun 1632 oleh kaisar Mughal Shah Jahan untuk mengenang istri tercintanya Mumtaz Mahal, Taj Mahal memakan waktu 22 tahun dan lebih dari 20.000 pengrajin untuk diselesaikan. Memadukan tradisi arsitektur Persia, Islam, dan India.",
    cultureEN: "Indian culture is a symphony of classical dance, sitar music, vibrant festivals like Holi and Diwali, and rich culinary traditions.",
    cultureID: "Budaya India adalah simfoni tari klasik, musik sitar, festival semarak seperti Holi dan Diwali, dan tradisi kuliner yang kaya.",
    traditionalFood: "Biryani, Curry, Naan",
    traditionalClothes: "Sari, Sherwani",
    localMusic: "Sitar, Tabla",
    famousFestival: "Diwali, Holi",
    yearBuilt: "1632 – 1653",
    architecturalStyle: "Mughal (Persian-Islamic-Indian)",
    funFacts: [
      { en: "Marble subtly changes color through the day.", id: "Marmer berubah warna sepanjang hari." },
      { en: "Inlaid with 28 types of precious stones.", id: "Dihias 28 jenis batu mulia." },
    ],
    youtubeId: "EWkDzLrhpXI",
    ambientSound: tajMahalSound,
    achievementBadge: { en: "Eternal Love Keeper", id: "Penjaga Cinta Abadi" },
    accent: "#f97316",
    timeline: [
      { year: "1631", en: "Mumtaz Mahal passes away.", id: "Mumtaz Mahal wafat." },
      { year: "1632", en: "Construction begins in Agra.", id: "Pembangunan dimulai di Agra." },
      { year: "1653", en: "Taj Mahal completed.", id: "Taj Mahal selesai dibangun." },
      { year: "1983", en: "UNESCO World Heritage Site.", id: "Situs Warisan Dunia UNESCO." },
    ],
  },
];
