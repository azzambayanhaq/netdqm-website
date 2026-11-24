# Situs web NetDQM

Repositori publik untuk situs unduhan NetDQM. Situs ini statis: HTML, CSS,
JavaScript, dan gambar, tanpa framework, build step, atau dependensi eksternal.

- Situs utama: <https://netdqm.vercel.app/>
- GitHub Pages cadangan: <https://azzambayanhaq.github.io/netdqm-website/>
- Unduhan: <https://github.com/azzambayanhaq/netdqm-downloads/releases>
- Aplikasi: repositori core bersifat privat

## Struktur

```text
.
├── index.html                 # halaman utama (ID default, toggle EN)
├── fitur.html                 # halaman fitur
├── screenshots.html           # halaman tangkapan layar
├── download.html              # halaman unduhan
├── mulai.html                 # halaman mulai
├── panduan.html               # halaman panduan
├── sitemap.xml                # peta situs
├── .nojekyll                  # agar GitHub Pages tidak memproses Jekyll
├── assets/
│   ├── style.css
│   ├── app.js                 # terjemahan ID/EN dan lightbox
│   ├── theme.js               # dark/light mode dan preferensi pengguna
│   ├── logo.png
│   ├── favicon.png
│   └── screenshots/           # tangkapan layar demo sintetis
├── .github/workflows/pages.yml
├── DOWNLOAD.md                # panduan unduh dan pemasangan
├── TUTORIAL-WINDOWS.md        # tutorial instalasi dan penggunaan lengkap
├── SECURITY.md
├── LICENSE
└── README.md
```

## Menjalankan lokal

Buka `index.html` langsung di browser, atau jalankan server statis:

```bash
python -m http.server 8000
```

Lalu buka <http://127.0.0.1:8000/>.

## Hosting

Vercel menerbitkan situs utama dari branch `main` setiap ada perubahan pada repo
ini. GitHub Pages tetap aktif sebagai alamat cadangan melalui workflow
`.github/workflows/pages.yml`.

## Tautan unduhan

Tombol unduhan menunjuk ke repositori `netdqm-downloads` dengan nama berkas
stabil tanpa nomor versi:

```text
releases/latest/download/NetDQM-Agent-windows-x64-setup.exe
releases/latest/download/NetDQM-Agent-windows-x64-portable.zip
releases/latest/download/NetDQM-Console-windows-x64-setup.exe
releases/latest/download/NetDQM-Console-windows-x64-portable.zip
releases/latest/download/NetDQM-Server-windows-x64-setup.exe
releases/latest/download/NetDQM-Server-windows-x64-portable.zip
releases/latest/download/NetDQM-Server-linux-x64.tar.gz
releases/latest/download/SHA256SUMS.txt
```

Karena nama berkas tidak memuat versi, tautan `latest/download/...` tetap
berlaku untuk rilis berikutnya.

## Panduan

- [Tutorial penggunaan singkat](https://netdqm.vercel.app/panduan.html)
  tersedia langsung dari situs.
- [Tutorial Windows lengkap](TUTORIAL-WINDOWS.md) membahas instalasi, fitur,
  troubleshooting, dan penghapusan aplikasi.
- [Panduan unduh dan pemasangan](DOWNLOAD.md) mencakup checksum dan pilihan
  installer atau portable.

## Cara memperbarui

Situs ini diterbitkan dari repositori core privat melalui
`tools/export_website.py`. Alur yang disarankan:

1. Ubah `website/` atau dokumen publik di repositori core.
2. Jalankan `python tools/export_website.py --out <folder> --force`.
3. Commit dan push hasil ekspor ke repositori ini.

Perubahan kecil (salah ketik, tautan) boleh langsung di sini, tetapi perubahan
besar sebaiknya lewat repositori core agar tidak menyimpang.

## Tangkapan layar

Tangkapan layar memakai data sintetis: room `LAB-A`, alamat `192.168.1.x`, dan
nama siswa contoh. Jangan menggantinya dengan tangkapan layar yang memuat data
siswa asli.

## Menerjemahkan

Semua teks yang terlihat memiliki atribut `data-i18n`, `data-i18n-html`, atau
`data-i18n-label`. Tambahkan kunci yang sama ke `I18N.id` dan `I18N.en` di
`assets/app.js`. Bahasa awal mengikuti `localStorage` lalu bahasa browser;
pengguna dapat beralih lewat tombol ID/EN. Tema terang/gelap mengikuti
preferensi sistem pada kunjungan pertama, lalu pilihan pengguna disimpan di
`localStorage` dan berlaku di halaman utama serta panduan.

## Lisensi

MIT. Lihat [LICENSE](LICENSE).
