import { useForm } from '@inertiajs/react';
import React from 'react'
import InputError from '../InputError';
import InputLabel from '../InputLabel'
import PrimaryButton from '../PrimaryButton'

export default function FormRespondent() {
   const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    old: '',
    gender: '',
    address: '',
  });

  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
};

  const submit = (e) => {
      e.preventDefault();

      post(route('register'));
  };

  const oldRange = Array.from({length: 70}, (_, i) => i + 1);

  return (
    <form name="createForm" onSubmit={submit}>
      <InputLabel name='name' className='' label='Name'>
        <input 
          id='name' 
          name='name' 
          value={data.name} 
          type='text' 
          placeholder='Nama Lengkap' 
          className="input input-bordered input-success w-full max-w-xs mt-2" 
          onChange={handleOnChange}
          required
        />
        <InputError message={errors.name} className="mt-2"/>
      </InputLabel>
      <InputLabel name='email' className='' label='Email'>
        <input 
          id='email' 
          name='email' 
          value={data.email} 
          type='text' 
          placeholder='Alamat Email' 
          className="input input-bordered input-success w-full max-w-xs mt-2" 
          onChange={handleOnChange}
          required
        />
        <InputError message={errors.email} className="mt-2"/>
      </InputLabel>
      <div className='flex gap-5'>
        <InputLabel name='old' className='' label='Umur'>
          <select 
            className="select select-success w-full max-w-xs"
            name='old'
            id='old'
            value={data.old}
            onChange={handleOnChange}
          >
            <option selected>Masukan Umur</option>
            {
              oldRange.map((old, index) => (
                <option key={index} value={old+5}>{old+5} Tahun</option>
              ))
            }
          </select>
          <InputError message={errors.old} className="mt-2"/>
        </InputLabel>
        <InputLabel name='gender' className='' label='Jenis Kelamin'>
        <select 
            className="select select-success w-full max-w-xs"
            name='gender'
            id='gender'
            value={data.gender}
            onChange={handleOnChange}
          >
            <option selected>Jenis Kelamin</option>
            <option value='Laki-laki'>Laki-laki</option>
            <option value='Perempuan'>Perempuan</option>
          </select>
          <InputError message={errors.gender} className="mt-2"/>
        </InputLabel>
      </div>
      <InputLabel name='address' className='' label='Alamat'>
        <textarea 
          id='address' 
          name='address' 
          value={data.address} 
          type='text' 
          placeholder='Alamat Email' 
          className="textarea textarea-bordered textarea-success w-full max-w-xs mt-2" 
          onChange={handleOnChange}
          required
        />
        <InputError message={errors.address} className="mt-2"/>
      </InputLabel>
      <div className="flex items-center justify-end mt-4">
        <PrimaryButton className="ml-4" disabled={processing}>
          Mulai
        </PrimaryButton>
      </div>
    </form>
  )
}
