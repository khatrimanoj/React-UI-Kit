import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <li>
            { this.props.name }
          { this.props.children }
      </li>
        );
    }
}

export default Item;