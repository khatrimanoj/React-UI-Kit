import React, { Component } from 'react';
import ReactDOM from 'react-dom';


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
                   placeholder="Search..."
                   ref={this.inputRef}
                   value={this.props.searchvalue} onChange = {this.props.updatevalue}
                   required
              />
              <button onClick = {this.props.clearInput}></button>
            </div>
        );
    }
}

export default dropdownsearch;