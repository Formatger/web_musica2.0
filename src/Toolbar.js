import React, { useEffect, useState, useRef } from 'react';
import './Estilos/Toolbar.css';
import './Estilos/Toolbar-button.css';
import './Estilos/Button-style.css';
import './Estilos/Toolbar-nombre.css';
import './Estilos/Toolbar-nombre2.css';



const Toolbar = (props) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', function () {
            var toolbar = document.querySelector('.Toolbar');

            if (window.scrollY > 0) {
                toolbar.style.backgroundColor = 'rgba(0, 128, 0, 0.4)'; // Cambia 'aqua' al color de fondo deseado
                toolbar.style.borderBottom = '3px solid black'; // Cambia 'black' al color del borde deseado
            } else {
                toolbar.style.backgroundColor = 'transparent';
                toolbar.style.borderBottom = 'none';
            }
        });
    }, []); // Asegúrate de que este efecto solo se ejecute una vez al montar el componente


    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const { references } = props;

    return (
        <div className="Toolbar">
            <div className='Toolbar-nombre'>
                <h1 className='Toolbar-nombre2'>
                    Albert Formatger
                </h1>
            </div>
            <div className='Toolbar-button'>
                <a className='Button-style' onClick={() => scrollToSection(references.homeRef)}>Home</a>
                <a className='Button-style' onClick={() => scrollToSection(references.aboutMeRef)}>Bio</a>
                <a className='Button-style' onClick={() => scrollToSection(references.mediaRef)}>Media</a>
                <a className='Button-style' onClick={() => scrollToSection(references.contactRef)}>Contact</a>
            </div>
        </div>
    )
}

export default Toolbar;