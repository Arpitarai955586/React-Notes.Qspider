import React from 'react'
import Navbar2 from '../Navbar2'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar2/>
        <Outlet/>
    </div>
  )
}

export default Layout