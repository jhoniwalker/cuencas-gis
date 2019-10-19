import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
    <nav className="navbar navbar-dark" style={{backgroundColor: '#217dc5'}}>
      <a className="navbar-brand" href="#">SIAC GIS</a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
	      <li className="nav-item active">
	        <a className="nav-link" href="#">Zonas de contaminación <span className="sr-only">(current)</span></a>
	      </li>
	  </ul>
    </nav>


    );
  }
}

export default Navbar;
