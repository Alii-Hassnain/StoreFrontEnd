import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Landing from './Landing'
import About from './About'
import { Header } from '../components'
import {Navbar} from '../components'
const HomeLayout = () => {
  
  return (
    <>
      <Header/>
      <Navbar/>
      <div className=' align-element'>
        <Outlet/>
      </div>
    </>
  )
}

export default HomeLayout