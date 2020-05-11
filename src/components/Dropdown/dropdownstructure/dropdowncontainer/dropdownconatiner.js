import React, { Component } from 'react';
import Header from '../header/header';
import Child from '../child/child';

class Dropdownconatiner extends Component {
    render() {
        const items = this.props.data;
        let folderItems = [];
        let index=0;
        let counthtml = [];
        let namehtml = [];
        let iconhtml = [];
        for (let i = 0; i < items.length; i++) {
            if (items[i].icon) {
                iconhtml = <span className="d-icon">{items[i].icon} </span>;
              }
            if (items[i].count) {
                counthtml = <span className="d-count">{items[i].count} </span>;
              }
              if (items[i].name) {
              namehtml = <span>{iconhtml}{items[i].name} </span>;
              }
            if (items[i].type === 'head') {
                folderItems.push(<Header key={index++} name={items[i].name.toLowerCase()} />);
            } else {
                folderItems.push(
                    <Child 
                       key={index++} 
                      
                       link={items[i].link} 
                      
                       total={this.props.number}
                onClick={() => this.props.onClick(items[i].name)}>{namehtml}{counthtml}</Child>
                );
            }
            if (items[i].children) {
                folderItems.push(<Dropdownconatiner style="Dropdown-sub-ul"  key={index++} data={items[i].children}/>);
            }
        }
        return (
            <ul className={this.props.style}>
                {this.props.children}
                {folderItems}
            </ul>
        );
    }
}

export default Dropdownconatiner;