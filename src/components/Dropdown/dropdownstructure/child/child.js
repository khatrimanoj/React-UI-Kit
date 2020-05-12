import React, { Component } from 'react';

class child extends Component {
    render() {
          
        return (
        <li className='folder-item'  onClick={this.props.onClick}><a href={this.props.link}> {this.props.children}</a></li>
        );
    }
} 

export default child;