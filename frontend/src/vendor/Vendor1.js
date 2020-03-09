import React from 'react';
import logo from '../assets/hotdogcart.png';
import VendorOrders from './VendorOrders';
import BottomMenu from './BottomMenu';
import './Vendor1.css';

function Vendor1() {
  return (
    <div className="App">

      <VendorOrders />;
	  <BottomMenu />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

export default Vendor1;