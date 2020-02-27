import React from 'react';
import './BottomMenuButton.css';

function BottomMenuButton(props) {
   return (
      <span className="bottomMenuButtonContainer">
        <button className="bottomMenuButton" onClick={props.onClick}>
            {props.text}
        </button>
      </span>);
}

export default BottomMenuButton; 