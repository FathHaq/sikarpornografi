import { Bullseye } from '@/Components/icons'
import { Head } from '@inertiajs/react'
import React, { Children } from 'react'

export default function QuestLayout({children}) {
  return (
    <>
      <Head title='Questions' />
      <main className='h-screen flex items-center justify-center'>
        <Bullseye className="fixed w-screen -top-1/2"/>
        <div>
          {children}
        </div>
      </main>
    </>
  )
}

