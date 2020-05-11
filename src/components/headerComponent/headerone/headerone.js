import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu';

class list extends Component {
  static propTypes = {
    Headerlogo: PropTypes.string.isRequired,
    menu: PropTypes.array.isRequired,
    Background: PropTypes.string.isRequired,
    };
    constructor() {
        super();
    }
    render() {
      const { Headerlogo,menu,Background,thamecolor,button } = this.props; 
      const font = `
          header-one
          ${thamecolor === 'white' && 'white'}


        `;
        return (
             <header className={font + Background}>
                 <div className="container">
                   <div className="row"> 
                       <div className="col-md-2">
                         <div className="logo">
                            <img src={Headerlogo}/>   
                         </div>
                       </div>
                       <div className="col-md-10">
                         <Menu menu={this.props.menulink}>
                             <li>
                               <div className="header-btn pull-right">
                                  <button className={["pull-right " + button]} > Download</button>
                               </div>
                             </li>
                         </Menu>
                       </div>
                   </div>
                 </div>
             </header>
        );
    }
}

export default list;