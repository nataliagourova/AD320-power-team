import React from 'react';
import './admin.css';
import {Header, Loginbox, Admin1,LogsRow, LogsHead, Admin2 ,Admin2Row} from '../components/admincomponents';




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
    <Admin2 />
    
    </div>
   )
}

export {Login, Admin1Page, Admin1Vendor, Admin1Admin, Admin1Customer, Admin1Equipment, Admin1Promotion, Admin2Page} 
    
