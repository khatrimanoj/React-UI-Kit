import React, { Component } from 'react';
import DropDownItems from './dropdownitem';
import PropTypes from 'prop-types'; 

class Dropdown extends Component {
    static propTypes = {
        className: PropTypes.string
    };
    static defaultProps = {
        className: ''
    };
    constructor(...args) {
        super(...args);

        this.state = {
            active: false
        };
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.renderSelectionCont = this.renderSelectionCont.bind(this);
    }
    toggleDropDown(action, e) {
        switch (action) {
            case 'close':
                this.setState({
                    active: false
                });
                document.removeEventListener('click', this.handleDocumentClick);
                break;
            default:
                this.setState({
                    active: true
                });
                document.addEventListener('click', this.handleDocumentClick);
                break
        }
    }
    handleSelection(item) {
        this.props.onClick(item);
        this.toggleDropDown('close');
    } 
    handleDocumentClick() {
        this.toggleDropDown('close');
    }
    handleOutsideClick(e) {
        e.nativeEvent.stopImmediatePropagation();
    }
    renderSelectionCont() {
        if (!this.state.active) return;

        return <DropDownItems options={this.props.options} onClick={this.handleSelection} displayField={this.props.displayField} />;
    }
    render() {
        let wrapperClassName = 'bd-dropdown' + (this.props.className ? ' ' + this.props.className : '');
        let caretClass = 'fa fa-chevron-down';
        let toggle = 'open';
        if (this.state.active) {
            caretClass = 'fa fa-chevron-up';
            wrapperClassName = wrapperClassName + ' __active';
            toggle = 'close';
        }

        return (
            <div className={wrapperClassName} onClick={this.handleOutsideClick}>
                <div className='__control' onClick={this.toggleDropDown.bind(this, toggle)}>
                    <div>{this.props.value}</div>
                    <i className={caretClass}></i>
                </div>
                {this.renderSelectionCont()}
            </div>
        );
    }
}

export default Dropdown;