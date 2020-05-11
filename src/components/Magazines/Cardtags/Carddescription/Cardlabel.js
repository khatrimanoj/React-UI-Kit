import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Cardlabel extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        style: PropTypes.string.isRequired,

      }; 
      static defaultProps = {
        style: "body2",
      }; 
    render() {
        const { label,style } = this.props;
        return (
        <label className={style}>{label}</label>
        );
    }
}

export default Cardlabel;