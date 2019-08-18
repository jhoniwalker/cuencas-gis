import React, { Component, forwardRef } from "react";
import 'ol/ol.css';
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
//OpenStreetMap
import OlSourceOsm, {ATTRIBUTION} from "ol/source/OSM";
//Bing
import BingMaps from 'ol/source/BingMaps';
//Stamen
import Stamen from 'ol/source/Stamen';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
//geojson
import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import geojsonFile from '../data/geojson-files/rios_tdf.geojson';
import cuencaRG from '../data/geojson-files/cuenca_rio_grande.geojson';
import cuencaRC from '../data/geojson-files/cuenca_rio_chico.geojson';
//service
import { fetchCaudalesData } from '../services/CaudalesService'; 
//component
import Section from './Section';
import LayerButton from './LayerButton';
import LayerModal from './LayerModal';

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
        featureName:'',
        featureTable:[],
        center: [-7573454.810866, -7162149.550321],
        zoom: 8,
        x : ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        y : [],
        xaxisTitle : '',
        yaxisTitle : '',
        checked:true,
        cuencaRgChecked:true,
        cuencaRcChecked:true,
        mapaCheck: 'OSM',
        modalIsOpen:false,
        caudalesData:{},
        showSection:false
     };

     this.myRef = React.createRef();
     //Mapa. OpenStreetMap tileLayer
     this.osmLayer = new TileLayer({
       source: new OlSourceOsm({
            })
     });

     //Mapa. OpenStreetMap lanscape curvas de nivel tileLayer
     this.osmLanscape = new TileLayer({
       visible:false, 
       source: new OlSourceOsm({
          attributions: [
            'All maps © <a href="http://www.opencyclemap.org/?layers=00B00">OpenCycleMap</a>',
            ATTRIBUTION
          ],
          url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=5944047da3314986b605f064897c668c'
            })
     });

     //Mapa. Stamen tileLayer
     this.stamenLayer = new TileLayer({
       visible: false,
       source: new Stamen({
          layer: 'watercolor',
            })
     });

     //Mapa. Bing
     this.bingMaps = new TileLayer({
      visible: false,
      source: new BingMaps({
            key:'AtBMqCJREGAL9f2_1EKoTkUp_OPgTAPMxQI-m-kGrPV1y-8-6c4-5dq-QVygo9ff',
            imagerySet:'Aerial'
          })
     }) 
    //geojson
    this.vectorSource = new VectorSource({
     url:geojsonFile,
     format:new GeoJSON()
    });

    this.vector = new VectorLayer({
      source: this.vectorSource
    });

    //geojson cuenca rio grande
    this.cuencaRgSource = new VectorSource({
      url: cuencaRG,
      format:new GeoJSON()
    });

    this.cuencaRgVector = new VectorLayer({
      source:this.cuencaRgSource
    })

    //geojson cuenca rio chico
    this.cuencaRcSource = new VectorSource({
      url: cuencaRC,
      format:new GeoJSON()
    });

    this.cuencaRcVector = new VectorLayer({
      source:this.cuencaRcSource
    })

    this.olmap = new OlMap({
      target: null,
      layers: [
        this.osmLayer,
        this.osmLanscape,
        this.stamenLayer,
        this.bingMaps,
        this.vector,
        this.cuencaRgVector,
        this.cuencaRcVector

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
       return feature;
     });

     if (feature) {
        //Obtengo os datos desde el archivo json
        fetchCaudalesData(feature.get("URL"))
        .then((response)=>{
          //console.log(response.caudales_promedio[0].data)
          this.setState({featureName:feature.get("Name"),
                      featureTable:feature.get("table"),
                      center: [0,0],
                      caudalesData:response,
                      showSection:true,
        })
       })
     }else{
       this.setState({featureName:'',
                       showSection:false,

        })

     }
  }

  //control de capas
  async capaControl(event){

     switch(event.target.id){
      case 'rios':
        await this.setState({
          checked:!this.state.checked
        })
        await this.olmap.getLayers().array_[4].setVisible(this.state.checked)
      break;
      case 'cuenca_rg':
        await this.setState({
          cuencaRgChecked:!this.state.cuencaRgChecked
        })
        await this.olmap.getLayers().array_[5].setVisible(this.state.cuencaRgChecked)
      break;
      case 'cuenca_rc':
        await this.setState({
          cuencaRcChecked:!this.state.cuencaRcChecked
        })
        await this.olmap.getLayers().array_[6].setVisible(this.state.cuencaRcChecked)  
      break;  
    }  

   /* console.log(this.olmap.getLayers().array_)
    await this.setState({
      checked:!this.state.checked
    })
    await console.log(this.state.checked)
    await this.olmap.getLayers().array_[2].setVisible(this.state.checked)*/

  }

  
  //control de mapas
  mapaControl(event){

    switch(event.target.value){
      case 'OSM':
        this.setState({mapaCheck:event.target.value})
        this.olmap.getLayers().array_[1].setVisible(false)
        this.olmap.getLayers().array_[2].setVisible(false)
        this.olmap.getLayers().array_[3].setVisible(false)
        this.olmap.getLayers().array_[0].setVisible(true)
      break;
      case 'OSMLanscape':
        this.setState({mapaCheck:event.target.value})
        this.olmap.getLayers().array_[0].setVisible(false)
        this.olmap.getLayers().array_[2].setVisible(false)
        this.olmap.getLayers().array_[3].setVisible(false)
        this.olmap.getLayers().array_[1].setVisible(true)
      break;
      case 'Stamen':
        this.setState({mapaCheck:event.target.value})
        this.olmap.getLayers().array_[0].setVisible(false)
        this.olmap.getLayers().array_[1].setVisible(false)
        this.olmap.getLayers().array_[3].setVisible(false)
        this.olmap.getLayers().array_[2].setVisible(true)
      break;  
      case 'Bing':
        console.log( this.olmap.getLayers().array_)
        this.setState({mapaCheck:event.target.value})
        this.olmap.getLayers().array_[0].setVisible(false)
        this.olmap.getLayers().array_[1].setVisible(false)
        this.olmap.getLayers().array_[2].setVisible(false)
        this.olmap.getLayers().array_[3].setVisible(true)
      break; 
    }  

  }

 
  handleCheckMap = (event) => {

    this.mapaControl(event)
  }

  handleCheckCapa = (event) => {
    console.log(event.target.id)
    this.capaControl(event)

  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };
  
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


    showSections(){

    if(this.state.showSection){

      return <Section
              ref={this.myRef}
              caudalesData = {this.state.caudalesData} 
              x={this.state.x}
              xaxisTitle={this.state.xaxisTitle}
            />         
    }

  }

  componentWillUpdate() {
    const node = this.node;
    this.shouldScrollBottom = node.scrollTop
        + node.offsetHeight === node.scrollHeight;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <LayerButton
                handleOpenModal={this.handleOpenModal}
              />
              <LayerModal   
                checked={this.state.checked} 
                cuencaRgChecked={this.state.cuencaRgChecked}
                cuencaRcChecked={this.state.cuencaRcChecked}
                handleCheck={this.handleCheckCapa} 
                handleCheckMap={this.handleCheckMap} 
                mapaCheck={this.state.mapaCheck}
                modalIsOpen={this.state.modalIsOpen}
                handleOpenModal={this.handleOpenModal}
                handleCloseModal={this.handleCloseModal}
              />
              <div id="map" style={{ width: "100%", height: "600px" }}>
              </div>
            </div>
          </div>  
        </div>
        <div ref={(node) => { this.node = node; }}>
          {this.showSections()}
        </div>
      </React.Fragment>
    );
  }
}

export default Mapa;
