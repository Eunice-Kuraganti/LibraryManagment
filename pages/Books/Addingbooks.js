import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
function Addingbooks() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
       <Button variant="primary" onClick={handleShow}>
        click modal
      </Button>
      
      <Modal show={show} onHide={handleClose}   size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
      
      <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title></Modal.Header>
          
        <Modal.Body>Hello,you're reading this text in a modal!</Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

      
  );
} 
export default Addingbooks;