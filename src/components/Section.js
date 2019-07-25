import React from 'react';
import BarChart from './BarChart';

function Section(props) {
  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h2>{props.featureName}</h2>
          <table class="table table-dark">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div id="chart" className="col-sm-6">
          <BarChart/>
        </div>
      </div>
    </div>
 )
}

export default Section;
