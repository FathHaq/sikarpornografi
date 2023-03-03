import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { IoChevronBackOutline } from 'react-icons/io5'

export default function Dashboard(props) {

  const { data, setData, errors, post } = useForm({
    code: "",
    gejala: "",
    quest: "",
    cf_e: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route("posts.store"));
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Pertanyaan</h2>}
    >
      <Head code="Posts" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">

              <div className="flex items-center justify-between mb-6">
                <Link
                  href={route("questions.index")}
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
                    <label className="">Gejala</label>
                    <input
                      type="text"
                      className="textarea textarea-success w-full"
                      label="Gejala"
                      name="gejala"
                      errors={errors.gejala}
                      value={data.gejala}
                      onChange={(e) =>
                        setData("gejala", e.target.value)
                      }
                    />
                    <span className="text-red-600">
                      {errors.gejala}
                    </span>
                  </div>
                  <div className="mb-0 flex flex-col gap-2 ">
                    <label className="">Pertanyaan</label>
                    <textarea
                      type="text"
                      className="textarea textarea-warning"
                      label="Pertanyaan"
                      name="quest"
                      errors={errors.quest}
                      value={data.quest}
                      onChange={(e) =>
                        setData("quest", e.target.value)
                      }
                    />
                    <span className="text-red-600">
                      {errors.quest}
                    </span>
                  </div>
                  <div className="mb-4 flex flex-col gap-2 ">
                    <label className="">Certainty Value</label>
                    <select
                      type="text"
                      className="select select-success w-full"
                      label="Certainty Value"
                      name="cf_e"
                      value={data.cf_e}
                      onChange={(e) =>
                        setData("cf_e", e.target.value)
                      }
                    >
                      <option value="0">Pilih Nilai</option>
                      <option value="1">1 | Sangat yakin</option>
                      <option value="0.8">0.8 | Yakin</option>
                      <option value="0.6">0.6 | Cukup yakin</option>
                      <option value="0.4">0.4 | Kurang yakin</option>
                      <option value="0.2">0.2 | Tidak tahu</option>
                      <option value="0">0 | Tidak</option>
                    </select>
                    <span className="text-red-600">
                      {errors.cf_e}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-success text-white"
                  >
                    Tambah
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