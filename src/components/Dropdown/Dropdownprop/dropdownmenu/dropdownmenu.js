import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../button/buttonprop/buttonprop';


class dropdownmenu extends Component {
  static propTypes = {
    search: PropTypes.string.isRequired
   
};
static defaultProps = {
  search: false,
};
    constructor(props) {
        super(props);
    
        this.state = {
          jsxData: [],
          submenu: [],
          searchString: ''

        };
        this.inputRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
      }
      
      componentDidMount() {
        this.setState({jsxData: this.createMenuJSX()});
      }
      
      createMenuJSX = (menu = this.props.menu) => {
        let link = [];
        
    
        for (let i in menu) {
          let m  = menu[i];
          let number = null;
          let title = null;
          let subtitle = null;
          let icon = null;


          if (typeof m.count !== 'undefined') {
            number = <span className={`pull-right ` + this.props.countstyle}>{m.count}</span>;
          }
          

          if (typeof m.title !== 'undefined') {
              title = <a href={m.link} className="d-headeing" >{icon}<span>{m.title}</span></a>;
          }

          if (typeof m.subtitle !== 'undefined') {
            subtitle = <span className="dropdown-subtitle">{m.subtitle}</span>;
           }

          
          if (typeof m.icon !== 'undefined') {
            icon = <span className="dicon">{m.icon}</span>;
          }
    
          if (typeof m.menu === 'undefined') {
            link.push(
              <li value={m.id}>
                <a href={m.link}>
                  {icon}
            <span>{m.name}{subtitle}</span>  
                           {number} 
                </a>
              </li>
            );
          } else if (typeof m.menu === 'object') {
            let tmpSubmenu = this.state.submenu;
    
            tmpSubmenu.push({
              'id': m.link,
              'active': false,
              'caret': React.createRef(),
              'sub': React.createRef()
            });
    
            link.push(
              <li className="headingdropdown" >
                  {title}
                <ul className="Dropdown-sub-ul" >
                  {this.createMenuJSX(m.menu)}
                </ul>
              </li>
            );
    
            this.setState({submenu: tmpSubmenu});
          }
          
        }
    
        return link;
       
      }
      handleChange = (e) => {
        this.setState({ searchString:e.target.value });
      }
    render() {
        
      const { btnstyle,btnlable,btnicon } = this.props;


      function Searchhtml(props){
        if(props.active == true){
              return <li><div class="dropdownsearch"><input type="text" value={props.values} onChange={props.change} placeholder="Type here..."  /><button></button></div></li>
          }
          else{
            return null;
          }
       }
       function Buttonhtml(props){
        if(props.active == true){
              return <li  className="no-padding-bottom no-hover-bg d-btnli"><Button
              style={btnstyle} 
              label={btnlable} 
              Lefticon={true}
              icon={btnicon}
               /></li>
          }
          else{
            return null;
          }
       }
         /* searching code start here*/ 
         let libraries = this.props.menu;

         
            
         let searchString = this.state.searchString.trim().toLowerCase();
         
     if (searchString.length > 0) {
      
       libraries = libraries.filter(function(i) {
        console.log(i.name);
         return i.name.toLowerCase().match( searchString );

       });
     } 
       /*searching script end here*/ 
       
        return (
            <div className="dropdown open lg-dropdown">
              
                <ul className="dropdown-menu p-relative">
                  <Searchhtml active={this.props.search} values={this.state.searchString} change={this.handleChange}  />
                {/* {this.state.jsxData} */}
                {/* {libraries.map(this.createMenuJSX)} */}
                {libraries.map(this.componentDidMount)}
                {this.props.children}
                   <Buttonhtml active={this.props.button} />
                </ul>
            </div>
        );
    }
}

export default dropdownmenu;