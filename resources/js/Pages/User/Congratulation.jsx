import PrimaryButton from '@/Components/PrimaryButton';
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
      
      router.post('/result', {
          result_id: keterangan,
          cf_value: props.cfCombine
      });
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-slate-200 px-5 lg:px-20 text-center gap-3'>
      <Head title='Congratulation'/>
        <h1 className='font-semibold text-8xl'>Selamat</h1>
        <p className='text-lg'>Anda telah menyelesaikan Quisioner-nya</p>
        {/* <Link href={route('result.show', props.auth.user.id)} className='btn btn-outline btn-success mt-20'>Lihat Hasil</Link> */}
        <form onSubmit={submit}>
          <PrimaryButton className="ml-4" >
            Lihat Hasil
          </PrimaryButton>
        </form>
    </div>
  )
}
