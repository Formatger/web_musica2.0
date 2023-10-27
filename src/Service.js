import './Estilos/Service.css';

function Service() {
    return (
        <div className="Service-container">
            <h className='Title-service'>SERVICIOS</h>
            <div className='container-card'>
                <div className='card' >
                    <div className='card-image'>
                        <img src='/fotos/49.JPG'/>
                    </div>
                    <div className='card-text'>
                        <h className='title-card'>
                            Eventos musicales
                        </h>
                        <p className='into-card'>
                            · Conciertos <br/><br/>
                            · Sustituciones <br/><br/>
                            · Alquiler de back-line <br/><br/>
                            · Producción y road management <br/><br/>
                        </p>
                    </div>
                </div>
                <div className='card' >
                    <div className='card-image' >
                        <img src='/fotos/25.JPG'/>
                    </div>
                    <div className='card-text'>
                    <h className='title-card'>
                            Clases de guitarra
                        </h>
                        <p className='into-card'>
                            · Modalidad online / presencial <br/><br/>
                            · Todos los estilos: Blues, Rock, Heavy, Funk, Jazz, Pop <br/><br/>
                            · Teoría musical, harmonía y solfeo <br/><br/>
                            · Composición, grabación y edición musical <br/><br/>
                        </p>
                    </div>
                </div>
                <div className='card' >
                    <div className='card-image'>
                        <img src='/fotos/25.JPG'/>
                    </div>
                    <div className='card-text'>
                    <h className='title-card'>
                            Músico de sesión
                        </h>
                        <p className='into-card'>
                            · Modalidad online / presencial <br/><br/>
                            · Grabación de guitarras <br/><br/>
                            · Composición de arreglos para canciones <br/><br/>
                            · Composición musical <br/><br/>
                            · Producción musical <br/><br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Service;