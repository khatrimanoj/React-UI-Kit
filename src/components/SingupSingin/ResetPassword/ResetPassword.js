import React, { Component } from 'react';
import Inputfild from '../../input/inputs/inputtext/input_html';
import { Icon } from 'react-icons-kit';
import {lock} from 'react-icons-kit/feather/lock'

class ResetPassword extends Component {
    render() {
        return (
             <form className="singinform z1 login">
                 <div className="form-header">
                 <div className="headericon bg-red">
                             <Icon icon={lock} size={22} />
                         </div>
                        <div className="heading">
                            <div className="h5 pull-left">
                            Reset Password
                            </div>
                          
                        </div>

                 </div>
                 <div className="form-body">
                    <div className="row">
                        <div className="col-md-12 mb-30">
                        <p className="text-gray body2">Enter your e-mail and we will send reset instructions to your mailbox</p>

                        </div>
                         <div className="col-md-12 mb-20">
                             <Inputfild type="email" placeholder="Enter Your Email" msg="Assistive message"/>
                         </div>
                         <div className="col-md-12 ">
                             <button class="btn btn-md btn-primary w-100">Submit</button>
                         </div>
                     </div>
                 </div>
             </form>
        );
    }
}

export default ResetPassword;