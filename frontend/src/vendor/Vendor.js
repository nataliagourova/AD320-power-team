import React from 'react';
import './Vendor.css';
import MenuItem from './MenuItem';

import logo from '../assets/hotdogcart.png'

function Vendor () {
   return(
      //vendor will show the paper list
      <div className="Vendor"> 
         <img src={logo} alt="logo" />
         <h1>Menu</h1>
         <MenuItem />
         <MenuItem />
         <MenuItem />
      </div>
   )
}

export default Vendor;




