import React from 'react';
import BarChart from './BarChart';

function Section(props) {
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <h2>{props.featureName}</h2>
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
        <div id="chart" className="col-sm-6">
          <h2>Chart</h2>
          <BarChart/>
        </div>
      </div>
    </div>
 )
}

export default Section;
