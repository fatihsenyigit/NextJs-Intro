

import Link from 'next/link'
import React from 'react' 

const Sidebar = () => {
  return (
    <div className='w-40 min-h-screen bg-cyan-600 float-left text-black pt-10 pl-5'>
        <nav className='flex flex-col'>
            <Link href='/dashboard/projects' className='underline'>Projects</Link>
            <Link href='/dashboard/team' className='underline'>Team</Link>
            <Link href='/dashboard/users' className='underline'>Users</Link>
        </nav>
    </div>
  )
}

export default Sidebar