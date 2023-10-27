import './Estilos/App.css';
import './Estilos/Toolbar.css';
import './Estilos/Home.css';
import './Estilos/fuentes.css'
import Toolbar from './Toolbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Media from './Media';
import Contact from './Contact';
import MusicPlayer from './MusicPlayer';
import React, { useRef } from 'react';

function App() {
  const ref = {
    homeRef: useRef(null),
    aboutMeRef: useRef(null),
    serviceRef: useRef(null),
    mediaRef: useRef(null),
    contactRef: useRef(null),
  }

  const audio = [
    "/audio/2013 - Nits d'Estiu - El Secret De París.mp3",
    "/audio/2016 - Guerra - Marcos Franz.mp3",
    "/audio/2015 - No Tenemos Cura - Zarigüeya.mp3",
    "/audio/2016 - No Et Vull Deixar Marxar - Marcos Franz.mp3",
    "/audio/2014 - Come On Kill Me - Full equip.mp3",
    "/audio/2013 - Mira't - El Secret De París.mp3",
    "/audio/2015 - Salta - Zarigüeya.mp3",

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
      <div ref={ref.serviceRef}>
        <Service />
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
