"use strict";

const I18N = {
  id: {
    "meta.title": "NetDQM — Manajemen Lab Komputer Original",
    "meta.description": "NetDQM adalah aplikasi manajemen kelas original untuk lab komputer: pantau layar siswa, remote control, siaran, chat, transfer file, kuis, dan absensi. Gratis, open source, MIT.",
    "page.home.title": "NetDQM — Manajemen Lab Komputer Original",
    "page.features.title": "Fitur — NetDQM",
    "page.screens.title": "Tangkapan Layar — NetDQM",
    "page.download.title": "Unduh — NetDQM",
    "page.start.title": "Mulai — NetDQM",
    "page.tutorial.title": "Panduan — NetDQM",
    "guide.hero.eyebrow": "Panduan penggunaan",
    "guide.hero.title": "Mulai mengelola kelas dengan NetDQM",
    "guide.hero.lead": "Ikuti panduan singkat untuk menyiapkan server, menghubungkan konsol guru dan agent siswa, lalu memakai fitur utama saat kelas berlangsung.",
    "guide.hero.cta1": "Pilih installer atau portable",
    "guide.hero.cta2": "Baca tutorial Windows lengkap",
    "guide.toc.aria": "Daftar isi panduan",
    "skip": "Lewati ke konten",
    "nav.home": "Beranda",
    "nav.features": "Fitur",
    "nav.screens": "Tangkapan Layar",
    "nav.download": "Unduh",
    "nav.start": "Mulai",
    "nav.tutorial": "Tutorial penggunaan",
    "nav.menu": "Menu",
    "nav.open": "Buka menu navigasi",
    "nav.close": "Tutup menu navigasi",
    "nav.aria": "Navigasi utama",
    "lang.label": "Bahasa",
    "hero.eyebrow": "Manajemen kelas original",
    "hero.title1": "Lab komputer",
    "hero.title2": "lebih terkendali.",
    "hero.lead": "Pantau layar siswa, kendalikan komputer, siarkan materi, kirim file, jalankan kuis, dan catat absensi — semuanya dari satu konsol guru. Dibuat dari awal untuk Windows dan Linux.",
    "hero.cta1": "Unduh NetDQM",
    "hero.cta2": "Tutorial penggunaan",
    "hero.badge1": "Windows 10/11",
    "hero.badge2": "Server Linux",
    "hero.badge3": "MIT License",
    "hero.badge4": "Tanpa telemetry",
    "hero.float1": "tanpa internet",
    "hero.float2": "port TCP",
    "server.label": "Contoh alamat server",
    "server.note": "Ini hanya contoh. Ganti dengan IP komputer server di lab Anda. Alamat server hanya dapat diakses dari jaringan lab yang dikelola; jangan membuka port server ke internet.",
    "server.link": "Cara menyambungkan →",
    "features.eyebrow": "Satu konsol untuk seluruh kelas",
    "features.title": "Fitur yang benar-benar dipakai di lab",
    "features.lead": "Dirancang untuk guru, bukan administrator jaringan. Semua koneksi melewati server lab, dan kunci jawaban kuis tetap di server.",
    "features.monitor.title": "Pemantauan langsung",
    "features.monitor.desc": "Thumbnail layar setiap siswa diperbarui berkala. Cari berdasarkan nama, pengguna, atau IP, lalu pilih satu atau banyak siswa.",
    "features.remote.title": "Remote control",
    "features.remote.desc": "Lihat layar penuh, kendalikan mouse dan keyboard, pilih monitor, atur FPS/kualitas, ambil snapshot, atau rekam sesi.",
    "features.broadcast.title": "Siaran layar guru",
    "features.broadcast.desc": "Tampilkan layar guru sebagai overlay penuh di semua siswa atau hanya yang dipilih, dengan pengaturan monitor, FPS, dan kualitas.",
    "features.chat.title": "Chat dan transfer file",
    "features.chat.desc": "Chat dengan seluruh kelas atau satu siswa. Kirim file dua arah; siswa juga dapat mengirim tugas ke komputer guru.",
    "features.quiz.title": "Kuis dan absensi",
    "features.quiz.desc": "Buat kuis pilihan ganda, mulai dari konsol, pantau jawaban masuk, dan lihat skor otomatis. Absensi harian dapat diekspor ke CSV.",
    "features.secure.title": "Aman dan mandiri",
    "features.secure.desc": "Autentikasi HMAC-SHA256, password tidak dikirim mentah, TLS opsional, audit SQLite, serta pembaruan terpusat dengan verifikasi SHA-256.",
    "screens.eyebrow": "Tampilan aplikasi",
    "screens.title": "Lihat sebelum memasang",
    "screens.lead": "Tangkapan layar berikut memakai data demo sintetis. Tidak ada data siswa asli yang ditampilkan.",
    "screens.console.title": "Konsol guru",
    "screens.console.caption": "Pantau seluruh kelas, pilih siswa, dan kirim perintah dari toolbar.",
    "screens.remote.title": "Remote & pantau",
    "screens.remote.caption": "Kendalikan mouse/keyboard, pilih monitor, rekam sesi, atau ambil snapshot.",
    "screens.quiz.title": "Kelola kuis",
    "screens.quiz.caption": "Perpustakaan kuis, editor pertanyaan, dan monitor jawaban siswa.",
    "screens.attendance.title": "Absensi harian",
    "screens.attendance.caption": "Waktu pertama/terakhir, durasi, sesi, status online, dan ekspor CSV.",
    "screens.note": "Klik gambar untuk memperbesar. Tampilan dapat berbeda sedikit tergantung versi Windows dan tema.",
    "dl.eyebrow": "Rilis resmi",
    "dl.title": "Unduh NetDQM",
    "dl.lead": "Pilih peran komputer. Installer Windows paling mudah; paket portable tidak memerlukan instalasi. Server Linux dipasang dari source dengan skrip systemd.",
    "dl.version": "Versi 1.0.4 menyertakan UI Console baru: kartu siswa interaktif, log aktivitas, dan notifikasi.",
    "dl.windows": "Windows x64",
    "dl.serverTag": "Linux / Windows",
    "dl.agent.title": "Agent Siswa",
    "dl.agent.desc": "Berjalan di setiap komputer siswa sebagai ikon tray. Menyambung ke server, mengirim thumbnail, dan menerima perintah guru.",
    "dl.agent.note": "Autostart dapat diaktifkan saat instalasi atau dari jendela Pengaturan agent.",
    "dl.console.title": "Konsol Guru",
    "dl.console.desc": "Aplikasi guru untuk memantau, mengendalikan, mengajar, dan menilai. Satu konsol terhubung ke satu ruangan.",
    "dl.console.note": "Membutuhkan alamat server, port, password, dan nama ruangan yang sama dengan agent.",
    "dl.server.title": "Server",
    "dl.server.desc": "Pusat koneksi, database SQLite, kuis, absensi, dan distribusi pembaruan. Satu server dapat melayani banyak ruangan.",
    "dl.server.note": "Paket Linux berisi skrip pemasang systemd. Server Windows bersifat opsional untuk uji coba atau lab kecil.",
    "dl.windowsInstaller": "Installer Windows",
    "dl.portable": "Portable ZIP",
    "dl.linuxSource": "Linux (tar.gz)",
    "dl.checksums": "Checksum SHA-256",
    "dl.releases": "Semua rilis",
    "dl.guide": "Panduan unduh",
    "dl.smartscreen.title": "Executable belum ditandatangani",
    "dl.smartscreen.text": "Windows SmartScreen dapat menampilkan peringatan saat file pertama kali dibuka. Klik <em>More info</em> lalu <em>Run anyway</em> hanya jika file berasal dari rilis resmi NetDQM. Bandingkan checksum dengan SHA256SUMS.txt bila ragu.",
    "start.eyebrow": "Dalam tiga langkah",
    "start.title": "Mulai kelas pertama",
    "start.lead": "Siapkan server di satu komputer, pasang konsol di komputer guru, lalu pasang agent di setiap komputer siswa. Semua harus berada di jaringan lab yang sama.",
    "start.step1.title": "Siapkan server",
    "start.step1.desc": "Di Linux, ekstrak paket lalu jalankan pemasang. Pemasang membuat pengguna sistem, virtual environment, konfigurasi, dan layanan systemd.",
    "start.step1.windows": "Di Windows: jalankan installer server, lalu buka <strong>NetDQM Server</strong> dari Start Menu. Installer menambahkan aturan firewall TCP 47800.",
    "start.step2.title": "Hubungkan konsol guru",
    "start.step2.desc": "Pasang konsol, buka aplikasi, lalu isi alamat server, port, password, nama tutor, dan ruangan.",
    "start.step2.note": "Klik <strong>Hubungkan</strong>. Kartu siswa akan muncul saat agent terhubung.",
    "start.step3.title": "Pasang agent siswa",
    "start.step3.desc": "Pasang agent di setiap komputer siswa. Buka ikon NetDQM di tray, pilih <strong>Pengaturan</strong>, dan isi alamat yang sama.",
    "start.step3.note": "Aktifkan <strong>Jalankan otomatis saat login</strong> agar agent langsung menyambung setiap komputer dinyalakan.",
    "start.tip": "<strong>Uji dulu di satu lab.</strong> Pastikan server memakai IP statis atau DHCP reservation sebelum rollout ke semua ruangan. Port default adalah TCP 47800.",
    "security.eyebrow": "Dibuat untuk jaringan lab",
    "security.title": "Keamanan yang masuk akal",
    "security.lead": "NetDQM tidak memiliki backdoor, telemetry, atau koneksi ke server pihak ketiga. Kendali tetap berada di operator lab.",
    "security.auth.title": "Autentikasi challenge/response",
    "security.auth.desc": "Password tidak dikirim mentah. Server dan client membuktikan identitas dengan HMAC-SHA256; TLS tersedia untuk jaringan yang tidak tepercaya.",
    "security.answers.title": "Kunci jawaban tetap di server",
    "security.answers.desc": "Agent hanya menerima pertanyaan dan pilihan. Penilaian dilakukan di server, sehingga jawaban benar tidak dapat dibaca siswa dari aplikasi.",
    "security.privacy.title": "Tanpa telemetry",
    "security.privacy.desc": "Tidak ada data yang dikirim ke pihak ketiga. Database, log, rekaman, dan konfigurasi disimpan di komputer server serta client Anda.",
    "security.lan.title": "Hanya untuk LAN",
    "security.lan.desc": "Jalankan server di jaringan kelas yang dikelola, batasi port 47800 dengan firewall, dan jangan mengekspos server ke internet.",
    "footer.tagline": "Manajemen kelas original untuk lab komputer. Dibuat dengan Python, PySide6, dan asyncio.",
    "footer.product": "Produk",
    "footer.docs": "Dokumentasi",
    "footer.websiteRepo": "Repositori situs",
    "footer.issues": "Laporan masalah",
    "footer.security": "Keamanan",
    "footer.licenseTitle": "Lisensi",
    "footer.license": "MIT License. Bebas dipakai, diubah, dan didistribusikan dengan tetap menyertakan pemberitahuan hak cipta.",
    "footer.copy": "© 2026 NetDQM contributors.",
    "lightbox.close": "Tutup",
    "lightbox.previous": "Gambar sebelumnya",
    "lightbox.next": "Gambar berikutnya",
    "toast.language.id": "Bahasa Indonesia dipilih",
    "toast.language.en": "English selected",
    "toast.theme.dark": "Tema gelap diaktifkan",
    "toast.theme.light": "Tema terang diaktifkan"
  },
  en: {
    "meta.title": "NetDQM — Original Classroom Management for Computer Labs",
    "meta.description": "NetDQM is original classroom management software for computer labs: live student screens, remote control, screen broadcast, chat, file transfer, quizzes, and attendance. Free, open source, MIT.",
    "page.home.title": "NetDQM — Original Classroom Management for Computer Labs",
    "page.features.title": "Features — NetDQM",
    "page.screens.title": "Screenshots — NetDQM",
    "page.download.title": "Download — NetDQM",
    "page.start.title": "Get Started — NetDQM",
    "page.tutorial.title": "Usage Guide — NetDQM",
    "guide.hero.eyebrow": "Usage guide",
    "guide.hero.title": "Start managing your classroom with NetDQM",
    "guide.hero.lead": "Follow this short guide to prepare the server, connect the teacher console and student agents, then use the main features during class.",
    "guide.hero.cta1": "Choose an installer or portable build",
    "guide.hero.cta2": "Read the full Windows tutorial",
    "guide.toc.aria": "Guide contents",
    "skip": "Skip to content",
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.screens": "Screenshots",
    "nav.download": "Download",
    "nav.start": "Get started",
    "nav.tutorial": "Usage guide",
    "nav.menu": "Menu",
    "nav.open": "Open navigation menu",
    "nav.close": "Close navigation menu",
    "nav.aria": "Main navigation",
    "lang.label": "Language",
    "hero.eyebrow": "Original classroom management",
    "hero.title1": "Your computer lab",
    "hero.title2": "under control.",
    "hero.lead": "Watch student screens, control computers, broadcast lessons, send files, run quizzes, and record attendance — all from one teacher console. Built from scratch for Windows and Linux.",
    "hero.cta1": "Download NetDQM",
    "hero.cta2": "Usage tutorial",
    "hero.badge1": "Windows 10/11",
    "hero.badge2": "Linux server",
    "hero.badge3": "MIT License",
    "hero.badge4": "No telemetry",
    "hero.float1": "no internet",
    "hero.float2": "TCP port",
    "server.label": "Example lab server address",
    "server.note": "This is only an example. Replace it with the IP address of your lab server. The address is reachable only from the managed lab network; never expose the server port to the internet.",
    "server.link": "How to connect →",
    "features.eyebrow": "One console for the whole class",
    "features.title": "Features that actually get used in a lab",
    "features.lead": "Designed for teachers, not network administrators. Every connection goes through the lab server, and quiz answer keys stay on the server.",
    "features.monitor.title": "Live monitoring",
    "features.monitor.desc": "Student thumbnails refresh continuously. Search by name, user, or IP, then select one student or many.",
    "features.remote.title": "Remote control",
    "features.remote.desc": "View the full screen, control mouse and keyboard, pick a monitor, adjust FPS/quality, take a snapshot, or record a session.",
    "features.broadcast.title": "Teacher screen broadcast",
    "features.broadcast.desc": "Show the teacher screen as a full overlay on every student or only selected ones, with monitor, FPS, and quality controls.",
    "features.chat.title": "Chat and file transfer",
    "features.chat.desc": "Chat with the whole class or one student. Send files both ways; students can also submit assignments to the teacher computer.",
    "features.quiz.title": "Quizzes and attendance",
    "features.quiz.desc": "Create multiple-choice quizzes, start them from the console, watch answers arrive, and get automatic scores. Daily attendance exports to CSV.",
    "features.secure.title": "Secure and self-contained",
    "features.secure.desc": "HMAC-SHA256 authentication, no plaintext passwords, optional TLS, SQLite audit logs, and centralized updates verified with SHA-256.",
    "screens.eyebrow": "Inside the application",
    "screens.title": "See it before you install",
    "screens.lead": "The screenshots below use synthetic demo data. No real student data is shown.",
    "screens.console.title": "Teacher console",
    "screens.console.caption": "Monitor the whole class, select students, and send commands from the toolbar.",
    "screens.remote.title": "Remote view",
    "screens.remote.caption": "Control mouse/keyboard, choose a monitor, record a session, or take a snapshot.",
    "screens.quiz.title": "Quiz manager",
    "screens.quiz.caption": "Quiz library, question editor, and live student answer monitor.",
    "screens.attendance.title": "Daily attendance",
    "screens.attendance.caption": "First/last seen, duration, sessions, online status, and CSV export.",
    "screens.note": "Click an image to enlarge it. The exact look may vary slightly by Windows version and theme.",
    "dl.eyebrow": "Official releases",
    "dl.title": "Download NetDQM",
    "dl.lead": "Choose the role for each computer. The Windows installer is easiest; portable packages need no installation. The Linux server installs from source with a systemd script.",
    "dl.version": "Version 1.0.4 includes the refreshed Console UI with interactive student cards, activity log, and notifications.",
    "dl.windows": "Windows x64",
    "dl.serverTag": "Linux / Windows",
    "dl.agent.title": "Student Agent",
    "dl.agent.desc": "Runs on every student computer as a tray icon. Connects to the server, sends thumbnails, and receives teacher commands.",
    "dl.agent.note": "Autostart can be enabled during installation or from the agent Settings window.",
    "dl.console.title": "Teacher Console",
    "dl.console.desc": "The teacher application for monitoring, controlling, teaching, and grading. One console connects to one room.",
    "dl.console.note": "Requires the same server address, port, password, and room name as the agents.",
    "dl.server.title": "Server",
    "dl.server.desc": "Connection hub, SQLite database, quizzes, attendance, and update distribution. One server can serve many rooms.",
    "dl.server.note": "The Linux package includes a systemd installer script. A Windows server is optional for testing or small labs.",
    "dl.windowsInstaller": "Windows installer",
    "dl.portable": "Portable ZIP",
    "dl.linuxSource": "Linux (tar.gz)",
    "dl.checksums": "SHA-256 checksums",
    "dl.releases": "All releases",
    "dl.guide": "Download guide",
    "dl.smartscreen.title": "Executables are not code-signed",
    "dl.smartscreen.text": "Windows SmartScreen may warn you the first time you open a file. Click <em>More info</em> and then <em>Run anyway</em> only if the file came from the official NetDQM release. Compare checksums with SHA256SUMS.txt if unsure.",
    "start.eyebrow": "In three steps",
    "start.title": "Start your first class",
    "start.lead": "Set up the server on one computer, install the console on the teacher computer, then install the agent on every student computer. All of them must be on the same lab network.",
    "start.step1.title": "Prepare the server",
    "start.step1.desc": "On Linux, extract the package and run the installer. It creates the system user, virtual environment, configuration, and systemd service.",
    "start.step1.windows": "On Windows: run the server installer, then open <strong>NetDQM Server</strong> from the Start Menu. The installer adds the TCP 47800 firewall rule.",
    "start.step2.title": "Connect the teacher console",
    "start.step2.desc": "Install the console, open it, then fill in the server address, port, password, teacher name, and room.",
    "start.step2.note": "Click <strong>Connect</strong>. Student cards appear as agents connect.",
    "start.step3.title": "Install the student agent",
    "start.step3.desc": "Install the agent on every student computer. Open the NetDQM tray icon, choose <strong>Settings</strong>, and enter the same address.",
    "start.step3.note": "Enable <strong>Run automatically at login</strong> so the agent reconnects whenever the computer starts.",
    "start.tip": "<strong>Test one lab first.</strong> Make sure the server uses a static IP or DHCP reservation before rolling out to every room. The default port is TCP 47800.",
    "security.eyebrow": "Built for the lab network",
    "security.title": "Security that makes sense",
    "security.lead": "NetDQM has no backdoor, telemetry, or third-party connections. Control stays with the lab operator.",
    "security.auth.title": "Challenge/response authentication",
    "security.auth.desc": "Passwords are never sent in plaintext. Server and client prove identity with HMAC-SHA256; TLS is available for untrusted networks.",
    "security.answers.title": "Answer keys stay on the server",
    "security.answers.desc": "Agents receive only questions and choices. Grading happens on the server, so students cannot read correct answers from the app.",
    "security.privacy.title": "No telemetry",
    "security.privacy.desc": "No data is sent to third parties. Databases, logs, recordings, and configuration stay on your own server and client computers.",
    "security.lan.title": "LAN only",
    "security.lan.desc": "Run the server on a managed classroom network, restrict port 47800 with a firewall, and never expose it to the internet.",
    "guide.content": `
        <section id="persiapan">
          <h2>1. Prepare the lab network</h2>
          <p>NetDQM consists of one <strong>server</strong>, one teacher console, and an agent on each student computer. All of them must be able to communicate over the same local network. The default port is <strong>TCP 47800</strong>.</p>
          <div class="guide-callout">Use a static IP address or DHCP reservation for the server. The example address in this guide is <code>192.168.1.10</code>; replace it with your server address. Do not expose the server port directly to the internet.</div>
          <p>Download the Windows installer for a normal installation. To try it without installing, download the portable ZIP, extract it to a permanent folder, and run the application file inside. Windows computers do not need Python.</p>
        </section>
        <section id="server">
          <h2>2. Run the server</h2>
          <h3>Linux server</h3>
          <p>Extract the Linux server package and run the installer. The installer sets up the systemd service and configuration, then asks for the server password.</p>
          <pre><code>tar -xzf NetDQM-Server-linux-x64.tar.gz
cd NetDQM-Server-*
sudo ./install-server.sh</code></pre>
          <p>To check the service, run <code>systemctl status netdqm-server</code>. The firewall must allow TCP 47800 from the lab subnet.</p>
          <h3>Windows server</h3>
          <p>Run the Server installer, then open <strong>NetDQM Server</strong> from the Start Menu. On first use, create the server password. The installer adds the TCP 47800 firewall rule.</p>
          <p>Leave the server window running during class. Store the password safely; the teacher console and agents must use the same password.</p>
        </section>
        <section id="konsol">
          <h2>3. Connect the teacher console</h2>
          <ol>
            <li>Install or extract <strong>NetDQM Console</strong> on the teacher computer, then run the application.</li>
            <li>Enter the server address and port <code>47800</code>.</li>
            <li>Enter the server password, teacher name, and room ID, for example <code>LAB-A</code>.</li>
            <li>Click <strong>Connect</strong>. Student computer cards appear after agents connect.</li>
          </ol>
          <p>The room name must match on the server, console, and every agent that should join that class.</p>
        </section>
        <section id="agent">
          <h2>4. Connect student computers</h2>
          <ol>
            <li>Install or extract <strong>NetDQM Agent</strong> on every student computer.</li>
            <li>Run the agent, then open the NetDQM icon in the notification area and choose <strong>Settings</strong>.</li>
            <li>Enter the server address, port, password, computer name, and the same room as the console.</li>
            <li>Save the settings. Enable autostart so the agent runs when the student signs in to Windows.</li>
          </ol>
          <p>If the tray icon is not visible, check the hidden icons in the taskbar or use the agent control window.</p>
        </section>
        <section id="fitur">
          <h2>5. Use classroom features</h2>
          <table class="guide-table">
            <thead><tr><th>Feature</th><th>How to start</th></tr></thead>
            <tbody>
              <tr><td>Select students</td><td>Click a student card. Use Ctrl+click to select multiple students or the search box to find a computer.</td></tr>
              <tr><td>View screen</td><td>Double-click a card or choose <strong>Remote &amp; Monitor</strong>. Enable input control only when needed.</td></tr>
              <tr><td>Screen broadcast</td><td>Choose <strong>Screen Broadcast</strong>, select the whole class or selected students, then start the broadcast.</td></tr>
              <tr><td>Chat and files</td><td>Use the Chat tab to send messages. Select students and use <strong>Send File</strong> to share teaching materials.</td></tr>
              <tr><td>Lock or blank</td><td>Select computers and use Lock Screen or Blank. Remove the lock after the activity ends.</td></tr>
              <tr><td>Quizzes</td><td>Open <strong>Manage Quizzes</strong>, create multiple-choice questions, save, then start the quiz and monitor answers.</td></tr>
              <tr><td>Attendance</td><td>Open <strong>Attendance</strong> to view attendance and export the list to CSV.</td></tr>
            </tbody>
          </table>
          <div class="guide-callout">Test connections, chat, a small file, and one quiz on a few computers before installing agents across the whole lab. Tell students before using screen control or power actions.</div>
        </section>
        <section id="troubleshooting">
          <h2>6. If student computers do not appear</h2>
          <ul>
            <li>Make sure the server is running and reachable from the lab network.</li>
            <li>Make sure the firewall allows TCP 47800.</li>
            <li>Match the server address, password, and room name on every computer.</li>
            <li>Restart the agent after changing settings.</li>
            <li>Check the download guide for checksum verification and installation help.</li>
          </ul>
          <div class="hero-actions">
            <a class="btn btn-ghost" href="https://github.com/azzambayanhaq/netdqm-website/blob/main/DOWNLOAD.md">Download and installation guide</a>
            <a class="btn btn-ghost" href="https://github.com/azzambayanhaq/netdqm-website/blob/main/TUTORIAL-WINDOWS.md">Full Windows tutorial</a>
          </div>
        </section>
      `,
    "guide.toc": `
        <strong>In this guide</strong>
        <a href="#persiapan">Network preparation</a>
        <a href="#server">Run the server</a>
        <a href="#konsol">Connect the console</a>
        <a href="#agent">Connect student agents</a>
        <a href="#fitur">Classroom features</a>
        <a href="#troubleshooting">Troubleshooting</a>
      `,
    "footer.tagline": "Original classroom management for computer labs. Built with Python, PySide6, and asyncio.",
    "footer.product": "Product",
    "footer.docs": "Documentation",
    "footer.websiteRepo": "Site repository",
    "footer.issues": "Report an issue",
    "footer.security": "Security",
    "footer.licenseTitle": "License",
    "footer.license": "MIT License. Free to use, modify, and distribute with the copyright notice preserved.",
    "footer.copy": "© 2026 NetDQM contributors.",
    "lightbox.close": "Close",
    "lightbox.previous": "Previous screenshot",
    "lightbox.next": "Next screenshot",
    "toast.language.id": "Bahasa Indonesia selected",
    "toast.language.en": "English selected",
    "toast.theme.dark": "Dark theme enabled",
    "toast.theme.light": "Light theme enabled"
  }
};

const STORAGE_KEY = "netdqm.lang";
let currentLang = "id";
let lightboxCaptionKey = "";
let lastFocused = null;
let previousBodyOverflow = "";
let currentShotIndex = -1;
let shotButtons = [];
let toastTimer = 0;
let languageTimer = 0;

function detectLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") return stored;
  } catch (error) {
    /* localStorage can be unavailable in private or file:// contexts */
  }
  return (navigator.language || "id").toLowerCase().startsWith("en") ? "en" : "id";
}

function translate(key) {
  const dict = I18N[currentLang] || I18N.id;
  return dict[key] || I18N.id[key] || key;
}

function showToast(message) {
  if (!message) return;
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.className = "site-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.setAttribute("aria-atomic", "true");
    document.body.append(toast);
  }
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.setAttribute("aria-hidden", "false");
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    toast.setAttribute("aria-hidden", "true");
  }, 2600);
}
window.netdqmToast = showToast;

function updateMobileNavButton(button, expanded) {
  const key = expanded ? "nav.close" : "nav.open";
  button.setAttribute("aria-expanded", expanded ? "true" : "false");
  button.setAttribute("aria-label", translate(key));
  button.setAttribute("title", translate(key));
  button.setAttribute("data-i18n-label", key);
  const label = button.querySelector("span");
  if (label) label.textContent = translate(expanded ? "nav.close" : "nav.menu");
}

function applyLanguage(lang, announce = false) {
  currentLang = I18N[lang] ? lang : "id";
  const dict = I18N[currentLang];
  document.documentElement.classList.add("is-language-changing");
  window.clearTimeout(languageTimer);
  languageTimer = window.setTimeout(
    () => document.documentElement.classList.remove("is-language-changing"),
    220
  );

  document.documentElement.lang = currentLang;
  const pageTitleKey = document.body ? document.body.getAttribute("data-page-title") : "";
  const pageTitle = pageTitleKey ? dict[pageTitleKey] : "";
  document.title = pageTitle || dict["meta.title"];

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", dict["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dict[key]) element.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");
    if (!element.dataset.i18nHtmlOriginal) {
      element.dataset.i18nHtmlOriginal = element.innerHTML;
    }
    element.innerHTML = dict[key] || element.dataset.i18nHtmlOriginal;
  });

  document.querySelectorAll("[data-i18n-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-label");
    if (dict[key]) {
      element.setAttribute("aria-label", dict[key]);
      if (element.hasAttribute("title")) element.setAttribute("title", dict[key]);
    }
  });

  document.querySelectorAll(".lang button").forEach((button) => {
    const active = button.getAttribute("data-lang") === currentLang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  document.querySelectorAll("[data-nav-toggle]").forEach((button) => {
    updateMobileNavButton(button, button.getAttribute("aria-expanded") === "true");
  });

  window.dispatchEvent(new CustomEvent("netdqm:languagechange", { detail: { lang: currentLang } }));
  if (lightboxCaptionKey) {
    const caption = translate(lightboxCaptionKey);
    const captionNode = document.getElementById("lightbox-caption");
    const image = document.getElementById("lightbox-image");
    if (captionNode) captionNode.textContent = caption;
    if (image && shotButtons[currentShotIndex]) {
      const thumbnail = shotButtons[currentShotIndex].querySelector("img");
      if (thumbnail) image.alt = thumbnail.alt;
    }
  }

  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch (error) {
    /* ignore unavailable storage */
  }
  if (announce) showToast(translate("toast.language." + currentLang));
}

function setupLanguage() {
  document.querySelectorAll(".lang button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.getAttribute("data-lang"), true));
  });
  applyLanguage(detectLang());
}

function setupMobileNavigation() {
  const button = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("site-navigation");
  if (!button || !nav) return;

  const closeMenu = (restoreFocus = false) => {
    nav.classList.remove("is-open");
    updateMobileNavButton(button, false);
    if (restoreFocus) button.focus();
  };
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else {
      nav.classList.add("is-open");
      updateMobileNavButton(button, true);
      nav.querySelector("a")?.focus({ preventScroll: true });
    }
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      closeMenu(true);
    }
  });
  window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}

function setupScrollReveal() {
  const targets = document.querySelectorAll(
    ".hero-copy, .hero-visual, .server-strip, .feature-card, .shot-card, .download-card, .security-item, .steps > li, .guide-content section, .notice"
  );
  if (!targets.length) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("has-reveal");
  targets.forEach((element, index) => {
    element.setAttribute("data-reveal", "");
    element.style.setProperty("--reveal-delay", String(Math.min(index % 4, 3) * 55) + "ms");
  });
  if (reducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((element) => element.classList.add("is-revealed"));
    return;
  }
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -28px 0px" });
  targets.forEach((element) => observer.observe(element));
}

function setupHeroMotion() {
  const visual = document.querySelector(".hero-visual");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!visual || reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;
  let frame = 0;
  visual.addEventListener("pointermove", (event) => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const bounds = visual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      visual.style.setProperty("--pointer-x", String((x * 5).toFixed(2)) + "px");
      visual.style.setProperty("--pointer-y", String((y * 5).toFixed(2)) + "px");
      frame = 0;
    });
  }, { passive: true });
  visual.addEventListener("pointerleave", () => {
    if (frame) cancelAnimationFrame(frame);
    visual.style.setProperty("--pointer-x", "0px");
    visual.style.setProperty("--pointer-y", "0px");
    frame = 0;
  }, { passive: true });
}

function showLightboxShot(index) {
  if (!shotButtons.length) return;
  currentShotIndex = (index + shotButtons.length) % shotButtons.length;
  const button = shotButtons[currentShotIndex];
  const thumbnail = button.querySelector("img");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  if (!image || !caption || !thumbnail) return;

  lightboxCaptionKey = button.getAttribute("data-caption") || "";
  image.src = button.getAttribute("data-full") || thumbnail.currentSrc || thumbnail.src;
  image.alt = thumbnail.alt;
  caption.textContent = translate(lightboxCaptionKey);

  [-1, 1].forEach((offset) => {
    const next = shotButtons[(currentShotIndex + offset + shotButtons.length) % shotButtons.length];
    const preload = new Image();
    preload.src = next.getAttribute("data-full") || "";
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  lastFocused = document.activeElement;
  previousBodyOverflow = document.body.style.overflow;
  showLightboxShot(index);
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lightbox-close")?.focus();
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  lightboxCaptionKey = "";
  currentShotIndex = -1;
  document.body.style.overflow = previousBodyOverflow;
  if (image) image.src = "";
  if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
}

function setupLightbox() {
  shotButtons = Array.from(document.querySelectorAll(".shot"));
  shotButtons.forEach((button, index) => {
    button.setAttribute("title", translate(button.getAttribute("data-caption") || ""));
    button.setAttribute("aria-haspopup", "dialog");
    button.addEventListener("click", () => openLightbox(index));
  });

  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  lightbox.querySelector("[data-lightbox-prev]")?.addEventListener("click", () => showLightboxShot(currentShotIndex - 1));
  lightbox.querySelector("[data-lightbox-next]")?.addEventListener("click", () => showLightboxShot(currentShotIndex + 1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showLightboxShot(currentShotIndex - 1);
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showLightboxShot(currentShotIndex + 1);
      return;
    }
    if (event.key === "Tab") {
      const controls = Array.from(lightbox.querySelectorAll("button:not([disabled])"));
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupLanguage();
  setupMobileNavigation();
  setupScrollReveal();
  setupHeroMotion();
  setupLightbox();
});
