// ============================================================
// config.js — Pusat konfigurasi. Ubah di sini tanpa sentuh logika.
// ============================================================

export const SITE = {
  title: "Pemilu Ekskul Komputer 2026",
  subtitle: "Pemilihan Ketua & Wakil Ketua Ekskul Komputer",
  logo: "assets/logo.png",
  footer: "© 2026 Ekskul Komputer — Dibuat dengan ❤️",
};

// Konfigurasi koleksi & dokumen Firestore
export const FIREBASE = {
  tokensCollection: "tokens",
  votesCollection: "votes",
  settings: { collection: "settings", doc: "config", adminKeyField: "adminKey" },
  tokenFields: { code: "kode", used: "isUsed" },
};

// Warna default untuk chart (jika paslon tidak mendefinisikan warna)
export const CHART_COLORS = [
  "#0f766e", "#14b8a6", "#0d9488", "#1e293b", "#64748b", "#be123c",
];

// ============================================================
// DAFTAR PASLON — edit di sini jika ada perubahan kandidat
// Foto: satu file per paslon di folder "assets/" (paslon1.png, dst.)
// ============================================================
export const PASLON = [
  {
    id: "1",
    nomor: 1,
    foto: "assets/paslon1.png", // satu foto berdua (ketua & wakil)
    warna: "#0f766e",
    ketua: {
      nama: "Andi Pratama",
    },
    wakil: {
      nama: "Siti Rahma",
    },
    visi: "Mewujudkan ekskul komputer yang solid, kreatif, dan berprestasi di tingkat sekolah maupun nasional.",