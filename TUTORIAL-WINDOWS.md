# Tutorial Instalasi dan Penggunaan NetDQM di Windows

Panduan ini menjelaskan cara memasang NetDQM di Windows 10/11, mulai dari server, konsol guru, sampai agent siswa. Ada tiga pilihan pemasangan:

- **Installer/paket portable dari rilis** (bagian 2.1): paling mudah dan direkomendasikan untuk lab sekolah. Tidak perlu Python.
- **Cara A - Build executable sendiri**: untuk operator yang ingin membangun dari source di Windows.
- **Cara B - Dari source Python**: cocok untuk pengujian, pengembangan, atau bila ingin menjalankan langsung dari kode.

> **Penting:** repositori tidak menyimpan executable hasil build. Unduh installer dari halaman **GitHub Releases** proyek, atau bangun executable sendiri di komputer Windows. Build dari Linux tidak dapat menghasilkan `.exe` Windows.

---

## 1. Gambaran jaringan

Satu kelas membutuhkan:

| Komponen | Fungsi | Jumlah |
|---|---|---|
| **NetDQM Server** | Pusat koneksi, data siswa, kuis, absensi, file, dan routing | 1 komputer |
| **NetDQM Console** | Dipakai guru untuk memantau dan mengendalikan kelas | 1 komputer guru |
| **NetDQM Agent** | Berjalan di komputer siswa | 1 per komputer siswa |

```text
                    TCP 47800
  Konsol Guru  ◀──────────────────▶  Server NetDQM
                                          ▲
                                          │ TCP 47800
                                          ▼
                                  Agent Siswa 1..N
```

Semua komputer harus berada di jaringan yang sama dan dapat saling terhubung. Port default adalah **TCP 47800**.

Gunakan IP statis atau DHCP reservation untuk komputer server agar IP-nya tidak berubah. Contoh IP server dalam panduan ini: `192.168.1.10`.

> Jangan membuka port server ke internet. NetDQM dirancang untuk jaringan kelas/LAN yang dikelola.

---

## 2. Persyaratan Windows

- Windows 10 atau Windows 11 **64-bit**.
- Koneksi LAN yang sama antara server, guru, dan siswa.
- Hak administrator hanya diperlukan untuk:
  - Membuat aturan firewall.
  - Memasang autostart bila kebijakan sekolah membatasinya.
- Untuk Cara B: **Python 3.12 64-bit**.
- Untuk Cara A: Python hanya diperlukan di komputer yang membangun executable, bukan di komputer tujuan.
- Untuk installer rilis: tidak perlu Python sama sekali.

Jika memakai Cara B, jangan menyalin folder `.venv` dari Linux ke Windows. Virtual environment harus dibuat ulang di Windows.

---

## 2.1 Memasang dari installer rilis (direkomendasikan)

Halaman rilis resmi:

<https://github.com/azzambayanhaq/netdqm-downloads/releases>

| Komputer | Berkas yang dipakai |
|---|---|
| Server Linux | `NetDQM-Server-linux-x64.tar.gz` |
| Server Windows (opsional) | `NetDQM-Server-windows-x64-setup.exe` |
| Komputer guru | `NetDQM-Console-windows-x64-setup.exe` |
| Komputer siswa | `NetDQM-Agent-windows-x64-setup.exe` |

Tersedia juga `NetDQM-Agent-windows-x64-portable.zip`,
`NetDQM-Console-windows-x64-portable.zip`, dan
`NetDQM-Server-windows-x64-portable.zip` bila tidak ingin menginstal.

### Langkah singkat

1. Unduh installer sesuai peran dari halaman rilis.
2. Verifikasi checksum dengan `SHA256SUMS.txt` bila perlu:
   ```powershell
   Get-FileHash .\NetDQM-Agent-windows-x64-setup.exe -Algorithm SHA256
   ```
3. Jalankan installer. Jika SmartScreen muncul, klik **More info** lalu
   **Run anyway** hanya untuk berkas dari rilis resmi yang checksum-nya cocok.
4. Isi alamat server `192.168.1.10`, port `47800`, password server, dan ruangan
   yang sama di konsol guru serta agent siswa.
5. Agent installer menawarkan autostart saat login. Server installer menambahkan
   aturan firewall TCP 47800 secara otomatis.

Pemasangan senyap untuk banyak komputer:

```bat
NetDQM-Agent-windows-x64-setup.exe /VERYSILENT /SUPPRESSMSGBOXES /NORESTART /TASKS="desktopicon,autostart"
NetDQM-Console-windows-x64-setup.exe /VERYSILENT /SUPPRESSMSGBOXES /NORESTART /TASKS="desktopicon"
```

Konfigurasi koneksi tetap perlu diisi per komputer (lewat jendela Pengaturan
atau `%APPDATA%\NetDQM\agent.json`). Lihat [DOWNLOAD.md](DOWNLOAD.md) untuk
contoh `agent.json`, verifikasi checksum, dan checklist rollout.

---

# Cara A — Memakai executable Windows

Cara ini untuk membangun executable sendiri. Executable Windows harus **dibangun di Windows** terlebih dahulu.

## A.1 Build executable di Windows

Lakukan di satu komputer Windows yang memiliki Python:

1. Salin folder proyek NetDQM ke Windows, misalnya `C:\NetDQM`.
2. Buka **PowerShell**.
3. Masuk ke folder proyek:

```powershell
cd C:\NetDQM
```

4. Buat virtual environment:

```powershell
py -3.12 -m venv .venv
```

Jika `py` tidak tersedia:

```powershell
python -m venv .venv
```

5. Izinkan aktivasi virtual environment untuk sesi PowerShell ini:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
```

6. Aktifkan virtual environment:

```powershell
.\.venv\Scripts\Activate.ps1
```

7. Perbarui pip dan pasang dependensi build:

```powershell
python -m pip install --upgrade pip
pip install -e ".[build]"
```

8. Bangun ketiga executable:

```powershell
python packaging\build.py
```

Hasilnya:

```text
dist\NetDQM-Server.exe
dist\NetDQM-Agent.exe
dist\NetDQM-Console.exe
```

Build harus dijalankan di Windows. PyInstaller tidak dapat membuat executable Windows dari Linux.

## A.2 Menyalin executable ke komputer tujuan

| Komputer | File yang dibutuhkan |
|---|---|
| Server | `NetDQM-Server.exe` |
| Guru | `NetDQM-Console.exe` |
| Siswa | `NetDQM-Agent.exe` |

Masing-masing executable bersifat mandiri. Komputer tujuan tidak perlu Python.

Catatan executable satu file:

- Ukuran saat ini: server sekitar 10 MB; konsol dan agent sekitar 50 MB.
- Saat dibuka, executable mengekstrak isi ke folder sementara, jadi pembukaan pertama terasa sedikit lebih lambat.
- Konfigurasi dan log disimpan di `%APPDATA%\NetDQM` dan `%LOCALAPPDATA%\NetDQM`.
- Executable belum ditandatangani, sehingga SmartScreen dapat menampilkan peringatan.

Simpan executable di folder tetap, misalnya:

```text
C:\NetDQM\NetDQM-Server.exe
C:\NetDQM\NetDQM-Console.exe
C:\NetDQM\NetDQM-Agent.exe
```

Jangan memindahkan file agent setelah memasang autostart, karena autostart menunjuk ke lokasi file tersebut.

## A.3 Menjalankan server dari executable

Buka PowerShell di folder executable:

```powershell
cd C:\NetDQM
```

Buat konfigurasi server:

```powershell
.\NetDQM-Server.exe init
```

Pasang password server:

```powershell
.\NetDQM-Server.exe set-password
```

Masukkan password dua kali. Gunakan password yang kuat dan sama untuk semua komponen.

Opsional, tambahkan ruangan lain:

```powershell
.\NetDQM-Server.exe add-room LAB2 --name "Lab Komputer 2"
```

Tampilkan konfigurasi:

```powershell
.\NetDQM-Server.exe show
```

Jalankan server:

```powershell
.\NetDQM-Server.exe run
```

Biarkan jendela server tetap terbuka selama kelas. Jika jendela ditutup, semua koneksi terputus. Mode Windows Service belum tersedia pada versi ini.

## A.4 Menjalankan konsol guru dari executable

Di komputer guru:

```powershell
cd C:\NetDQM
.\NetDQM-Console.exe
```

Saat pertama kali dibuka, isi:

- **Alamat server**: `192.168.1.10` (IP komputer server).
- **Port**: `47800`.
- **Password**: password server.
- **Nama tutor**: nama guru.
- **Ruangan**: `LAB1`.
- **TLS**: biarkan tidak dicentang, kecuali server memang dikonfigurasi memakai TLS.

Klik **Hubungkan**.

## A.5 Menjalankan agent siswa dari executable

Di setiap komputer siswa:

```powershell
cd C:\NetDQM
.\NetDQM-Agent.exe
```

Pada pemakaian pertama, jendela **Pengaturan Agent** akan muncul. Jika tidak muncul, buka ikon tray NetDQM lalu pilih **Pengaturan**. Isi:

- **Alamat server**: IP server, misalnya `192.168.1.10`.
- **Port**: `47800`.
- **Password**: password server.
- **Ruangan**: `LAB1` — harus sama dengan konsol guru.
- **Nama siswa**: nama komputer, misalnya `PC-LAB-01`.
- **Gunakan TLS**: tidak dicentang, kecuali server memakai TLS.

Bagian **Izin dari Guru**:

- Izinkan remote control mouse/keyboard.
- Izinkan aksi daya bila diperlukan.
- Izinkan transfer file.
- Aktifkan **Terima file dari guru secara otomatis** bila guru sering mengirim materi.
- Aktifkan **Jalankan otomatis saat login** bila agent harus selalu aktif.
- Atur interval laporan aktivitas, misalnya 5 detik.

Klik **Simpan**. Agent akan terhubung ke server.

Setelah itu agent berjalan di system tray. Klik ikon tray untuk membuka chat, mengangkat tangan, mengirim file, membuka folder unduhan, pengaturan, atau keluar.

Jika Windows/desktop tidak menampilkan system tray, NetDQM menampilkan jendela kontrol kecil. Jendela tersebut tetap bisa dipakai untuk chat, pengaturan, dan keluar.

## A.6 Autostart agent dari executable

Dari PowerShell:

```powershell
cd C:\NetDQM
.\NetDQM-Agent.exe --install-autostart
```

Perintah ini mendaftarkan agent di registry Windows agar berjalan saat user login. Setelah itu jalankan agent sekali untuk sesi sekarang:

```powershell
.\NetDQM-Agent.exe
```

Untuk menghapus autostart:

```powershell
.\NetDQM-Agent.exe --uninstall-autostart
```

Autostart juga bisa diaktifkan/dimatikan lewat checkbox **Jalankan otomatis saat login** di Pengaturan Agent.

---

## A.7 Memperbarui komputer siswa dan guru

Setelah versi baru dibangun, buat bundel update di komputer pengembang:

```powershell
python tools\make_bundle.py --version 1.1.0 --notes "Perbaikan koneksi"
```

Salin `dist\NetDQM-update-1.1.0.zip` ke folder `updatepatch\` di server Windows
(satu folder dengan `server.json`), atau unggah dari console guru lewat
**Berkas > Pembaruan Jaringan...**.

Alur pembaruan:

- Server memeriksa folder `updatepatch\` setiap 60 detik.
- Bundel rilis menyertakan server Windows dan source server Linux. Jika versi
  lebih baru, server yang cocok memasang payload-nya lalu memulai ulang; client
  akan menyambung ulang otomatis.
- Agent yang versinya lebih lama menampilkan pemberitahuan. Siswa memilih
  **Perbarui sekarang** atau **Nanti**; update yang ditunda dapat dibuka lagi
  dari menu tray. Setelah checksum diverifikasi, Agent menutup dan berjalan
  kembali dengan versi baru.
- Console guru menampilkan pemberitahuan dengan tombol **Perbarui sekarang**.
  Setelah operator memilihnya dan unduhan selesai, Console menutup lalu
  berjalan kembali dengan versi baru. Dialog **Berkas > Pembaruan Jaringan**
  tetap tersedia untuk melihat status dan memulai update secara manual.

Untuk mematikan tawaran otomatis saat Agent tersambung, ubah `server.json`:

```json
"updates": { "auto_client_update": false }
```

Guru tetap dapat mengirim tawaran melalui **Perbarui Semua Siswa** di dialog
pembaruan. Agent akan meminta persetujuan sebelum mulai mengunduh.

Catatan:

- Jangan menyalin ZIP sambil server sedang menulis staging. Salin ke folder
  sementara lalu pindahkan, atau pakai `publish-update`.
- Uji dulu di satu komputer dan ruangan `LAB1` sebelum memperbarui enam lab.
- Pembaruan memerlukan koneksi ke server; agent yang dimatikan akan menerima
  pembaruan saat menyala dan terhubung kembali.
- Cadangan source server tersimpan di `updatepatch\backup\`.

---

# Cara B — Instalasi dari source Python

Gunakan cara ini jika belum memiliki executable Windows atau sedang melakukan pengujian.

## B.1 Pasang Python

1. Unduh **Python 3.12 64-bit** dari <https://www.python.org/downloads/windows/>.
2. Jalankan installer.
3. Centang **Add python.exe to PATH**.
4. Pilih **Install Now**.
5. Setelah selesai, buka PowerShell baru dan cek:

```powershell
py -3.12 --version
```

Jika perintah tersebut tidak dikenali:

```powershell
python --version
```

## B.2 Siapkan proyek

Salin folder proyek ke lokasi lokal, misalnya:

```text
C:\NetDQM
```

Hindari menjalankan dari folder yang disinkronkan OneDrive secara terus-menerus, karena database dan file rekaman dapat terkunci saat sinkronisasi.

Buka PowerShell:

```powershell
cd C:\NetDQM
```

Buat virtual environment:

```powershell
py -3.12 -m venv .venv
```

Aktifkan:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\.venv\Scripts\Activate.ps1
```

Jika memakai Command Prompt (cmd), aktifkan dengan:

```bat
.venv\Scripts\activate.bat
```

Perbarui pip dan pasang NetDQM:

```powershell
python -m pip install --upgrade pip
pip install -e .
```

Jika hanya ingin memasang dependensi tanpa mode editable:

```powershell
pip install -r requirements.txt
```

## B.3 Verifikasi instalasi

Masih di PowerShell dengan virtual environment aktif:

```powershell
netdqm-server --version
netdqm-console --version
netdqm-agent --version
```

Ketiganya harus menampilkan:

```text
NetDQM 1.0.0
```

Jika perintah tidak ditemukan, pastikan virtual environment aktif dan jalankan:

```powershell
python -m netdqm.server --version
python -m netdqm.console --version
python -m netdqm.agent --version
```

## B.4 Menjalankan server dari source

```powershell
netdqm-server init
netdqm-server set-password
netdqm-server show
netdqm-server run
```

Secara default server mendengarkan di `0.0.0.0:47800`.

Menjalankan dengan port lain:

```powershell
netdqm-server run --port 47900
```

Jika port diubah, konsol dan agent juga harus memakai port yang sama.

## B.5 Menjalankan konsol guru dari source

```powershell
netdqm-console
```

Isi alamat server, port, password, nama tutor, dan ruangan seperti pada Cara A.

## B.6 Menjalankan agent dari source

```powershell
netdqm-agent
```

Isi pengaturan pada pemakaian pertama. Untuk mode tanpa tampilan, misalnya untuk pengujian:

```powershell
netdqm-agent --headless --config C:\NetDQM\agent-test.json
```

## B.7 Autostart agent dari source

```powershell
netdqm-agent --install-autostart
```

Untuk menghapus:

```powershell
netdqm-agent --uninstall-autostart
```

Autostart akan menunjuk ke Python di `.venv`. Jika folder proyek atau `.venv` dipindahkan, autostart harus dipasang ulang. Untuk deployment permanen, gunakan executable Windows.

---

# 3. Menyiapkan firewall Windows di server

Di komputer server, buka **PowerShell sebagai Administrator**, lalu jalankan:

```powershell
New-NetFirewallRule `
  -DisplayName "NetDQM Server TCP 47800" `
  -Direction Inbound `
  -Protocol TCP `
  -LocalPort 47800 `
  -Action Allow
```

Jika port server diganti, sesuaikan `-LocalPort`.

Cek IP server:

```powershell
ipconfig
```

Catat alamat **IPv4**, misalnya `192.168.1.10`.

Dari komputer guru atau siswa, uji koneksi:

```powershell
Test-NetConnection 192.168.1.10 -Port 47800
```

Nilai `TcpTestSucceeded : True` berarti port dapat dijangkau.

Jika gagal:

- Pastikan server sedang berjalan.
- Pastikan IP server benar.
- Pastikan komputer berada di jaringan yang sama.
- Periksa firewall pihak ketiga/antivirus.
- Pastikan client isolation pada Wi-Fi sekolah tidak memblokir komunikasi antar-client.

---

# 4. Mulai kelas: urutan menjalankan

Gunakan urutan berikut setiap kali memulai kelas:

1. **Server** di komputer server:
   ```powershell
   .\NetDQM-Server.exe run
   ```
   atau dari source:
   ```powershell
   netdqm-server run
   ```

2. **Konsol guru** di komputer guru:
   ```powershell
   .\NetDQM-Console.exe
   ```
   Hubungkan ke IP server dan ruangan yang benar.

3. **Agent siswa** di setiap komputer siswa:
   ```powershell
   .\NetDQM-Agent.exe
   ```
   Jika autostart aktif, agent akan berjalan sendiri setelah login.

4. Tunggu kartu siswa muncul di konsol guru.

5. Lakukan uji cepat: kirim chat, kunci/buka layar, atau kirim satu file kecil.

## 4.1 Uji cepat di satu komputer

Untuk mencoba seluruh alur tanpa jaringan lab:

1. Jalankan server di `127.0.0.1:47800`.
2. Jalankan konsol guru, isi alamat server `127.0.0.1`, port `47800`, ruangan `LAB1`.
3. Jalankan agent, isi alamat server `127.0.0.1`, port `47800`, ruangan `LAB1`, nama komputer `PC-TEST`.
4. Kartu `PC-TEST` akan muncul di konsol guru.

Pada uji satu komputer, remote control akan mengendalikan desktop yang sama dengan konsol guru. Gunakan hanya untuk pengujian.

---

# 5. Tutorial penggunaan konsol guru

## 5.1 Memilih siswa

- **Klik kiri** kartu: pilih satu siswa.
- **Ctrl + klik**: menambah atau melepas siswa dari pilihan.
- **Shift + klik**: memilih beberapa siswa berurutan.
- **Ctrl + Shift + A**: pilih semua siswa yang terlihat.
- **Klik kanan kartu**: membuka menu tindakan untuk siswa tersebut.
- **Kotak pencarian**: cari berdasarkan nama, user, IP, OS, atau hostname.

Tindakan pada toolbar biasanya berlaku untuk siswa yang dipilih. Jika tidak ada siswa dipilih, beberapa tindakan akan meminta target atau dinonaktifkan.

## 5.2 Melihat layar siswa

Kartu siswa menampilkan thumbnail layar yang diperbarui secara berkala.

Untuk melihat lebih besar:

1. Pilih siswa.
2. Klik **Remote & Pantau**, atau klik dua kali kartu siswa.
3. Pilih monitor siswa di bagian atas.
4. Atur FPS dan kualitas JPEG bila perlu.
5. Centang **Kontrol input** untuk mengaktifkan mouse dan keyboard remote, atau biarkan tidak dicentang untuk melihat saja.
6. Gunakan **Snapshot** untuk menyimpan gambar layar.
7. Gunakan **Rekam** untuk merekam sesi ke file `.ndq`.
8. Tutup jendela remote untuk berhenti memantau.

## 5.3 Siaran layar guru

1. Pilih siswa bila siaran hanya untuk sebagian siswa. Jika tidak ada pilihan, siaran dapat dikirim ke semua siswa.
2. Klik **Siaran Layar...**.
3. Pilih target: semua siswa atau siswa terpilih.
4. Pilih monitor tutor, FPS, kualitas JPEG, dan ukuran gambar.
5. Klik **Mulai Siaran**.
6. Klik **Hentikan Siaran** atau tutup jendela untuk berhenti.

Layar guru akan tampil sebagai overlay penuh di komputer siswa. Fitur audio belum tersedia.

## 5.4 Chat

1. Buka tab **Chat** di sisi kanan konsol.
2. Pilih tujuan: semua siswa atau siswa tertentu.
3. Tulis pesan lalu kirim.
4. Chat dari siswa akan muncul di panel.
5. Klik kanan kartu siswa lalu pilih **Chat** untuk memulai percakapan dengan siswa tersebut.

## 5.5 Kunci, blank, dan pesan

Pilih siswa terlebih dahulu, lalu:

- **Kunci Layar...** — menampilkan overlay terkunci dengan pesan dari guru.
- **Buka Kunci** — melepas overlay.
- **Blank / Tampilkan** — mematikan atau menampilkan layar siswa.
- **Kirim Pesan...** — mengirim pesan satu arah dengan judul dan isi.

Gunakan tombol **Buka Kunci** setelah selesai, terutama sebelum siswa melanjutkan praktikum.

## 5.6 Transfer file

### Guru ke siswa

1. Pilih satu atau beberapa siswa.
2. Klik **Kirim File...**.
3. Pilih file dari komputer guru.
4. Siswa menerima penawaran file. Jika agent dikonfigurasi auto-accept, file langsung diterima.
5. File siswa tersimpan di `%USERPROFILE%\Downloads\NetDQM` (atau `%USERPROFILE%\NetDQM` jika folder `Downloads` belum ada).

### Siswa ke guru

1. Siswa membuka ikon tray NetDQM.
2. Pilih **Kirim File ke Guru**.
3. Pilih file.
4. Guru menerima konfirmasi di konsol.
5. File diterima disimpan di folder `Downloads\NetDQM`.

## 5.7 Kuis

1. Klik **Kelola Kuis...**.
2. Buka tab **Perpustakaan**.
3. Klik **Buat Kuis**.
4. Isi judul, durasi, pertanyaan, pilihan jawaban, dan tandai jawaban benar.
5. Klik **Simpan & Buat Kuis**.
6. Pilih kuis lalu klik **Mulai Kuis**. Pilih **Hapus Kuis** untuk menghapus
   definisi kuis yang tidak dipakai; riwayat dan nilai sebelumnya tetap disimpan.
7. Buka tab **Monitor** untuk melihat siswa yang sudah menjawab, skor, dan timer.
8. Klik **Hentikan Kuis** bila perlu mengakhiri lebih awal.

Jawaban benar hanya disimpan di server dan tidak dikirim ke komputer siswa.

## 5.8 Absensi dan aktivitas

- Klik **Absensi...** untuk melihat kehadiran harian, waktu pertama/terakhir terlihat, durasi, jumlah sesi, dan status online.
- Gunakan **Ekspor CSV** untuk membuka data di Excel/LibreOffice.
- Tab **Log Aktivitas** menampilkan event server secara real-time.
- Aktivitas jendela dan proses siswa terlihat pada pembaruan kartu siswa dan log.

## 5.9 Aksi daya dan aplikasi

Pilih siswa, lalu buka menu **Siswa** atau klik kanan kartu:

- **Aksi Daya...** — shutdown, restart, logoff, atau lock workstation dengan hitungan mundur.
- **Tutup Aplikasi Siswa** — menutup aplikasi berdasarkan PID/nama proses yang dilaporkan agent.
- **Keluarkan Siswa** — memutus sesi siswa dari server.

Aksi daya dapat memerlukan hak administrator tergantung kebijakan Windows. Gunakan dengan hati-hati dan beri tahu siswa sebelum hitungan mundur.

## 5.10 Rekaman

- Rekaman remote disimpan sebagai file `.ndq`.
- Buka **Berkas → Putar Rekaman...** untuk memutar ulang.
- Gunakan kontrol **Putar**, slider, dan penghitung frame.
- Rekaman menyimpan frame layar; data input mentah tidak disimpan.

## 5.11 Memutuskan koneksi

- **Kelas → Putuskan Koneksi** memutus konsol dari server.
- **Berkas → Keluar** menutup konsol.
- Menutup konsol tidak mematikan server atau agent siswa.

---

# 6. Tutorial penggunaan agent siswa

Agent siswa berjalan di background dan dapat diakses dari ikon tray.

Menu tray menyediakan:

- **Chat dengan Guru**
- **Angkat Tangan** — memberi sinyal bantuan ke guru.
- **Kirim File ke Guru**
- **Folder Unduhan NetDQM**
- **Pengaturan**
- **Keluar**

Jika tray tidak tersedia, gunakan jendela kontrol NetDQM Agent yang muncul otomatis.

Di **Pengaturan**, siswa dapat mengubah:

- Alamat server, port, password, ruangan, dan nama komputer.
- Izin remote control, aksi daya, dan transfer file.
- Penerimaan file otomatis.
- Notifikasi desktop.
- Pembatalan perintah daya.
- Autostart saat login.

Jika pengaturan diubah, agent akan menyimpan konfigurasi dan mencoba terhubung ulang.

---

# 7. Lokasi konfigurasi dan data di Windows

Konfigurasi:

```text
%APPDATA%\NetDQM\
```

File:

```text
%APPDATA%\NetDQM\server.json
%APPDATA%\NetDQM\console.json
%APPDATA%\NetDQM\agent.json
%APPDATA%\NetDQM\netdqm.db
```

Log dan rekaman:

```text
%LOCALAPPDATA%\NetDQM\logs\
%LOCALAPPDATA%\NetDQM\recordings\
```

Folder unduhan:

```text
%USERPROFILE%\Downloads\NetDQM\
```

Untuk membuka lokasi konfigurasi dengan cepat, ketik di Explorer:

```text
%APPDATA%\NetDQM
```

Cadangkan folder konfigurasi sebelum mengubah atau menghapusnya.

---

# 8. Checklist sebelum kelas pertama

- [ ] Server berjalan dan menampilkan port 47800.
- [ ] Firewall Windows mengizinkan TCP 47800.
- [ ] Password server sudah diatur dan tidak kosong.
- [ ] Konsol guru memakai IP server, port, password, dan ruangan yang benar.
- [ ] Semua agent memakai ruangan yang sama.
- [ ] Setiap agent terlihat di konsol guru.
- [ ] Chat berhasil.
- [ ] Kunci/buka layar berhasil.
- [ ] Transfer file kecil berhasil.
- [ ] Kuis uji coba berhasil.
- [ ] Autostart agent diuji setelah logout/login.
- [ ] Folder unduhan dan lokasi rekaman dapat ditulis.

---

# 9. Troubleshooting Windows

## Konsol tidak dapat terhubung

1. Pastikan server berjalan.
2. Cek IP server dengan `ipconfig`.
3. Uji port dari komputer guru:
   ```powershell
   Test-NetConnection 192.168.1.10 -Port 47800
   ```
4. Pastikan firewall mengizinkan TCP 47800.
5. Cocokkan password dan ruangan.
6. Pastikan TLS konsisten: jika server TLS, konsol juga harus TLS.

## Siswa tidak muncul di konsol

- Agent harus memakai **ruangan** yang sama dengan konsol.
- Cek ikon tray atau jendela kontrol agent.
- Buka log agent di `%LOCALAPPDATA%\NetDQM\logs\agent.log`.
- Restart agent setelah mengubah pengaturan.
- Pastikan password agent sama dengan password server.
- Pastikan agent tidak diblokir firewall lokal.

## Agent tidak muncul di tray

Gunakan jendela kontrol fallback yang otomatis tampil. Jika tidak ada, jalankan agent dari PowerShell untuk melihat pesan error. Beberapa desktop Windows membutuhkan opsi **Show hidden icons** untuk menampilkan ikon tray.

## Remote control tidak bekerja

- Pastikan agent berjalan di sesi desktop user, bukan sebagai Windows Service.
- Pastikan opsi **Izinkan guru mengendalikan mouse dan keyboard** aktif.
- Pastikan server tidak menonaktifkan `allow_remote_input` pada policy.
- Di Windows, jalankan agent sebagai user yang sama dengan sesi desktop aktif.

## Aksi shutdown/restart gagal

- Kebijakan Windows dapat membatasi shutdown untuk user tertentu.
- Jalankan agent dengan hak yang sesuai atau gunakan akun yang memiliki izin.
- Aksi tetap dapat dibatalkan siswa bila `power_cancel_allowed` aktif.

## Port 47800 sudah dipakai

Cek pemakaian port:

```powershell
Get-NetTCPConnection -LocalPort 47800
```

Ganti port server, lalu ubah konfigurasi konsol dan agent.

## SmartScreen memblokir executable

Executable NetDQM belum ditandatangani secara digital. Windows dapat menampilkan peringatan SmartScreen. Klik **More info → Run anyway** hanya jika file berasal dari build Anda sendiri yang tepercaya. Code signing adalah roadmap pengembangan.

## Instalasi pip gagal

- Pastikan Python 64-bit, bukan 32-bit.
- Gunakan Python 3.12.
- Perbarui pip:
  ```powershell
  python -m pip install --upgrade pip
  ```
- Jika folder proyek berada di `Program Files`, pindahkan ke `C:\NetDQM` agar virtual environment dapat ditulis.

---

# 10. Uninstall

## Hapus autostart

Untuk executable:

```powershell
.\NetDQM-Agent.exe --uninstall-autostart
```

Untuk source:

```powershell
netdqm-agent --uninstall-autostart
```

## Hapus paket Python

```powershell
pip uninstall netdqm
```

## Hapus data dan konfigurasi

Tutup semua aplikasi NetDQM terlebih dahulu, lalu hapus folder berikut secara manual jika data memang tidak diperlukan:

```text
%APPDATA%\NetDQM
%LOCALAPPDATA%\NetDQM
```

> Menghapus folder tersebut akan menghapus konfigurasi, database, log, dan rekaman.

## Hapus aturan firewall

Di PowerShell Administrator:

```powershell
Remove-NetFirewallRule -DisplayName "NetDQM Server TCP 47800"
```

## Uninstall installer

Buka **Settings → Apps → Installed apps**, cari **NetDQM**, lalu pilih
**Uninstall**. Saat uninstall Agent atau Console secara interaktif, pilih
apakah konfigurasi peran di `%APPDATA%\NetDQM` ingin dihapus. Log, rekaman, dan
file unduhan tetap disimpan. Uninstall senyap mempertahankan konfigurasi.
Autostart Agent dan aturan firewall Server juga dihapus otomatis.

Untuk uninstall senyap:

```bat
"C:\NetDQM\Agent\unins000.exe" /VERYSILENT /SUPPRESSMSGBOXES /NORESTART
```

## Hapus executable portable

Hapus folder `C:\NetDQM` atau file executable portable yang sudah tidak dipakai.
Jalankan `NetDQM-Agent.exe --uninstall-autostart` lebih dulu bila autostart
pernah diaktifkan.

---

# 11. Batasan versi Windows saat ini

- Server berjalan sebagai aplikasi console, belum sebagai Windows Service.
- Audio broadcast belum tersedia.
- Print control, USB/device control, dan web filtering belum tersedia.
- Agent harus berjalan di sesi desktop pengguna untuk remote control.
- Executable belum ditandatangani digital.
- TLS bersifat opsional dan perlu konfigurasi sertifikat manual.

Fitur yang sudah tersedia mencakup monitoring, remote control, broadcast layar, chat, transfer file, lock/blank, pesan, kuis, absensi, power action, tutup aplikasi, multi-room, rekaman, dan playback.
