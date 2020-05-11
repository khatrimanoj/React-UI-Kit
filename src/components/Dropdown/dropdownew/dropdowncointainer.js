import React, { Component } from 'react';
import DropDown from './Dropdown';

class dropdowncointainer extends Component {
    constructor(...args){
        super(...args);
        this.handleSelection = this.handleSelection.bind(this);
        this.state = {
          displayValue: 'Most Recent'
        }
      }
    
      handleSelection(item){
        this.setState({
          displayValue: item.display
        })
      }
    render() { 
        const listItems = [
            { display: 'Most Recent', value: 0 },
            { display: 'Oldest', value: 1 },
            { display: 'Template Name', value: 2 },
            { display: 'Modified By', value: 3 }
          ];
        return (
            <div className='dropdown-width'>
            <DropDown options={listItems} value={this.state.displayValue} onClick={this.handleSelection} />
          </div>
        );
    }
}

export default dropdowncointainer;