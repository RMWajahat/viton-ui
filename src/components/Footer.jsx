import React from 'react';
import logo from '../assets/viton.png';
export const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt={'logo'}/>
        <small>&copy; All rights reserved to Muhammad Wajahat Hussain   <br /> <i class='bx bx-code-curly bx-flip-horizontal'></i> Developer & <i class='bx bx-edit bx-flip-horizontal'></i> UI/UX Designer</small>
    </div>
  )
}
