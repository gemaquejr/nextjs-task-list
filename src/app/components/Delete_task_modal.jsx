import React from 'react';
import './../styles/deleteTaskModal.scss';

const ModalDeletarTarefa = ({ onClose, onConfirm }) => {
  return (
    <div className="modal-delete">
        <div className="modal-delete-content">
            <h3>Deletar tarefa</h3>
            <p>Tem certeza que você deseja deletar essa tarefa?</p>
            <div className="modal-delete-buttons">
            <button onClick={onClose} className="cancel-button"><span className="cancel-button-text">Cancelar</span></button>
            <button onClick={onConfirm} className="delete-button"><span className="delete-button-text">Deletar</span></button>
            </div>
        </div>
      </div>
  );
};

export default ModalDeletarTarefa;