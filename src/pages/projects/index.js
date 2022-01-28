import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './styles.css';
import { IconContext } from 'react-icons';

import background from '../images/background.jpg'
import photo from '../images/photo.jpg'

import Right from '../components/containerRight';
import MenuResponsive from '../components/menuResponsive';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="container">
            <div className="project--vetical">
                <div className="project--horizontal">
                    <div className="project--description">

                    </div>
                </div>
            </div>


            <div className='project--left'>

                div esquerda
            </div>

            <div className="project--right">
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
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            <MenuResponsive/>
                        </ul>
                    </nav>
                </IconContext.Provider>
            </div>

        </div>
    );
}

export default Navbar;


/***
 * 
 *   <div className='container--background'>
            <div className='navbar'>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                <section className="project" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'certer',
                    backgroundImage: `url(${background})`

                }}>

                    <div class="project--vetical">
                        <div class="project--horizontal">
                            <div class="project--description">
                                <div className='project--left'>
                                    div left
                                </div>
                            </div>


                        </div>
                    </div>


                </section>
            </div>

 */