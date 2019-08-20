import React, { Component } from 'react';
//Navbar
import Navbar from './components/Navbar';
import MapaContainer from './MapaContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <MapaContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
