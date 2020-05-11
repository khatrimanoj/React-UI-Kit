import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdowncontainer from '../dropdowncontainer/dropdownconatiner';
import Input from '../dropdownsearch/dropdownsearch';

class dropdownmarge extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
      };
      static defaultProps = {
        data: []
      };
    constructor(props) {
        super(props);
        this.handleInput=this.handleInput.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.state={
            data:this.props.data,
            labelItem: null,
            typeDropdown: null,
            selected: null,

        };
    }
    componentWillMount() {
        const { name } = this.props.data[0];
        let firstItem = null;    
        if (typeof name != 'undefined') {
          this.checkType(false);
          firstItem = name;
        } else {
          this.checkType(true);
          firstItem = this.props.data[0];
        }        
        this.setState({
            labelItem: firstItem
        });    
      }
    
      checkType = (value) => {
        this.setState({
            typeDropdown: value
        });    
      };
      chooseItem = (value) => {    
        if (this.state.labelItem !== value) {
          this.setState({
            labelItem: value      
          })
        }    
      };
    transformJSON=(data, value)=>{
    let newObj=[];
        (function filterJSON(obj, searchValue)
        {
            if(obj.name && (obj.name.toString().toLowerCase().indexOf(searchValue) >-1)){
                newObj.push(obj);
                return
            }
            for (var key in obj)
            {
                if (typeof obj[key] == "object" && obj[key] !== null){
                    filterJSON(obj[key],searchValue);
                }
            }
        })(data, value);
        return newObj;
    };
    showDropdown = () => {
        this.setState({ isOpen: true });
        document.addEventListener("click", this.hideDropdown);
        this.inputRef.current.focus();
      };
      hideDropdown = () => {
        this.setState({ isOpen: false });
        document.removeEventListener("click", this.hideDropdown);
      };
    handleInput=(event) =>{
      this.state={
            value:event.target.value.toLowerCase()
        };
        this.setState({data: this.transformJSON(this.props.data,event.target.value.toLowerCase())});
    };
    onSelect(option){
      this.setState({
        selected: option,
        opened: false
      }, ()=> {
        //console.info(this.state);
      });
    }
    render() {
      let selected = this.state.selected ? this.state.selected.value : 'Select';
        const {data,searching} = this.props ;
        const {value, label} = this.state.typeDropdown
        const { size,border } = this.props; 
        const dropdownClassname = `
        dropdown
        ${size === 'lg' && 'lg-dropdown'}
        `;   
        const  dropdowntoggleclass = `
        dropdown-toggle
        ${border === 'false' && 'bordernone'}
        `;   
        
        let searchinput;
        if (searching === true) {
          searchinput = <Input handleChange={this.handleInput}/>;
        } else {
          searchinput = null;
        }
        return (
            <div className={ ` ${dropdownClassname} ${this.state.isOpen ? 'open' : ''}`} >
                
                <button  className={dropdowntoggleclass} type="button" onClick={this.showDropdown}>
               {this.state.labelItem}
              
            </button>
                
                <Dropdowncontainer style="dropdown-menu" data={this.props.data} onClick={() => this.chooseItem()} number={this.props.totals}>
                  {searchinput}
                 
                <div className="searchvalue">{this.state.value? ("Searching for:"+this.state.value):null}</div>

                </Dropdowncontainer>
                
            </div>
        );
    }
}

export default dropdownmarge;