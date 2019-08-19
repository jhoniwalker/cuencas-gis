import React from 'react';

function CardData(props) {
  return(
      <div className="col-sm-6">
        <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                {props.children}
              </div>
              </div>
            </div>
        </div>
          
 )
}

export default CardData;
