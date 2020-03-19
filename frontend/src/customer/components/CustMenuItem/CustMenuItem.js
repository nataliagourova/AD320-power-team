import React, {Component} from 'react';
import './CustMenuItem.css';
import Quantity from '../QuantitySelector/QuantitySelector.js';

function CustMenuItem(props) {
   return(
      <div className="Menu-Item">
         <table className="Table">
            <tr>
               <td className ="td1">
                  <Quantity/>
               </td>

               <td className ="td2">
                  {/* ================ Name ============ */}
                     <h3 style={{
                                 textDecoration: !props.hotdog.available && "line-through", 
                                          color: !props.hotdog.available && "#808080",
                                        padding: 0}}>
                        {props.hotdog.name}
                     </h3>
                  {/* ================ desc ============ */}
                     <p style={{textDecoration: !props.hotdog.available && "line-through",
                                         color: !props.hotdog.available && "#808080"}}>
                        {props.hotdog.desc}
                     </p>   
                  {/* ================ price ============ */}
                     <p style={{textDecoration: !props.hotdog.available && "line-through",
                                         color: !props.hotdog.available && "#808080"}}>
                        {props.hotdog.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                     </p> 
               </td>
               
               <td className = "td3">
                  {/* ================ picture ============ */}
                     <img src={props.hotdog.pic} alt="menuPic"/>   
               </td>
            </tr>
         </table>

      </div>
   );
}

export default CustMenuItem;