import React from 'react';
import './MenuItem.css';
import menuPic from '../assets/menu-pic.png'

function MenuItem() {
   return(
      <div className="Menu-Item">
         <input type="checkbox" />
         <p>Placeholder menu item</p>
         <img src={menuPic}/>
      </div>
   );
}

export default MenuItem;