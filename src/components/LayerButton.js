import React from 'react';
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import 'ol/ol.css';
import './styles/LayerButton.css';
//modal da control de capas

function LayerButton(props) {
  return (
      <React.Fragment>
      <div className="ol-unselectable ol-control layer__button">
        <button type="button" className=""  onClick={props.handleOpenModal}>
          <FontAwesomeIcon icon={faLayerGroup} />
        </button>
      </div>  
      </React.Fragment>


  );
}

export default LayerButton

