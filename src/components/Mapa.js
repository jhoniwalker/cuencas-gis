import React, { Component } from "react";
import 'ol/ol.css';
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
//OpenStreetMap
import OlSourceOsm from "ol/source/OSM";
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
//geojson
import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import geojsonFile from '../data/geojson-files/argentina.geojson';
import Section from './Section';

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
        featureName:'',
        featureTable:[],
        center: [-7573454.810866, -7162149.550321],
        zoom: 8,
     };
     //Mapa. OpenStreetMap layer
     this.layer = new TileLayer({
       source: new OlSourceOsm()
     });
    //geojson
    this.vectorSource = new VectorSource({
     url:geojsonFile,
     format:new GeoJSON()
    });

    this.vector = new VectorLayer({
      source: this.vectorSource
    });

    this.olmap = new OlMap({
      target: null,
      layers: [
        this.layer,
        this.vector
      ],
      view: new OlView({
        center: this.state.center,
        zoom: this.state.zoom,
        //projection: 'EPSG:4326' //world geodetic system
      })
    });

  }

  //función que toma detos del layer geojson y setea variables de estado
  displayFeatureInfo(pixel) {

     var feature = this.olmap.forEachFeatureAtPixel(pixel, function(feature) {
       return feature;
     });

     if (feature) {
       console.log(feature.get("table"));
       this.setState({featureName:feature.get("name"),featureTable:feature.get("table"), center: [0,0]})
     }else{
       this.setState({featureName:'Limpiar'})

     }
  }

  componentDidMount() {
    this.olmap.setTarget("map");

    /*this.olmap.on("moveend", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });*/

    //Evento de click sobre el mapa
    this.olmap.on('click', (evt) => {
            this.displayFeatureInfo(evt.pixel);
          });
  }

  shouldComponentUpdate(nextProps, nextState) {
    let center = this.olmap.getView().getCenter();
    let zoom = this.olmap.getView().getZoom();
    if (center === nextState.center && zoom === nextState.zoom) return false;
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div id="map" style={{ width: "100%", height: "400px" }}>
          </div>
        </div>
        <section className="mt-4">
          <div class="row">
            <div class="col text-center text-uppercase">
                <h2>Información de la capa</h2>
            </div>
          </div>
        </section>
        <Section featureName = {this.state.featureName}/>
        <Section featureName = {this.state.featureName}/>
      </React.Fragment>
    );
  }
}

export default Mapa;
