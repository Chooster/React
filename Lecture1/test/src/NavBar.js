import React, { Component } from 'react'; // <--- no dot slash means look in node modules folder
import './NavBar.css'; // <--- works with className="navbar"

export default class NavBar extends Component {
  render() {
    return (
       // class vs className, somewhat different attributes
      <div className="navbar">

      </div>
    );
  }
}
