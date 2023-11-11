import './Estilos/Service.css';
import { useState, useEffect } from 'react';



function Service({ }) {

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

    let serviceImages;

    if (isMobile) {
        serviceImages = ['fotos/fotos-movil/live_pic.jpg', 'fotos/fotos-movil/teacher_pic.jpg', 'fotos/fotos-movil/studio_pic.jpeg'];
    } else {
        serviceImages = ['fotos/fotos-movil/live_pic.jpg', 'fotos/fotos-movil/teacher_pic.jpg', 'fotos/fotos-movil/studio_pic.jpeg'];
    }
    return (
        <div className="Service-container">
            <h className='Title-service'>SERVICIOS</h>
            <div className='container-card'>
                <div className='card' >
                    <div className='card-image'>
                        <img src={serviceImages[0]} />
                    </div>
                    <div className='card-text'>
                        <h className='title-card'>
                            Eventos musicales
                        </h>
                        <p className='into-card'>
                            <ul>
                                <li>Conciertos</li><br />
                                <li>Sustituciones</li><br />
                                <li>Promotor de eventos</li><br />
                                <li>Alquiler de back-line</li><br />
                                <li>Producción y road management</li><br />
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='card' >
                    <div className='card-image' >
                        <img src={serviceImages[1]} />
                    </div>
                    <div className='card-text'>
                        <h className='title-card'>
                            Clases de guitarra
                        </h>
                        <p className='into-card'>
                            <ul>
                                <li>Modalidad online / presencial</li><br />
                                <li>Todos los estilos: Blues, Rock, Heavy, Funk, Jazz, Pop</li><br />
                                <li>Teoría musical, harmonía y solfeo</li><br />
                                <li>Composición, grabación y edición musical</li><br />
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='card' >
                    <div className='card-image'>
                        <img src={serviceImages[2]} />
                    </div>
                    <div className='card-text'>
                        <h className='title-card'>
                            Músico de sesión
                        </h>
                        <p className='into-card'>
                            <ul>
                                <li>Modalidad online / presencial</li><br />
                                <li>Grabación de guitarras</li><br />
                                <li>Composición de arreglos para canciones</li><br />
                                <li>Composición musical</li><br />
                                <li>Producción musical</li><br />
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className="imagen-fondo-2">
            </div>
        </div>
    );
}
export default Service;