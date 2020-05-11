import React, { Component } from 'react';
import PropTypes from 'prop-types';

class cardheading extends Component {
    static propTypes = {
        heading: PropTypes.string.isRequired,
        style: PropTypes.string.isRequired,
      }; 
      static defaultProps = {
        style: "h6",
      }; 
    render() {
        const { heading,style } = this.props;
        return (
            <div className={style}>
                {heading}
            </div>
        );
    }
}

export default cardheading;