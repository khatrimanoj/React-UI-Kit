import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cardoverlay extends Component {
    static propTypes = {
        backgroundcolor:PropTypes.string.isRequired,
      }; 
    render() {
        const { background } = this.props;
        const backgroundcolor = {
            background: background
          }
        return (
            <div className="cardoverlay" style={backgroundcolor}>
                 {this.props.children}
            </div>
        );
    }
}

export default Cardoverlay;