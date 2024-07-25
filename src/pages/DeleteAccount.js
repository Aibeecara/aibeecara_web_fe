// src/pages/DeleteAccount.js
import React from 'react'

const DeleteAccount = () => {
	return (
		<div className="relative flex flex-col pt-32 pb-10 items-center justify-center min-h-screen bg-cover bg-center bg-gradient-to-r from-[#FFB526] to-[#FF8E26] font-baloobhaijaan2 px-4 sm:px-6 md:px-8">
			<div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold mb-4 text-center">
					Penghapusan Akun dan Data Terkait
				</h1>
				<p className="text-center mb-6">
					Nama Aplikasi: <strong>aibeecara</strong>
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					Langkah-langkah untuk Menghapus Akun:
				</h2>
				<ol className="list-decimal ml-6 mt-2">
					<li>Buka aplikasi aibeecara.</li>
					<li>Masuk ke bagian "Profil".</li>
					<li>Pilih opsi "Hapus Akun".</li>
					<li>
						Ikuti instruksi yang diberikan untuk mengonfirmasi penghapusan akun
						Anda.
					</li>
				</ol>

				<h2 className="text-2xl font-semibold mt-6">
					Jenis Data yang Dihapus:
				</h2>
				<ul className="list-disc ml-6 mt-2">
					<li>Informasi profil pengguna (nama, email, dll.)</li>
					<li>Data percakapan dengan karakter AI</li>
					<li>Data aktivitas pengguna</li>
					<li>Data yang disimpan di Firebase Firestore</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-6">
					Jenis Data yang Disimpan:
				</h2>
				<p>
					Data yang terkait dengan keperluan hukum atau audit akan disimpan
					sesuai dengan kebijakan retensi data kami.
				</p>

				<h2 className="text-2xl font-semibold mt-6">Periode Retensi Data:</h2>
				<p>
					Data yang tidak dihapus segera akan disimpan selama 30 hari sebelum
					dihapus permanen.
				</p>

				<p className="mt-6 text-center">
					Jika Anda memiliki pertanyaan lebih lanjut, silakan hubungi kami di{' '}
					<a
						href="mailto:aibeecara.id@gmail.com"
						className="text-blue-500 underline"
					>
						aibeecara.id@gmail.com
					</a>
					.
				</p>
			</div>
		</div>
	)
}

export default DeleteAccount
