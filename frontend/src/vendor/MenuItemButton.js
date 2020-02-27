import React from 'react';
import './MenuItemButton.css';

function MenuItemButton(props) {
   return (
      <div className="menuItemButtonContainer">
        <button className="menuItemButton" onClick={props.onClick}>
            {props.text}
        </button>
      </div>);
}

export default MenuItemButton; 