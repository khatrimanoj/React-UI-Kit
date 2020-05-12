import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
class dropdownitem extends Component {
    constructor(...args){
        super(...args);
      }
    render() {
        let options = this.props.options.map((item, idx) => {
      
            return (
              <li className='__item' key={idx} onClick={this.props.onClick.bind(this, item)}>{item.display}</li>
            );
          }); 
        return (
            <ul className='__options' onClick={this.props.onOutsideClick}>
            {options}
          </ul>
        ); 
    }
}

export default dropdownitem;