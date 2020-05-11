import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Cardmsg extends Component {
    static propTypes = {
        style:PropTypes.string.isRequired,
      }; 
    render() {
        const { style } = this.props;
        return (
            <div className={`cardmsg ` + style}>
                {this.props.children}
            </div>
        );
    }
}

export default Cardmsg;