import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './Estilos/slider-container-video.css';
import { motion } from 'framer-motion';

const VideoSlider = ({ videos }) => {
    const [videoIndex, setVideoIndex] = useState(0);

    const opts = {
        width: '90%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <motion.div className='slider-container-video'>
            <motion.div className='slider-video' drag='x' dragConstraints={{ right: 0 }}>
                {videos.map((video, index) => (
                    <motion.div className='slider-video' key={index}>
                        <YouTube videoId={video} opts={opts} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default VideoSlider;



// import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
// import './Estilos/slider-container-video.css';
// import { motion } from 'framer-motion';






//     return (
//         <motion.div className='slider-container-video'>
//             <motion.div className='slider-video' drag='x' dragConstraints={{ right: 0 }}>
//                 {videos.map((video, index) => (
//                     <motion.div className='item-video' key={index}>
//                         <ReactPlayer url={`https://www.youtube.com/watch?v=${video}`} controls={true} opts={opts} />
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </motion.div>
//     );
// };

// export default VideoSlider;