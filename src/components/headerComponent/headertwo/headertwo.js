import React, { Component } from 'react';
import Menu from '../menu/menu';
import { Icon } from 'react-icons-kit';
import {search} from 'react-icons-kit/feather/search';
import {user} from 'react-icons-kit/feather/user';
import {heart} from 'react-icons-kit/feather/heart';
import {shoppingBag} from 'react-icons-kit/feather/shoppingBag'
import PropTypes from 'prop-types';


class headertwo extends Component {
    static propTypes = {
        Headerlogo: PropTypes.string.isRequired
      };   


    render() {
        const { Headerlogo,menu,thamecolor,Background,badgesBG } = this.props; 
        const font = `
          header-two
          ${thamecolor === 'white' && 'white'}
         `;
        return (
             <header className={font + Background}>
                 <div className="container">
                     <div className="row align-items-center">
                         <div className="col-md-3">
                             <div className="logo">
                                 <img src={Headerlogo}/>   
                             </div>
                         </div>
                         <div className="col-md-6 text-center">
                                 <Menu menu={this.props.menulink} />
                         </div>
                         <div className="col-md-3">
                             <ul className="notification">
                                 <li>
                                     <div className="search-brn">
                                         <Icon icon={search} size={20} />
                                     </div>
                                 </li>
                                 <li>
                                     <div className="user">
                                         <Icon icon={user} size={20} />
                                     </div>
                                 </li>
                                 <li>
                                     <div className="badges">
                                         <Icon icon={heart} size={20} />
                                         <div className={["Count " + badgesBG]}>
                                             10
                                         </div>
                                     </div>
                                 </li>
                                 <li>
                                     <div className="badges">
                                         <Icon icon={shoppingBag} size={20} />
                                         <div  className={["Count " + badgesBG]}>
                                             10
                                         </div>
                                     </div>
                                 </li>

                             </ul>
                             
                         </div>
                     </div>
                 </div>
             </header>
        );
    }
}

export default headertwo;