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
            <h className='Title-service'>SERVICES</h>
            <div className='container-card'>
                <div className='card' >
                    <div className='card-image'>
                        <img src={serviceImages[0]} />
                    </div>
                    <div className='card-text'>
                        <h className='title-card'>
                            Musical Events
                        </h>
                        <p className='into-card'>
                            <ul>
                                <li>Concerts</li><br />
                                <li>Substitutions / Backup</li><br />
                                <li>Event Promoter</li><br />
                                <li>Backline Rental</li><br />
                                <li>Production and Road Management</li><br />
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
                            Guitar Lessons
                        </h>
                        <p className='into-card'>
                            <ul>
                                <li>Online / In-person Modality</li><br />
                                <li>All Styles: Blues, Rock, Heavy, Funk, Jazz, Pop</li><br />
                                <li>Music Theory, Harmony, and Sight-reading</li><br />
                                <li>Composition, Recording, and Music Editing</li><br />
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
                            Sesion Musician
                        </h>
                        <p className='into-card'>
                            <ul>
                                <li>Online / In-person Modality</li><br />
                                <li>Guitar Recording</li><br />
                                <li>Arrangement Composition for Songs</li><br />
                                <li>Musical Composition</li><br />
                                <li>Music Production</li><br />
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