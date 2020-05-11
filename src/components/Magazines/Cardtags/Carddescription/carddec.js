import React, { Component } from 'react';
import PropTypes from 'prop-types';

class carddec extends Component {
    static propTypes = {
        Description: PropTypes.string.isRequired,
        style: PropTypes.string,
      }; 
    render() {
        const { Description,style } = this.props;
        return (
            <div className={`body2 card-description ` + style}>
                {Description}
            </div>
        );
    }
}

export default carddec;