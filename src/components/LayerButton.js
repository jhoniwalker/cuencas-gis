import React from 'react';
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { Button } from 'react-bootstrap';
import './styles/LayerButton.css';
//modal da control de capas
import LayerModal from './LayerModal';

function LayerButton(props) {
  return (
      <React.Fragment>
        <button type="button" className="btn btn-secondary btn-sm layer__button"  onClick={props.handleOpenModal}>
          <FontAwesomeIcon icon={faLayerGroup} />
        </button>
      </React.Fragment>

  );
}

export default LayerButton

