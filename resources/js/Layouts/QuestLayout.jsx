import { Head } from '@inertiajs/react'
import React, { Children } from 'react'

export default function QuestLayout({children}) {
  return (
    <>
      <Head title='Questions' />
      <main>
        <nav>

        </nav>
          <h1>Isilah Pertanyaan di bawah ini dengan jujur</h1>
          {children}
      </main>
    </>
  )
}
