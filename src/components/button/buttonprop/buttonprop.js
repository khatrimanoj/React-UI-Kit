import React, { Component } from 'react';
import PropTypes from 'prop-types';


class buttonprop extends Component {
    static propTypes = {
        size: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        numbers: PropTypes.string.isRequired,
        style: PropTypes.string.isRequired,
        countstyle: PropTypes.string,
        disabled: PropTypes.string.isRequired,
 };
    static defaultProps = {
        size: 'btn-sm',
      };
    render() { 
        const { size,label,style,Lefticon,icon,Righticon,disabled,Centericon,number,total,countstyle } = this.props;
        function Lefticons(props){
            if(props.active == true){
                  return <span className="lefticon">
                                {icon}
                            </span>
              }
              else{
                return null;
              }
      
          }
          function Righticons(props){
            if(props.active == true){
                  return <span className="righticon">
                                {icon}
                            </span>
              }
              else{
                return null;
              }
      
          }
          function Iconbtn(props){
            if(props.active == true){
                  return <span className="centericon">
                                {icon}
                            </span>
              }
              else{
                return null;
              }
          }
          function Totals(props){
            if(props.active == true){
            return <span  className={[`count  ${countstyle}` ]}>{number}</span>
            
              }
              else{
                return null;
              }
          }
          

        
        return (
            <button className={[`btn  ${size}   ${ style}` ]} disabled={disabled}>
              <Lefticons active={Lefticon}/>
              <Iconbtn active={Centericon}/>
              {label}
              <Righticons active={Righticon}/>
              <Totals active={total}/>
              </button>
        );
    }
}

export default buttonprop;