import React, { useState } from 'react'
import {MdAccountBox, MdChat, MdContacts, MdDesktopMac, MdHouse, MdWork} from 'react-icons/md'
import './header.css'

export const Header = () => {
    const {click , setCLick} = useState(false)
    function getClick(e){
        console.log('alguem cliclou' , e.target.className)

    
    }
    return(
        <div className='content-header'>
            <header className='header'>
            <div className="header-left">
                <div className="header-photo">
                    photo here
                </div>
            </div>

            <div className='header-right'>
                    
                <div className="navigation">
                    <ul>
                        <li className="list  home active"  onClick={getClick}>
                            <a href="#">
                                <div className="icon">
                                    <MdHouse/>
                                </div>
                                <div className="text">Home</div>
                            </a>
                        </li>

                        <li className="list contact "  onClick={getClick}>
                            <a href="#">
                                <div className="icon">
                                    <MdAccountBox/>
                                </div>
                                <div className="text">Contact</div>
                            </a>
                        </li>

                        <li className="list project"  onClick={getClick}>
                            <a href="#">
                                <div className="icon">
                                    <MdDesktopMac/>
                                </div>
                                <div className="text">Projects</div>
                            </a>
                        </li>

                        <li className="list message"  onClick={getClick}>
                            <a href="#">
                                <div className="icon">
                                    <MdChat/>
                                </div>
                                <div className="text">Messages</div>
                            </a>
                        </li>

                        <li className="list profile"  onClick={getClick}>
                            <a href="#">
                                <div className="icon">
                                    <MdAccountBox/>
                                </div>
                                <div className="text">About</div>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
        </header>
        </div>
        
    )
}