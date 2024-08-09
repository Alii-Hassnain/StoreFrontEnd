import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Landing from './Landing'
import About from './About'

const HomeLayout = () => {
  
  return (
    <>
      <div className='bg-blue-100'>Home layout</div>
      <Outlet/>
    </>
  )
}

export default HomeLayout