import React, { Component } from 'react';

class nolableChips extends Component {
    state = {
        id: this.props.id,
        classFillColor: this.props.classFillColor,
        checked: this.props.checked,
        DivclassName: this.props.DivclassName,
        labelStyle: this.props.style,
        inputStyle: this.props.inputStyle,
        divStyle: this.props.inputStyle,
    }
    render() {
        return (
            <>
                <div className={`${this.state.DivclassName} no-label-chips`} style={this.state.divStyle}> 
                    <input  type="checkbox" checked={this.state.checked} style={this.state.inputStyle} id={this.state.id} className={this.state.classFillColor}/>
                    <label className={this.state.classFillColor} htmlFor={this.state.id} style={this.state.labelStyle}></label>
                </div>
            </>
        );
    }
}

export default nolableChips;