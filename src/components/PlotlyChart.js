import React from 'react';
import Plot from 'react-plotly.js';

class PlotlyChart extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
            y: [2.85, 2.81, 2.63, 3.38, 4.02, 6.57, 7.36, 6.36, 7.52, 4.18, 3.16, 2,73],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={{ title: 'Caudal medio',
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
