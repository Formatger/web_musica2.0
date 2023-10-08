import './Estilos/App.css';
import './Estilos/Toolbar.css';
import './Estilos/Cover.css';
import Toolbar from './Toolbar';
import Home from './Home';
import About from './About';
import Media from './Media';
import Contact from './Contact';
import MusicPlayer from './MusicPlayer';
import React, { useEffect, useState, useRef } from 'react';

function App() {
  const ref = {
    homeRef: useRef(null),
    aboutMeRef: useRef(null),
    mediaRef: useRef(null),
    contactRef: useRef(null),
  }

  const audio = [
    '/3.mp3',
    '/2.mp3',
  ]

  return (
    <div>
      <MusicPlayer audioFiles={audio} />
      <div>
        <Toolbar references={ref} />
      </div>
      <div ref={ref.homeRef}>
        <Home />
      </div>
      <div ref={ref.aboutMeRef}>
        <About />
      </div>
      <div ref={ref.mediaRef}>
        <Media />
      </div>
      <div ref={ref.contactRef}>
        <Contact />
      </div>
    </div>

  );
}

export default App;
