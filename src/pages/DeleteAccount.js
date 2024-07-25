// src/pages/DeleteAccount.js
import React from 'react';

const DeleteAccount = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Penghapusan Akun dan Data Terkait</h1>
      <p>Nama Aplikasi: <strong>aibeecara</strong></p>

      <h2 className="text-2xl font-semibold mt-6">Langkah-langkah untuk Menghapus Akun:</h2>
      <ol className="list-decimal ml-6 mt-2">
        <li>Buka aplikasi aibeecara.</li>
        <li>Masuk ke bagian "Profil".</li>
        <li>Pilih opsi "Hapus Akun".</li>
        <li>Ikuti instruksi yang diberikan untuk mengonfirmasi penghapusan akun Anda.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6">Jenis Data yang Dihapus:</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Informasi profil pengguna (nama, email, dll.)</li>
        <li>Data percakapan dengan karakter AI</li>
        <li>Data aktivitas pengguna</li>
        <li>Data yang disimpan di Firebase Firestore</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Jenis Data yang Disimpan:</h2>
      <p>Data yang terkait dengan keperluan hukum atau audit akan disimpan sesuai dengan kebijakan retensi data kami.</p>

      <h2 className="text-2xl font-semibold mt-6">Periode Retensi Data:</h2>
      <p>Data yang tidak dihapus segera akan disimpan selama 30 hari sebelum dihapus permanen.</p>

      <p className="mt-6">Jika Anda memiliki pertanyaan lebih lanjut, silakan hubungi kami di <a href="mailto:support@aibeecara.id" className="text-blue-500">support@aibeecara.id</a>.</p>
    </div>
  );
};

export default DeleteAccount;