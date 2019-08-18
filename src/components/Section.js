import React from 'react';
import PlotlyChart from './PlotlyChart';
import PlotlyTable from './PlotlyTable';

function Section(props) {
  return(
    <section className="mt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <PlotlyTable 
                  caudalesData={props.caudalesData}
                  x={props.x} 
                />
              </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <PlotlyChart
                  title={props.caudalesData.nombre}
                  x={props.x} 
                  y={props.caudalesData.caudales_promedio[0].data}
                  xaxisTitle={props.xaxisTitle}
                  yaxisTitle={props.caudalesData.caudales_promedio[0].title}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <PlotlyChart
                  title={props.caudalesData.nombre}
                  x={props.x} 
                  y={props.caudalesData.caudales_promedio[1].data}
                  xaxisTitle={props.xaxisTitle}
                  yaxisTitle={props.caudalesData.caudales_promedio[1].title}
                  />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <PlotlyChart
                  title={props.caudalesData.nombre}
                  x={props.x} 
                  y={props.caudalesData.caudales_promedio[2].data}
                  xaxisTitle={props.xaxisTitle}
                  yaxisTitle={props.caudalesData.caudales_promedio[2].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 )
}

export default Section;
