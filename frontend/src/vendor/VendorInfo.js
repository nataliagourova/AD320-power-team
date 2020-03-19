import React from 'react';
import './VendorInfo.css';
import vendor from '../data/vendorData';

class VendorInfo extends React.Component {
    
    loadVendorCarts = () => {
        fetch("http://localhost:3019/carts")
            .then(response => response.json())
            .then(this.setResponseCarts)
            .catch((error) => {
                console.error(error)
            })

    }

    setResponseCarts = (responseCarts) => {
        this.setState({
            vendors : responseCarts
        });
    }

    componentDidMount() {
        this.loadVendorCarts();
    }

    shouldComponentUpdate(nextProps, nextState) {
        // alert("loading....");
        return false;
        // return this.state !== nextState
        //     && nextState != null
        //     && nextState.vendors != null;
    }

    render() {
        if (this.state == null || this.state.vendors == null) {
            const vendorInfo = vendor[this.props.vendorCartId];
            return (
                <div className="VendorInfo-Container">
                    <span>Cart {vendorInfo.cartId} ({vendorInfo.cartName}) </span>
                    {/* <span>Loading vendor # {this.props.vendorCartId} from backend...</span> */}
                </div>)
        }
        
        const vendorInfo = this.state.vendors[this.props.vendorCartId];
        return (
            <div className="VendorInfo-Container">
                <span>Cart {vendorInfo.cartId} ({vendorInfo.cartName}) </span>
            </div>
        );
    }

}

export default VendorInfo; 