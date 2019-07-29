import React from 'react';
import Plot from 'react-plotly.js';

function PlotlyChart(props) {
  return (
    <Plot
      data={[
        {
          x: props.x,
          y: props.y,
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        },
      ]}
      layout={{ title: props.title,
                xaxis: {
                  title: props.xaxisTitle,
                  showgrid: false,
                  zeroline: false
                },
                yaxis: {
                  title: props.yaxisTitle,
                  showline: false
                },
                autosize: true,
      }}
      useResizeHandler
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default PlotlyChart
