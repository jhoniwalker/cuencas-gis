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
            <Form.Group>
              <Form.Check type="checkbox" id="capa-1" defaultChecked={props.checked} onChange={props.handleCheck} label="Capa 1" />
              <Form.Check type="checkbox" id="capa-2" label="Capa 2" />
              <Form.Check type="checkbox" id="capa-3" label="Capa 3" />
            </Form.Group>
            <p><FontAwesomeIcon icon={faMap} /> Estilo de Mapas</p>
            <Form.Group>
              <Form.Check type="radio" name="radios" defaultChecked={props.mapaCheck === "OSM"} value="OSM"  id="radios1" label="OpenStreetMap" onChange={props.handleCheckMap}/>
              <Form.Check type="radio" name="radios" defaultChecked={props.mapaCheck === "Stamen"} value="Stamen" id="radios2" label="Stamen Design" onChange={props.handleCheckMap}/>
              <Form.Check type="radio" name="radios" defaultChecked={props.mapaCheck === "Bing"} value="Bing" id="radios3" label="Bing" onChange={props.handleCheckMap}/>
            </Form.Group>
          </Modal.Body>
        </Modal>

    );
  
}

export default LayerModal

