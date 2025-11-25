# Website Profil Perusahaan - Kelurahan Jagakarsa

Rancangan website profil perusahaan modern dan responsif untuk Kelurahan Jagakarsa, Jakarta Selatan.

## 🎯 Fitur MVP

### 1. **Header & Navigasi**
- Logo kelurahan dengan branding profesional
- Menu navigasi utama (Beranda, Profil, Lembaga Kemasyarakatan, Layanan, Informasi)
- Dropdown menu untuk Profil (Visi & Misi, Struktur Organisasi, Tugas)
- Dropdown menu untuk Informasi (Berita, Area Rawan Banjir)
- Ikon kantor untuk identitas visual

### 2. **Hero Section**
- Background visual yang menarik
- Pesan utama: "Selamat Datang Di Website Kelurahan Jagakarsa"
- Call-to-Action button "Lihat Beranda"
- Desain responsif dan profesional

### 3. **Tentang Kelurahan**
- Informasi umum tentang Kelurahan Jagakarsa
- Statistik wilayah (luas, RW, RT)
- Visi & Misi yang jelas
- Struktur organisasi

### 4. **Batas Wilayah**
- Informasi batas wilayah (Utara, Selatan, Timur, Barat)
- Integrasi peta interaktif
- Visualisasi geografis

### 5. **Prestasi & Pencapaian**
- Showcase inovasi dan prestasi kelurahan
- Presentasi program-program unggulan
- Video dokumentasi
- Galeri pencapaian

### 6. **Layanan Kelurahan**
- PPSU (Petugas Penanganan Sarana dan Utilitas)
- Layanan kesehatan
- Lembaga kemasyarakatan
- Keamanan dan ketertiban

### 7. **Chatbot / FAQ**
- Chatbot interaktif untuk layanan virtual
- Quick reply suggestions (KIA, IKD, Surat Pengantar Nikah)
- Input pesan untuk pertanyaan umum
- Floating button untuk akses mudah

### 8. **Informasi Kontak**
- Alamat lengkap
- Nomor telepon
- Email resmi
- Media sosial (TikTok, YouTube, Instagram, Facebook)

### 9. **Branding & Warna**
- Palet warna hijau profesional (#518123, #99BD49)
- Warna sekunder orange (#FF9800) untuk CTA
- Konsistensi visual di seluruh halaman
- Logo dan identitas visual yang kuat

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: TailwindCSS 3.3.0
- **Build Tool**: Vite 4.3.9
- **Icons**: Lucide React 0.263.1
- **CSS Processing**: PostCSS + Autoprefixer

## 📦 Instalasi

1. **Clone atau extract project**
   ```bash
   cd "d:\KELUARAHAN JAGAKARSA"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Build untuk production**
   ```bash
   npm run build
   ```

## 📁 Struktur Project

```
d:\KELUARAHAN JAGAKARSA\
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigasi dan header
│   │   ├── Hero.jsx            # Section hero dengan CTA
│   │   ├── About.jsx           # Informasi tentang kelurahan
│   │   ├── Boundaries.jsx      # Batas wilayah
│   │   ├── Achievements.jsx    # Prestasi dan pencapaian
│   │   ├── Services.jsx        # Layanan kelurahan
│   │   ├── Chatbot.jsx         # Chatbot interaktif
│   │   └── Footer.jsx          # Footer dengan kontak
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # TailwindCSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # Dokumentasi

```

## 🎨 Palet Warna

- **Primary Dark**: #518123 (Hijau Tua)
- **Primary Light**: #99BD49 (Hijau Muda)
- **Primary Lighter**: #C5E1A5 (Hijau Sangat Muda)
- **Secondary**: #FF9800 (Orange)
- **Accent**: #4CAF50 (Hijau Aksen)

## 🚀 Deployment

### Deploy ke Netlify

1. Build project:
   ```bash
   npm run build
   ```

2. Upload folder `dist/` ke Netlify atau gunakan Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Deploy ke Vercel

1. Push ke GitHub repository
2. Connect repository ke Vercel
3. Vercel akan auto-deploy setiap push

## 📱 Responsivitas

Website fully responsive untuk:
- Mobile (320px - 640px)
- Tablet (641px - 1024px)
- Desktop (1025px+)

## ✨ Fitur Tambahan (Future Enhancement)

- [ ] Integrasi form layanan online
- [ ] Notifikasi banjir real-time
- [ ] Kalender kegiatan kelurahan
- [ ] Search fungsi dokumen
- [ ] Portal berita dinamis
- [ ] Gallery foto kegiatan
- [ ] Sistem booking layanan
- [ ] Dashboard statistik

## 📞 Kontak

**Kelurahan Jagakarsa**
- 📍 Jl. Jagakarsa II No.1, RT.1/RW.7, Jagakarsa, Kec. Jagakarsa, Kota Jakarta Selatan
- 📱 021-7270954
- 📧 kel_jagakrsa@jakarta.go.id
- 🌐 Instagram: @jagakarsa_official
- 🎬 YouTube: Kelurahan Jagakarsa
- 🎵 TikTok: @jagakarsa_official

## 📄 Lisensi

© 2025 Kelurahan Jagakarsa. Semua hak dilindungi.

---

**Dibuat dengan ❤️ untuk melayani masyarakat Kelurahan Jagakarsa**
