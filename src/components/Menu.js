import React, {useState} from 'react';

import logo from "../images/exit.svg";


import "./Menu.css"
function Menu() {



  return (
    <>
            <div className='menu-alpha'>
                <div className="menu-home">
                    <div className="menu-container"><div className="menu-div">EXPLORE</div></div>
                </div>
                <div className="menu">
                    <div className="menu-background">Menu</div>
                    <div className="menu-exit"><img src={logo} alt=''/></div>
                    <div className="menu-container">
                        <ul className="options">
                
                            <li className="nav"><a href="/" className="nav-link">Home <span className="small-number">01</span></a></li>
                            <li className="nav"><a href="/events" className="nav-link">Events <span className="small-number">02</span></a></li>
                            <li className="nav"><a href="/pro-shows" className="nav-link">Pro-Shows <span className="small-number">03</span></a></li>
                            <li className="nav"><a href="/merchandise" className="nav-link">Merch <span className="small-number">04</span></a></li>
                            <li className="nav"><a href="/gallery" className="nav-link">Gallery <span className="small-number">05</span></a></li>
                            <li className="nav"><a href="/" className="nav-link">Sponsors <span className="small-number">06</span></a></li>
                            <li className="nav"><a href="/team" className="nav-link">Team <span className="small-number">07</span></a></li>
                            
                        </ul>
                    </div>
                    <div className="menu-container menu-right">
                        <div className="information">
                            <p className="menu-title">VIBRANCE'23</p>
                            <p className="description">Dive in deep</p>
                        </div>
                        <div className="information">
                            <p className="menu-title">Contact</p>
                            <p className="description">marketing.vibrance@vit.ac.in</p>
                        </div>
                        <div className="information">
                            <p className="menu-title">Keep Up With Us</p>
                            <div className="social-medias">
                
                                <a href="https://www.instagram.com/vibrancevit/" className="social-media">Instagram</a>
                                <a href="https://www.youtube.com/@vibrancevit" className="social-media">Youtube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </>
  )
}

export default Menu