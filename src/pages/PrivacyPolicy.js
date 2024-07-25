import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage()

  return (
    <div
      className="relative flex flex-col pt-32 pb-10 items-center justify-center min-h-screen bg-cover bg-center bg-gradient-to-r from-[#FFB526] to-[#FF8E26] font-baloobhaijaan2 px-4 sm:px-6 md:px-8"
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white w-full px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {language === 'EN' ? 'Privacy Policy' : 'Kebijakan Privasi'}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6 text-justify"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {language === 'EN' ? 'Your privacy is important to us. This policy explains how we handle and use your personal data.' : 'Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan mengungkapkan informasi pribadi Anda.'}
        </motion.p>
        <motion.div
          className="text-justify w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">{language === 'EN' ? 'Information We Collect' : 'Informasi yang Kami Kumpulkan'}</h2>
          <p className="mb-4">
            {language === 'EN' ? 'We may collect the following personal information when you use our services:' : 'Kami dapat mengumpulkan informasi pribadi Anda ketika Anda menggunakan layanan kami, sebagai berikut:'}
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>{language === 'EN' ? 'Username' : 'Nama pengguna'}</li>
            <li>{language === 'EN' ? 'Email address' : 'Alamat email'}</li>
            <li>{language === 'EN' ? 'Photo (optional)' : 'Foto (opsional)'}</li>
            <li>{language === 'EN' ? 'User ID' : 'ID Pengguna'}</li>
            <li>{language === 'EN' ? 'Voice data' : 'Data suara'}</li>
            <li>{language === 'EN' ? 'Service usage information' : 'Informasi penggunaan layanan'}</li>
            <li>{language === 'EN' ? 'Transaction data' : 'Data transaksi'}</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4">{language === 'EN' ? 'Use of Information' : 'Penggunaan Informasi'}</h2>
          <p className="mb-4">
            {language === 'EN' ? 'We use your personal information for various purposes, including but not limited to:' : 'Kami menggunakan informasi pribadi Anda untuk berbagai keperluan, termasuk tetapi tidak terbatas pada:'}
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>{language === 'EN' ? 'Providing and managing our services' : 'Memberikan dan mengelola layanan kami'}</li>
            <li>{language === 'EN' ? 'Contacting you for customer service purposes' : 'Menghubungi Anda untuk keperluan layanan pelanggan'}</li>
            <li>{language === 'EN' ? 'Improving and developing our services' : 'Meningkatkan dan mengembangkan layanan kami'}</li>
            <li>{language === 'EN' ? 'Sending marketing and promotional communications' : 'Mengirimkan komunikasi pemasaran dan promosi'}</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">{language === 'EN' ? 'Disclosure of Information' : 'Pengungkapan Informasi'}</h2>
          <p className="mb-4">
            {language === 'EN' ? 'We will not sell, rent, or share your personal information with third parties without your consent, except for the following:' : 'Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda kecuali untuk hal-hal berikut:'}
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>{language === 'EN' ? 'To comply with legal obligations' : 'Untuk mematuhi kewajiban hukum'}</li>
            <li>{language === 'EN' ? 'To protect our rights, property, or safety and those of others' : 'Untuk melindungi hak, properti, atau keselamatan kami atau orang lain'}</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">{language === 'EN' ? 'Information Security' : 'Keamanan Informasi'}</h2>
          <p className="mb-4">
            {language === 'EN' ? 'We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, we cannot guarantee complete security.' : 'Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah, penggunaan, atau pengungkapan. Namun, kami tidak dapat menjamin keamanan sepenuhnya.'}
          </p>

          <h2 className="text-2xl font-bold mb-4">{language === 'EN' ? 'Changes to Privacy Policy' : 'Perubahan pada Kebijakan Privasi'}</h2>
          <p className="mb-4">
            {language === 'EN' ? 'We may update this Privacy Policy from time to time. Any changes will be notified to you via email or on our website.' : 'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diberitahukan kepada Anda melalui email atau pemberitahuan di situs web kami.'}
          </p>

          <h2 className="text-2xl font-bold mb-4">{language === 'EN' ? 'Your Rights' : 'Hak Anda'}</h2>
          <p className="mb-4">
            {language === 'EN' ? 'You have the right to access, correct, or delete your personal information that we hold. You can also object to the use of your personal information for marketing purposes.' : 'Anda memiliki hak untuk mengakses, memperbaiki, atau menghapus informasi pribadi Anda yang kami miliki. Anda juga dapat menolak penggunaan informasi pribadi Anda untuk tujuan pemasaran.'}
          </p>

          <h2 className="text-2xl font-bold mb-4">{language === 'EN' ? 'Contact Us' : 'Kontak Kami'}</h2>
          <p>
            {language === 'EN' ? 'If you have any questions or concerns about this Privacy Policy, please contact us at:' : 'Jika Anda memiliki pertanyaan atau kekhawatiran mengenai Kebijakan Privasi ini, silakan hubungi kami di:'}
            <br />
            aibeecara.id@gmail.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;