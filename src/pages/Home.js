import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Home.css';
import logoImage from '../images/liverpool-logo.jpeg';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home__col col-12 col-md-4">
                        <img
                            src={logoImage}
                            alt="Logo"
                            className="img-fluid mb-2"
                        />

                        <h1>Evaluación Práctica</h1>
                        <Link className="btn btn-primary" to="/emps">
                            Comenzar
                        </Link>
                        </div>

                        <div className="Home__col d-none d-md-block col-md-8">
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;