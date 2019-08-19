import React from 'react';
import ReactDOM from 'react-dom';
import { faLayerGroup, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import './styles/LayerModal.css';
import { Modal, Button, Form } from 'react-bootstrap';

//usar radiobutton para capas y mapas
function LayerModal(props) {

  if (!props.modalIsOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.handleCloseModal} className="Modal__close-button">
          X
        </button>
        <p><FontAwesomeIcon icon={faLayerGroup} /> Selección de Capas</p>
        <Form.Group>
          <Form.Check type="checkbox" id="rios" defaultChecked={props.checked} onChange={props.handleCheck} label="Ríos" />
          <Form.Check type="checkbox" id="cuenca_rg" defaultChecked={props.cuencaRgChecked} onChange={props.handleCheck} label="Cuenca del Rio Grande" />
          <Form.Check type="checkbox" id="cuenca_rc" defaultChecked={props.cuencaRcChecked} onChange={props.handleCheck} label="Cuenca del Río Chico" />
        </Form.Group>
        <p><FontAwesomeIcon icon={faMap} /> Estilo de Mapas</p>
        <Form.Group>
          <Form.Check type="radio" name="radios" defaultChecked={props.mapaCheck === "OSM"} value="OSM"  id="radios1" label="OpenStreetMap" onChange={props.handleCheckMap}/>
          <Form.Check type="radio" name="radios" defaultChecked={props.mapaCheck === "OSMLanscape"} value="OSMLanscape"  id="radios2" label="OpenStreetMap Style (Curvas de Nivel)" onChange={props.handleCheckMap}/>
          <Form.Check type="radio" name="radios" defaultChecked={props.mapaCheck === "Stamen"} value="Stamen" id="radios3" label="Stamen Design" onChange={props.handleCheckMap}/>
          <Form.Check type="radio" name="radios" defaultChecked={props.mapaCheck === "Bing"} value="Bing" id="radios4" label="Bing Aerial (Aéreo/satelital)" onChange={props.handleCheckMap}/>
        </Form.Group>
      </div>
    </div>,
    document.getElementById('layer-modal')
  );
    /*return (
        
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

    );*/
  
}

export default LayerModal

