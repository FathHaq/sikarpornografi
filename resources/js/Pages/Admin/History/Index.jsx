import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { TbEdit, TbDots } from 'react-icons/tb'

export default function Index(props) {
  const { results } = usePage().props

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">results</h2>}
    >
      <Head title="results" />

      <div className="py-12 overflow-auto">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 w-20">No</th>
                      <th className="px-4 py-2">Nama</th>
                      <th className="px-4 py-2 w-24 text-center">Result</th>
                      <th className="px-4 py-2 w-24 text-center">Certainty Value</th>
                      <th className="px-4 py-2 w-32">Action</th>
                    </tr>
                  </thead>
                <tbody>
                  {results.map(({ user_id, user, result, cf_value }, index) => (
                    <tr key={index} className='h-20'>
                      <td className="border px-4 py-2">{index+1}</td>
                      <td className="border px-4 py-2">{user.name}</td>
                      <td className="border px-4 py-2 text-center">{result.code}</td>
                      <td className="border px-4 py-2 text-center">{cf_value}</td>
                      <td className="border ">
                        <div className='flex justify-center items-center w-full h-full'>
                          <button
                            className="p-2 text-sm text-white bg-blue-500 rounded"
                          >
                            <Link href={route("history.show", user_id)}>
                              <TbDots size='1.2rem'/>
                            </Link>
                          </button>
                        </div>
                        
                      </td>
                    </tr>
                  ))}

                  {results.length === 0 && (
                    <tr>
                      <td
                        className="px-6 py-4 border-t"
                        colSpan="4"
                      >
                        No contacts found.
                      </td>
                    </tr>
                  )}
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}