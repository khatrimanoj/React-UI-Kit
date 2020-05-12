import React, { Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Dropdowncontainer from '../dropdowncontainer/dropdownconatiner';
import Input from '../dropdownsearch/dropdownsearch';
import Button from '../../../button/buttonprop/buttonprop';

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
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);


        
        this.state={
            data:this.props.data,
            labelItem: null,
            typeDropdown: null,
            selected: null,
            searcharray: '',

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
        this.setState({ isOpen: true });
        document.removeEventListener("click", this.hideDropdown);
    };
 
    updateState(e) {
      this.setState({searcharray: e.target.value});
      
   }
    clearInput(e) {
      this.setState({searcharray: ''});
      this.setState({data: this.transformJSON(this.props.data,e.target.value.toLowerCase())});
      ReactDOM.findDOMNode(this.refs.inputRef).focus();
   }
  
    render() {
      
        const {searching,button,size,border,link} = this.props ;
        const dropdownClassname = `
        dropdown
        ${size === 'lg' && 'lg-dropdown'}
        `;   
        const  dropdowntoggleclass = `
        dropdown-toggle
        ${border === 'false' && 'bordernone'}
        `;   
        /* dropdown with search start here*/
        let searchinput;
        if (searching === true) {
          searchinput = <Input handleChange={this.handleInput} updatevalue={this.updateState} searchvalue={this.state.searcharray} clearInput={this.clearInput}  ref={this.inputRef}/>;
        } else {
          searchinput = null;
        }
        /*dropdown search end here*/
        /*dropdown with button start here*/
        let dbutton;
        if (button === true) {
          dbutton = <li  className="no-padding-bottom no-hover-bg d-btnli"><Button
          style={this.props.btnstyle} 
          label={this.props.btnlable} 
          Lefticon={true}
          icon={this.props.btnicon}
           /></li>;
        } else {
          dbutton = null;
        }
        /*dropdown with button end here*/
        /*dropdown view all link start here*/
        let dlink;
        if (link === true) {
          dlink = <li className="no-hover-bg"><a className={this.props.linkstyle} href={this.props.linkurl}>{ this.props.linklable}</a></li>;
        } else {
          dlink = null;
        }
        /*dropdown view all link end here*/

        return (
            <div className={ ` ${dropdownClassname} ${this.state.isOpen ? 'open' : ''}`} >
                
                <button  className={dropdowntoggleclass} type="button" onClick={this.showDropdown}>
               {this.state.labelItem}
              
            </button>
                <ul className="dropdown-menu">
                <Dropdowncontainer  data={this.state.data} onClick={() => this.chooseItem()} >
                  {searchinput}
                </Dropdowncontainer>
                {dlink}
                {dbutton}
                </ul>
            </div>
        );
    }
}

export default dropdownmarge;