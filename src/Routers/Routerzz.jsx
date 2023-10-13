import React from 'react'

import {Routes,Route, Navigate} from 'react-router-dom';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Services } from '../components/Services';
export const Routerzz = () => {
  return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Navigate to={"home"}/>}></Route>
                <Route path='home' element={<Home/>}></Route>
                <Route path='about' element={<About/>}></Route>
                <Route path='contact' element={<Contact/>}></Route>
                <Route path='services' element={<Services/>}></Route>
            </Routes>

        </React.Fragment>
  )
}
