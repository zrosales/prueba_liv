import React from 'react';
import { Link } from 'react-router-dom';

import './styles/EmpsList.css';
import Gravatar from './Gravatar';

class EmpsListItem extends React.Component {
  render() {
    return (
      <div className="EmpsListItem">
        <Gravatar
          className="EmpsListItem__avatar"
          email={this.props.emp.email}
        />

        <div>
          <strong>
            {this.props.emp.noEmpleado} {this.props.emp.nombre}
          </strong>
          <br />{this.props.emp.apellidos}
          <br />
        </div>
      </div>
    );
  }
}

function useSearchEmps(emps) {
  const [query, setQuery] = React.useState('');
  const [filteredEmps, setFilteredEmps] = React.useState(emps);

  React.useMemo(() => {
    const result = emps.filter(emp => {
      return `${emp.noEmpleado} ${emp.nombre}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredEmps(result);
  }, [emps, query]);

  return { query, setQuery, filteredEmps };
}

function EmpsList(props) {
  const emps = props.emps;

  const { query, setQuery, filteredEmps } = useSearchEmps(emps);

  if (filteredEmps.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filtrar Empleados</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No se encontraron empleados</h3>
        <Link className="btn btn-primary" to="/emps/new">
          Crear un nuevo empleado
        </Link>
      </div>
    );
  }

  return (
    <div className="EmpsList">
      <div className="form-group">
        <label>Filtrar Empleados</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredEmps.map(emp => {
          return (
            <li key={emp.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/emps/${emp.id}`}
              >
                <EmpsListItem emp={emp} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EmpsList;