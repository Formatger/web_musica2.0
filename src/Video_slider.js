import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './Estilos/slider-container-video.css';
import { motion } from 'framer-motion';

const VideoSlider = ({ videos }) => {
    const [videoIndex, setVideoIndex] = useState(0);



    const newWidth = 1000; // Nuevo ancho del visor del video
    const newHeight = (newWidth / 16) * 9; // Calcula la altura para mantener la relación de aspecto 16:9

    const opts = {
        width: newWidth.toString(),  // Convierte el ancho a cadena y asigna al atributo width
        height: newHeight.toString(),
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <motion.div className='slider-container-video'>
            <motion.div className='slider-video ' drag='x' dragConstraints={{ right: 0 }}>
                {videos.map((video, index) => (
                    <motion.div key={index}>
                        <YouTube className='item-video' videoId={video} opts={opts} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default VideoSlider;