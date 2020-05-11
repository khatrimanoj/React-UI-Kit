import React, { Component } from 'react';
import PropTypes from 'prop-types';


class cardlink extends Component {
    static propTypes = {
        font: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired, 
        url: PropTypes.string.isRequired, 
      }; 
    render() {
        const { url,label,font } = this.props;
        return (
            <a className={'cardlink ' + font} href={url}>
                {label}
            </a>
        );
    }
}

export default cardlink;