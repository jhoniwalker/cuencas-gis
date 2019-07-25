import React, { Component } from 'react';

import 'ol/ol.css';
import 'antd/dist/antd.css';
import './styles/react-geo.css';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import KML from 'ol/format/KML';
//OpenStreetMap
import OlSourceOsm from 'ol/source/OSM';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
//geojson
import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import geojsonFile from '../data/geojson-files/argentina.geojson';
import Section from './Section';

import {
  MapComponent
} from '@terrestris/react-geo';

//Mapa. OpenStreetMap layer
const layer = new TileLayer({
  source: new OlSourceOsm()
});

//Capa Kml. KML as Vector Layer
/*const vector = new VectorLayer({
  source: new VectorSource({

    projection: 'EPSG:3857',
    url: '../data/kml-files/example.kml',
    format: new KML()
  })
});*/

//geojson
var vectorSource = new VectorSource({
 url:geojsonFile,
 format:new GeoJSON()
});

var vector = new VectorLayer({
  source: vectorSource
});

const center = [ -7303602.22, -1992886.13 ];

// create a new instance of ol.map in ES6 syntax
const map = new OlMap({
  view: new OlView({
    center: center,
    zoom: 8,
  }),
  layers: [layer, vector]
});

//toma datos de una capa geojson y la muestra
var displayFeatureInfo = function(pixel) {

   var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
     return feature;
   });

   if (feature) {
     return <div>
               <div className="row">
                 <div className="col-sm">
                   {feature.get("name")}
                 </div>
                 <div className="col-sm">
                   {feature.get("name")}
                 </div>
                 <div className="col-sm">
                   {feature.get("name")}
                 </div>
               </div>
            </div>
     console.log();
   }
};

const mapClick = map.on('click', function(evt) {
        displayFeatureInfo(evt.pixel);
      });

class MapaGeo extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
        <MapComponent
          map={map}
        />

    );
  }
}

export default Mapa;
