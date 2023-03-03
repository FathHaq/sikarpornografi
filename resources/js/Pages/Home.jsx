import FormRespondent from '@/Components/Home/FormRespondent';
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react'
import React, { useState } from 'react'

export default function Home(props) {
  console.log(props);

 
  return (
    <>
      <Head title='Home' />
      <main className='w-screen flex flex-col items-center justify-center bg-slate-100 py-20'>
        {/* The button to open modal */}
        <section>
          <div className='bg-slate-700 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-sm rounded-bl-sm px-5 py-3 text-orange-500 text-center'>
            <h1 className='text-5xl font-black'>WASPADAI</h1>
            <h2 className='text-xl'>DAMPAK PORNOGRAFI PADA REMAJA</h2>
          </div>
        </section>

        <section className='w-screen px-10 lg:p-40 text-justify'>
          <div className='my-5 hover:text-right'>
            <h1 className='text-orange-500 text-2xl font-bold '>Kerusakan Otak</h1>
            <p className=' lg:w-96 text-lg'>Menyebabkab beberapa kerusakan di bagian otak terutama pada bagian Gyrus insula, labus frontal, nuckeus accumbens putamen, cingulated, dan cerebellum.</p>
          </div>
          <div className='my-5 hover:text-right'>
            <h1 className='text-orange-500 text-2xl font-bold '>Terjerat Bisnis Pornografi</h1>
            <p className=' lg:w-96 text-lg'>Anak saat merasa bosan, kesepian, marah, tertekan, dan lelah lebih mudah terjerat biisnis pornografi ketika dewasa.</p>
          </div>
          <div className='my-5 hover:text-right'>
            <h1 className='text-orange-500 text-2xl font-bold '>Penyimpangan Perilaku</h1>
            <p className=' lg:w-96 text-lg'>Memiliki kecenderungan penyimpangan perilaku seperti pelecehan seksual.</p>
          </div>
          <div className='my-5 hover:text-right'>
            <h1 className='text-orange-500 text-2xl font-bold '>Penurunan Kinerja</h1>
            <p className=' lg:w-96 text-lg'>Menjadi sering pelupa, sulit membuat perencanaan dan keputusan, sulit mengendalikan emosi, serta hubungan sosial memburuk.</p>
          </div>
        </section>

        <div className='flex flex-col items-center justify-center'>
          <label htmlFor="my-modal-4" className="btn btn-outline btn-error">Cek Tingkat <br /> Kecanduanmu</label>

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
    </>
  )
}
