import { Bullseye } from '@/Components/icons'
import { Head } from '@inertiajs/react'
import React, { Children } from 'react'

export default function QuestLayout({children, kelas} ) {
  return (
    <>
      <Head title='Questions' />
      <main className='h-screen w-full flex items-center justify-center'>
        <Bullseye className={`fixed h-screen w-screen scale-[2] lg:-top-1/2lg:-z-50 ${kelas} `}/>
        <div>
          {children}
        </div>
      </main>
    </>
  )
}

