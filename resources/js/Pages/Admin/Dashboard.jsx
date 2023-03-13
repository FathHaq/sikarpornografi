import { ChartDashboard } from '@/Components/Admin/Dashboard/ChartDashboard';
import Stat from '@/Components/Admin/Dashboard/Stat';
import Table from '@/Components/Admin/Dashboard/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { AiOutlineQuestionCircle, AiOutlineExclamationCircle } from 'react-icons/ai';
import { BsShieldExclamation } from 'react-icons/bs'

export default function Dashboard(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-10 lg:gap-0">
          <div className='w-full lg:w-1/2 flex flex-wrap justify-between items-start mr-5 gap-10 lg:gap-0'>
            <div className='w-full card shadow-md bg-white px-10 py-14'>
               <h1 className='font-semibold font-serif text-5xl'> 👋 Hallo <strong>{props.auth.user.name}</strong></h1>
               <p className='text-lg'>Have a Nice Day 🌞</p>
            </div>
            <div>
              <Stat title='Total Responden' value={props.responden} color='text-primary'>
                <AiOutlineExclamationCircle size={30} />
              </Stat>
            </div>
            <div>
              <Stat title='Total Question' value={props.quest} color='text-secondary'>
                <AiOutlineQuestionCircle size={30} color={'rgb(231 70 148)'} />
              </Stat>
            </div>
            <div>
              <Stat title='Total Result' value={props.result} color=' text-orange-400'>
                <BsShieldExclamation size={30} color={'rgb(255 138 76)'} />
              </Stat>
            </div>
          </div>

          <ChartDashboard jumlah={props.jumlah}/>
          <Table datas={props.respondents.data} links={props.links}/>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
