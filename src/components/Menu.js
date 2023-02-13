import React, {useState} from 'react';
import './Menu.css';
import logo from "../images/exit.svg";



function Menu() {



  return (
    <>
            <div className='alpha'>
                <div className="home">
                    <div className="container"><div className="menu-div" href="/">EXPLORE</div></div>
                </div>
                <div className="menu">
                    <div className="background">Menu</div>
                    <div className="exit"><img src={logo} alt=''/></div>
                    <div className="menu-container">
                        <ul className="options">
                
                            <li className="nav"><a href="/" className="nav-link">Home <span className="small-number">01</span></a></li>
                            <li className="nav"><a href="/" className="nav-link">Events <span className="small-number">02</span></a></li>
                            <li className="nav"><a href="/" className="nav-link">Pro-Shows <span className="small-number">03</span></a></li>
                            <li className="nav"><a href="/" className="nav-link">Merchandise <span className="small-number">04</span></a></li>
                            <li className="nav"><a href="/" className="nav-link">Gallery <span className="small-number">05</span></a></li>
                            <li className="nav"><a href="/" className="nav-link">Sponsors <span className="small-number">06</span></a></li>
                            <li className="nav"><a href="/" className="nav-link">Team <span className="small-number">07</span></a></li>
                            <li className="nav"><a href="/" className="nav-link">Map <span className="small-number">08</span></a></li>
                        </ul>
                    </div>
                    <div className="menu-container right">
                        <div className="information">
                            <p className="title">VIBRANCE'23</p>
                            <p className="description">Dive in deep</p>
                        </div>
                        <div className="information">
                            <p className="title">Contact</p>
                            <p className="description">vibrance@gmail.com</p>
                        </div>
                        <div className="information">
                            <p className="title">Keep Up With Us</p>
                            <div className="social-medias">
                
                                <a href="/" className="social-media">Instagram</a>
                                <a href="/" className="social-media">Youtube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </>
  )
}

export default Menu