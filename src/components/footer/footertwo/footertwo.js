import React, { Component } from 'react';
import PropTypes from 'prop-types';

class footertwo extends Component {
    static propTypes = {
        menu: PropTypes.array.isRequired,
        time: PropTypes.array.isRequired,
        thamecolor: PropTypes.string.isRequired,
        Background: PropTypes.string.isRequired,
      };
      static defaultProps = {
        menu: [],
        time: [],
      };
      constructor(props) {
        super(props);    
        this.state = {
          typemenu: null,
          typetime: null,
        };
      }
      renderDatatime = (item, index) => {    
        const { label,title, icons} = this.state.typetime ? { label: item,title: item,icons:item} : item;    
        return (
          
          <div key={index} className="col-md-4 text-center">
              <div>{icons}</div>
              <div className="subtitle1 mt-20 mb-10">
                  {title}
              </div>
             <div className="body2 text-gray label-title">
                 {label}
             </div>

          </div>
        )
      };
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
        const { menu,copyright,time,thamecolor,Background } = this.props; 
        const font = `
        footertwo
        ${thamecolor === 'white' && 'white'}


      `;
        return (
            <footer className={font + Background}>
                 <div className="container">
                     <div className="row">
                         
                         {time.map(this.renderDatatime)}

                     </div>
                 </div>
                 <div className="w-100 pull-left mb-20 mt-20">
                     <hr/>
                 </div>
                <div className="w-100 pull-left mb-20">
                     <ul className="menu-link horizontal text-center">
                         {menu.map(this.renderDatamenu)}
                     </ul>
                </div>
                
                <div className="w-100 pull-left mb-20">
                     <div className="body2 text-center">{copyright}</div>
 
                </div>
                
            </footer>
        );
    }
}

export default footertwo;