import { Head, Link } from '@inertiajs/react';
import React from 'react'

export default function Result(props) {
    const user = props.auth.user;
    const result = props.userResult[0];
    const solution = props.solution[0];

    console.log(solution);
  return (
    <div className='w-screen h-screen flex flex-col bg-slate-200 items-center justify-center'>
        <Head title='Result'/>
        <div className="card w-96 bg-base-100 shadow-xl p-6">
            <div className='flex gap-5'>
                <div className='w-32 flex justify-between'>
                    <h1 className=''>Nama</h1><span>:</span>
                </div>
                <p>{user.name}</p>
            </div>
            <div className='flex gap-5'>
                <div className='w-32 flex justify-between'>
                    <h1 className=''>Email</h1><span>:</span>
                </div>
                <p>{user.email}</p>
            </div>
            <div className='flex gap-5'>
                <div className='w-32 flex justify-between'>
                    <h1 className=''>umur</h1><span>:</span>
                </div>
                <p>{user.old}</p>
            </div>
            <div className='flex gap-5'>
                <div className='w-32 flex justify-between'>
                    <h1 className=''>Jenis Kelamin</h1><span>:</span>
                </div>
                <p>{user.gender}</p>
            </div>
            <div className='flex gap-5'>
                <div className='w-32 flex justify-between'>
                    <h1 className=''>Nama</h1><span>:</span>
                </div>
                <p>{user.name}</p>
            </div>
            <div className='mt-5 font-medium'>Hasil Tes</div>
            <div className='flex gap-5'>
                <div className='w-32 flex justify-between'>
                    <h1 className=''>Nilai</h1><span>:</span>
                </div>
                <p>{result.cf_value*100}%</p>
            </div>
            <div className='flex gap-5'>
                <div className='w-32 flex justify-between'>
                    <h1 className=''>Tingkat Kecanduan</h1><span>:</span>
                </div>
                <p>{solution.result}</p>
            </div>
            <div className='flex gap-5'>
                <div className='w-40 flex justify-between'>
                    <h1 className=''>Solusi</h1><span>:</span>
                </div>
                <p className=''>{solution.solution}</p>
            </div>
            <div className='flex justify-between mt-10'>
                <Link className="btn btn-outline btn-success">
                    Download PDF
                </Link>
                <Link method='post' href={route('logout')} className="btn btn-outline btn-success" as='button'>
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
  )
}
