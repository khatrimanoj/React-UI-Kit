import React, { Component } from 'react';
import PropTypes from 'prop-types';


class cardDT extends Component {
    static propTypes = {
        dt: PropTypes.string.isRequired,
        style: PropTypes.string,
      }; 
    render() {
        const { dt,style } = this.props;
        return (
        <span className={`carddatetime ` + style}>{dt}</span>
        );
    }
}

export default cardDT;