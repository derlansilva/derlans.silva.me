import React, { useState } from "react"
import Right from "../components/containerRight"

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import TypeWriter from '../components/writeComponent/write'

import './style.css'

import MenuResponsive from "../components/menuResponsive";
export default function Home() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='content--left'>
                <div className="home--page">
                    <div className="home--main">

                    <div className="home--name">Hello! Welcome to my page</div>
                    <div className="home--description">
                        <TypeWriter value="I´m Software developer  Python , Javascript" />
                    </div>

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
    )
}