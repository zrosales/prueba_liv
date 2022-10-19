import React from 'react';
import Modal from './Modal';
import './styles/DeleteEmpModal.css';


function DeleteEmpModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="DeleteEmpModal">
            <h1>Estás seguro</h1>
            <p>Se va a eliminar este empleado</p>

            <div>
                <button onClick={props.onDeleteEmp} className="btn btn-danger mr-4">Borrar</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancelar</button>
            </div>
        </div>
    </Modal>

}
export default DeleteEmpModal