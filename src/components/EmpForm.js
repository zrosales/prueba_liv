import React from 'react';

class EmpForm extends React.Component {
    state = {
        jobTitle: "Designer"
    };
    
    handleClick = (e) => {
        console.log("Button was click");
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Número de Empleado</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="noEmpleado" value={this.props.formValues.noEmpleado}/>
                    </div>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="nombre" value={this.props.formValues.nombre}/>
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="apellidos" value={this.props.formValues.apellidos}/>
                    </div>
                    <div className="form-group">
                        <label>Ubicación</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text"
                            name="ubicacion"
                            value={this.props.formValues.ubicacion}
                        />                        
                    </div>
                    <div className="form-group">
                        <label>Sociedad</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text"
                            name="sociedad"
                            value={this.props.formValues.sociedad}
                        />                        
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </div>
        );
    }
}

export default EmpForm;