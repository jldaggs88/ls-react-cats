import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteModal = ({ cat, showModal, setShowModal, deleteCat }) => {

  return (
    <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Cat</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => deleteCat(cat.id)}>
            Save 
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default DeleteModal;

