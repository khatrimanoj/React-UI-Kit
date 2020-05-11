import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Cardfooter extends Component {
    static propTypes = {
        style:PropTypes.string.isRequired,
      }; 
    render() {
        const { style } = this.props;
        return (
            <div className={`cardfooter ` + style}>
                {this.props.children}
            </div>
        );
    }
}

export default Cardfooter;