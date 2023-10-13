import React from 'react';
import logo from '../assets/viton.png';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  return <div className='topnav' >
   <NavLink to={'/home'}><img src={logo} alt="viton"/></NavLink>
   <span id='hiree' className='icons'>
   <i className="bx bx-phone" />
   <small>Hire a Designer</small>
   </span>
    </div>
  
}
