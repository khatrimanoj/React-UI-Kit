import React, { Component } from 'react';
import Inputfild from '../../input/inputs/inputtext/input_html';
import Radiobtns from '../../input/radionbtn/radiobtnhtml/Radiobtnhtml';
import Chekbox from '../../input/Checkbox/chekboxhtml/chekbox';


import { Icon } from 'react-icons-kit';
import {userPlus} from 'react-icons-kit/feather/userPlus'


class singup extends Component {
    render() {
        return (
            <form className="singinform z1">
                <div className="form-header">
                   
                         <div className="headericon bg-disy-bush">
                             <Icon icon={userPlus} size={22} />
                         </div>
                         <div className="heading">
                             <div className="h5 pull-left">
                                 Sing up
                             </div>
                             <a className="body2 text-primary pull-right">Sing In</a>
                             <div className="body2 text-gray w-100 pull-left">
                                  Create an Account
                             </div>

                         </div>
                </div>
                <div className="form-body">
                    <div className="row">
                         <div className="col-md-12 mb-20">
                             <Inputfild type="email" label="Your Login" msg="Assistive message"/>
                         </div>
                         <div className="col-md-12 mb-20">
                             <p className="caption text-gray mb-10">Gender</p>
                             <div className="row">
                             <Radiobtns id="1" checked label="Female" name="a"/>
                             <Radiobtns id="2" label="Male" name="a"/>

                             </div>


                         </div>
                         <div className="col-md-12 mb-20">
                              <Inputfild type="email" label="email" msg="Assistive message"/>
                                
                         </div>
                         <div className="col-md-12 mb-20">
                               <Inputfild type="number" label="Phone Number" msg="Assistive message"/>
 
                         </div>
                         <div className="col-md-12 mb-20">
                               <Inputfild type="password" label="Password" msg="Assistive message"/>
 
                         </div>
                         <div className="col-md-12 mb-20">
                               <Inputfild type="password" label="Repeat Password" msg="Assistive message"/>
                         </div>
                         <div className="col-md-12 mb-20">
                              <Chekbox id="unchecked2" label="Subscribe to our newsletter" color="gray" />
                         </div>
                         <div className="col-md-12 mb-10">
                               <button class="btn btn-md btn-primary w-100">Create Account</button>
                         </div>
                         <div className="col-md-12">
                             <p className="caption">By creating an account I accept the <a className="text-primary">Terms of Service</a></p>
                         </div>
                         
                    </div>
                 </div>
             </form>
        );
    }
}

export default singup;