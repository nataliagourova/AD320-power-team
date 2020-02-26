import React from 'react';
import logo from './assets/hotdogcart.png';
import VendorOrders from './vendor/VendorOrders';
import './App.css';

function App() {
  return (
    <div className="App">
            {/* <header className="App-header">
        <h3>Welcome to Wheelie Wiener</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <input type="button" className="App-button" value="Admin"></input>
        <input type="button" className="App-button" value="Vendor"  ></input>
        <input type="button" className="App-button" value="Customer"  ></input>
      </header> */}
      <VendorOrders />;
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
