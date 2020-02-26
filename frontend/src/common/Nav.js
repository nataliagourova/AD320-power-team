import React from 'react';
import './Nav.css';

// use link for creating a link that direct to different pages
import {Link} from 'react-router-dom';


function Nav(){
   return(
      <nav>
         <ul className="nav-buttons">
            <Link to='/vendor'> 
               <li>Menu</li>
            </Link>
               <li>Orders</li>
               <li>Sign-Out</li>
            <Link to="/vendor" > Vendor </Link>

         </ul>
      </nav>
   );
}

export default Nav;