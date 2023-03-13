import PrimaryButton from '@/Components/PrimaryButton';
import QuestLayout from '@/Layouts/QuestLayout';
import { Head, Link, router } from '@inertiajs/react'
import React, { useState } from 'react'

export default function Congratulation(props) {
  let keterangan = 0;

  if (props.cfCombine < 0.4 ) {
    keterangan = 1;
  } else if (props.cfCombine < 0.8 && props.cfCombine > 0.4  ) {
    keterangan = 2;
  } else {
    keterangan = 3;
  }

  //function "storePost"
  const submit = async (e) => {
      e.preventDefault();
      
      router.post('/hasil', {
          result_id: keterangan,
          cf_value: props.cfCombine
      });
  }

  return (
    <QuestLayout kelas={'-z-50'}>
      <Head title='Congratulation'/>
      <div className=' text-white text-center z-50'>
        <h1 className='font-semibold text-9xl'>Selamat</h1>
        <p className='text-lg'>Anda telah menyelesaikan Quisioner-nya</p>
        {/* <Link href={route('result.show', props.auth.user.id)} className='btn btn-outline btn-success mt-20'>Lihat Hasil</Link> */}
        <form onSubmit={submit}>
          <button className="mt-8 btn bg-white hover:bg-purple-900 text-purple-900 hover:text-white"  >
            Lihat Hasil
          </button>
        </form>
      </div>
    </QuestLayout>
    
  )
}
