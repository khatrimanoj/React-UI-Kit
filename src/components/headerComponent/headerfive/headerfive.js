import React, { Component } from 'react';
import Menu from '../menu/menu';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import {search} from 'react-icons-kit/feather/search';


class headerfive extends Component {
    static propTypes = {
        Headerlogo: PropTypes.string.isRequired,
        menulink: PropTypes.array, 
        social: PropTypes.array.isRequired,


      };
      static defaultProps = {
        social: [],
      };
      constructor(props) {
        super(props);    
        this.state = {
          typesocial: null,
        };
      }
      renderDatasocial = (item, index) => {    
        const { icons, url} = this.state.typesocial ? { icons: item, url: url} : item;    
        return (
          <li
            key={index}

          >
            <a className="subtitle1" href={url}><Icon icon={icons} size={20} /></a>
          </li> 
        )
      };
    render() {
      const { Headerlogo,menulink,social,thamecolor,Background } = this.props; 
      const font = `
           headerfive
          ${thamecolor === 'white' && 'white'}
         `;
      

        return (
           <header className={font + Background}>
                 <div className="container">
                     <div className="row align-items-center">
                         <div className="col-md-2">
                             <div className="logo">
                                 <img src={Headerlogo}/>   
                             </div>

                         </div>
                         <div className="col-md-7">
                        
                         <Menu menu={this.props.menulink} />

                         </div>
                         <div className="col-md-3">
                             <ul className="notification"> 
                                {social.map(this.renderDatasocial)}
                                <li>
                                        <div className="search-brn">
                                        <Icon icon={search} size={22}/>
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

export default headerfive;