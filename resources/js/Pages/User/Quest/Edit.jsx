import PrimaryButton from '@/Components/PrimaryButton';
import QuestLayout from '@/Layouts/QuestLayout'
import { Link, useForm, usePage, router } from '@inertiajs/react'
import React, { useState } from 'react'

export default function Quest(props) {

  console.log(props);
  const {quest} = usePage().props
  const question = props.question[0];
  console.log(question);
  const [cvalue, setCvalue] = useState(0.4);

  //function "storePost"
  const submit = async (e) => {
    e.preventDefault();

    router.put(route('pertanyaan.update', question.id), {
      cf_h: cvalue
    });
  }

  return (
    <QuestLayout>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{quest.quest} </h2>
          <form className='card-actions flex-col' onSubmit={submit}>
            {
              props.cvalue.map((cvalue, index) => (
                <div className='flex gap-2' key={index}>
                  <input
                    type="radio"
                    name="cf_h"
                    id='cfh'
                    value={cvalue.cv}
                    class="radio radio-warning"
                    onChange={(e) => setCvalue(e.target.value)}
                  />
                  <label htmlFor='cfh'>{cvalue.define}</label>
                </div>
              ))
            }
            <div className="card-actions justify-between">
              {/* <Link href={route('questions.show', props.quest[0].id-1)} className="btn btn-outline btn-success">Previous</Link> */}
              {/* <Link href={route('questions.show', props.quest[0].id+1)} className="btn btn-outline btn-success">Next</Link> */}
              <Link href={route('pertanyaan.edit', quest.id-1)} className='btn btn-outline btn-success'>Pref</Link>
              <PrimaryButton className="ml-4" >
                Next
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </QuestLayout>
  )
}
