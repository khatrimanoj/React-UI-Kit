import React, { Component } from 'react';
import PropTypes from 'prop-types';


class description extends Component {
    static propTypes = {
        style:PropTypes.string,
      };
    render() {
        const { style } = this.props;

        return (
            <div className={`carddescription ` + style}>
                <div className="tbl">
                    <div className="tbl-cell">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default description;