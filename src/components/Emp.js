import React from 'react';    //Porque vamos a usar JXS
import './styles/Emp.css'
import empLogo from '../images/empleado_icon.png';
import Gravatar from './Gravatar';

class Emp extends React.Component{
    render(){
        return (
            <div className="Emp">
                <div className="Emp__header">
                    <img src={empLogo} alt= "Datos Generales"/>
                </div>
                <div className="Emp__section-name">
                <Gravatar
                    className="Emp__avatar" 
                    email={this.props.email}
                    alt= "Avatar"/>
                    <h1>
                        {this.props.noEmpleado} <br/>
                        {this.props.nombre}
                    </h1>
                </div>
                <div className="Emp__section-info">  
                    <h3>{this.props.apellidos}</h3>
                </div>
                <div className="Emp__footer">
                    #liverpool
                </div>
            </div>
        )
    }
}

export default Emp;