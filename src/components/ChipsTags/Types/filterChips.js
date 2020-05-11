import React, { Component } from 'react';
class filterChips extends Component {
    state = {
        Title: this.props.Title,
        DivclassName: this.props.DivclassName,
        LableclassName: this.props.LableclassName,
        inputClassName: this.props.inputClassName,
        inputId: this.props.inputId,
        inputAttribute: this.props.inputAttribute
    }
    render() {
        return (
            <>
                <div className={`${this.state.DivclassName} form-group input-chips filter-chips`} > 
                    <label className={this.state.LableclassName} htmlFor={this.state.inputId}> {this.state.Title}
                        <input name="selection" type="radio" id={this.state.inputId} onFocus={this.state.inputAttribute} disabled={this.state.inputAttribute} className={this.state.inputClassName}/>
                    </label>
                </div>
            </>              
        );
    }
}

export default filterChips;