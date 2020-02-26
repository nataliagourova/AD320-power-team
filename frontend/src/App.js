import React from 'react';

import Landing from './Landing';
import Vendor from './vendor/Vendor';


//      {specific object import,___ ,___ }
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        
        
        <Switch>
          <Route path="/" exact component={Landing} />
          {/* <Route path="/admin" components={Admin} /> */} 
          <Route path="/vendor" component={Vendor} />
          {/* <Route path="/customer" components={Customer} /> */}
        </Switch>
          
      </div>
    </Router>

  );
}
 
export default App;
