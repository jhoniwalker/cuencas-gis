import React, { Component } from 'react';
//Navbar
import Navbar from './components/Navbar';
import Mapa from './components/Mapa';
import Section from './components/Section';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Mapa/>
        <Footer/>
      </div>
    );
  }
}

export default App;
