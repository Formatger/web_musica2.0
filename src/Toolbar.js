import React, { useEffect, useState } from 'react';
import './Estilos/Toolbar.css';

const Toolbar = (props) => {

    const [isScrolldown, setIsScrolldown] = useState(false);
    const [isAtTop, setIsAtTop] = useState(false);
    const [isPause, setIsPause] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        let timeout;
        let lastScrollTop = 0;
        const handleScroll = () => {

            if (window.scrollY === 0) {
                if (timeout) {
                    clearTimeout(timeout);
                }

                timeout = setTimeout(() => {
                    setIsAtTop(true);
                    setIsScrolldown(false);
                }, 750);
            }

            else {
                if (window.scrollY > lastScrollTop) {
                    setIsAtTop(false);
                    setIsScrolldown(true);
                    if (timeout) {
                        clearTimeout(timeout);
                    }

                    timeout = setTimeout(() => {
                        setIsPause(true);
                        setIsScrolldown(false);
                    }, 750);
                }
                else {
                    setIsAtTop(false);
                    setIsPause(false);
                    setIsScrolldown(true);
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    timeout = setTimeout(() => {
                        setIsPause(true);
                    }, 750);
                }
            }

            lastScrollTop = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },
        []
    );

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const { references } = props;

    return (
        <div className={`Toolbar ${isScrolldown ? 'scroll-down' : ''} ${isAtTop ? 'at-top' : ''} ${isPause ? 'is-pause' : ''}`}>
            <div className='Toolbar-nombre'>
                <h1 className={`Toolbar-nombre2 ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(references.homeRef)}>
                    Albert Formatger
                </h1>
            </div>
            <div className={`HamburguesaButton ${isScrolldown ? 'scroll-down' : ''} ${isAtTop ? 'at-top' : ''} ${isPause ? 'is-pause' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
            </div>
            {isMenuOpen && (
                <div className='Mobile-menu'>
                    <a className='Mobile-menu-item' onClick={() => { scrollToSection(references.homeRef); setIsMenuOpen(false) }} >Home</a>
                    <a className='Mobile-menu-item' onClick={() => { scrollToSection(references.aboutMeRef); setIsMenuOpen(false) }}>About me</a>
                    <a className='Mobile-menu-item' onClick={() => { scrollToSection(references.serviceRef); setIsMenuOpen(false) }}>Services</a>
                    <a className='Mobile-menu-item' onClick={() => { scrollToSection(references.mediaRef); setIsMenuOpen(false) }}>Media</a>
                    <a className='Mobile-menu-item' onClick={() => { scrollToSection(references.contactRef); setIsMenuOpen(false) }}>Contact</a>
                    <a onClick={() => setIsMenuOpen(false)}><span className='close-icon'>x</span></a>
                </div>
            )}

            <div className='Toolbar-button'>
                <a className={`Button-style ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(references.homeRef)}>Home</a>
                <a className={`Button-style ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(references.aboutMeRef)}>About me</a>
                <a className={`Button-style ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(references.serviceRef)}>Services</a>
                <a className={`Button-style ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(references.mediaRef)}>Media</a>
                <a className={`Button-style ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(references.contactRef)}>Contact</a>
            </div>
        </div>
    )
}

export default Toolbar;