import React from 'react';
import bgFirstSection from '../assets/images/bg-first-upscaled.png';
import MockupGroup from '../assets/images/mockup-group.png';
import WorldImg from '../assets/images/world.png';
import { FaCheck } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Home = () => {
  const gradientOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    // width: '100%',
    // height: '100%',
    background: 'linear-gradient(to top, rgba(255, 133, 38, 1) 0%, rgba(255, 165, 0, 0) 50%)',
  };

  const backgroundImageStyle = {
    // width: '100%',
    height: 'auto',
  };

  return (
    <>
      {/* SECTION 1 */}
      <div className="relative w-full">
        <div style={gradientOverlayStyle} className='flex flex-col items-start justify-start px-20 h-full w-full'>
          <div className='flex flex-col space-y-5 text-9xl font-extrabold mt-[17%] text-white w-full'>
            <span style={{ filter: 'drop-shadow(0 7px 7px rgb(0 0 0 / 0.4)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))'}}>Improve</span>
            <span style={{ filter: 'drop-shadow(0 7px 7px rgb(0 0 0 / 0.4)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))'}}>Your Foreign</span>
            <span style={{ filter: 'drop-shadow(0 7px 7px rgb(0 0 0 / 0.4)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))'}}>Language Skill</span>
          </div>
          <div className='z-10 mt-5'>
            <button className='px-6 py-3 bg-[#FF8526] hover:bg-[#E16C00] border-4 rounded-full text-3xl font-bold text-white cursor-pointer transition-all duration-300'>Download</button>
          </div>
        </div>
        <img src={bgFirstSection} alt="" style={backgroundImageStyle} />
      </div>

      {/* SECTION 2 */}
      <div className='w-full h-[800px] bg-[#FF8526] px-20'>
        <div className='flex flex-row justify-between'>
          <div className='mt-20 flex flex-row gap-4'>
            <img src={MockupGroup} alt="" className='h-[30rem]' />
            <span className=' w-96 text-3xl font-bold mt-[50px] text-white'>Selamat datang di dunia baru pembelajaran bahasa asing dengan karakter virtual kami! Temukan pengalaman belajar yang seru dan interaktif bersama teman-teman virtual yang penuh energi. Tingkatkan kemampuan bahasa asing Anda dengan petualangan yang tak terlupakan.</span>
          </div>
          <img src={WorldImg} alt="" className='absolute right-[3.5rem] -mt-20 h-[40rem]' />
        </div>
      </div>

      {/* SECTION 3 */}
      <div className='h-[1200px] bg-gradient-to-b from-[#FF8526] to-[#26B4C7] px-20'>
        <div className='flex items-center flex-col gap-[70px] pb-10 mb-10'>
          <span className='text-7xl font-extrabold mt-20 text-center text-white' style={{ filter: 'drop-shadow(0 7px 7px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))'}}>Choose Your Pricing Plan</span>
          <div className='flex justify-between w-full gap-5 h-max'>
            {/* FREE PLAN */}
            <div className='flex flex-col gap-5 w-full'>
              <span className='bg-white py-6 text-5xl font-extrabold rounded-3xl text-[#CC721E] text-center'>FREE</span>
              <div className='p-8 w-full flex flex-col gap-4 justify-between rounded-3xl h-full' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                <div>
                  <span className='flex flex-row text-[#CC721E] text-center justify-center'>
                    <span className='flex items-start justify-start mt-2'>Rp</span>
                    <span className='text-5xl py-5 font-bold'>0,00</span>
                    <span className='flex items-end justify-end mb-5'>/bulan</span>
                  </span>
                  <div className='flex flex-col gap-2 items-start justify-start'>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Sistem Level</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Interaksi Karakter Virtual</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Periksa Pengucapan</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Rekaman dan Koreksi di Akhir</span>
                    </span>
                  </div>
                </div>
                <button className='w-full py-3 hover:bg-[#B2641A] transition-all duration-300 rounded-xl bg-[#CC721E] text-white font-semibold text-xl'>
                  Choose Plan
                </button>
              </div>
            </div>

            <div className='flex flex-col gap-5 w-full'>
              <span className='bg-white py-6 text-5xl font-extrabold rounded-3xl text-[#CC721E] text-center'>PLAN A</span>
              <div className='p-8 w-full flex flex-col justify-between gap-4 rounded-3xl h-full' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                <div>
                  <span className='flex flex-row text-[#CC721E] text-center justify-center'>
                    <span className='flex items-start justify-start mt-2'>Rp</span>
                    <span className='text-5xl py-5 font-bold'>20.000,00</span>
                    <span className='flex items-end justify-end mb-5'>/bulan</span>
                  </span>
                  <div className='flex flex-col gap-2 items-start justify-start'>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Sistem Level</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Interaksi Karakter Virtual</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Periksa Pengucapan</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Rekaman dan Koreksi di Akhir</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Opsi Jawaban</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Subtitle</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Chatbot</span>
                    </span>
                  </div>
                </div>
                <button className='w-full py-3 hover:bg-[#B2641A] transition-all duration-300 rounded-xl bg-[#CC721E] text-white font-semibold text-xl'>
                  Choose Plan
                </button>
              </div>
            </div>

            <div className='flex flex-col gap-5 w-full'>
              <span className='bg-white py-6 text-5xl font-extrabold rounded-3xl text-[#CC721E] text-center'>PLAN B</span>
              <div className='p-8 w-full flex flex-col justify-between gap-4 rounded-3xl h-full' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                <div>
                  <span className='flex flex-row text-[#CC721E] text-center justify-center'>
                    <span className='flex items-start justify-start mt-2'>Rp</span>
                    <span className='text-5xl py-5 font-bold'>50.000,00</span>
                    <span className='flex items-end justify-end mb-5'>/bulan</span>
                  </span>
                  <div className='flex flex-col gap-2 items-start justify-start'>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Sistem Level</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Interaksi Karakter Virtual</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Periksa Pengucapan</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Rekaman dan Koreksi di Akhir</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Opsi Jawaban</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Subtitle</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Chatbot</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Latihan Listening dan Writing</span>
                    </span>
                  </div>
                </div>
                <button className='w-full py-3 hover:bg-[#B2641A] transition-all duration-300 rounded-xl bg-[#CC721E] text-white font-semibold text-xl'>
                  Choose Plan
                </button>
              </div>
            </div>

            <div className='flex flex-col gap-5 w-full'>
              <span className='bg-white py-6 text-5xl font-extrabold rounded-3xl text-[#CC721E] text-center'>PLAN C</span>
              <div className='p-8 w-full flex flex-col justify-between gap-4 rounded-3xl h-full' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                <div>
                  <span className='flex flex-row text-[#CC721E] text-center justify-center'>
                    <span className='flex items-start justify-start mt-2'>Rp</span>
                    <span className='text-5xl py-5 font-bold'>100.000,00</span>
                    <span className='flex items-end justify-end mb-5'>/bulan</span>
                  </span>
                  <div className='flex flex-col gap-2 items-start justify-start'>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Sistem Level</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Interaksi Karakter Virtual</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Periksa Pengucapan</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Rekaman dan Koreksi di Akhir</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Opsi Jawaban</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Subtitle</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Chatbot</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Latihan Listening dan Writing</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Bebas Ngobrol</span>
                    </span>
                    <span>
                      <FaCheck className='inline-block mr-3 text-xl text-[#CC721E]' />
                      <span style={{ color: 'rgba(0, 0, 0, 0.57)'}} className='font-bold text-xl'>Kustomisasi Karakter</span>
                    </span>
                  </div>
                </div>
                <button className='w-full py-3 hover:bg-[#B2641A] transition-all duration-300 rounded-xl bg-[#CC721E] text-white font-semibold text-xl'>
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <span className='flex items-center justify-center text-white text-9xl font-normal'>beecara</span>

        <Helmet>
          <title>Home | aibeecara</title>
        </Helmet>
      </div>
    </>
  );
}

export default Home;
