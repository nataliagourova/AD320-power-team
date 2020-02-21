import React from 'react';
import logo from './assets/hotdogcart.png';
import Vendor from './vendor/Vendor';

import './App.css';


function App() {
  return (
    <div className="App">
      {/*  */}
      <header className="App-header">
        <p>We are in the header</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>this is the main page</p>
        <input type="button" className="App-button" value="Admin" onClick={<Vendor />}></input>
        <input type="button" className="App-button" value="Vendor"  ></input>
        <input type="button" className="App-button" value="Customer"  ></input>
      </header>
      
      {/* <Vendor/> */}
     

       
      


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
