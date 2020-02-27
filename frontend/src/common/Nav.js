import React from 'react';
import './Nav.css';

// use link for creating a link that direct to different pages
import {Link} from 'react-router-dom';


function Nav(){
   return(
      <nav>
         <ul className="nav-buttons">
               <li>Menu</li>
               <li>Orders</li>
              <Link className="signout" to =""><li>Sign-Out</li></Link> 
            

         </ul>
      </nav>
   );
}

export default Nav;