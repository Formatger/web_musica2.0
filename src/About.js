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
            <div className="Descripcion">
                <h className='Title'>SOBRE MÍ</h>
                <div className="contenedor-contenido">
                    <a className="contenido">
                        Nacido el 21 de febrero de 1995 en Barcelona, España, este músico comenzó su viaje
                        en el mundo de la música a los 12 años cuando le regalaron una guitarra eléctrica a su hermana.
                        <br /><br />
                        En poco tiempo, su hermana empezó a prestarle la guitarra para que pudiera iniciar su aprendizaje
                        por sí mismo. Fue entonces cuando sus padres compartieron con él sus gustos musicales.
                        Se convirtió en el primer músico de la familia.
                        <br /><br />
                        Aprendió a tocar piezas musicales de las leyendas de las seis cuerdas, como Angus Young, Ritchie Blackmore,
                        Slash, BB King, David Gilmour y Clapton, así como Hendrix.
                        <br /><br />
                        Después de aproximadamente dos años de experimentar y aprender lo que podía de YouTube, al ver su
                        habilidad en el instrumento, comenzó a recibir clases de guitarra de 30 minutos semanales durante 4 años con diferentes maestros.
                        Luego, continuó su formación de forma autodidacta, tal como lo hizo al principio.
                        <br /><br />
                        A los 14 años, ya había formado su primera banda de rock, con la que todavía está en funcionamiento en la
                        actualidad.
                        <br /><br />
                        A los 16 años, grabó un EP de 4 temas con un grupo de pop - rock catalán con el que se unió, y otro con su
                        banda de rock.
                        <br /><br />
                        A esa edad, su padre le regaló una guitarra completamente artesanal hecho por él, y más tarde llegaria una mas.
                        Actualmente, está en proceso la construcción de su la tercera guitarra para terminar la triologia.
                        <br /><br />
                        A los 17 años, participó en la grabación y composición de arreglos de guitarra para el álbum del artista
                        Marcos Franz, y desde entonces ha colaborado con varios artistas en diferentes proyectos.
                        <br /><br />
                        Desde los 18 años, ha dedicado gran parte de su tiempo al mundo de los conciertos en vivo, donde la
                        demanda ha ido en aumento hasta el día de hoy.
                        <br /><br />
                        Actualmente, se encuentra en pleno proceso de grabación de su primer disco con la banda de rock
                        Black Amber.Además, se dedica a realizar actuaciones en vivo(destacando en el tributo a Fitos y el Fitipaldi),
                        a la enseñanza del instrumento y a sesiones de estudio tanto en modalidad online como presencial.
                        ¡¡Ah!! ¡Y todo esto lo compagina con su trabajo como ingeniero!

                        <div className="contenedor-icon">
                            <img src='/icon/instagram.png' onClick={abrirInstagram} />
                            <img src='/icon/youtube.png' onClick={abrirYouTube} />
                        </div>
                    </a >
                </div >
            </div >
            <div className="Foto_desc">
            </div>
        </div >
    );
}

export default About;
