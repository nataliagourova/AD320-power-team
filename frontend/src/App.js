import React from 'react';

import Landing   from  './Landing.js';
import Vendor    from  './vendor/Vendor.js';
import Admin     from  './admin/Admin';
import Customer  from  './customer/Customer.js';
import Search    from  './customer/Search.js';
import ClickPin  from  './customer/ClickPin.js';
import MenuOrder from  './customer/CustMenuOrder.js';
import CheckOut  from  './customer/CheckOut.js';




//      {specific object import,___ ,___ }
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/"    exact component = {Landing}   />
          <Route path="/admin"     component = {Admin}    /> 
          <Route path="/vendor"    component = {Vendor}    />

          <Route path="/customer"  exact    component = {Customer} />
          <Route path="/customer/search"    component = {Search} />
          <Route path="/customer/clickPin"  component = {ClickPin} />
          <Route path="/customer/menuOrder" component = {MenuOrder} />
          <Route path="/customer/checkout"  component = {CheckOut} />
        </Switch>      
      </div>
    </Router>

  );
}
 
export default App;
