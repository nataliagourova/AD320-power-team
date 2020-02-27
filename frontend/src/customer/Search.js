import React from 'react';
import SearchBarPic from '../assets/custScreen/searchbar.png';
import './Customer.css';

import {Link} from 'react-router-dom';


function SearchBar () {
   return(
      <div className="custHome">
         <h1>Seach bar functionality</h1>
         <Link className="pic" to = "/customer/clickPin">
            <img src={SearchBarPic} alt = "search"/>   
         </Link>
      </div>
   )
}

export default SearchBar;