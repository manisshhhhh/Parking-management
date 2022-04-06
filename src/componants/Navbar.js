import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='nav'>
        <h4>SYNAR</h4>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/slotes' >Slotes</NavLink>
        <NavLink  to='/login' id="log">Login</NavLink>
      
    </nav>
  )
}

export default Navbar
