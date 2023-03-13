import React, { useEffect } from 'react'
import brain from '@/Assets/img/brain.png'
import video from '@/Assets/img/video.png'
import abuse from '@/Assets/img/abuse.png'
import deppresi from '@/Assets/img/depression.png'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Article() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <section id='article' className='w-screen'>
      <div className='bagian flex-col bg-white' >
        <h1 className='tagline' data-aos="fade-down">WASPADAI</h1>
        <h2 className='text-xl text-highlight' data-aos="fade-up">DAMPAK PORNOGRAFI PADA REMAJA</h2>
      </div>
      <div className='bagian bg-[#bae8e8] '>
        <div className='w-96 flex flex-col justify-end lg:scale-110 ' data-aos="fade-right">
          <p className='font-semibold text-sm'>Dampak pertama</p>
          <h1 className='text-[#ff6e6c] text-5xl font-bold font-serif mb-5'>Kerusakan Otak</h1>
          <p className='font-light text-lg'>Menyebabkab beberapa kerusakan di bagian otak terutama pada bagian Gyrus insula, labus frontal, nuckeus accumbens putamen, cingulated, dan cerebellum.</p>
        </div>
        <div className='w-[50vh] lg:scale-110 lg:ml-14' data-aos="fade-left">
          <img src={brain} alt="brain" className='' />
        </div>
      </div>
      <div className='bagian bg-white'>
        <div className='w-[50vh]'>
          <img src={abuse} alt="brain" className='' data-aos="fade-right"/>
        </div>
        <div className='w-96 flex flex-col justify-start' data-aos="fade-left">
          <p className='font-semibold text-sm'>Dampak kedua</p>
          <h1 className='text-[#ff6e6c] text-5xl font-bold font-serif mb-5'>Penyimpangan Perilaku</h1>
          <p className='font-light text-lg'>Memiliki kecenderungan penyimpangan perilaku seperti pelecehan seksual.</p>
        </div>
      </div>
      <div className='bagian bg-orange-200'>
        <div className='w-96 flex flex-col justify-start' data-aos="fade-right">
          <p className='font-semibold text-sm'>Dampak ketiga</p>
          <h1 className='text-[#ff6e6c] text-5xl font-bold font-serif mb-5'>Terjerat Bisnis Pornografi</h1>
          <p className='font-light text-lg'>Anak saat merasa bosan, kesepian, marah, tertekan, dan lelah lebih mudah terjerat biisnis pornografi ketika dewasa.</p>
        </div>

        <div className='w-[50vh]' data-aos="fade-left">
          <img src={video} alt="brain" className='' />
        </div>
      </div>
      
      <div className='bagian bg-slate-50'>
        <div className='w-[50vh]' data-aos="fade-right">
          <img src={deppresi} alt="brain" className='' />
        </div>
        <div className='w-96 flex flex-col justify-start' data-aos="fade-left">
          <p className='font-semibold text-sm'>Dampak keempat</p>
          <h1 className='text-[#ff6e6c] text-5xl font-bold font-serif mb-5'>Penurunan Kinerja</h1>
          <p className='font-light text-lg'>Menjadi sering pelupa, sulit membuat perencanaan dan keputusan, sulit mengendalikan emosi, serta hubungan sosial memburuk.</p>
        </div>
      </div>
    </section>


  )
}
