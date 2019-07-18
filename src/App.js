import React, { Component } from 'react';
//Navbar
import Navbar from './components/Navbar';
import Mapa from './components/Mapa';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Mapa/>
      </div>
    );
  }
}

export default App;
