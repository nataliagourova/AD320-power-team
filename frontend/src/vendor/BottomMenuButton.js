import React from 'react';
import './BottomMenuButton.css';
import {Link} from 'react-router-dom';

class BottomMenuButton extends React.Component {

  render() {
    return (
        <span className="bottomMenuButtonContainer">
          <Link className="bottomMenuButton" to={this.props.target}>
              {this.props.text}
          </Link>
        </span>);
  }
}


export default BottomMenuButton; 