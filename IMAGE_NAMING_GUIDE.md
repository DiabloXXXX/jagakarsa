# 📸 Panduan Penamaan Gambar - Kelurahan Jagakarsa Website

## Struktur Folder
```
public/
├── images/
│   ├── hero/              # Gambar banner/hero sections
│   ├── news/              # Gambar artikel berita
│   ├── maps/              # Gambar peta
│   ├── achievements/      # Gambar prestasi/achievement
│   └── components/        # Gambar untuk komponen (logo, dll)
```

---

## 📋 Tabel Penamaan Gambar

### 1. HERO IMAGES (`public/images/hero/`)

| No | Nama File | Ukuran | Lokasi Penggunaan | Deskripsi |
|---|-----------|--------|------------------|-----------|
| 1 | `hero-beranda.jpg` | 1440x586px | `src/components/Hero.jsx` | Banner utama halaman Beranda |
| 2 | `hero-about.jpg` | 1440x352px | `src/pages/AboutPage.jsx` | Banner halaman Tentang Kelurahan |

---

### 2. NEWS IMAGES (`public/images/news/`)

| No | Nama File | Ukuran | Lokasi Penggunaan | Deskripsi |
|---|-----------|--------|------------------|-----------|
| 1 | `news-maggot-01.jpg` | 400x300px | `src/pages/NewsPage.jsx` (id:1) | Atasi Persoalan Sampah - Lurah Jagakarsa Galakkan Budi Daya Maggot |
| 2 | `news-maggot-02.jpg` | 400x300px | `src/pages/NewsPage.jsx` (id:2) | Kelurahan Jagakarsa Beri Contoh Positif Lewat Budi Daya Maggot |
| 3 | `news-maggot-03.jpg` | 400x300px | `src/pages/NewsPage.jsx` (id:3) | Kelurahan Jagakarsa Ajak Warga Melakukan Budi Daya Maggot |

---

### 3. MAP IMAGES (`public/images/maps/`)

| No | Nama File | Ukuran | Lokasi Penggunaan | Deskripsi |
|---|-----------|--------|------------------|-----------|
| 1 | `map-kelurahan.jpg` | 1306x906px | `src/pages/MapPage.jsx` | Peta Kelurahan Jagakarsa (halaman Peta) |
| 2 | `map-kelurahan-about.jpg` | 600x400px | `src/pages/AboutPage.jsx` | Peta Kelurahan Jagakarsa (halaman About) |
| 3 | `map-flood-prone.jpg` | 1400x800px | `src/pages/FloodProneAreasPage.jsx` | Peta Area Rawan Banjir Kelurahan Jagakarsa |

---

### 4. ACHIEVEMENTS IMAGES (`public/images/achievements/`)

| No | Nama File | Ukuran | Lokasi Penggunaan | Deskripsi |
|---|-----------|--------|------------------|-----------|
| 1 | `achievement-sertifikat-gia.jpg` | 400x300px | `src/pages/AboutPage.jsx` (id:1) | Sertifikat GIA - Inisiator dari Inovasi Pengolahan Sampah Organik (8 Sept 2025) |
| 2 | `achievement-presentasi-sampah.jpg` | 400x300px | `src/pages/AboutPage.jsx` (id:2) | Presentasi - Pengolahan Sampah Organik (8 Sept 2025) |
| 3 | `achievement-video-inovasi.jpg` | 400x300px | `src/pages/AboutPage.jsx` (id:3) | Video - Kualitas Inovasi Daerah (8 Sept 2025) |

---

### 5. COMPONENT IMAGES (`public/images/components/`)

| No | Nama File | Ukuran | Lokasi Penggunaan | Deskripsi |
|---|-----------|--------|------------------|-----------|
| 1 | `logo-kelurahan.png` | 120x120px | `src/components/Header.jsx` | Logo Kelurahan Jagakarsa (Header) |
| 2 | `logo-kelurahan-footer.png` | 221x221px | `src/components/Footer.jsx` | Logo Kelurahan Jagakarsa (Footer) |

---

## 🔗 Path Referensi untuk Kode

### Menggunakan Gambar Lokal
Ganti URL placeholder dengan path lokal:

```javascript
// SEBELUM (placeholder)
src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"

// SESUDAH (lokal)
src="/images/news/news-maggot-01.jpg"
```

---

## 📝 Checklist Upload Gambar

### Hero Images
- [ ] `public/images/hero/hero-beranda.jpg` (1440x586px)
- [ ] `public/images/hero/hero-about.jpg` (1440x352px)

### News Images
- [ ] `public/images/news/news-maggot-01.jpg` (400x300px)
- [ ] `public/images/news/news-maggot-02.jpg` (400x300px)
- [ ] `public/images/news/news-maggot-03.jpg` (400x300px)

### Map Images
- [ ] `public/images/maps/map-kelurahan.jpg` (1306x906px)
- [ ] `public/images/maps/map-kelurahan-about.jpg` (600x400px)
- [ ] `public/images/maps/map-flood-prone.jpg` (1400x800px)

### Achievement Images
- [ ] `public/images/achievements/achievement-sertifikat-gia.jpg` (400x300px)
- [ ] `public/images/achievements/achievement-presentasi-sampah.jpg` (400x300px)
- [ ] `public/images/achievements/achievement-video-inovasi.jpg` (400x300px)

### Component Images
- [ ] `public/images/components/logo-kelurahan.png` (120x120px)
- [ ] `public/images/components/logo-kelurahan-footer.png` (221x221px)

---

## 💡 Tips Optimasi Gambar

1. **Format**: Gunakan JPG untuk foto, PNG untuk logo/icon
2. **Ukuran File**: Kompres gambar agar tidak lebih dari 500KB per file
3. **Resolusi**: Gunakan ukuran yang tepat sesuai tabel di atas
4. **Kualitas**: Minimal 72 DPI untuk web

---

## 📂 Struktur Folder Lengkap

```
d:\KELUARAHAN JAGAKARSA\
├── public/
│   └── images/
│       ├── hero/
│       │   ├── hero-beranda.jpg
│       │   └── hero-about.jpg
│       ├── news/
│       │   ├── news-maggot-01.jpg
│       │   ├── news-maggot-02.jpg
│       │   └── news-maggot-03.jpg
│       ├── maps/
│       │   ├── map-kelurahan.jpg
│       │   ├── map-kelurahan-about.jpg
│       │   └── map-flood-prone.jpg
│       ├── achievements/
│       │   ├── achievement-sertifikat-gia.jpg
│       │   ├── achievement-presentasi-sampah.jpg
│       │   └── achievement-video-inovasi.jpg
│       └── components/
│           ├── logo-kelurahan.png
│           └── logo-kelurahan-footer.png
├── src/
├── index.html
└── ... (file lainnya)
```

---

**Setelah Anda upload semua gambar, saya akan update semua URL di kode untuk menggunakan path lokal!** ✅
