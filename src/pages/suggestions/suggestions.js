
import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import Right from '../components/containerRight';
import MenuResponsive from '../components/menuResponsive';
import './suggestions.css';

export default function Suggestions() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    function handleSubmit(){

    }

    return (
        <>
            <div className='content--left'>
                    <div className='suggestions--page'>
                        <div className='suggestions--text'>Sugestões</div>
                        <form className='form--suggestions' onChange={handleSubmit}>
                            <span>email</span>
                            <imput type="email" className="suggestions--input" name="email"/>
                            <span>Descrição</span>
                            <textarea className='suggestions--area' placeholder='escreva aqui sua sugestão de melhoria'/>
                            <button type='submit'>Enviar sugestão</button>
                        </form>
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