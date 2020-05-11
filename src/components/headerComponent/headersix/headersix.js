import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avitar from '../../Notification/avitar/avitar-dropdown/avitar_dropdownhtml'
import { Icon } from 'react-icons-kit';
import {search} from 'react-icons-kit/feather/search';
import {menu} from 'react-icons-kit/feather/menu';

class headersix extends Component {
    static propTypes = {
        Headerlogo: PropTypes.string.isRequired,
        avitartitle: PropTypes.string.isRequired,
        profile: PropTypes.string.isRequired,
      };
    render() {
        const { Headerlogo,avitartitle,profile,Background,thamecolor } = this.props; 
        const font = `
           header-six
          ${thamecolor === 'white' && 'white'}
         `;
        return (
            <header className={font + Background}>
               <div className="container ">
                   <div className="row">
                       <div className="col-md-2">
                             <div className="logo">
                                 <img src={Headerlogo}/>   
                             </div>
                       </div>
                       <div className="col-md-10">
                           <ul className="devider-link">
                               <li>
                                     <div className="search-brn text-black">
                                                 <Icon icon={search} size={20} />
                                     </div>
                               </li>
                               <li>
                                   <div className="tbl">
                                       <div className="tbl-cell">
                                         <Avitar title={avitartitle}  hasRound ><img className="" src={profile} /></Avitar>
                                       </div>
                                   </div>
                               </li>
                               <li>
                               <Icon icon={menu} size={20} />

                               </li>

                           </ul>
 
                       </div>
                   </div>
               </div>
            </header>
        );
    }
}

export default headersix;