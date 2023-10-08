import React from "react";
import './Estilos/Media.css';
import ImageSlider from "./Image_slider";
import VideoSlider from "./Video_slider";


function Media() {

    const images = [
        'fotos/1.jpg',
        'fotos/2.jpg',
        'fotos/3.jpg',
        'fotos/4.jpg',
        'fotos/5.jpg',
        'fotos/6.jpg',
        'fotos/7.jpg',
        'fotos/8.jpg',
        'fotos/9.jpg',
        'fotos/10.jpg',
        'fotos/11.jpg',
        'fotos/12.jpg',
        'fotos/13.jpg',
        'fotos/14.jpg',
        'fotos/15.jpg',
        'fotos/16.jpg',
        'fotos/17.jpg',
        'fotos/18.jpg',
        'fotos/19.jpg',
        'fotos/20.jpg',
        'fotos/21.jpg',
        'fotos/22.jpg',
        'fotos/23.jpg',
        'fotos/24.jpg',
        'fotos/25.jpg',
        'fotos/26.jpg',
        'fotos/27.jpg',
        'fotos/28.jpg',
        'fotos/29.jpg',
        'fotos/30.jpg',
        'fotos/31.jpg',
        'fotos/32.jpg',
        'fotos/33.jpg',
        'fotos/34.jpg',
        'fotos/35.jpg',
        'fotos/36.jpg',
        'fotos/37.jpg',
        'fotos/38.jpg',
        'fotos/39.jpg',
        'fotos/40.jpg',
        'fotos/41.jpg',
        'fotos/42.jpg',
        'fotos/43.jpg',
        'fotos/44.jpg',
        'fotos/45.jpg',
        'fotos/46.jpg',
        'fotos/47.jpg',
        'fotos/48.jpg',
        'fotos/49.jpg',
        'fotos/50.jpg',
        'fotos/51.jpg',
        'fotos/52.jpg',
        'fotos/53.jpg',
        'fotos/54.jpg',
        'fotos/55.jpg',
        'fotos/56.jpg',
    ]

    const videos = [
        'gV4tXJjxDa4',
        'o4mvnoW_v7k',
        'gV4tXJjxDa4',
        'o4mvnoW_v7k',
    ];

    return (
        <div className='Media' >
            <div>
                <ImageSlider images={images} />
            </div>
            <div>
                <VideoSlider videos={videos} />
            </div>
        </div >
    );
}

export default Media;
