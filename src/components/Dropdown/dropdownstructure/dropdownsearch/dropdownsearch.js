import React, { Component } from 'react';

class dropdownsearch extends Component {
    constructor(props) {
        super(props); 
        this.inputRef = React.createRef();
      }
    componentDidUpdate() {
        this.inputRef.current.focus(); }
    render() {
        return (
            <div className="dropdownsearch" onChange={this.props.handleChange}>
              <input
                    type="text" 
                   placeholder="filter..."
                   ref={this.inputRef}
              />
              <button></button>
            </div>
        );
    }
}

export default dropdownsearch;