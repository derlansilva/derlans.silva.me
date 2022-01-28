import React, { useState } from "react"
import Right from "../components/containerRight"

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import background from '../images/background.jpg'
import './style.css'

import MenuResponsive from "../components/menuResponsive";
import Background from "../components/background";
export default function Home() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className="container">

           <Background/>


            <div className='home--left'>
                <div className="home--name">Hello! Welcome to my page</div>
                <div className="home--description">
                    I´m Software developer  Python , Javascript
                </div>
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
    )
}