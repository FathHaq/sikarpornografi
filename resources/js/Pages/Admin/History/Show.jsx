import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Show(props) {
  const {user} = usePage().props.answers[0]
  const {result} = usePage().props

  console.log(result.result);
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Detail</h2>}
    >
      <Head title="Results" />

      <div className="py-12 overflow-auto">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200 flex flex-col gap-10">
              <div>
                <h1 className='text-xl font-semibold mb-5'>Biodata</h1>
                <div className='flex flex-col gap-5'>
                  <table>
                    <tbody className='text-left'>
                      <tr >
                        <th>Name</th>
                        <th>: </th>
                        <th>{user.name}</th>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <th>: </th>
                        <th>{user.email}</th>
                      </tr>
                      <tr>
                        <th>Umur</th>
                        <th>: </th>
                        <th>{user.old}</th>
                      </tr>
                      <tr>
                        <th>Jenis Kelamin</th>
                        <th>: </th>
                        <th>{user.gender  }</th>
                      </tr>
                      <tr>
                        <th>Alamat</th>
                        <th>: </th>
                        <th>{user.address}</th>
                      </tr>
                      <tr>
                        <th>Result</th>
                        <th>: </th>
                        <th>{result.cf_value*100}% ({result.result.result})</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
                  {/* Table */}
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th></th>
                      {
                        props.answers.map((answer, index) => (
                          <th>{answer.quest.code}</th>
                        ))
                      }
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className='bg-gray-100'>Expert</th>
                      {
                        props.answers.map((answer, index) => (
                          <th className='text-green-600'>{answer.quest.cf_e}</th>
                        ))
                      }
                    </tr>
                    <tr>
                      <th className='bg-gray-100'>User</th>
                      {
                        props.answers.map((answer, index) => (
                          <th className='text-cyan-700 '>{answer.cf_h}</th>
                        ))
                      }
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h1 className='text-xl font-semibold mb-5'>CF User dikalikan CF Pakar</h1>
                <div className='flex flex-wrap gap-5'>
                {
                  props.answers.map((answer,index) => (
                    <div className='flex w-[30%] gap-2'>
                      <div className=''>CF[H,E]<span className='text-xs'>{index+1}</span></div>
                      <div>
                        <p>= CF[H] * CF[E]</p>
                        <p>= {answer.cf_h} * {answer.quest.cf_e}</p>
                        <p>= {props.cfHE[index] < 0.0001 ? props.cfHE[index].toFixed() : props.cfHE[index].toFixed(2)}</p>
                      </div>
                    </div>
                  ))
                }
                </div>
              </div>
              <div>
                <h1 className='text-xl font-semibold mb-5'>CF Combine</h1>
                <div className='flex flex-wrap gap-5'>
                {
                  props.cfHEcombine.map((value,index) => (
                    <div className='flex flex-col lg:w-96'>
                      <div className=''>CF<span className='text-xs'>combine</span>CF[H,E]<span className='text-xs'>{index == 0 ? index+1: 'old'+(index)}, {index+2}</span></div>
                      <div className='pl-10'>
                        <p>
                          = CF[H,E]<span className='text-xs'>{index == 0?index+1: 'old'+index}</span> + CF[H,E]<span className='text-xs'>{index+2}</span> * (1 - CF[H,E]<span className='text-xs'>{index == 0?index+1: 'old'+index}</span>)
                        </p>
                        <p>
                          = {index == 0 ? (props.cfHE[index] < 0.1 ? props.cfHE[index].toFixed() : props.cfHE[index].toFixed(2)) : (props.cfHEcombine[index] < 0.1 ? props.cfHEcombine[index-1].toFixed() : props.cfHEcombine[index-1].toFixed(2))} + {props.cfHE[index+1]?.toFixed(2)} * (1 - {index == 0 ? (props.cfHE[index] < 0.1 ? props.cfHE[index].toFixed() : props.cfHE[index].toFixed(2)) : (props.cfHEcombine[index] < 0.1 ? props.cfHEcombine[index-1].toFixed() : props.cfHEcombine[index-1].toFixed(2))})
                        </p>

                        <p>
                          = {value < 0.0001 ? value.toFixed() : value.toFixed(4)}
                        </p>
                      </div>
                    </div>
                  ))
                }
                </div>
              </div>
              <div>
                <h1 className='text-xl font-semibold mb-5'>Persentasekan</h1>
                <div className='flex gap-2 '>
                  <p>CF<span className='text-xs'>persentase</span></p>
                  <div>
                    <p>= CF<span className='text-xs'>combine</span>[H,E]<span className='text-xs'>old10, 12</span> * 100</p>
                    <p>= {props.cfHEcombine[10].toFixed(4)} * 100</p>
                    <p>= {(props.cfHEcombine[10]*100).toFixed()}%</p>
                  </div>

                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  )
}
