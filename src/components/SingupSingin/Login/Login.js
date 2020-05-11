import React, { Component } from 'react';
import Inputfild from '../../input/inputs/inputtext/input_html';
import Chekbox from '../../input/Checkbox/chekboxhtml/chekbox';


class Login extends Component {
    render() {
        return (
            <form className="singinform z1 login">
                <div className="form-header">
                        <div className="heading">
                            <div className="h5 pull-left">
                                Login
                            </div>
                            <div className="body2 text-gray w-100 pull-left">
                                 Already Registered? <a className="body2 text-primary">Sing Up</a>
                            </div>
                        </div>

                </div>
                <div className="form-body">
                              <div className="row">
                                 <div className="col-md-12 mb-20">
                                     <Inputfild type="email" label="Your Email" msg="Assistive message"/>
                                 </div>
                                 <div className="col-md-12 mb-20">
                                     <Inputfild type="password" label="Password" msg="Assistive message"/>
                                 </div>
                                 <div className="col-md-12 mb-20">
                                     <Chekbox id="unchecked2" label="Remember me" color="gray" />
                                 </div>
                                 <div className="col-md-12 mb-10">
                                     <button class="btn btn-md btn-primary w-100">Login</button>
                                 </div>
                                 <div className="col-md-12">
                                     <p className="caption"> <a className="text-primary">Forgot your password?</a></p>
                                 </div>
                              </div>
                        </div>
            </form>
        );
    }
}

export default Login;