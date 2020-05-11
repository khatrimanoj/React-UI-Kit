import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu';
import Icon from 'react-icons-kit';
import {mapPin} from 'react-icons-kit/feather/mapPin';
import {user} from 'react-icons-kit/feather/user';
import {search} from 'react-icons-kit/feather/search';



class headerfour extends Component {
    static propTypes = {
        Headerlogo: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        menu: PropTypes.array.isRequired,

      };
      static defaultProps = {
        menu: [],
      };
      constructor(props) {
        super(props);    
        this.state = {
          typemenu: null,
        };
      }
      renderDatamenu = (item, index) => {    
        const { label, url} = this.state.typemenu ? { label: item, url: url} : item;    
        return (
          <li
            key={index}

          >
            <a className="subtitle1" href={url}>{label}</a>
          </li> 
        )
      };
     
    render() {
      const { Headerlogo,menu,location,Background,thamecolor } = this.props; 
      const font = `
           headerfour
          ${thamecolor === 'white' && 'white'}
         `;

        return (
            <header  className={font + Background}>
                 <div className="container">
                     <div className="row align-items-center">
                         <div className="col-md-2">
                             <div className="logo">
                                 <img src={Headerlogo}/>   
                             </div>
                         </div>
                         <div className="col-md-8">
                             <ul className="menu pull-left">
                             {menu.map(this.renderDatamenu)}

                             </ul>
 
                         </div>
                         <div className="col-md-2">
                             <ul className="notification">
                                 <li>
                                     <span className="subtitle2 text-gray">{location}</span>&nbsp;&nbsp;&nbsp;
                                     <Icon icon={mapPin} size={20}/>
                                 </li>
                               

                             </ul>

                         </div>

                     </div>
                 </div>
                 <div className="header-bottom">
                     <div className="container">
                         <div className="row align-items-center">
                             <div className="col-md-8">
                                  <Menu menu={this.props.menulink} />
                             </div>
                             <div className="col-md-4">
                                 <ul className="devider-link">
                                         <li>
                                             <div className="search-brn text-black">
                                                 <Icon icon={search} size={20} />
                                             </div>
                                         </li>
                                         <li>
                                             <button className="btn btn-sm btn-text-black bg-transparant caption"> <Icon icon={user} size={20} />&nbsp;&nbsp;Sing in</button>
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

export default headerfour;