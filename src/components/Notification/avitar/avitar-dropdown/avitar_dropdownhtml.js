import React, { Component } from 'react';
import PropTypes from 'prop-types';

class input_html extends Component {
    static propTypes = {
        hasDropdown: PropTypes.bool,
        hasRound: PropTypes.bool,
        haslg: PropTypes.bool,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        avitar: PropTypes.bool,
        style: PropTypes.string,
        iconsize:PropTypes.string,
        headingstyle:PropTypes.string,
        iconstyle:PropTypes.string,
        subtitlestyle:PropTypes.string,
        
      };
      static defaultProps = {
        hasError: false,
        hassuccess: false,
        type: 'default',
        headingstyle:"body2",
        
      };

    render() {
      
        const { id,title,haslg,hasDropdown,subtitle,hasRound,avitar,style,iconsize,headingstyle,iconstyle,subtitlestyle,...inputProps } = this.props;
        const avitarClassname = `
        avitar-label align-items-center
       
          ${hasDropdown && 'dropdown'}
          ${hasRound && 'round'}
          ${haslg && 'lg'}
         
         
        `;
        const iconsizecss = {
          flex:  iconsize,
          maxWidth: iconsize,
          width: iconsize
        }
        
        
        
       
        return (
                      <div className={avitarClassname + style}>
                         <div className={`icon avitar ` + iconstyle} style={iconsizecss}>
                             <div className="tbl">
                                 <div className="tbl-cell">
                                 {this.props.children}
                                 </div>
                             </div>
                           
                         </div>
                         <div className="avitartitle">
                                 <div className={headingstyle}>{title}</div>
                                 <p className={`text-gray caption ` + subtitlestyle}>{subtitle}</p>
                         </div>
                     </div>
        );
    }
}

export default input_html;