import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';



import Right from '../components/containerRight';
import MenuResponsive from '../components/menuResponsive';
import netflixclone from '../images/netflixclone.png'


import './styles.css'


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>

            <div className='content--left'>
                <div className="home--page">
                    <div className='skills--page'>
                        <a href='http://localhost:3000' target="_blank" rel="noopener noreferrer">
                        <div className='skill--section'>
                            <div className='skill--list'>
                                <div className='skill--tema'>Netflix clone</div>
                                <img className='skill--image' src={netflixclone} />
                                <div className='skill--text'>
                                    apenas com intuito academico , desenvolvi um clone da netflix , 
                                    usando uma api externa que lista os filmes e series , desenvolvida em react         
                                </div>
                            </div>
                        </div>
                        </a>


                    </div>
                </div>
            </div>

            <div className="content--right">
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className='show--right'>
                        <Right />
                    </div>

                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu--close'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            <MenuResponsive />
                        </ul>
                    </nav>
                </IconContext.Provider>
            </div>

        </>
    );
}

export default Navbar;

