import { React, useState, useEffect } from "react";
import './Estilos/Home.css';

function Home() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.querySelector('.video-background-mobile');

        video.addEventListener('loadeddata', () => {
            setVideoLoaded(true);
        });

        return () => {
            video.removeEventListener('loadeddata', () => {
                setVideoLoaded(true);
            });
        };
    }, []);

    return (
        <div className="Cover">
            {!videoLoaded && <div className="loading">Cargando...</div>}
            <video className="video-background-pc" autoPlay muted loop playsInline
                src="/fotos/Vid1pc.mp4">
            </video>
            <video className="video-background-mobile" autoPlay muted loop playsInline
                src="/fotos/Vid1.mp4">
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

