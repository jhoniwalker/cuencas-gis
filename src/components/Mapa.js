import React, { Component } from "react";
import 'ol/ol.css';
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
//OpenStreetMap
import OlSourceOsm from "ol/source/OSM";
//Bing
import BingMaps from 'ol/source/BingMaps';
//Stamen
import Stamen from 'ol/source/Stamen';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
//geojson
import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import geojsonFile from '../data/geojson-files/cuanca_rg_prueba.geojson';
//component
import Section from './Section';
import LayerButton from './LayerButton';

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
        featureName:'',
        featureTable:[],
        center: [-7573454.810866, -7162149.550321],
        zoom: 8,
        x : [],
        y : [],
        xaxisTitle : '',
        yaxisTitle : '',
        checked:true,
        mapaCheck: 'OSM' 
     };
     //Mapa. OpenStreetMap tileLayer
     this.osmLayer = new TileLayer({
       source: new OlSourceOsm({
            })
     });

     //Mapa. Stamen tileLayer
     this.stamenLayer = new TileLayer({
       visible: false,
       source: new Stamen({
          layer: 'watercolor',
            })
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
        this.osmLayer,
        this.stamenLayer,
        this.vector

      ],
      view: new OlView({
        center: this.state.center,
        zoom: this.state.zoom,
        //projection: 'EPSG:4326' //world geodetic system
      })
    });

  }

  //función que toma detos del layer geojson y setea variables de estado, que se visualizan en el dom.
  displayFeatureInfo(pixel) {

     var feature = this.olmap.forEachFeatureAtPixel(pixel, function(feature) {
       console.log(feature);
       console.log('click mapa');
       return feature;
     });

     if (feature) {
       console.log(feature.get("Name"));
       this.setState({featureName:feature.get("Name"),
                      featureTable:feature.get("table"),
                      center: [0,0],
                      x : ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
                      y : [2.85, 2.81, 2.63, 3.38, 4.02, 6.57, 7.36, 6.36, 7.52, 4.18, 3.16, 2,73],
                      xaxisTitle : 'Meses',
                      yaxisTitle : 'Q med (m3/s)'

     })
     }else{
       this.setState({featureName:'',
                       x : [],
                       y : [],
                       xaxisTitle : '',
                       yaxisTitle : ''
        })

     }
  }

  //control de capas
  async capaControl(){

    console.log(this.olmap.getLayers().array_)
    await this.setState({
      checked:!this.state.checked
    })
    await console.log(this.state.checked)
    await this.olmap.getLayers().array_[2].setVisible(this.state.checked)

  }

  
  //control de mapas
  mapaControl(event){

    switch(event.target.value){
      case 'OSM':
        this.setState({mapaCheck:event.target.value})
        this.olmap.getLayers().array_[1].setVisible(false)
        this.olmap.getLayers().array_[0].setVisible(true)
      break;
      case 'Stamen':
        this.setState({mapaCheck:event.target.value})
        this.olmap.getLayers().array_[0].setVisible(false)
        this.olmap.getLayers().array_[1].setVisible(true)
      break;  
    }  

  }
  
  handleCheckMap = (event) => {

    this.mapaControl(event)
  }

  handleCheckCapa = (event) => {
    
    this.capaControl()

  }
  
  /*para que funcionen los props desde 
  el mapa al button o modal se debe mover o clickear el mapa.*/
  componentDidMount() {

    this.olmap.setTarget("map");

    this.olmap.on("moveend", () => {
      console.log('move')
    });

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
    console.log(this.state.mapaCheck)
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <LayerButton checked={this.state.checked} handleCheck={this.handleCheckCapa} handleCheckMap={this.handleCheckMap} mapaCheck={this.state.mapaCheck}/>
              <div id="map" style={{ width: "100%", height: "400px" }}>
              </div>
            </div>
          </div>  
        </div>
        <Section
          featureName = {this.state.featureName} x={this.state.x}
          y={this.state.y} xaxisTitle={this.state.xaxisTitle}
          yaxisTitle={this.state.yaxisTitle}
        />
        <Section
          featureName = {this.state.featureName} x={this.state.x}
          y={this.state.y} xaxisTitle={this.state.xaxisTitle}
          yaxisTitle={this.state.yaxisTitle}
        />
      </React.Fragment>
    );
  }
}

export default Mapa;
