import React from "react";
import './Estilos/Contact.css';

function Contact() {
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
        <div className="Contact-container">
            <div className="Contact">
                <h className='Title-contact'>CONTACTO</h>
                <div className="Contact-linea">
                    <img className="Contact-emoji" src='/icon/email.png' alt="Correo Electrónico" onClick={abrirCorreo} />
                    <h1 className="Contact-letra">albert_furma@hotmail.com</h1>
                </div>
                <div className="Contact-linea">
                    <img className="Contact-emoji" src='/icon/instagram.png' alt="Instagram" onClick={abrirInstagram} />
                    <h1 className="Contact-letra">@albertformatger</h1>
                </div>
                <div className="Contact-linea" >
                    <img className="Contact-emoji" src='/icon/youtube.png' alt="YouTube" onClick={abrirYouTube} />
                    <h1 className="Contact-letra">@Albertormatger</h1>
                </div>
            </div>
            <div className="foto-final-movil">
            </div>
        </div>
    );
}

export default Contact;