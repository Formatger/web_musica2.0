import React from "react";
import './Estilos/Media.css';
import ImageSlider from "./Image_slider";
import VideoSlider from "./Video_slider";


function Media() {
    const images = [
        'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/08/ACDC-Large.jpg',
        'https://ams3.digitaloceanspaces.com/graffica/2022/11/ACDC-1000x650-1-1000x570.jpeg',
        'https://static.eldiario.es/clip/a395e85b-0354-4bdb-b57b-4b8e3f527125_16-9-aspect-ratio_default_0.jpg',
        'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/08/ACDC-Large.jpg',
        'https://ams3.digitaloceanspaces.com/graffica/2022/11/ACDC-1000x650-1-1000x570.jpeg',
        'https://static.eldiario.es/clip/a395e85b-0354-4bdb-b57b-4b8e3f527125_16-9-aspect-ratio_default_0.jpg',
        'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/08/ACDC-Large.jpg',
        'https://ams3.digitaloceanspaces.com/graffica/2022/11/ACDC-1000x650-1-1000x570.jpeg',
        'https://static.eldiario.es/clip/a395e85b-0354-4bdb-b57b-4b8e3f527125_16-9-aspect-ratio_default_0.jpg',
        'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/08/ACDC-Large.jpg',
        'https://ams3.digitaloceanspaces.com/graffica/2022/11/ACDC-1000x650-1-1000x570.jpeg',
        'https://static.eldiario.es/clip/a395e85b-0354-4bdb-b57b-4b8e3f527125_16-9-aspect-ratio_default_0.jpg',
        // // Agrega más URLs de imágenes según sea necesario
    ];

    const videos = [
        'https://www.youtube.com/watch?v=gV4tXJjxDa4',
        'https://www.youtube.com/watch?v=o4mvnoW_v7k',
        'https://www.youtube.com/watch?v=gV4tXJjxDa4',
        'https://www.youtube.com/watch?v=o4mvnoW_v7k',

        // // Agrega más URLs de imágenes según sea necesario
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
