import React from 'react';
import Plot from 'react-plotly.js';

class PlotlyChart extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={{ title: '',
                  xaxis: {
                    title: 'Meses',
                    showgrid: false,
                    zeroline: false
                  },
                  yaxis: {
                    title: 'Q med (m3/s)',
                    showline: false
                  },
                  autosize: true,
        }}
        useResizeHandler
        style={{ width: '100%', height: '100%' }}
      />
    );
  }
}

export default PlotlyChart
