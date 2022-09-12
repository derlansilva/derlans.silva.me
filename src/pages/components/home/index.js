
import React from "react"
import { TypeAnimation } from "react-type-animation"

import './home.css'

export const Home = () => {
    return (
        <div className="content-home">
            <div className="content-word-one">
                welcome to my page
            </div>
            <div className="content-word-two">
                <TypeAnimation
                    sequence={[
                        '            ',
                        'My name is Derlan silva I´m Full-stack developer', 1000
                    ]}
                    wrapper="div"
                    cursor={false}
                    style={{ fontSize: '1.4em' }}
                />

            </div>
            <div className="content-word-three">
                <TypeAnimation
                    sequence={['                                          ', 0, 'Javascript', 5000, 'python', 6000,]}
                    wrapper="h1"
                    cursor={false}
                    repeat={Infinity}
                    style={{ fontSize: '1.2em' }}
                />

            </div>
        </div>
    )
}