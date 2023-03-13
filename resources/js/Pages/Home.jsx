import FormRespondent from '@/Components/Home/FormRespondent';
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton';
import Guest from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import Article from '@/Components/Home/Article';

export default function Home(props) {
  const { ref: myRef, inView: visible } = useInView();

  return (
    <Guest>
      <Head title='Home' />
      <main className='bg-slate-200'>
        {/* The button to open modal */}
        <section id='hero' className="hero min-h-screen" style={{ backgroundImage: `url("https://source.unsplash.com/featured")` }} >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="flex flex-col items-center">
              <h1 className="text-8xl font-bold" data-aos="fade-down">SISTEM PAKAR</h1>
              <h2 className="mb-5 text-5xl font-bold" data-aos="flip-left">Terhadap Kecanduan Pornography</h2>
              <p className="mb-5 max-w-md" data-aos="fade-up">Website ini dibangun menggunakan sistem Certainty Factor, dengan data yang diambil dan diolah menggunakan Nilai dari para Pakar di bidangnya.</p>
              <label htmlFor="my-modal-4" className="btn bg-[#ff6e6c] hover:bg-[#d55656]" data-aos="fade-up-right">Mulai Test</label>
            </div>
          </div>
        </section>

        <Article/>

        <div id='mulai' className='h-screen flex flex-col items-center justify-center'>
          <label htmlFor="my-modal-4" className="btn btn-utama">Cek Tingkat <br /> Kecanduanmu</label>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <h3 className="text-lg font-bold">Isi Bio data mu dengan lengkap</h3>
              <FormRespondent umur={props.umur}/>
            </label>
          </label>
        </div>
        <div>
        </div>
      </main>
    </Guest>
  )
}
