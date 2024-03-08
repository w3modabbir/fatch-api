import React from 'react'
import Navbar from '../navbar/Navbar'
import FooterPart from '../footerpart/FooterPart'
import { Outlet } from 'react-router-dom'

const NavFoot = () => {
  return (
   <>
     <Navbar/>
        <Outlet/>
    <FooterPart/>
   </>
  )
}

export default NavFoot