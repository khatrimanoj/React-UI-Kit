import React, { Component } from 'react';

class child extends Component {
    render() {
          const {total} = this.props ;
          let number;
          if (total === true) {
            number =  <span className="d-count">{this.props.count}</span>;
          } else {
            number = null;
          }
        return (
        <li className='folder-item'  onClick={this.props.onClick}><a href={this.props.link}> {this.props.children}</a></li>
        );
    }
} 

export default child;