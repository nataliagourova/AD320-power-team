import React from 'react';
import checkOutPic from '../assets/custScreen/checkout.png';
import './Customer.css';


import {Link} from 'react-router-dom';


function CheckOut () {
   return(
      <div className="custHome">
         <h1>Login / SignUp Prompt</h1>
         <Link  className="pic" to = "">
            <img src={checkOutPic} alt = "menu"/>   
         </Link>
      </div>
   )
}

export default CheckOut;