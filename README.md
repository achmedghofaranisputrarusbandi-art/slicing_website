# ☕ Kopi Senja - Slicing Website HTML/CSS/JS

Landing page kedai kopi fiktif "Kopi Senja", dibuat untuk tugas **Slicing Website** menggunakan HTML, CSS, dan JavaScript (DOM) tanpa framework.

🔗 **Demo:** (isi link Netlify / GitHub Pages / Vercel di sini)

## 📸 Screenshot

## 📸 Screenshot

### Desktop
<img src="https://github.com/user-attachments/assets/f6e0fcd9-9ee6-4334-8abe-5f4ba9bb94da" width="100%" alt="Desktop">

### Tablet
<img src="https://github.com/user-attachments/assets/e2824d95-44ea-4aea-8f72-f898671c4c8c" width="100%" alt="Tablet">

### Mobile
<img src="https://github.com/user-attachments/assets/b0cde3ca-162d-49f6-9679-220c9ca62587" width="100%" alt="Mobile">

## 📝 Penjelasan Singkat

Website ini punya empat bagian: **Hero**, **Menu**, **Tentang**, dan **Reservasi**.

**HTML**
- Struktur semantik: `header`, `nav`, `main`, `section`, `aside`, `footer`.
- Atribut aksesibilitas seperti `aria-label`, `aria-expanded`, dan `aria-live`.

**CSS (Plain CSS, tanpa Tailwind/Bootstrap)**
- CSS variables untuk warna, sehingga tema terang dan gelap mudah diganti.
- Layout memakai Flexbox dan CSS Grid (`auto-fill` + `minmax`).
- Responsive dengan media query:
  - Mobile (≤ 720px): menu berubah jadi hamburger.
  - Tablet (721px - 1024px): padding section disesuaikan.
  - Desktop (> 1024px): tampilan penuh.

**JavaScript (DOM)**
- **Menu hamburger:** buka/tutup navigasi di layar kecil.
- **Tema gelap/terang:** mengikuti pengaturan perangkat, bisa diganti lewat tombol.
- **Filter menu:** kartu produk dirender dari array objek, bisa difilter per kategori.
- **Keranjang sederhana:** menghitung jumlah item dan total harga.
- **Validasi form:** cek nama, email, dan jumlah orang, dengan pesan error yang jelas.

## 📁 Struktur Project

```
kopi-senja/
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshots/
    ├── desktop.png
    ├── tablet.png
    └── mobile.png
```

## ▶️ Cara Menjalankan

Buka `index.html` di browser. Tidak perlu install apa pun.
