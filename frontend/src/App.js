import React from 'react';
import logo from './assets/hotdogcart.png';
import VendorOrders from './vendor/VendorOrders';
import BottomMenu from './vendor/BottomMenu';
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
	  <BottomMenu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
