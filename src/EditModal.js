import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const EditModal = ({ cat, setShowEdit, showEdit, allCats, editCat, months }) => {

  const [thumbnail, setThumbnail] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState({});
  const [ownerName, setOwnerName] = useState("");


  return (
    <Modal show={showEdit} onHide={() => setShowEdit(!showEdit)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details for: {cat.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <Form.Group as={Row} >
                <Form.Label column sm={4}>
                  Thumbnail URL
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="url" onChange={(event) => setThumbnail(event.target.value)}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm={4}>
                  Name
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="name" onChange={(event) => setName(event.target.value)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm={4}>
                  Birth date
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="birth-date" placeholder="YYYY-MM-DD" onChange={(event) => setBirthDate(new Date(event.target.value).getDate() + " " + months[new Date(event.target.value).getMonth()] + " " + new Date(event.target.value).getFullYear()) }/>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={4} className="select-owner" htmlFor="inlineFormCustomSelectOwner">
                  Owner
                </Form.Label>
                <Col>
                  <Form.Control sm={6}
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectOwner"
                    onChange={(event) => {
                      setOwnerName(event.target.value)                    
                    }}
                    
                    custom
                  >
                    <option>Select...</option>
                    {
                      allCats.map((value) => value.ownerName).filter((value, i, self) => {
                        return self.indexOf(value) === i ? value : null;
                      }).map((name, i) => {
                        return <option key={i}>{name}</option>
                      })
                    }
                  </Form.Control>
                </Col>
              </Form.Group>
              
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => editCat(cat.id, thumbnail, name, birthDate, ownerName) }>
            Save 
          </Button>
          <Button variant="secondary" onClick={() => setShowEdit(!showEdit)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default EditModal;

