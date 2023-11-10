import React from "react";
import Flickity from "react-flickity-component";
import './Estilos/Media.css';

function VideoSlider({ videos }) {

    const flickityOptions = {
        grabbing: true,
        initialIndex: 2,
        wrapAround: true,
        selectedAttraction: 0.01,
        autoPlay: 7000,
        pauseAutoPlayOnHover: false,
        pageDots: true,
        lazyLoad: 2,
        prevNextButtons: false,
    }


    return (
        <div className="slider-container-video">
            <div className="Title-media">VIDEOS</div>
            <div className="video-container">
                <Flickity
                    className={'video'}
                    options={flickityOptions}
                >
                    {videos.map((video, index) => (
                        <iframe
                            key={index}
                            title={`video-${index}`}
                            src={`https://www.youtube.com/embed/${video}`}
                            allowFullScreen
                        />
                    ))}
                </Flickity>
            </div>
        </div>
    );
}

export default VideoSlider;

// import YouTube from 'react-youtube';
// import './Estilos/Media.css';
// import { motion } from 'framer-motion';

// const VideoSlider = ({ videos }) => {

//     const newWidth = 1000; // Nuevo ancho del visor del video
//     const newHeight = (newWidth / 16) * 9; // Calcula la altura para mantener la relación de aspecto 16:9

//     const opts = {
//         width: newWidth.toString(),  // Convierte el ancho a cadena y asigna al atributo width
//         height: newHeight.toString(),
//         playerVars: {
//             autoplay: 0,
//         },
//     };

//     return (
//         <motion.div className='slider-container-video'>
//             <motion.div className='slider-video ' drag='x' dragConstraints={{ right: 0 }}>
//                 {videos.map((video, index) => (
//                     <motion.div key={index}>
//                         <YouTube className='item-video' videoId={video} opts={opts} />
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </motion.div>
//     );
// };

// export default VideoSlider;