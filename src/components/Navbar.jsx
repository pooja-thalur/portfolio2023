import React from 'react'
import { NavLink } from 'react-router-dom'
import { logo } from "../assets/images";

const navbar = () => {
  return (
    <div>
    <header className='header'>
      
      <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600 flex text-lg gap-6 font-medium" : "text-black flex text-lg gap-6 font-medium"} >
        Home
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
    </div>
    
  )
}

export default navbar