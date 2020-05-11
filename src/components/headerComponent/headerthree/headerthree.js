import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdownsimpal from '../../Dropdown/dropdownsimpal/dropdownsimpal';
import { Icon } from 'react-icons-kit';
import {search} from 'react-icons-kit/feather/search';
import {menu} from 'react-icons-kit/feather/menu';
import {user} from 'react-icons-kit/feather/user';
import {heart} from 'react-icons-kit/feather/heart';
import {shoppingBag} from 'react-icons-kit/feather/shoppingBag';


class headerthree extends Component {
    static propTypes = {
        Headerlogo: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        delivery: PropTypes.string.isRequired,
        login: PropTypes.array.isRequired,
        language: PropTypes.array, 
        currancy: PropTypes.array,
        

      };
      static defaultProps = {
        login: [],
      };
      constructor(props) {
        super(props);    
        this.state = {
          typelogin: null,
        };
      }
      renderDatalogin = (item, index) => {    
        const { label, url} = this.state.typelogin ? { label: item, url: url} : item;    
        return (
          <li
            key={index}

          >
            <a className="subtitle1" href={url}>{label}</a>
          </li> 
        )
      };

    render() {
          const { Headerlogo,login,number,delivery,thamecolor,headertopcolor,Background,headertopBG } = this.props; 
         const font = `
           headerthree
          ${thamecolor === 'white' && 'white'}
         `;
         const headertop = `
         headertop
          ${headertopcolor === 'black' && 'black'}
         `;

        return (
            <header className={font + Background}>
                 <div className={headertop + headertopBG}>
                     <div className="container">
                            <div className="row align-items-center no-gutters">
                                <div className="col-md-2">
                                     <div className="pull-left caption">
                                             <Dropdownsimpal className="pull-left" border="false"   list={this.props.language} />

                                     </div>
                                     <div className="pull-left caption">
                                             <Dropdownsimpal className="pull-left" border="false"   list={this.props.currancy} />

                                     </div>
                                </div>
                                <div className="col-md-6">
                                    <ul className="menu-link horizontal text-left text-white caption">
                                        <li >
                                         {number}
                                        </li>
                                        <li>
                                            {delivery}
                                        </li>
                                    </ul>

                                </div>
                                <div className="col-md-4">
                                     <ul className="menu-link horizontal text-center text-white caption no-margin-right">
                                         <li>
                                             <button className="btn btn-sm btn-text-white bg-transparant caption"> <Icon icon={user} size={20} /> Sing in</button>
                                         </li>
                                         <li>
                                             <button className="btn btn-sm btn-text-white bg-transparant caption"> <Icon icon={heart} size={20} /> Wishlist</button>
                                         </li>
                                         <li>
                                             <button className="btn btn-sm btn-text-white bg-transparant caption"> <Icon icon={shoppingBag} size={20} /> 3 Items — $345.99</button>
                                         </li>
                                     </ul>

                                </div>
                              


                            </div>
                     </div>
                 </div>
                <div className="w-100 pull-left">
                     <div className="container">
                     <div className="row align-items-center">
                         <div className="col-md-5">
                             <div className="form-group search">
                                 <input type="text" placeholder="search"/>
                                 <div className="search-icon">
                                 <Icon icon={search} size={22} />
                                 </div>
                                 
                             </div>

                         </div>
                         <div className="col-md-2 text-center">
                             <div className="logo">
                                 <img src={Headerlogo}/>   
                             </div>
                         </div>
                         <div className="col-md-5">
                             <ul class="notification">
                                 {login.map(this.renderDatalogin)}
                                 <li>
                                     <button className="btn btn-sm btn-text-black no-padding">
                                        <Icon icon={menu} size={22} />

                                     </button>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 </div>
            </header>
        );
    }
}

export default headerthree;