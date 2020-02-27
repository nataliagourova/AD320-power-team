import React from 'react';
import bubble from '../assets/custScreen/clickPin.png';
import './Customer.css';

import {Link} from 'react-router-dom';


function ClickPin () {
   return(
      <div className="custHome">
         <h1>When pin is clicked</h1>
         <Link className="pic" to = "/customer/menuOrder">
            <img src={bubble} alt = "bubble"/>   
         </Link>
      </div>
   )
}

export default ClickPin;