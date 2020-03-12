import React from 'react';
import './CustomerDetails.css';
import customerData from '../data/customerData';

class CustomerDetails extends React.Component {
    render() {
        console.log("sdfsldfkjsdfkj>>>>>>>>>>>>>>>  " + this.props.customerId);
        var customer = customerData[this.props.customerId];
        return (
            <div className="customerDetailsContainer">
                <img className="customerDetailsAvatar" src={customer.pic} alt={customer.name} />
                <div className="customerDetailsName">{customer.name}</div>
            </div>
        );
    }
}

export default CustomerDetails; 