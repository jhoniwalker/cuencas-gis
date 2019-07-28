import React from 'react';
import PlotlyChart from './PlotlyChart';
import Plot from 'react-plotly.js';

function Section(props) {
  return(
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">{props.featureName}</h3>
                <table className="table table-dark">
                  <thead>
                  <tr>
                    <th scope="col">Mes</th>
                    <th scope="col">Q med (m3/s)</th>
                    <th scope="col">Q min (m3/s)</th>
                    <th scope="col">Q max (m3/s)</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>2,85</td>
                    <td>2,85</td>
                    <td>2,85</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>2,85</td>
                    <td>2,85</td>
                    <td>2,85</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>2,85</td>
                    <td>2,85</td>
                    <td>2,85</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Caudal medio anual</h3>
                <PlotlyChart/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 )
}

export default Section;
