import React from 'react';
import PlotlyChart from './PlotlyChart';
import PlotlyTable from './PlotlyTable';

function Section(props) {
  return(
    <section className="mt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <PlotlyTable title={props.featureName}/>
              </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div class="card">
              <div class="card-body">
                <PlotlyChart
                  title={props.featureName}
                  x={props.x} y={props.y}
                  xaxisTitle={props.xaxisTitle}
                  yaxisTitle={props.yaxisTitle}
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
