import React from 'react';
import './BottomMenu.css';
import BottomMenuButton from './BottomMenuButton';
import {Link} from 'react-router-dom';

class BottomMenu extends React.Component {
   render() {
        return (
            <div className="bottomMenuContainer">
                <BottomMenuButton text="Welcome Page" target="/" />
                <BottomMenuButton text="My Menu" target="/vendor" />
                <BottomMenuButton text="New Orders" target="/vendor/newOrders" />
                <BottomMenuButton text="Open Orders" target="/vendor/inProgressOrders"  />
                <BottomMenuButton text="Closed Orders" target="/vendor/completedOrders" />
                <BottomMenuButton text="Log Out" target="/logout" />
                <BottomMenuButton text="Help" target="/help" />
            </div>);
   }
}
export default BottomMenu; 