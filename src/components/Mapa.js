import React from 'react';

function Mapa(props) {
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          {props.children}
          <div id="map" style={{ width: "100%", height: "600px" }}>
          </div>
        </div>
      </div>  
    </div>
 )
}

export default Mapa;
