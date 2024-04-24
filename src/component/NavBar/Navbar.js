import Logo from '../asset/Laluna-Logo.png'
import './Navbar.css'
import NavigationItems from '.././config/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FiAlignJustify } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import React, { useState } from 'react'

const NavBar = () => {
    const [openProfile, setOpenProfile] = useState(false);
    return (
        <div>
            <div className="social-wrapper">
                <a href="https://www.youtube.com/c/jamesqquick" className="youtube social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>

                <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                
                <a href="http://www.instagram.com/larnbuildteach" className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
            <div className='menu'>
            
                <div className='menuItem-logo'>
                    <a href="/" className='logo'><img src={Logo} style={{height: 100, width: 100}}/></a>
                </div>
                
                <div className='menuItem-wrapper'>
                    {NavigationItems.sidebar.map(item => (
                    <a className='menuItem' href={item.to}>{item.name}</a>    
                ))}</div>
            
            </div>
            {
            !openProfile && <FiAlignJustify className='dropdown-menu-icon' onClick={() => setOpenProfile((prev) => !prev)}/>
            }

            {
            openProfile && <FiXSquare className='dropdown-menu-icon' onClick={() => setOpenProfile((prev) => !prev)}/>
            }
                {
          openProfile && <div className='dropdown-menu'> 
          <ul>
            <a className='dropdown-menu-item' href="/">Home</a>
            <a className='dropdown-menu-item' href="/#about-us">About Us</a>
            <a className='dropdown-menu-item' href="/#amazon-fba">Amazon FBA</a>
            <a className='dropdown-menu-item' href="/mission">Our Services</a>
            <a className='dropdown-menu-item' href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3TmuHenV034sbXh7XMwuxDntCnvzGrf1v3IBgKHOaHidbY4ClPAmZMWJttVOYk2nx_bIRJrAIa?pli=1">Contact</a>
            </ul>       
            </div>
            }
            
        </div>

    )
    
}

export default NavBar;