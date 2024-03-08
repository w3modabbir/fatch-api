import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import './navbar.css'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="container">
            <div className="navbar_main">
                <div className="logo">
                    <picture>
                        <Link>
                            <img src={Logo} alt="not found" />
                        </Link>
                    </picture>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/userpost">User Data</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="button"></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar