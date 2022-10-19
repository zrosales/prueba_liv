import React from 'react';
import './styles/EmpEdit.css'
import Emp from '../components/Emp';
import EmpForm from '../components/EmpForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class EmpEdit extends React.Component {
    state = { 
        loading: true,
        error:null,
        form: {
            noEmpleado: '',
            nombre: '',
            apellidos: '',
            ubicación: '',
            sociedad: '',
        }
    };
    componentDidMount(){
        this.fetchData();
    }

    fetchData= async e =>{
        this.setState({loading: true, error: null});
        try{
            const data = await api.emps.read(
                this.props.match.params.empId
            )
            this.setState({loading: false, form: data});
        }catch(error){
            this.setState({loading: false, error: error}); 
        }
    }
    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value,
            },
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null})
        //Para indicarle que vamos a regresar a emps después de guardar la info
        this.props.history.push('/emps');
        try {
            await api.emps.update(this.props.match.params.empId,this.state.form)
            this.setState({ loading: false})
        } catch (error) {
            this.setState({ loading: false, error: error})
            
        }
    };

    render(){
        if (this.state.loading){
            return <PageLoading />;

        }
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Emp
                                noEmpleado = {this.state.form.noEmpleado || 'No_Empleado'}
                                nombre = {this.state.form.nombre || 'Nombre'}
                                avatarUrl = "https://www.gravatar.com/avatar"
                                apellidos = {this.state.form.apellidos || 'Apellidos'}
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <EmpForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error = {this.state.error}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default EmpEdit;