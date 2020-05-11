import React, { Component } from 'react';

class formbody extends Component {
    render() {
        return (
            <div className="form-body">
                {this.props.children}
            </div>
        );
    }
}

export default formbody;