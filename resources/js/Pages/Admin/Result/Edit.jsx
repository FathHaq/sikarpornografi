import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/react';
import { IoChevronBackOutline } from 'react-icons/io5'

export default function Dashboard(props) {

  const { results } = usePage().props;

  const { data, setData, put, errors } = useForm({
    code: results.code || "",
    result: results.result || "",
    solution: results.solution || "",
    cf_value: results.cf_value || "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    put(route("results.update", results.id));
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Pertanyaan</h2>}
    >
      <Head title="Result" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">

              <div className="flex items-center justify-between mb-6">
                <Link
                  href={route("results.index")}
                >
                  <button className="btn btn-ghost">
                    <IoChevronBackOutline size={30} color='grey'/>
                  </button>
                </Link>
              </div>

              <form name="createForm" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <div className="mb-4 flex flex-col gap-2 ">
                    <label className="">Code</label>
                    <input
                      type="text"
                      className="input input-bordered input-success w-full"
                      label="Code"
                      name="code"
                      value={data.code}
                      onChange={(e) =>
                        setData("code", e.target.value)
                      }
                    />
                    <span className="text-red-600">
                      {errors.code}
                    </span>
                  </div>
                  <div className="mb-0 flex flex-col gap-2 ">
                    <label className="">Result</label>
                    <input
                      type="text"
                      className="textarea textarea-success w-full"
                      label="Result"
                      name="result"
                      errors={errors.result}
                      value={data.result}
                      onChange={(e) =>
                        setData("result", e.target.value)
                      }
                    />
                    <span className="text-red-600">
                      {errors.result}
                    </span>
                  </div>
                  <div className="mb-0 flex flex-col gap-2 ">
                    <label className="">Solusi</label>
                    <textarea
                      type="text"
                      className="textarea textarea-success"
                      label="Solusi"
                      name="solution"
                      errors={errors.solution}
                      value={data.solution}
                      onChange={(e) =>
                        setData("solution", e.target.value)
                      }
                    />
                    <span className="text-red-600">
                      {errors.solution}
                    </span>
                  </div>
                  <div className="mb-4 flex flex-col gap-2 ">
                    <label className="">Certainty Value</label>
                    <select
                      type="text"
                      className="select select-success w-full"
                      label="Certainty Value"
                      name="cf_value"
                      value={data.cf_value}
                      onChange={(e) =>
                        setData("cf_value", e.target.value)
                      }
                    >
                      <option value="0.8">0.8 - 1</option>
                      <option value="0.6">0.6 - 0.8</option>
                      <option value="0.4">0.4 - 0.6</option>
                      <option value="0.2">0.2 - 0.4</option>
                      <option value="0">0 - 0.2</option>
                    </select>
                    <span className="text-red-600">
                      {errors.cf_value}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-success text-white"
                  >
                    Update
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}