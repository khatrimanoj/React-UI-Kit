import React, { Component } from 'react';
import PropTypes from 'prop-types';

class footerone extends Component {
    static propTypes = {
        menu: PropTypes.array.isRequired,
        Otherlink: PropTypes.array.isRequired,
        sociallink: PropTypes.array.isRequired,
        footerlogo: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        policy: PropTypes.string.isRequired,
        policylink: PropTypes.string.isRequired,
        thamecolor: PropTypes.string.isRequired,
        Background: PropTypes.string.isRequired,
      };
      static defaultProps = {
        menu: [],
        Otherlink: [],
        sociallink:[],
      };
      constructor(props) {
        super(props);    
        this.state = {
          typemenu: null,
          typeotherlink: null,
          typesociallink: null,
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
      renderDataotherlink = (item, index) => {    
        const { label, url} = this.state.typeotherlink ? { label: item, url: url} : item;    
        return (
          <li
            key={index}
            className=""

          >
            <a className="subtitle1" href={url}>{label}</a>
          </li> 
        )
      };
      renderDatasociallink = (item, index) => {    
        const { icons, link} = this.state.typesociallink ? { icons: item, link: link} : item;    
        return (
          
          <li   key={index}>
          <a className="subtitle1" href={link}>{icons}</a>
          </li>
        )
      };
    render() {
        const { menu,Otherlink,sociallink,footerlogo,number,email,copyright,policy,policylink,thamecolor,Background } = this.props; 

        const font = `
          ${thamecolor === 'white' && 'white'}


        `;
        return (
             <footer className={font + Background}>
                 <div className="container">
                     <div className="row  flex-sm-wrap-reverse">
                         <div className="col-md-4 mt-20">
                             <div className="logo mb-30">
                                  <img src={footerlogo}/>   
                             </div>
                             <div className="mb-20">
                                 <a className="body2 text-primary" href={policylink}>{policy}</a>
                             </div>
                               <div className="body2">{copyright}</div>
                         </div>
                         <div className="col-md-8">
                           <div className="row">
                                 <div className="col-md-3 col-sm-6 mt-20">
                                  <ul className="menu-link vertical">
                                      {menu.map(this.renderDatamenu)}
                                  </ul>
                                 </div>
                                 <div className="col-md-3 col-sm-6 mt-20">
                                      <ul className="menu-link vertical"> 
                                          {Otherlink.map(this.renderDataotherlink)}
                                      </ul>
                                  </div>
                                  <div className="col-md-5 mt-20">
                             <div className="h6 mb-15">Contact Us</div>
                             <ul className="menu-link horizontal mb-20">
                                 <li>
                                     <a className="subtitle1" href={`tel:${number}`}>{number}</a>
                                 </li>
                                 <li>
                                 <a className="subtitle1 text-primary" href={`mailto:${email}`}>{email}</a>
                                 </li>
                             </ul>
                             <div className="row col-md-4">
                               <hr></hr>
                             </div>
                             <ul className="menu-link horizontal mt-20">
                                 
                                 {sociallink.map(this.renderDatasociallink)}

                             </ul>
                         </div>

                           </div>
                       
                         
                        

                         </div>


                     </div>
                 </div>
             </footer>
        );
    }
}

export default footerone;