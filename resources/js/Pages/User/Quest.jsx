import { Bullseye } from '@/Components/icons';
import PrimaryButton from '@/Components/PrimaryButton';
import QuestLayout from '@/Layouts/QuestLayout'
import { Link, useForm, usePage, router } from '@inertiajs/react'
import React, { useState } from 'react'

export default function Quest(props) {
  //destruct props "errors"
  const { errors } = usePage().props;
  const [show, setShow] = useState(false)
  setTimeout(() => setShow(true), 3000);


  const quest = props.quest[0];
  const [cvalue, setCvalue] = useState('');

  //function "storePost"
  const submit = async (e) => {
    e.preventDefault();

    router.post('/pertanyaan', {
      quest_id: quest.id,
      cf_h: cvalue
    });

    setShow(false)
    setCvalue('')
    setTimeout(() => {
      setShow(true)
    }, 1500)
  }


  return (
    <QuestLayout>
      <div className="card card-compact mx-5 lg:w-[40rem] bg-base-100 shadow-xl">
        {
          show ?
            <div className="card-body">
              <h2 className="card-title text-center lg:text-2xl mb-5">{quest.quest} </h2>
              <form className='card-actions flex-col' onSubmit={submit}>
                {
                  props.cvalue.map((cvalue, index) => (
                    // <div onClick={submit}>
                      <label htmlFor={`cfh${index}`}  className='flex gap-2 btn btn-ghost btn-block justify-start ' key={index}>
                        <input
                          type="radio"
                          name="cf_h"
                          id={`cfh${index}`}
                          value={cvalue.cv}
                          class="radio radio-primary"
                          onChange={(e) => setCvalue(e.target.value)}
                        />
                        <label htmlFor={`cfh${index}`} >{cvalue.define}</label>
                      </label>
                    // </div>
                  ))
                }
                <span className="text-red-600">
                  {errors.cf_h}
                </span>
                <div className="card-actions flex justify-end w-full px-5">
                  <PrimaryButton className="ml-4">
                    Next
                  </PrimaryButton>
                </div>
              </form>
            </div>
            : <div class="btn btn-xl btn-ghost loading bg-transparent"></div>
        }
      </div>
    </QuestLayout>
  )
}
