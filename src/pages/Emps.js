import React from 'react';
//import EmpNew from './EmpNew'
import EmpsList from '../components/EmpsList';
import './styles/Emps.css'
import {Link} from 'react-router-dom';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';


class Emps extends React.Component {
    state = {
      loading: true,
      error: null,
      data: undefined
    };

    componentDidMount() {
      this.fetchData();

      //Para que recargue cada 5 seg
      this.intervalId = setInterval(this.fetchData, 5000);
    }

    //Para limpiar el intervalo si nos movemos de página
    componentWillUnmount(){
      clearInterval(this.intervalId);
    }

    //Se hizo async para que se puede usar await que es esperar que devuelva algo la llamada al api
    fetchData = async () => {
      this.setState({ loading: true, error: null,})
      try {
        const data = await api.emps.list();
        this.setState({ loading: false, data: data,})
      } catch (error) {
        this.setState({ loading: false, error: error,})
      }
    }

    render() {
      //Si está cargando
      if (this.state.loading === true && !this.state.data){
        // return 'loading...';
        return <PageLoading />;
      }
      //Si la api nos devuelve error
      if (this.state.error){
        //return `Error ${this.state.error.message}`;
        return <PageError error={this.state.error}/>;
      }
      return (
          <React.Fragment>
              <div className="Emps__container">
                  <div className="Emps__buttons">
                      <Link to="/emps/new" className="btn btn-primary">
                          Nuevo Empleado
                      </Link>
                  </div>
                  <div className="Emps__list">
                      <div className="Emps__container">
                          <EmpsList emps={this.state.data}/>
                          {this.state.loading && <MiniLoader/>}
                      </div>
                  </div>
              </div>
          </React.Fragment>
      );
    }
}

export default Emps;