import React from "react"
import Right from "../components/containerRight"

import background from '../images/background.jpg'
import './style.css'

export default function Home() {
    return (
        <div className="container">
            <div className="home--left">
                <section className="home" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'certer',
                    backgroundImage: `url(${background})`

                }}>
                    <div className="home--vetical">
                        <div className="home--horizontal">
                            <div className="home--name">Hello! Welcome to my page</div>

                            <div className="home--description">
                                I´m Software developer  Python , Javascript
                            </div>


                        </div>
                    </div>


                </section>
            </div>

                <Right/>
        </div>
    )
}