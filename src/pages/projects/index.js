import React from "react";
import Right from "../components/containerRight";

import background from '../images/background.jpg'
import './styles.css'
export default function Projects(){
    return(

        <div className="container">
        <div className="contact--left">
            <section className="contact" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'certer',
                backgroundImage: `url(${background})`

            }}>

                <div class="contact--vetical">
                    <div class="contact--horizontal">
                        <div class="contact--description">
                            <div class="contact--contacts">
                            </div>
                        </div>


                    </div>
                </div>


            </section>
        </div>
        <Right />
    </div>


    )
}