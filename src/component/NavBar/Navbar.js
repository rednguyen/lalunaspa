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
                <a href="https://www.youtube.com/c/jamesqquick" className="youtube social-navbar">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>

                <a href="https://www.facebook.com/learnbuildteach/" className="facebook social-navbar">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                
                <a href="http://www.instagram.com/larnbuildteach" className="instagram social-navbar">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
            <div className='menu'>
            
                <div className='menuItem-logo'>
                    <a href="/" className='logo'><img className='logo' src={Logo}/></a>
                </div>
                
                <div className='menuItem-wrapper'>
                    {NavigationItems.sidebar.map(item => (
                    <a className='menuItem' href={item.to}>{item.name}</a>    
                ))}</div>

                <div className='dropdown'>
                    
                    {
                    !openProfile && <div>
                    <a href="/" className='dropdown-logo'><img className='logo' src={Logo}/></a>
                    </div>
                    }
                 
                    
                    {
                    !openProfile && <FiAlignJustify className='dropdown-menu-icon' onClick={() => setOpenProfile((prev) => !prev)}/>
                    }

                 

                    {
                    openProfile && <FiXSquare className='dropdown-menu-icon' onClick={() => setOpenProfile((prev) => !prev)}/>
                    }

                    {
                    openProfile && <div className='dropdown-menu'> 
                        {
                            NavigationItems.sidebar.map(item => (
                                <>
                                    <a className='dropdown-menu-item' href={item.to}>{item.name}</a>
                                    <hr></hr>
                                </>
                              
                            ))
                            
                        }
                        
                        <div className='dropdown-footer'>
                            <a href="/"><img className='logo' src={Logo}/></a>  
                            {NavigationItems.footer.map(item => (
                            <h4 className="footer-item">{item.addr}</h4>
                            ))}
                        </div>
                        
                    </div>
                    }
                    
                </div>
            </div>
           
            
            
        </div>

    )
    
}

export default NavBar;