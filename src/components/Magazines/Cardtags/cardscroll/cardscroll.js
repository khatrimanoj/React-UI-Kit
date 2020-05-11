import React, { Component } from 'react';
import PropTypes from 'prop-types';


class cardscroll extends Component {
    static propTypes = {
        style: PropTypes.string.isRequired,
        scrollheight: PropTypes.string
 };
    render() {
        const { style,scrollheight } = this.props;
        const scroll = {
            maxHeight: scrollheight
          }
        return (
            <div className={`card-overflow ` + style} style={scroll}>
                {this.props.children}
            </div>
        );
    }
}

export default cardscroll;