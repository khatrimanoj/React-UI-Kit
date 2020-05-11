import React, { Component } from 'react';
import Chekbox from './chekboxhtml/chekbox';

class Checkbox extends Component {
    

    render() {
        
       
        return (
            <>
              {/* {javascriptpersons} */}
              <div className="col-md-3">
                <Chekbox id="unchecked" label="Unchecked" color="gray" />
                </div>
                <div className="col-md-3">
                <Chekbox id="checked" label="Checked" checked />
                </div>
                {/* <Chekbox id="indeterminate" label="Indeterminate" indeterminate />
                <Chekbox id="switch" label="Switch" type="switch" /> */}
                 <div className="col-md-3">
                     <Chekbox id="hasError" label="Has error" hasError />
                 </div>
                 <div className="col-md-3">
                <Chekbox id="disabled" label="Disabled" disabled />

                 </div>
                 
            </>
        );
    }
}

export default Checkbox;
