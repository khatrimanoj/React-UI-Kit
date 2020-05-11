import React, { Component } from 'react';
import PropTypes from 'prop-types';

class input_html extends Component {
  
    static propTypes = {
        hasError: PropTypes.bool,
        hassuccess: PropTypes.bool,
        id: PropTypes.string.isRequired,
        disabled: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        msg: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        placeholder:PropTypes.string.isRequired,
        lablestyle:PropTypes.string.isRequired,
      }; 
      static defaultProps = {
        hasError: false,
        hassuccess: false,
        type: 'default',
        size: 'default',
      };
      constructor(props) {
        super(props);
        this.state = {value: props.value};
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(e) {
        this.setState({value: e.target.value});
      }

    render() { 
      
        const { id,value,label,hassuccess,disabled,msg,placeholder,size,hasError,iconaling,type,lablestyle, ...inputProps } = this.props;
        const checkboxClassname = `
        form-group 
       
          ${hasError && 'error'}
          ${hassuccess && 'success'}
          ${size === 'lg' && 'lg-input'}
          ${iconaling === 'left' && 'left-icon'}
          ${iconaling === 'right' && 'right-icon'}
          ${lablestyle === 'placeholder' && 'placeholder-label'}
          ${lablestyle === 'defult' && 'defult'}
          ${lablestyle === 'false' && 'false'}

        `;
        
        const inputClassname = `
          m-radio__input
         
         
          ${hasError && 'm-checkbox--has-error__input'}
        `;
        
        const labelClassname = `
        form-group placeholder-label
        ${size === 'lg' && 'lg-input'}
        ${iconaling === 'left' && 'left-icon'}
        ${iconaling === 'right' && 'right-icon'}
      `;
        function Defultlable(props){
            if(lablestyle=="defult"){
                return  <label>{label}</label>
            }
            else{
              return null;
            }
         }
         function Placeholderlable(props){
          if(lablestyle=="placeholder"){
              return  <label>{label}</label>
          }
          else{
            return null;
          }
         }
         
         
    
        return (
                 <div className={checkboxClassname}>
                        <Defultlable/>
                        <input type={type} required value={this.state.value} disabled={disabled} placeholder={placeholder} onChange={this.handleChange}/>
                        <Placeholderlable/>
                        {this.props.children}                        
                        <p className="message">{msg}</p>
                    </div>
        );
    }
}

export default input_html;