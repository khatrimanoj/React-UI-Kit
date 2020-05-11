import React, { Component } from 'react';
import PropTypes from 'prop-types';

class form extends Component {
    static propTypes = {
        Background: PropTypes.string,
      };
    render() {
        const { thamecolor,Background,Emailform } = this.props; 

        const font = `
           singinform z1
           ${Emailform && 'emailform'}
          ${thamecolor === 'white' && 'white'}


        `;
        return (
            <div  className={font + Background}>
                {this.props.children}
            </div>
        );
    }
}

export default form;