import React, { Component } from 'react';

class Tags extends Component {
    state = {
        DivclassName: this.props.DivclassName,
        LabelclassName: this.props.LabelclassName,
        inputClassName: this.props.inputClassName,
        Title: this.props.Title,
        id: this.props.id
    }
    render() {
        return (
            <>
                <div className={this.state.DivclassName}> 
                    <label className={this.state.LabelclassName} htmlFor={this.state.id}> {this.state.Title}
                        <input name="selection" type="radio" id={this.state.id} className={this.state.inputClassName}/>
                    </label>
                </div>    
            </>
        );
    }
}

export default Tags;