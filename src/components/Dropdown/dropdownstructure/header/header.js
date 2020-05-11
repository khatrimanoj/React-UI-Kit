import React, { Component } from 'react';

class header extends Component {
    render() {
        return (
            <li className='d-headeing'>{this.props.name}</li>
        );
    }
}

export default header;