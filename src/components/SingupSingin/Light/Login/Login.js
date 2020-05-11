import React, { Component } from 'react';
import From from '../../form/form';
import Formheader from '../../formheader/formheader';
import Formbody from '../../formbody/formbody';
import Inputfild from '../../../input/inputs/inputtext/input_html';
import Chekbox from '../../../input/Checkbox/chekboxhtml/chekbox';
import Button from '../../../button/buttonprop/buttonprop';

class Login extends Component {
    render() {
        return (
            <form className="singinform z1 login">
                <From>
                    <Formheader
                        Icondiv={false}
                        iconbg="bg-primary"
                        title="Sing in"
                        subtitle=" Already Registered?"
                        link={true}
                        linkname="Sing up"
                        url="#" />
                    <Formbody>
                        <div className="w-100 mb-20 pull-left">
                            <Inputfild type="email" label="Your Email" lablestyle="placeholder" msg="Assistive message" />
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <Inputfild type="password" label="Password" lablestyle="placeholder" msg="Assistive message" />
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <Chekbox id="unchecked3" label="Remember me" color="gray" defaultChecked/>
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <Button size="btn-md" style="btn-primary w-100" label="Login"  />
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <p className="caption"> <a className="text-primary">Forgot your password?</a></p>
                        </div>
                    </Formbody>
                </From>
            </form>
        );
    }
}

export default Login;