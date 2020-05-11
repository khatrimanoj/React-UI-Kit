import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';

// const Default = ['form-group input-chips default-chips left-icon'];
// const outline = ['form-group input-chips outline-chips left-icon'];
// const filled = ['form-group input-chips filled-chips left-icon'];
// const filter = ['', 'disabled', 'focus'];

class inputChips extends Component {
    state = {
        DivclassName: this.props.DivclassName,
        inputClass: this.props.inputClass,
        LeftIcon: this.props.LeftIcon,
        LeftIconSize: this.props.LeftIconSize,
        Title: this.props.Title,
        disabled: this.props.disabled,
        autoFocus: this.props.autoFocus,
        id: this.props.id,
        RightIcon: this.props.RightIcon,
        RightIconSize: this.props.RightIconSize


    }
    
    deleteChips(e) {
        // const inputChips = this.state.id;

        // inputChips.splice(chipsIndex, 1);
        this.setState({ value: e.target.id });
    }

    render() {
        return (
            <>
                <div className={this.state.DivclassName}> 
                    <i className="inputicon"><Icon icon={this.state.LeftIcon} size={this.state.LeftIconSize} /></i>
                    <input name="selection" type="text" className={this.state.inputClass} value={this.state.Title} autoFocus={this.state.autoFocus} readOnly id={this.state.id} />
                    <i className="cross-icon" onClick={()=>this.deleteChips()}><Icon icon={this.state.RightIcon} size={this.state.rightIconSize}/></i>
                </div>
            </>
        );
    }
}

export default inputChips;