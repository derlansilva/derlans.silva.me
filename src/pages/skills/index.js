import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';



import Right from '../components/containerRight';
import MenuResponsive from '../components/menuResponsive';
import reactnative from '../../pages/images/react_native.gif'
import node from '../../pages/images/node.gif'
import reactjs from '../../pages/images/reactjs.gif'
import python from '../../pages/images/python.gif'


import './styles.css'


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>

            <div className='content--left'>
                <div className="home--page">
                    <div className='skills--page'>

                        <div className='skill--section'>
                            <div className='skill--list'>
                                <div className='skill--tema'>Desenvolvimento de aplicatiovos com React-native</div>
                                <img className='skill--image' src={reactnative} />
                                <div className='skill--text'>
                                    No ano de 2020 desidi iniciar o aprendizado de uma nova tecnologia 
                                    na qual foi desenvolvido essa pagina
                                    apos assitir um video no you tube , e me apaixonei de imediato pelo reactjs
                                </div>
                            </div>
                        </div>
                        <div className='skill--section'>
                            <div className='skill--list'>
                                <div className='skill--tema'>Desenvolvimento front-end com React</div>
                                <img className='skill--image' src={reactjs} />
                                <div className='skill--text'>
                                    No ano de 2020 desidi iniciar o aprendizado de uma nova tecnologia 
                                    na qual foi desenvolvido essa pagina
                                    apos assitir um video no you tube , e me apaixonei de imediato pelo reactjs
                                </div>
                            </div>
                        </div>
                        <div className='skill--section'>
                            <div className='skill--list'>
                                <div className='skill--tema'>Desenvolvimento back-end com Node.js</div>
                                <img className='skill--image' src={node} />
                            </div>
                        </div>
                        <div className='skill--section'>
                        <div className='skill--list'>
                            <div className='skill--tema'>Desenvolvimento Backend Python</div>
                            <img className='skill--image' src={python} />
                        </div>

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
    );
}

export default Navbar;

