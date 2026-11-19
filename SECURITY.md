# Kebijakan Keamanan NetDQM

Repositori publik NetDQM (situs dan unduhan) **tidak boleh memuat kredensial
produksi**. Password server, token,
private key, database siswa, rekaman layar, dan log aktivitas hanya boleh berada
di mesin server/lab, tidak di Git. Alamat IP internal, nama room produksi,
kapasitas lab, dan path deployment juga disimpan di catatan privat operator,
bukan di repository publik.

## Melaporkan kerentanan

Jangan membuka issue publik untuk kerentanan yang belum diperbaiki. Gunakan
**GitHub Security Advisories** pada tab *Security* repositori ini
(*Report a vulnerability*). Sertakan:

- versi NetDQM dan peran yang terdampak (server, console, agent),
- langkah reproduksi,
- dampak yang mungkin terjadi,
- saran perbaikan bila ada.

Kami akan menindaklanjuti melalui advisory privat sebelum detail dipublikasikan.

## Yang termasuk lingkup

- Autentikasi server dan penanganan sesi client.
- Protokol TCP 47800, termasuk transfer berkas dan pembaruan.
- Verifikasi bundel pembaruan (`manifest.json`, SHA-256, path traversal).
- Pemisahan peran server, console guru, dan agent siswa.
- Penanganan data siswa (nama, absensi, nilai, tangkapan layar).

## Di luar lingkup

- Komputer yang sudah dikuasai penyerang (mis. malware dengan hak admin).
- Jaringan yang tidak memakai segmentasi/VLAN atau password server yang lemah.
- Executable yang tidak ditandatangani secara digital; peringatan SmartScreen
  masih diterima sampai code signing tersedia.
- Kode atau aset NetSupport dan produk pihak ketiga lainnya.

## Praktik aman untuk operator

- Ganti password contoh (`ganti-password-ini`) sebelum dipakai.
- Gunakan `NETDQM_PASSWORD` atau `netdqm-server set-password`, jangan menaruh
  password asli di berkas yang di-commit.
- Simpan cadangan database di luar repositori.
- Batasi akses folder `updatepatch/`; hanya operator yang boleh menaruh bundel.
- Verifikasi checksum rilis sebelum memasang executable.
