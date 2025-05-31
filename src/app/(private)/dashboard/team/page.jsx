
import React from 'react'
import Goback from '@/components/Goback'
import { getUsers } from '@/helpers/apiFunc'

const Team = async() => {
  const users = await getUsers();
  return (
    <div>
           <h1 className='text-2xl text-center'>team sayfasi</h1>
           <ul role="list" className="divide-y divide-gray-100 w-[50vw]">
      {users.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.avatar} className="size-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{person.first_name} {person.last_name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{person.email}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
           <Goback></Goback>
        </div>
  )
}

export default Team