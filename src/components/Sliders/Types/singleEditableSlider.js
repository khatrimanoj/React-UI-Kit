import React, { Component } from 'react';

class singleEditableSlider extends Component {
    state = {
        value: this.props.value,
        id: this.props.id,
        min: this.props.min,
        max: this.props.max,
        step: this.props.step,
        className: this.props.className,
        disabled: this.props.disabled,
      }
      
      handleOnChange = (es) => {
        this.setState({ value: es.target.value });
      }
      
    render() {
        const { id, value, size, min, max, step, ...inputProps } = this.props
        return (
            <div className="editable">
                <div className="current-value inline range-slider">
                    <label>
                        <input type="range" min={this.state.min} disabled={this.state.disabled} className={this.state.className} max={this.state.max} defaultValue={this.state.value} onChange={this.handleOnChange} step={this.state.step} />
                        <input type="number" value={this.state.value} onChange={this.handleOnChange} />
                    </label>
                </div>
            </div>
        );
    }
}

export default singleEditableSlider;