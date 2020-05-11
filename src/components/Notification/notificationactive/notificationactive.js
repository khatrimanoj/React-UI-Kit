import React, { Component } from 'react';
import PropTypes from 'prop-types';


class notificationactive extends Component {
    static propTypes = {
        style: PropTypes.string.isRequired,
        height: PropTypes.string,
        width: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,

      }; 
      
    render() {
        const { style,height,width,right,bottom } = this.props;
        const point = {
            height: height,
            width: width,
            right: right,
            bottom: bottom,
          }
        return (
            <div className={`notificationactive ` + style} style={point}>
                
            </div>
        );
    }
}

export default notificationactive;