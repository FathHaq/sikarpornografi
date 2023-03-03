import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, router } from '@inertiajs/react';
import { TbTrashX, TbEdit } from 'react-icons/tb'

export default function Index(props) {
  const { results } = usePage().props

  function destroy(e) {
    if (confirm("Are you sure you want to delete this user?")) {
      router.delete(route("results.destroy", e.currentTarget.id));
    }
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Results</h2>}
    >
      <Head title="Results" />

      <div className="py-12 overflow-auto">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">

              <table className="table-fixed w-full ">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 w-20">Code</th>
                    <th className="px-4 py-2">Hasil</th>
                    <th className="px-4 py-2">Solusi</th>
                    <th className="px-4 py-2 text-center">Certainty Value</th>
                    <th className="px-4 py-2 w-32">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map(({ id, code, result, solution, cf_value }, index) => (
                    <tr key={index} className='h-20'>
                      <td className="border px-4 py-2">{code}</td>
                      <td className="border px-4 py-2">{result}</td>
                      <td className="border px-4 py-2">{solution}</td>
                      <td className="border px-4 py-2 text-center">{cf_value != 1 ? `${(cf_value)*100-39}% - ${cf_value*100}%`:'81% - 100%'}</td>
                      <td className="border ">
                        <div className='flex justify-center items-center w-full h-full'>
                          <button
                            className="p-2 text-sm text-white bg-blue-500 rounded"
                          >
                            <Link href={route("results.edit", id)}>
                              <TbEdit size='1.2rem'/>
                            </Link>
                          </button>

                          <button
                            onClick={destroy}
                            id={id}
                            tabIndex="-1"
                            type="button"
                            className="mx-1 p-2 text-sm text-white bg-red-500 rounded"
                          >
                            <TbTrashX size='1.2rem'/>
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
    </Authenticated>
  );
}