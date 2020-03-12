import React from 'react';
import './BottomMenu.css';
import BottomMenuButton from './BottomMenuButton';

class BottomMenu extends React.Component {
   render() {
        return (
            <div className="bottomMenuContainer">
                <BottomMenuButton text="Welcome Page" onClick={this.goToWelcomePage} />
                <BottomMenuButton text="My Menu" onClick={this.goToMyMenu} />
                <BottomMenuButton text="New Orders" onClick={this.goToNewOrders} />
                <BottomMenuButton text="Open Orders" onClick={this.goToOpenOrders} />
                <BottomMenuButton text="Closed Orders" onClick={this.goToClosedOrders} />
                <BottomMenuButton text="Log Out" onClick={this.logOut} />
                <BottomMenuButton text="Help" onClick={this.goToHelp} />
            </div>);
   }

   goToWelcomePage = () => { alert('welcome!'); };

   goToMyMenu = () => { alert('my menu!'); };

   goToNewOrders = () => { alert('new orders!'); };

   goToOpenOrders = () => { alert('open orders!'); };

   goToClosedOrders = () => { alert('closed orders!'); };

   logOut = () => { alert('log out!'); };

   goToHelp = () => { alert('help!'); };

}

export default BottomMenu; 