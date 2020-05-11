import React, { Component } from 'react';

class card extends Component {
    render() {
        const { style } = this.props;
        return (
            <div className={'card ' + style}>
                {this.props.children}
            </div>
        );
    }
}

export default card;