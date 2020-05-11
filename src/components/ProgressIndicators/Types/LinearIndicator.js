import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LinearIndicator extends Component {
    state = {
        data: this.props.data,
        valueNow: this.props.valueNow,
        progress: this.props.progress,
    }
    
    render() {
        return (
            <>
                {/* navigational progress bar */}
                <div className="progress" role="progressbar" aria-valuenow={this.state.valueNow} aria-valuemin="0" aria-valuemax="100">
                    <div className="bar" style={{width: `${this.state.progress}`}}></div>
                </div>
                <p className="text-gray caption">{this.state.data}</p>
            </>
        );
    }
}

LinearIndicator.propTypes = {
    step: PropTypes.any.isRequired,
    valueNow: PropTypes.any.isRequired
}
  
export default LinearIndicator;