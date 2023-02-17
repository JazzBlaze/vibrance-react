import React, {useState} from 'react';

import logo from "../images/exit.svg";


import "./Menu.css"
function Menu() {



  return (
    <>
            <div className='menu-alpha'>
                <div className="menu-home">
                    <div className="menu-container"><button className="menu-div">Menu</button></div>
                </div>
                <div className="menu">
                    <div className="menu-background">Menu</div>
                    <div className="menu-exit"><img src={logo} alt=''/></div>
                    <div className="menu-container">
                        <ul className="options">
                
                            <li className="nav"><a href="/"  target="_blank" className="nav-link">Home <span className="small-number">01</span></a></li>
                            <li className="nav"><a href="/events"  target="_blank" className="nav-link">Events <span className="small-number">02</span></a></li>
                            <li className="nav"><a href="/pro-shows"  target="_blank" className="nav-link">Pro-Shows <span className="small-number">03</span></a></li>
                            <li className="nav"><a href="/merchandise" target="_blank" className="nav-link">Merch <span className="small-number">04</span></a></li>
                            <li className="nav"><a href="/gallery"  target="_blank" className="nav-link">Gallery <span className="small-number">05</span></a></li>
                            <li className="nav"><a href="/sponsors" target="_blank" className="nav-link">Sponsors <span className="small-number">06</span></a></li>
                            <li className="nav"><a href="/team"  target="_blank" className="nav-link">Team <span className="small-number">07</span></a></li>
                            
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
                
                                <a href="https://www.instagram.com/vibrancevit"  target="_blank" className="social-media">Instagram</a>
                                <a href="https://www.youtube.com/@vibrancevit"  target="_blank" className="social-media">Youtube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </>
  )
}

export default Menu