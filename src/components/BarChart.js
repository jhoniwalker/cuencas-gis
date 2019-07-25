import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:this.props.data,
    }
  }
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [12, 5, 6];
    //selecciono el lugar donde quiero dibujar
    const svg = d3.select("#chart")
    .append("svg")
    .attr("width", 300)
    .attr("height", 100)
    //.style("margin-top", -350);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 100 - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
  }

  render(){
    return(
      <div id="barChart">
      </div>
    )
  }
}

export default BarChart;
