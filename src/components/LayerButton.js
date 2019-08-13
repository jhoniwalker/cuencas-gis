import React from 'react';
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { Button } from 'react-bootstrap';
//modal da control de capas
import LayerModal from './LayerModal';

const style = {
          position:'absolute',
          top:'10px',
          right:'40px',
          zIndex:'100',
          backgroundColor: 'rgba(0,60,136,0.5)',
          borderColor: 'white'
  }

function LayerButton(props) {
  return (
      <React.Fragment>
        <button type="button" className="btn btn-primary btn-sm"  onClick={props.handleOpenModal} style={style}>
          <FontAwesomeIcon icon={faLayerGroup} />
        </button>
      </React.Fragment>

  );
}

export default LayerButton

