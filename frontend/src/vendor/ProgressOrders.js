import React from 'react';
import './VendorOrders.css';
import Home from '../assets/hotdogcart.png';

import {Link} from 'react-router-dom';


function ProgressOrders () {
   return(
      <div className="In-Progress">
         <h1>Orders In Progress</h1>
         <Link className="pic" to = "/customer/search">
            <img src={Home} alt = "home"/>   
         </Link>

      </div>
   )
}

export default ProgressOrders;