import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './nav/Nav'

function HomeLayout() {
  return (
    <div className='flex bg-gray-700 text-white '>
        <div className="m-5 p-5">
            <Nav/>
        </div>

        <div className=" m-5 p-3">
            <Outlet />
        </div>
    </div>
  )
}

export default HomeLayout