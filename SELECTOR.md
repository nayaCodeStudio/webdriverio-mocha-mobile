### SOP untuk Penulisan ID pada Element Selector di Aplikasi Mobile

#### 1. Tujuan
Tujuan dari SOP ini adalah untuk menetapkan standar dalam penulisan ID pada elemen-elemen di aplikasi mobile. Hal ini bertujuan untuk memudahkan QA Engineer dalam pembuatan skrip otomatisasi serta meningkatkan konsistensi dan keterbacaan kode.

#### 2. Standar Penulisan ID
- **Nama ID harus deskriptif**: Nama ID harus mencerminkan fungsi atau tujuan dari elemen yang diidentifikasi.
- **Konsistensi**: Gunakan format penamaan ID yang konsisten di seluruh aplikasi.
- **Unik**: Pastikan setiap ID adalah unik di dalam halaman atau layar yang sama.
- **Tidak Mengandung Spasi atau Karakter Khusus**: Hindari penggunaan spasi atau karakter khusus dalam penamaan ID.
- **Pendek dan Jelas**: ID sebaiknya pendek tetapi jelas untuk memudahkan penggunaan.

#### 3. Contoh Penulisan ID
Berikut adalah beberapa contoh penulisan ID untuk elemen-elemen umum di aplikasi mobile:

- **Button**:
  - ID: `btnSubmit`
  - Deskripsi: Tombol untuk mengirimkan data.

- **EditText**:
  - ID: `txtUsername`
  - Deskripsi: Kolom input untuk memasukkan nama pengguna.

- **ImageView**:
  - ID: `imgProfile`
  - Deskripsi: Gambar profil pengguna.

#### 4. Implementasi dalam Kode
```java
// Contoh penggunaan ID pada pengujian otomatisasi dengan Katalon Studio

// Klik tombol Submit
Mobile.tap(findTestObject('Object Repository/Android/btnSubmit'))

// Masukkan nama pengguna
Mobile.setText(findTestObject('Object Repository/Android/txtUsername'), 'username123')

// Verifikasi gambar profil
Mobile.verifyElementPresent(findTestObject('Object Repository/Android/imgProfile'))
```

#### 5. Langkah-langkah Tambahan
- Pengembang harus memastikan bahwa ID ditambahkan secara konsisten saat merancang atau memodifikasi tata letak UI.
- QA Engineer harus memverifikasi keunikan dan deskriptivitas ID sebelum menggunakan dalam skrip otomatisasi.
- Jika diperlukan, revisi SOP ini harus dilakukan dengan konsultasi antara pengembang dan QA Engineer.

#### 6. Referensi
- Katalon Studio Documentation: [https://docs.katalon.com/katalon-studio/docs/mobile-testing.html](https://docs.katalon.com/katalon-studio/docs/mobile-testing.html)
- Android Developer Documentation: [https://developer.android.com/guide/topics/ui/declaring-layout](https://developer.android.com/guide/topics/ui/declaring-layout)

#### 7. Peninjauan SOP
SOP ini akan direview secara berkala setiap enam bulan untuk memastikan kesesuaian dan ketersediaan informasi terbaru.

#### 8. Persetujuan
SOP ini telah disetujui oleh tim pengembang dan QA Engineer pada tanggal [tanggal persetujuan].
