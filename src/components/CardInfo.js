import React from 'react';

function CardInfo(props) {
  return(
      <div className="col-sm-12">
        <div className="card">
            <div className="card-body">
                <h2>{props.caudalesData.nombre}</h2>
                <p>{props.caudalesData.descripcion}</p>
            </div>
         </div>
      </div>
          
 )
}

export default CardInfo;
