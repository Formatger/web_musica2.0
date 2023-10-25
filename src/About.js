import React, { useState } from "react";
import './Estilos/About.css';
import './Estilos/Descripcion.css';
import './Estilos/Foto_desc.css';
import './Estilos/boton.css';
import './Estilos/contenido.css';

function About() {

    return (
        <div className="About">
            <div className="Foto_desc">
            </div>
            <div className="Descripcion">
                <div className="contenedor-contenido">
                    <a className="contenido">Me inicie en el mundo de la música a los 12 años, cuando le regalaron a mi hermana una guitarra. Al poco tiempo
                        me la iba dejando y así es como empeze a aprender por mi cuenta. Fue en aquel entonces cuando mis padres
                        me iniciaron en el mundo de la música blues y rock, compartiendo sus gustos musicales conmigo. Aprendí tocando
                        pieza33s de las grandes leyendas de la guitarra como Angus young, Ritchie Blackmore, Slah, David guilmour,
                        Eric Clapton, BB King, Hendrix y un largo listado dificil de resumir.
                        A los dos años de chapurrear y aprender lo poco que cazaba de youtube, al ver que no se me daba mal, me apunté
                        a clases de guitarra dónde recibí, durante 4 años, media hora semanal de consejos y información de grandes
                        profesores. A los
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
