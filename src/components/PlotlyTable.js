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
                          props.x,
                          props.caudalesData.caudales_promedio[0].data,
                          props.caudalesData.caudales_promedio[1].data,
                          props.caudalesData.caudales_promedio[2].data,
                          ],
                align: "center",
                line: {color: "black", width: 1},
                font: {family: "Arial", size: 11, color: ["black"]}
              }
            }]}
      layout={{ title: props.caudalesData.caudal_desc,
                //autosize: true,
      }}
      //useResizeHandler
      style={{ width: '100%', height: '100%' }}
    />
  );

}

export default PlotlyTable
