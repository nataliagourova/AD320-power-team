import React from 'react';
import './Nav.css';

// use link for creating a link that direct to different pages
import {Link} from 'react-router-dom';


function Nav(){
   return(
      <nav>
         <ul className="nav-buttons">
               <li>Menu</li>
               <li><Link className="signout" to="/newOrders">Orders</Link></li>
               <li><Link className="signout" to ="">Sign-Out</Link></li> 
            

         </ul>
      </nav>
   );
}

export default Nav;