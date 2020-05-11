import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cardaction extends Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired, 
        font: PropTypes.string.isRequired,
      }; 
    render() {
        const { icon,count,font } = this.props;
        return (
            <a className={'cardaction ' + font}>
                 {icon}&nbsp;&nbsp;&nbsp;
                 {count}
            </a>
        );
    }
}

export default Cardaction;