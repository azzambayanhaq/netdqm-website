# Panduan Unduh dan Memasang NetDQM

Halaman ini menjelaskan berkas rilis resmi NetDQM, cara memilih paket untuk
setiap komputer, verifikasi checksum, dan langkah pemasangan singkat.

> **Sumber resmi:** hanya unduh dari
> <https://github.com/azzambayanhaq/netdqm-downloads/releases>. Jangan memakai installer
> dari situs lain. NetDQM tidak meminta pembayaran atau kode aktivasi.

- [Pilih paket](#pilih-paket)
- [Daftar berkas rilis](#daftar-berkas-rilis)
- [Verifikasi checksum](#verifikasi-checksum)
- [Memasang server](#memasang-server)
- [Memasang konsol guru](#memasang-konsol-guru)
- [Memasang agent siswa](#memasang-agent-siswa)
- [Memakai paket portable](#memakai-paket-portable)
- [SmartScreen dan antivirus](#smartscreen-dan-antivirus)
- [Checklist rollout lab](#checklist-rollout-lab)
- [Memperbarui](#memperbarui)
- [Troubleshooting](#troubleshooting)

---

## Pilih paket

| Komputer | Peran | Paket yang disarankan | Alternatif |
|---|---|---|---|
| Server lab | `Server` | `NetDQM-Server-linux-x64.tar.gz` (Linux) | `NetDQM-Server-windows-x64-setup.exe` |
| Komputer guru | `Console` | `NetDQM-Console-windows-x64-setup.exe` | `NetDQM-Console-windows-x64-portable.zip` |
| Komputer siswa | `Agent` | `NetDQM-Agent-windows-x64-setup.exe` | `NetDQM-Agent-windows-x64-portable.zip` |

Gunakan **installer** untuk lab produksi karena membuat shortcut, autostart, dan
entri uninstall. Gunakan **portable ZIP** untuk uji coba atau komputer yang tidak
boleh diinstal.

Alamat server contoh dalam panduan ini:

```text
192.168.1.10:47800
```

Ganti dengan IP komputer server Anda. Port default adalah **TCP 47800**.

---

## Daftar berkas rilis

Semua nama berkas stabil (tanpa nomor versi), sehingga tautan
`releases/latest/download/...` selalu menunjuk rilis terbaru.

| Berkas | Ukuran | Keterangan |
|---|---:|---|
| `NetDQM-Agent-windows-x64-setup.exe` | ±52 MB | Installer agent siswa (Windows 10/11 64-bit) |
| `NetDQM-Agent-windows-x64-portable.zip` | ±52 MB | Agent portable, ekstrak lalu jalankan |
| `NetDQM-Console-windows-x64-setup.exe` | ±52 MB | Installer konsol guru |
| `NetDQM-Console-windows-x64-portable.zip` | ±52 MB | Konsol portable |
| `NetDQM-Server-windows-x64-setup.exe` | ±11 MB | Installer server Windows (opsional) |
| `NetDQM-Server-windows-x64-portable.zip` | ±11 MB | Server Windows portable |
| `NetDQM-Server-linux-x64.tar.gz` | ±0,2 MB | Source server Linux + pemasang systemd |
| `SHA256SUMS.txt` | kecil | Checksum SHA-256 semua berkas |
| `release.json` | kecil | Metadata rilis (versi, commit, ukuran, checksum) |

Setiap ZIP portable berisi `VERSI.txt`, `LICENSE`, dan `BACA-SAYA.txt`.

---

## Verifikasi checksum

Unduh `SHA256SUMS.txt` dari halaman rilis yang sama, lalu bandingkan.

Windows PowerShell:

```powershell
Get-FileHash .\NetDQM-Agent-windows-x64-setup.exe -Algorithm SHA256
```

Windows Command Prompt:

```bat
certutil -hashfile NetDQM-Agent-windows-x64-setup.exe SHA256
```

Linux (hanya untuk berkas yang ada di folder tersebut):

```bash
sha256sum -c --ignore-missing SHA256SUMS.txt
```

Nilai harus sama persis dengan baris berkas di `SHA256SUMS.txt`. Jika berbeda,
jangan jalankan berkas tersebut; unduh ulang dari halaman rilis resmi.

---

## Memasang server

### Linux (disarankan)

Prasyarat: Linux 64-bit, Python 3.10+, dan modul `venv`.

Debian/Ubuntu:

```bash
sudo apt update
sudo apt install -y python3 python3-venv
```

Ekstrak dan jalankan pemasang:

```bash
tar -xzf NetDQM-Server-linux-x64.tar.gz
cd NetDQM-Server-*
sudo ./install-server.sh
```

Pemasang akan:

1. Membuat pengguna sistem `netdqm`.
2. Menyalin aplikasi ke `/opt/netdqm-server/app`.
3. Membuat virtual environment dan memasang dependensi server.
4. Membuat konfigurasi `/etc/netdqm/server.json` dan meminta password server.
5. Memasang layanan systemd `netdqm-server` dan menjalankannya.

Tambahkan ruangan:

```bash
sudo -u netdqm /opt/netdqm-server/app/.venv/bin/python -m netdqm.server \
  --config /etc/netdqm/server.json add-room LAB-A --name "Lab A"
```

Periksa status dan log:

```bash
systemctl status netdqm-server
journalctl -u netdqm-server -f
```

Buka firewall hanya untuk subnet lab, misalnya dengan `ufw`:

```bash
sudo ufw allow from 192.168.1.0/24 to any port 47800 proto tcp
```

Sesuaikan subnet dengan jaringan lab Anda. Jangan membuka port 47800 ke internet.

### Windows (opsional)

1. Jalankan `NetDQM-Server-windows-x64-setup.exe`.
2. Buka **NetDQM Server** dari Start Menu.
3. Saat pertama kali dijalankan, konfigurasi dibuat di
   `%APPDATA%\NetDQM\server.json` dan password server diminta.
4. Installer menambahkan aturan firewall **NetDQM Server (TCP 47800)**.

Menambah ruangan dari Command Prompt:

```bat
"C:\NetDQM\Server\NetDQM-Server.exe" add-room LAB-A --name "Lab A"
```

---

## Memasang konsol guru

1. Jalankan `NetDQM-Console-windows-x64-setup.exe`.
2. Buka **NetDQM Console (Guru)**.
3. Isi dialog koneksi:

   | Kolom | Nilai |
   |---|---|
   | Alamat server | `192.168.1.10` (IP server Anda) |
   | Port | `47800` |
   | Password | password server dari admin lab |
   | Nama tutor | nama guru |
   | Ruangan | contoh `LAB-A` |

4. Klik **Hubungkan**. Kartu siswa muncul saat agent terhubung.

Untuk pemasangan senyap di banyak komputer:

```bat
NetDQM-Console-windows-x64-setup.exe /VERYSILENT /SUPPRESSMSGBOXES /NORESTART /TASKS="desktopicon"
```

---

## Memasang agent siswa

1. Jalankan `NetDQM-Agent-windows-x64-setup.exe`.
2. Biarkan opsi **Jalankan agent otomatis saat pengguna login** tercentang.
3. Buka ikon NetDQM di system tray → **Pengaturan...**.
4. Isi alamat server, port, password, nama komputer, dan ruangan yang sama
   dengan konsol guru.
5. Klik **Simpan**, lalu **Hubungkan**.

Pemasangan senyap dengan autostart:

```bat
NetDQM-Agent-windows-x64-setup.exe /VERYSILENT /SUPPRESSMSGBOXES /NORESTART /TASKS="desktopicon,autostart"
```

Setelah pemasangan senyap, konfigurasi koneksi tetap harus diisi per komputer
(melalui jendela Pengaturan atau file `%APPDATA%\NetDQM\agent.json`). Untuk
deployment massal, siapkan `agent.json` yang sama lalu sesuaikan `identity.name`
dan `identity.room` di setiap komputer.

Contoh `agent.json`:

```json
{
  "server": {
    "host": "192.168.1.10",
    "port": 47800,
    "password": "PASSWORD-SERVER",
    "tls": false,
    "verify_tls": false
  },
  "identity": {
    "name": "PC-LAB-A-01",
    "room": "LAB-A"
  },
  "features": {
    "auto_accept_files": true,
    "auto_update": true
  },
  "autostart": true
}
```

Jangan menyimpan password produksi di repositori atau membagikannya di dokumen.

---

## Memakai paket portable

### Agent

1. Ekstrak `NetDQM-Agent-windows-x64-portable.zip` ke folder tetap, misalnya
   `C:\NetDQM\Agent`.
2. Jalankan `NetDQM-Agent.exe`.
3. Isi Pengaturan seperti pada installer.
4. Untuk autostart, jalankan dari folder tersebut:

   ```bat
   NetDQM-Agent.exe --install-autostart
   ```

Jika folder dipindah, jalankan ulang `--install-autostart`.

### Konsol

1. Ekstrak `NetDQM-Console-windows-x64-portable.zip`.
2. Jalankan `NetDQM-Console.exe`.
3. Isi dialog koneksi.

### Server Windows

1. Ekstrak `NetDQM-Server-windows-x64-portable.zip`.
2. Jalankan `Jalankan-Server.cmd`. Berkas ini membuat konfigurasi awal dan
   meminta password bila belum ada.
3. Tambahkan aturan firewall secara manual bila perlu:

   ```bat
   netsh advfirewall firewall add rule name="NetDQM Server (TCP 47800)" dir=in action=allow protocol=TCP localport=47800
   ```

Konfigurasi dan data portable tetap disimpan di `%APPDATA%\NetDQM` dan
`%LOCALAPPDATA%\NetDQM`, bukan di folder ZIP.

---

## SmartScreen dan antivirus

Executable NetDQM **belum ditandatangani secara digital**. Windows SmartScreen
dapat menampilkan layar **Windows protected your PC** saat berkas pertama kali
dibuka.

1. Klik **More info**.
2. Periksa nama berkas dan sumbernya.
3. Klik **Run anyway** hanya jika berkas berasal dari rilis resmi NetDQM dan
   checksum-nya cocok.

Beberapa antivirus juga dapat memberi peringatan palsu terhadap executable
PyInstaller satu file. Jika ragu:

- Bandingkan checksum dengan `SHA256SUMS.txt`.
- Pindai berkas di <https://www.virustotal.com/>.
- Bangun executable sendiri dari source (`python packaging/build.py`).

Jangan menonaktifkan SmartScreen, antivirus, atau firewall secara permanen.

---

## Checklist rollout lab

1. **Reservasi IP server.** Gunakan IP statis atau DHCP reservation agar
   `192.168.1.10` tidak berubah.
2. **Uji di satu lab** (misalnya `LAB1`) sebelum rollout ke semua ruangan.
3. **Samakan password, port, dan room** di server, konsol, dan agent.
4. **Buka firewall** TCP 47800 hanya untuk subnet lab.
5. **Pasang agent** di 70 komputer, lalu pastikan semua kartu muncul.
6. **Uji fitur inti:** thumbnail, remote, chat, transfer file, kunci layar,
   kuis, dan absensi.
7. **Baru lanjut** ke lab berikutnya.

Server satu lab dapat melayani banyak ruangan. Room ID memisahkan data siswa
antar lab.

---

## Memperbarui

NetDQM memakai pembaruan terpusat berbasis bundel ZIP:

1. Operator membuat bundel update dari build baru.
2. Bundel diletakkan di folder `updatepatch/` server atau diunggah dari konsol
   guru melalui **Berkas → Pembaruan Jaringan...**.
3. Server memverifikasi SHA-256, memasang pembaruan dirinya sendiri, lalu
   mengirim payload ke konsol/agent yang lebih lama.

Lihat bagian **Pembaruan Terpusat** pada dokumentasi internal aplikasi untuk
perintah lengkap.

> Rollout pembaruan pertama harus manual karena kemampuan `--apply-update`
> baru ada pada build yang memuat sistem pembaruan ini.

---

## Troubleshooting

### SmartScreen memblokir installer

Lihat [SmartScreen dan antivirus](#smartscreen-dan-antivirus). Hanya lanjutkan
jika berkas berasal dari rilis resmi dan checksum cocok.

### Konsol tidak dapat terhubung

- Pastikan server berjalan: `systemctl status netdqm-server` atau jendela
  server Windows.
- Cek IP server, port `47800`, password, dan nama ruangan.
- Uji dari server sendiri memakai `127.0.0.1`.
- Buka firewall TCP 47800 untuk subnet lab.
- Lihat log server dan konsol.

### Siswa tidak muncul di konsol

- Pastikan agent memakai ruangan yang sama dengan konsol.
- Pastikan password agent sama dengan password server.
- Cek ikon tray agent dan log `agent.log`.
- Restart agent setelah mengubah konfigurasi.

### Agent tidak muncul di tray

Beberapa desktop Linux tidak menyediakan system tray. NetDQM menampilkan jendela
kontrol kecil sebagai pengganti. Di Windows, pastikan agent berjalan di sesi
pengguna, bukan sebagai service session-0.

### Port 47800 sudah dipakai

Hentikan proses lain yang memakai port tersebut, atau ubah port server dan semua
client secara bersamaan.

```bash
sudo ss -ltnp | grep 47800
```

### Remote control tidak bekerja di Linux

Gunakan sesi **X11**, bukan Wayland. Cek dengan:

```bash
echo "$XDG_SESSION_TYPE"
```

Logout lalu pilih sesi Xorg/X11 saat login.

---

## Uninstall

Windows: buka **Settings → Apps → Installed apps**, pilih NetDQM, lalu
**Uninstall**. Autostart agent dan aturan firewall server dihapus otomatis.

Linux server:

```bash
sudo systemctl disable --now netdqm-server
sudo rm -f /etc/systemd/system/netdqm-server.service
sudo systemctl daemon-reload
sudo rm -rf /opt/netdqm-server
```

Konfigurasi, database, log, dan rekaman tidak dihapus otomatis. Hapus manual
bila tidak diperlukan lagi.

---

Lisensi MIT. Laporan kerentanan: lihat [SECURITY.md](SECURITY.md).
