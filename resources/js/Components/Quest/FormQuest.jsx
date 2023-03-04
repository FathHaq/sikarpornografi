import React from "react";

export default function FormQuest() {
  return (
    <div className="card-body">
      <h2 className="card-title">{quest.quest} </h2>
      <form className="card-actions flex-col" onSubmit={submit}>
        {props.cvalue.map((cvalue, index) => (
          <div className="flex gap-2" key={index}>
            <input
              type="radio"
              name="cf_h"
              id="cfh"
              value={cvalue.cv}
              class="radio radio-warning"
              onChange={(e) => setCvalue(e.target.value)}
            />
            <label htmlFor="cfh">{cvalue.define}</label>
          </div>
        ))}
        <span className="text-red-600">{errors.cf_h}</span>
        <div className="card-actions justify-between">
          {/* <Link href={route('questions.show', props.quest[0].id-1)} className="btn btn-outline btn-success">Previous</Link> */}
          {/* <Link href={route('questions.show', props.quest[0].id+1)} className="btn btn-outline btn-success">Next</Link> */}
          <Link
            href={route("pertanyaan.edit", quest.id - 1)}
            className="btn btn-outline btn-success"
          >
            Pref
          </Link>

          {show ? (
            <PrimaryButton className="ml-4" onClick={refreshPage}>
              Next
            </PrimaryButton>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
