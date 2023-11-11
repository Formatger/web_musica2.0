import React from "react";
import './Estilos/Media.css';
import Carousel from "./Image_slider";
import VideoSlider from "./Video_slider";
import { useEffect, useState } from "react";


function Media() {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    let images;
    let serviceImages;

    if (isMobile) {
        images = [
            'fotos/fotos-movil/1.jpg', 'fotos/fotos-movil/2.jpg', 'fotos/fotos-movil/3.jpg', 'fotos/fotos-movil/4.jpg',
            'fotos/fotos-movil/5.jpg', 'fotos/fotos-movil/6.jpg', 'fotos/fotos-movil/7.jpg', 'fotos/fotos-movil/8.jpg',
            'fotos/fotos-movil/9.jpg', 'fotos/fotos-movil/10.jpg', 'fotos/fotos-movil/11.jpg', 'fotos/fotos-movil/12.jpg',
            'fotos/fotos-movil/13.jpg', 'fotos/fotos-movil/14.jpg', 'fotos/fotos-movil/15.jpg', 'fotos/fotos-movil/16.jpg',
            'fotos/fotos-movil/17.jpg', 'fotos/fotos-movil/18.jpg', 'fotos/fotos-movil/19.jpg', 'fotos/fotos-movil/20.jpg',
            'fotos/fotos-movil/21.jpg', 'fotos/fotos-movil/22.jpg', 'fotos/fotos-movil/23.jpg', 'fotos/fotos-movil/24.jpg',
            'fotos/fotos-movil/25.jpg', 'fotos/fotos-movil/26.jpg', 'fotos/fotos-movil/27.jpg', 'fotos/fotos-movil/28.jpg',
            'fotos/fotos-movil/29.jpg', 'fotos/fotos-movil/30.jpg', 'fotos/fotos-movil/31.jpg', 'fotos/fotos-movil/32.jpg',
            'fotos/fotos-movil/33.jpg', 'fotos/fotos-movil/34.jpg', 'fotos/fotos-movil/35.jpg', 'fotos/fotos-movil/36.jpg',
            'fotos/fotos-movil/37.jpg', 'fotos/fotos-movil/38.jpg', 'fotos/fotos-movil/39.jpg', 'fotos/fotos-movil/41.jpg',
            'fotos/fotos-movil/42.jpg', 'fotos/fotos-movil/43.jpg', 'fotos/fotos-movil/44.jpg', 'fotos/fotos-movil/45.jpg',
            'fotos/fotos-movil/46.jpg', 'fotos/fotos-movil/47.jpg', 'fotos/fotos-movil/48.jpg', 'fotos/fotos-movil/49.jpg',
            'fotos/fotos-movil/50.jpg', 'fotos/fotos-movil/51.jpg', 'fotos/fotos-movil/52.jpg', 'fotos/fotos-movil/53.jpg',
            'fotos/fotos-movil/54.jpg', 'fotos/fotos-movil/55.jpg', 'fotos/fotos-movil/56.jpg', 'fotos/fotos-movil/57.jpg',
            'fotos/fotos-movil/58.jpg', 'fotos/fotos-movil/59.jpg', 'fotos/fotos-movil/60.jpg', 'fotos/fotos-movil/61.jpg',
            'fotos/fotos-movil/62.jpg',
        ];
    } else {
        images = [
            'fotos/fotos-pc/1.jpg', 'fotos/fotos-pc/2.jpg', 'fotos/fotos-pc/3.jpg', 'fotos/fotos-pc/4.jpg',
            'fotos/fotos-pc/5.jpg', 'fotos/fotos-pc/6.jpg', 'fotos/fotos-pc/7.jpg', 'fotos/fotos-pc/8.jpg',
            'fotos/fotos-pc/9.jpg', 'fotos/fotos-pc/10.jpg', 'fotos/fotos-pc/11.jpg', 'fotos/fotos-pc/12.jpg',
            'fotos/fotos-pc/13.jpg', 'fotos/fotos-pc/14.jpg', 'fotos/fotos-pc/15.jpg', 'fotos/fotos-pc/16.jpg',
            'fotos/fotos-pc/17.jpg', 'fotos/fotos-pc/18.jpg', 'fotos/fotos-pc/19.jpg', 'fotos/fotos-pc/20.jpg',
            'fotos/fotos-pc/21.jpg', 'fotos/fotos-pc/22.jpg', 'fotos/fotos-pc/23.jpg', 'fotos/fotos-pc/24.jpg',
            'fotos/fotos-pc/25.jpg', 'fotos/fotos-pc/26.jpg', 'fotos/fotos-pc/27.jpg', 'fotos/fotos-pc/28.jpg',
            'fotos/fotos-pc/29.jpg', 'fotos/fotos-pc/30.jpg', 'fotos/fotos-pc/31.jpg', 'fotos/fotos-pc/32.jpg',
            'fotos/fotos-pc/33.jpg', 'fotos/fotos-pc/34.jpg', 'fotos/fotos-pc/35.jpg', 'fotos/fotos-pc/36.jpg',
            'fotos/fotos-pc/37.jpg', 'fotos/fotos-pc/38.jpg', 'fotos/fotos-pc/39.jpg', 'fotos/fotos-pc/41.jpg',
            'fotos/fotos-pc/42.jpg', 'fotos/fotos-pc/43.jpg', 'fotos/fotos-pc/44.jpg', 'fotos/fotos-pc/45.jpg',
            'fotos/fotos-pc/46.jpg', 'fotos/fotos-pc/47.jpg', 'fotos/fotos-pc/48.jpg', 'fotos/fotos-pc/49.jpg',
            'fotos/fotos-pc/50.jpg', 'fotos/fotos-pc/51.jpg', 'fotos/fotos-pc/52.jpg', 'fotos/fotos-pc/53.jpg',
            'fotos/fotos-pc/54.jpg', 'fotos/fotos-pc/55.jpg', 'fotos/fotos-pc/56.jpg', 'fotos/fotos-pc/57.jpg',
            'fotos/fotos-pc/58.jpg', 'fotos/fotos-pc/59.jpg', 'fotos/fotos-pc/60.jpg', 'fotos/fotos-pc/61.jpg',
            'fotos/fotos-pc/62.jpg', 'fotos/fotos-pc/63.jpg',
        ];
    }

    const videos = [
        '0z2_PgYmNKk',
        '0_Vu68eAED0',
        'gV4tXJjxDa4',
        'zXmk-QT-Vlk',
        'o4mvnoW_v7k',
        '8u9YkOMAepM',
        'BmFGFuQfmXE',
    ];

    return (
        <div className='Media' >
            <div>
                <Carousel images={images} />
            </div>
            <div>
                <VideoSlider videos={videos} />
            </div>
        </div >
    );
}

export default Media;
