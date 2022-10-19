import React from 'react';
import './styles/Home.css';
import astronaut from '../images/img404.webp';

function NotFound(){
    return (
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="Home__col col-12 col-md-4">
                        <h1>404 Archivo no encontrado</h1>
                    </div>
                    <div className="Home__col col-12 col-md-4">
                        <img
                            src={astronaut}
                            alt="Astronaut"
                            className="img-fluid p-4"
                        />
                    </div>  
                </div>        
            </div>
        </div>
    );
}

export default NotFound;