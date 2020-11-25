import React from "react";
import Modal from "./Modal";
import "./styles/DeleteBadgeModal.css";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="delete-badge-modal">
        <h1>Do you want to remove your badge?</h1>
        <p>This action is not reversible</p>
        <div>
          <button onClick={props.onDeleteBadge}>Accept</button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
