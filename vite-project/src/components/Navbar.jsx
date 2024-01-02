import './navbar.css'
import {useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import {links, Btn} from '../data'
import { FaBarsStaggered } from "react-icons/fa6";
import { RiEnglishInput } from "react-icons/ri";
import logo from '../assets/images/logo.png'

import { FaInstagram,FaLinkedin, FaTwitter } from "react-icons/fa";


const Navbar = () => {
  const[isNavShowing, setIsNavShowing]= useState(false);


  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
            <img src={logo} alt="" srcset="" className='logo' />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
            {
              links.map(({name, path}, index)=>{
                return(
                  <li key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                  </li>
                )
              })
            }
            <button className='btn-nav'>
            {
              Btn.map(({name, path}, index)=>{
                return(
                  <li key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                  </li>
                )
              })
            }
            </button>
        </ul>  
        </div>
        
        <div className='side-bar'>
        <div className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
            <FaBarsStaggered />
        </div>
        <div className="socials">
        <FaInstagram />
        <FaLinkedin />
        <FaTwitter />
        <RiEnglishInput />
        </div>
        </div>
      
    </nav>
  )
}

export default Navbar