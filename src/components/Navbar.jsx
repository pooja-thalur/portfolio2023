import React from 'react'
import { NavLink } from 'react-router-dom'
import { logo } from "../assets/images";

const navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='ml-1 w-18 h-18 object-unset' />
      </NavLink>
      <nav className='flex text-lg gap-6 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
    
  )
}

export default navbar