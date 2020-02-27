import React from 'react';
import menuPic from '../assets/custScreen/menuOrder.png';
import './Customer.css';

import {Link} from 'react-router-dom';


function CustMenuOrder () {
   return(
      <div className="custHome">
         <h1>Menu or Order Page</h1>
         <Link className="pic" to = "/customer/checkout">
            <img src={menuPic} alt = "menu"/>   
         </Link>
      </div>
   )
}

export default CustMenuOrder;