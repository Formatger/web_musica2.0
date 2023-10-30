import React, { useState } from "react";
import './Estilos/About.css';

function About() {

    const abrirCorreo = () => {
        window.location.href = "mailto:albert_furma@hotmail.com";
    };

    const abrirInstagram = () => {
        window.open("https://www.instagram.com/albertformatger/", "_blank");
    };

    const abrirYouTube = () => {
        window.open("https://www.youtube.com/@AlbertFormatger", "_blank");
    };

    return (
        <div className="About">
            <div className="Foto_desc">
            </div>
            <div className="Descripcion">
                <h className='Title'>SOBRE MÍ</h>
                <div className="contenedor-contenido">
                    <a className="contenido">
                        Nacido el 21/02/1995 en Barcelona, España.
                        Se inició en el mundo de la música a los 12 años cuando le regalaron a su hermana una guitarra eléctrica.
                        Es el primer músico de la familia de todas su generaciones.
                        <br /><br />
                        Al poco tiempo, su hermana empezó a prestarle la guitarra para que iniciara su aprendizaje por cuenta propia. Fue en aquel entonces cuando sus padres compartieron con él sus gustos musicales.
                        <br /><br />
                        Aprendió tocando piezas musicales de las grandes leyendas de las seis cuerdas como Angus Young, Ritchie Blackmore, Slash, BB King, David Gilmourn Clapton, Hendrix…
                        <br /><br />
                        A los 2 años de chapurrear y aprender lo poco que cazaba por youtube, al ver la facilidad en el instrumento, recibió clases de guitarra 30’ semanales durante 4 años con grandes docentes. Luego continuó formandose autodidactamente como al inicio.
                        A los 14 años ya había formado su primera banda de rock con la que actualmente sigue en funcionamiento.
                        <br /><br />
                        A los 16 años grabó un EP de 4 temas con un grupo de pop-rock catalán con el que entró en formación y otro con su banda de rock.
                        <br /><br />
                        A esa edad recibió por parte de su padre, una guitarra construida por el 100% artesanal, más adelante llegó otra y actualmente la tercera está en proceso.
                        <div className="contenedor-icon">
                            <img src='/icon/instagram.png' onClick={abrirInstagram} />
                            <img src='/icon/youtube.png' onClick={abrirYouTube} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
