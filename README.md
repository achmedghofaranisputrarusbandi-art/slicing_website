# ☕ Kopi Senja - Slicing Website HTML/CSS/JS

Landing page kedai kopi fiktif "Kopi Senja", dibuat untuk tugas **Slicing Website** menggunakan HTML, CSS, dan JavaScript (DOM) tanpa framework.

🔗 **Demo:** (isi link Netlify / GitHub Pages / Vercel di sini)

## 📸 Screenshot

### Desktop
![Tampilan desktop](screensh<img width="820" height="2608" alt="tablet" src="https://github.com/user-attachments/assets/de142ec5-c5dd-4024-96c1-402ed1ed7d81" />
<img width="1366" height="2571" alt="desktop" src="https://github.com/user-attachments/assets/e5e0b94c-d455-4daf-add6-e820fc8b2090" />
ots/desktop.png)

### Tablet
![Tampilan tablet](screenshots/tablet.png<img width="820" height="2608" alt="tablet" src="https://github.com/user-attachments/assets/fd2908fc-1c99-4aba-8a5d-670da2ced838" />
)

### Mobile
![Tampilan mobile](screenshots/mobile.png![Uploading tablet.png…]()
<img width="390" height="3659" alt="mobile" src="https://github.com/user-attachments/assets/10221353-76b7-4d75-94b1-439f6c4bba2b" />
)

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
