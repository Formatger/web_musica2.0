import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import './Estilos/Media.css';

function Carousel({ images}) {

    const flickityOptions = {
        initialIndex: 3,
        wrapAround: true,
        selectedAttraction: 0.01,
        autoPlay:true,
        prevNextButtons: true,
        pageDots: false,
        pauseAutoPlayOnHover: false,
        arrowShape: {
            x0: 30,
            x1: 65, y1: 35,
            x2: 65, y2: 35,
            x3: 55
        }


    }
    return (
        <div className="fotos-container">
            <h1 className='Title-media'>LIVE MEDIA</h1>
            <div className="carousel-container">
                <Flickity
                className={'fotos'}
                options={flickityOptions}
                >
                    {images.map((image, index) => (
                            <img src={image} alt="" />
                    ))}
                </Flickity>
            </div>
        </div>
    );
}

export default Carousel;


// import React, { useState, useEffect } from 'react';
// import './Estilos/Media.css';
// import { motion } from 'framer-motion';

// const ImageSlider = ({ images }) => {
//     const [sliderPosition, setSliderPosition] = useState(0);
//     const [dragStartX, setDragStartX] = useState(0);
//     const [isDragging, setIsDragging] = useState(false);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (!isDragging) {
//                 setSliderPosition(prevPosition => (prevPosition + 0.005) % 100);
//             }
//         }, 16);

//         return () => {
//             clearInterval(interval);
//         };
//     }, [images.length, isDragging]);

//     const handleDragStart = (event) => {
//         setIsDragging(true);
//         setDragStartX(event.clientX);
//     };

//     const handleDragMove = (event) => {
//         if (isDragging) {
//             const dragDistance = event.clientX - dragStartX;
//             setSliderPosition(prevPosition => (prevPosition - dragDistance * 0.005) % (images.length * 100));
//             setDragStartX(event.clientX);
//         }
//     };

//     const handleDragEnd = () => {
//         setIsDragging(false);
//     };

//     return (
//         <div className='slider-container'>
//             <motion.div
//                 className='slider'
//                 style={{ x: `-${sliderPosition}%` }}
//                 onMouseDown={handleDragStart}
//                 onMouseMove={handleDragMove}
//                 onMouseUp={handleDragEnd}
//             >
//                 {images.map((image, index) => (
//                     <div className='item' key={index}>
//                         <img src={image} alt="" />
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// }

// export default ImageSlider;


// import React, { useState, useEffect } from 'react';
// import './Estilos/slider-container.css';
// import { motion } from 'framer-motion';

// const ImageSlider = ({ images }) => {
//     const [sliderPosition, setSliderPosition] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             // Ajusta el valor de 5 para cambiar la velocidad del movimiento (en píxeles por intervalo)
//             setSliderPosition(prevPosition => (prevPosition + 0.1) % (images.length * 100));
//         }, 12); // 60 cuadros por segundo (1000ms / 60fps = 16.67ms por intervalo)

//         return () => {
//             clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
//         };
//     }, [images.length]);

//     return (
//         <div className='slider-container'>
//             <motion.div className='slider' style={{ x: `-${sliderPosition}%` }}>
//                 {images.map((image, index) => (
//                     <div className='item' key={index}>
//                         <img src={image} alt="" />
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// }

// export default ImageSlider;