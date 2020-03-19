import React from 'react';
import './VendorInfo.css';
import vendor from '../data/vendorData';

class VendorInfo extends React.Component {
    render() {
        var vendorInfo = vendor[this.props.vendorCartId];
        return (
            <div className="VendorInfo-Container">
                <span>Cart {vendorInfo.cartId} ({vendorInfo.cartName}) </span>
            </div>
        );
    }
}

export default VendorInfo; 