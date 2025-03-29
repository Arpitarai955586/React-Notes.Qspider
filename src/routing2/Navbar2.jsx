import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./navbar.module.css"
const Navbar2 = () => {
  return (
    <nav>
        <li><NavLink 
        className={({isActive})=>(isActive?  style.active :"")}
        to="/service">Service</NavLink></li>
        <li><NavLink
        className={({isActive})=>(isActive?  style.active :"")}
         to="/">Profile</NavLink></li>
        <li><NavLink 
        className={({isActive})=>(isActive?  style.active :"")}
        to="/card">Card</NavLink></li>
    </nav>
  )
}

export default Navbar2