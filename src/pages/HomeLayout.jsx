import React, { useState } from 'react'

import { createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Landing from './Landing'
import About from './About'
import { Header } from '../components'
import {Navbar} from '../components'
import {Loading} from "../components"
import { useNavigation } from 'react-router-dom'



const HomeLayout = () => {

  // checking the state default is idle
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading"
  
  
  return (
    <>
      <Header/>
      <Navbar/>
      <div className=' align-element'>
        {
          isPageLoading
          ?
          (
            <Loading/>
          ):
          (
            <Outlet/>
          )
        }
        
      </div>
    </>
  )
}

export default HomeLayout