import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
      return(
        <div className="navbar">
          <div className="home-btn">
            <p>Home</p>
          </div>
          <div className="about-btn">
            <p>About</p>
          </div>
        </div>
      );
    }
}

export default Navbar;
