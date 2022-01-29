import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import background from '../images/background.jpg'
import photo from '../images/photo.jpg'

import Right from '../components/containerRight';
import MenuResponsive from '../components/menuResponsive';
import Background from '../components/background';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>

            <div className='content--left'>
                <div className="home--page">
                    Aqui vai meus projetos
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

