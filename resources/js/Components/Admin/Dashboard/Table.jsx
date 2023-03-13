import React from 'react'

export default function Table({datas, links}) {
  console.log(datas);
  return (
    <div className="shadow-md bg-white sm:rounded-lg h-96 overflow-auto w-full lg:w-1/2">
      <table className='table w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Address</th>
            <th>Hasil</th>
          </tr>
        </thead>
        <tbody>
          {
            datas.map((data, index) => (
              <tr>
                <th>{index+1}</th>
                <th>{data.user.name}</th>
                <th className='truncate'>{data.user.address}</th>
                <th>{data.result.result}</th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
