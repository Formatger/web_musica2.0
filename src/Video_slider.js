import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import './Estilos/Media.css';
import YouTube from 'react-youtube';

function VideoSlider({ videos }) {

    const flickityOptions = {
        wrapAround: true,
        pageDots: false,
        pauseAutoPlayOnHover: false,
        arrowShape: {
            x0: 30,
            x1: 65, y1: 35,
            x2: 65, y2: 35,
            x3: 55
        }
    }

    // const newWidth = 1000; // Nuevo ancho del visor del video
    // const newHeight = (newWidth / 16) * 9; // Calcula la altura para mantener la relación de aspecto 16:9
    const opts = {
        // width: newWidth.toString(),  // Convierte el ancho a cadena y asigna al atributo width
        // height: newHeight.toString(),
        playerVars: {
            autoplay: 0,
        },
    }

    return (
        <div className="slider-container-video" >
            <h className='Title-media'>LIVE MEDIA</h>
            <Flickity
                className={'video'}
                options={flickityOptions}
            >
                {videos.map((video, index) => (
                    <YouTube className='item-video' videoId={video} opts={opts} />
                ))}
            </Flickity>
        </div >
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