import React, { Component } from 'react';
import PropTypes from 'prop-types';


class formheader extends Component {
    static propTypes = {
       
        Icondiv: PropTypes.string.isRequired,
      };
    static defaultProps = {
        Icondiv: true,
      }; 
    render() {
    
        const { Icondiv,icon,iconbg,title,subtitle,link,url,linkname } = this.props;
        function Iconhead(props){
            if(props.active==true){
                  return <div className={'headericon ' + iconbg}>
                                {icon}
                            </div>
              }
              else{
                return null;
              }
      
          }
          function Link(props){
            if(props.active==true){
            return <a className="body2 text-primary pull-right" href={url}>{linkname}</a>
              }
              else{
                return null;
              }
      
          }
   
        return (
             <div  className="form-header ">
                  <Iconhead active={Icondiv}/>
                         
                         <div className="heading">
                             <div className="h5 pull-left">
                                 {title}
                             </div>
                             <Link active={link}/>
                             
                             <div className="body2 text-gray w-100 pull-left">
                                 {subtitle}
                             </div>
                         </div>
             </div>
        );
    }
}

export default formheader;