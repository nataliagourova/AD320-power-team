import React from 'react';
import './Vendor.css';
import MenuItem from './MenuItem';
import menuData from "../data/menuData"
import NavBar from '../common/Nav';

import logo from '../assets/hotdogcart.png'



function Vendor () {
   //Arrow fucntion version
  //jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)

                        // mapping essentially extracting json data and
                        // place it in the array
  const menuItemComponents = menuData.map( 
      (hotdog) => {
         return(<MenuItem
                  key={hotdog.id} //always needed else there will be console log error.. has to be unique
                  hotdog = {hotdog} 
               />
         )
      }
   ) 
   return(
      //vendor will show the paper list
      <div className = "Bg">
         <NavBar />
         <div className="Vendor"> 
            <header className="V-header">
               <img src={logo} alt="logo" />
               <h1>Menu</h1>
               <br />

               <h3>Turn On Cart</h3>
               <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"/>
               </label>
               <br />
               <br />



            </header> 
            {menuItemComponents}

            <input 
            type     ="button" 
            className="V-updateMenu" 
            value    ="UPDATE MENU"   
            onClick  = {event => window.location.href='/vendor'}
            />   
         </div>
      </div>
   )
}

export default Vendor;




