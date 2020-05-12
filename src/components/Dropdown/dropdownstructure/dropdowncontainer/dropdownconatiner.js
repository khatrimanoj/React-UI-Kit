import React, { Component } from 'react';
import Header from '../header/header';
import Child from '../child/child';

class Dropdownconatiner extends Component {
    constructor(...args){
        super(...args);
        this.handleSelection = this.handleSelection.bind(this);

      }
     
      handleSelection(item){
        this.setState({
          display: item.name
        })
      }
    render() {
        const items = this.props.data;
        let folderItems = [];
        let index=0;
        let counthtml = [];
        let namehtml = [];
        let iconhtml = [];
        let subnamehtml = [];

        for (let i = 0; i < items.length; i++) {
            if (items[i].icon) {
                iconhtml = <span className="d-icon">{items[i].icon} </span>;
              }
            if (items[i].count) {
                counthtml = <span className="d-count pull-right">{items[i].count} </span>;
              }
              if (items[i].subname) {
                subnamehtml = <span className="d-subname">{items[i].subname} </span>;
              }
              if (items[i].name) {
              namehtml = <span className="w-100">{iconhtml}<span className="d-name">{items[i].name}{subnamehtml}</span> {counthtml}</span>;
              }
            if (items[i].type === 'head') {
                folderItems.push(<Header key={index++} name={items[i].name.toLowerCase()} />);
            } else {
                folderItems.push(
                    <Child 
                       key={index++} 
                      
                       link={items[i].link} 
                      
                       total={this.props.number}
                       onClick={this.handleSelection}>{namehtml}</Child>
                );
            }
            if (items[i].children) {
                folderItems.push(<Dropdownconatiner style="Dropdown-sub-ul"  key={index++} data={items[i].children}/>);
            }
        }
        
        return (
            <>
                {this.props.children}
                {folderItems}
            </>
        );
    }
}

export default Dropdownconatiner;