import React, { Component } from 'react';
import logo from './assets/hotdogcart.png';
import {Link} from 'react-router-dom';

import './App.css';


function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to Wheelie Wiener</h3>
        <img src={logo} className="App-logo" alt="logo" />

        <input type="button" className="App-button" value="Admin"   ></input>

        <input type="button" className="App-button" value="Vendor" onClick= {event =>  window.location.href='/vendor'}   ></input>

        <input type="button" className="App-button" value="Customer"  ></input>



      </header>
    </div>
  ); 
}

export default Landing;
