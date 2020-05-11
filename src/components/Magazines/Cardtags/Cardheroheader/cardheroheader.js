import React, { Component } from 'react';
import PropTypes from 'prop-types';


class cardheroheader extends Component {
    render() {
        return (
            <div className="cardherolable">
                {this.props.children}
            </div>
        );
    }
}

export default cardheroheader;