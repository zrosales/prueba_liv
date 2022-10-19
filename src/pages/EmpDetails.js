import React from 'react';
import { Link } from 'react-router-dom';
import './styles/EmpDetails.css';
import Emp from '../components/Emp';
import DeleteEmpModal from '../components/DeleteEmpModal';

function EmpDetails(props) {
  const emp = props.emp;
  console.log(emp)

  return (
    <div>
      <div className="EmpDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6 EmpDetails__hero-attendant-name">
              <h1>
                {emp.noEmpleado} {emp.nombres}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Emp
              noEmpleado={emp.noEmpleado}
              nombre={emp.nombre}
              apellidos={emp.apellidos}
              ubicacion={emp.ubicacion}
              sociedad={emp.sociedad}
            />
          </div>
          <div className="col">
            <h2>Acciones</h2>
            <div>
              <div>
                <br></br>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/emps/${emp.id}/edit`}
                >
                  Editar
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Borrar
                </button>
                <DeleteEmpModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteEmp={props.onDeleteEmp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpDetails;