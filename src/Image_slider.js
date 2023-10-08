import React, { useState, useEffect } from 'react';
import './Estilos/slider-container.css'
import { motion } from 'framer-motion'

const ImageSlider = ({ images }) => {
    return (
        <motion.div className='slider-container'>
            <motion.div className='slider' drag='x' dragConstraints={{ right: 0 }}>
                {images.map(image => (
                    <motion.div className='item'>
                        <img src={image} alt="" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default ImageSlider
