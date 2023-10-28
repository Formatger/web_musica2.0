import React, { useEffect, useState, useRef } from 'react';
import './Estilos/Toolbar.css';

const Toolbar = (props) => {

    useEffect(() => {
        let timeout;
        let lastScrollTop = 0;

        const handleScroll = () => {
            var toolbar = document.querySelector('.Toolbar');
            var nombre = document.querySelector('.Toolbar-nombre2');
            var button = document.querySelectorAll('.Button-style');

            if (window.scrollY > lastScrollTop) {
                toolbar.style.backgroundColor = 'rgba(0, 0, 0,1)';
                if (timeout) {
                    clearTimeout(timeout);
                }

                timeout = setTimeout(() => {
                    toolbar.style.opacity = '0';
                    toolbar.style.height = '0';
                    nombre.style.fontSize = '0';
                    button.forEach(button => {
                        button.style.fontSize = '0';
                    });
                }, 1000);
            }
            else {
                toolbar.style.opacity = '1';
                toolbar.style.height = '100px';
                nombre.style.fontSize = '64px';
                button.forEach(button => {
                    button.style.fontSize = '30px';
                });
                if (timeout) {
                    clearTimeout(timeout);
                }
            }
            lastScrollTop = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                <a className='Button-style' onClick={() => scrollToSection(references.aboutMeRef)}>Sobre mí</a>
                <a className='Button-style' onClick={() => scrollToSection(references.serviceRef)}>Servicios</a>
                <a className='Button-style' onClick={() => scrollToSection(references.mediaRef)}>Media</a>
                <a className='Button-style' onClick={() => scrollToSection(references.contactRef)}>Contact</a>
            </div>
        </div>
    )
}

export default Toolbar;