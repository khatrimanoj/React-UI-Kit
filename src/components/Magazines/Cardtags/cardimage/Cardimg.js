import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cardimg extends Component {
    static propTypes = {
        img: PropTypes.string.isRequired,
      }; 
    render() {
        const { img } = this.props;

        return (
            <div className="cardimg">
                <img src={img}/>
                {this.props.children}
            </div>
        );
    }
}

export default Cardimg;