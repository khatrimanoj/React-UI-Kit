import React, { Component } from 'react';
import PropTypes from 'prop-types';

class footerthree extends Component {
    static propTypes = {
             firstcol: PropTypes.array.isRequired,
             footerlogo: PropTypes.string.isRequired,
             thamecolor: PropTypes.string.isRequired,
        Background: PropTypes.string.isRequired,
             
         };
         static defaultProps = {
            firstcol: [],
            secondcol: [],
            thirdcol: [],
            policy: [],
            payment: [],
          };
          constructor(props) {
            super(props);    
            this.state = {
              typefirstcol: null,
              typesecondcol: null,
              typethirdcol: null,
              typepolicy: null,
              typepayment: null,

            };
          }
          renderDatafirstcol = (item, index) => {    
            const { label, url,socialicon} = this.state.typefirstcol ? { label: item, url: url, socialicon: item} : item;    
            return (
              <li
                key={index}
    
              >
                <a className="subtitle1" href={url}><img className="socialshare" src={socialicon}/>{label}</a>
              </li> 
            )
          };
          renderDatasecondcol = (item, index) => {    
            const { label, url} = this.state.typemenu ? { label: item, url: url} : item;    
            return (
              <li
                key={index}
    
              >
                <a className="subtitle1" href={url}>{label}</a>
              </li> 
            )
          };
          renderDatathirdcol = (item, index) => {    
            const { label, url} = this.state.typemenu ? { label: item, url: url} : item;    
            return (
              <li
                key={index}
    
              >
                <a className="subtitle1" href={url}>{label}</a>
              </li> 
            )
          };
          renderDatapolicy = (item, index) => {    
            const { label, url} = this.state.typepolicy ? { label: item, url: url} : item;    
            return (
              <li
                key={index}
              >
                <a className="subtitle1 text-primary" href={url}>{label}</a>
              </li> 
            )
          };
          renderDatapayment = (item, index) => {    
            const { comlogo} = this.state.typepolicy ? { comlogo: item, } : item;    
            return (
              <li
                key={index}
              >
                <a className="subtitle1 text-primary" ><img src={comlogo}/></a>
              </li> 
            )
          };
    render() {
        const { footerlogo,tagline,firstcolheading,secondcolheading,thirdcolheading,firstcol,secondcol,thirdcol,copyright,policy,payment,thamecolor,Background } = this.props; 
        const font = `
        ${thamecolor === 'white' && 'white'}


      `;
        return (
            <footer className={font + Background}>
                 <div className="container">
                    <div className="row">
                         <div className="col-md-2">
                             <div className="h6 text-gray mb-30">{firstcolheading}</div>
                             <ul className="menu-link vertical">
                                      {firstcol.map(this.renderDatafirstcol)}
                             </ul>

                         </div>
                        <div className="col-md-2">
                             <div className="h6 text-gray mb-30">{secondcolheading}</div>
                             <ul className="menu-link vertical">
                                      {secondcol.map(this.renderDatasecondcol)}
                             </ul>

                        </div>
                        <div className="col-md-3">
                             <div className="h6 text-gray mb-30">{thirdcolheading}</div>
                             <ul className="menu-link vertical">
                                      {thirdcol.map(this.renderDatathirdcol)}
                             </ul>

                        </div>
                        <div className="col-md-4">
                             <div className="logo mb-50">
                                  <img src={footerlogo}/>   
                             </div>
                             <div className="subscribe row mb-30">
                                 <div className="col-md-8">
                                     <div class="form-group ">
                                         <input type="text" required="" value="" placeholder="E-mail Address" />
                                        
                                    </div>
                                 </div>
                                 <div className="col-md-4">
                                 <button class="btn w-100 btn-sm btn-primary">Subscribe</button>
                                 </div>

                             </div>
                             <div className="caption text-light-gray">
                                 {tagline}
                             </div>

                        </div>
                    </div>
                   
                 </div>
                 <div className="w-100 pull-left mt-40 mb-30">
                        <hr/>
                 </div>
                 <div className="container">
                     <div className="row">
                        <div className="col-md-6">
                             <ul className="menu-link horizontal">
                                 <li> <div className="body2">{copyright}</div></li>
                                 {policy.map(this.renderDatapolicy)}
                             </ul>

                        </div>
                        <div className="col-md-6">
                        <ul className="menu-link horizontal">
                                 <li> <div className="body2 d-sm-none d-md-block d-lg-block">Accepted Payment Methods</div></li>
                                 {payment.map(this.renderDatapayment)}
                             </ul>

                        </div>
                     </div>
                 </div>
            </footer>
        );
    }
}

export default footerthree;