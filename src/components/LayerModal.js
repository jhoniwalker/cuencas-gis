import React from 'react';
import { faLayerGroup, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { Modal, Button, Form } from 'react-bootstrap';

//usar radiobutton para capas y mapas
function LayerModal(props) {
  return (
      
      <Modal size="sm" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Control de capas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><FontAwesomeIcon icon={faLayerGroup} /> Selección de Capas</p>
          <Form.Group controlId="formBasicChecbox1">
            <Form.Check type="checkbox" label="Capa 1" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox2">
            <Form.Check type="checkbox" label="Capa 2" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox3">
            <Form.Check type="checkbox" label="Capa 3" />
          </Form.Group>
          <p><FontAwesomeIcon icon={faMap} /> Estilo de Mapas</p>
          <Form.Group controlId="formBasicChecbox4">
            <Form.Check type="checkbox" label="Mapa 4" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox5">
            <Form.Check type="checkbox" label="Mapa 5" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox6">
            <Form.Check type="checkbox" label="Mapa 6" />
          </Form.Group>
        </Modal.Body>
      </Modal>

  );
}

export default LayerModal

