import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteModal = ({ cat, showModal, setShowModal, deleteCat, allCats }) => {

  return (
    <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Cat</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hey! Just confirming you're sure you want to delete {cat.name}.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => deleteCat(allCats.indexOf(cat))}>
            Confirm 
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default DeleteModal;

