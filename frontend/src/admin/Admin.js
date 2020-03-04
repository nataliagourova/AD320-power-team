import React from 'react';
import './Admin.css';
import {Header, Loginbox, Admin1,LogsRow, LogsHead, Admin2 ,Admin2Row, WrappedMap, Admin3Row} from '../components/admincomponents';




function Admin1Page () {
    return(
        <div>
            
        <Header message='Admin Access: LOGS'/>
        <Admin1 />
        
        </div>
    )
}

function Login () {
    return(
        <div>
            <Loginbox />
        </div>
    )
}

function Admin1Vendor () {
    return(
        <div>
        <Header message ='Admin Access: LOGS' />
        <LogsHead message ='Vendor' message2='Item'/>
        <LogsRow />
        <LogsRow />
        <LogsRow />
        <LogsRow />
        </div>
    )
}

function Admin1Admin () {
    return(
        <div>
        <Header message ='Admin Access:LOGS' />
        <LogsHead message ='Admin' message2='Item'/>
        <LogsRow />
        <LogsRow />
        <LogsRow />
        <LogsRow />
        </div>
    )
}

function Admin1Customer () {
    return(
        <div>
        <Header message ='Admin Access: LOGS' />
        <LogsHead message ='Customer' message2='Item'/>
        <LogsRow />
        <LogsRow />
        <LogsRow />
        <LogsRow />
        </div>
    )
}

function Admin1Equipment () {
    return(
        <div>
        <Header message ='Admin Access: LOGS' />
        <LogsHead message ='Equipment' message2='Item'/>
        <LogsRow />
        <LogsRow />
        <LogsRow />
        <LogsRow />
        </div>
    )
}

function Admin1Promotion () {
    return(
        <div>
        <Header message ='Admin Access: LOGS' />
        <LogsHead message ='Promotions' message2='Sale'/>
        <LogsRow />
        <LogsRow />
        <LogsRow />
        <LogsRow />
        </div>
    )
}

function Admin2Page () {
return(
    <div>
    <Header message= 'Admin Access: MENUS' />
    <Admin2Row message= '1'/>
    <Admin2Row message= '2'/>
    <Admin2Row message= '3'/>

    
    </div>
   )
}

function Admin3Page () {
    return(
        <div className='wrapper' > 
            <Header message = 'Admin Access: Carts' />
            <br />
            <WrappedMap
             googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'} 
             loadingElement= {<div style={{height:"100%"}}/>}
             containerElement= {<div style={{height:"100%"}}/>}
             mapElement= {<div style={{height:"100%"}}/>}
             />
             <Admin3Row message='1' />
             <Admin3Row message='2' />

            

        </div>
    )
}

export {Login, Admin1Page, Admin1Vendor, Admin1Admin, Admin1Customer, Admin1Equipment, Admin1Promotion, Admin2Page, Admin3Page} 
    
