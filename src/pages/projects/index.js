import React from "react";
import Right from "../components/containerRight";
import background from '../images/background.jpg'

import './styles.css'
export default function Projects() {
    return (

        <div className="container">
            <div className="project--left">
                <section className="project" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'certer',
                    backgroundImage: `url(${background})`,

                }}>

                    <div class="project--vetical">
                        <div class="project--horizontal">
                            <div className="project--name">Projetos</div>
                            <div class="project--description">

                            </div>

                        </div>

                        <div className="project--conteudo" >
                            conteudo aqui
                        </div>
                    </div>
                </section>
            </div>
            <Right />
        </div>

    )
}