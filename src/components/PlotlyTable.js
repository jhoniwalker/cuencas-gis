import React from 'react';
import Plot from 'react-plotly.js';

function PlotlyTable(props) {
  return (
    <Plot
      data={[{
              type: 'table',
              header: {
                values: [["<b>Mes</b>"], ["<b>Q med (m3/s)</b>"],
                     ["<b>Q min (m3/s)</b>"], ["<b>Q max (m3/s)</b>"]],
                align: "center",
                line: {width: 1, color: 'black'},
                fill: {color: "grey"},
                font: {family: "Arial", size: 12, color: "white"}
              },
              cells: {
                values: [
                          ['ene', 'feb', 'mar', 'abr'],
                          [20000, 20000, 80000, 2000],
                          [20000, 20000, 70000, 2000],
                          [20000, 20000, 120000, 2000],
                          ],
                align: "center",
                line: {color: "black", width: 1},
                font: {family: "Arial", size: 11, color: ["black"]}
              }
            }]}
      layout={{ title: props.title,
                //autosize: true,
      }}
      //useResizeHandler
      style={{ width: '100%', height: '100%' }}
    />
  );

}

export default PlotlyTable
