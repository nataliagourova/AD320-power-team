import React from 'react';
import logo from '../assets/hotdogcart.png';
import VendorOrders from './VendorOrders';
import VendorInfo from './VendorInfo';
import BottomMenu from './BottomMenu';
import './Vendor1.css';

function Vendor1() {
  return (
    <div className="App1">
      <VendorOrders vendorCartId={1}/>;
	    <BottomMenu />
    </div>
  );
}

export default Vendor1;