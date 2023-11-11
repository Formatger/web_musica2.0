import { React, useState, useEffect, useLayoutEffect } from "react";
import './Estilos/Home.css';

function Home() {

    const [videoLoaded, setVideoLoaded] = useState(false);
    useEffect(() => {
        const video = document.querySelector('.video-background');

        video.addEventListener('loadeddata', () => {
            setVideoLoaded(true);
        });

        return () => {
            video.removeEventListener('loadeddata', () => {
                setVideoLoaded(true);
            });
        };
    }, []);


    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const checkIsMobile = (event) => {
            setIsMobile(event.matches);
        };

        checkIsMobile(mediaQuery);

        mediaQuery.addEventListener('change', checkIsMobile);

        return () => {
            mediaQuery.removeEventListener('change', checkIsMobile);
        };
    }, []);

    const videoSource = isMobile ? "/fotos/Portada-movil.mp4" : "/fotos/Portada-pc.mp4";

    return (
        <div className="Cover">
            {!videoLoaded && <div className="loading">LOADING...</div>}
            <video className="video-background" autoPlay muted loop playsInline>
                <source src={videoSource} />
            </video>
            <div className='First_sentence_block'>
                <div className="First_sentence">
                    "Music is like people:
                    Everybody<br /> has a tone and all of them are unique"
                </div>
            </div>
        </div>
    );
}

export default Home;


// function Home() {
//     return (
//         <div className="Cover">
//             <video className="video-background" autoPlay muted loop playsInline
//                 src="/fotos/Vid1.mp4">
//             </video>
//             <div className='First_sentence_block'>
//                 <div className="First_sentence">
//                     "Music is like people:
//                     Everybody<br /> has a tone and all of them are unique"
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

