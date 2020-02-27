import React from 'react';
import './Customer.css';
import Home from '../assets/custScreen/home.png';

import {Link} from 'react-router-dom';


function Customer () {
   return(
      <div className="custHome">
         <h1>This is customer home page</h1>
         <Link className="pic" to = "/customer/search">
            <img src={Home} alt = "home"/>   
         </Link>

      </div>
   )
}

export default Customer;




