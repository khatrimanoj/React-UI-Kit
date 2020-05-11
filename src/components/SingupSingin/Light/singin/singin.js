import React, { Component } from 'react';
import From from '../../form/form';
import Formheader from '../../formheader/formheader';
import Formbody from '../../formbody/formbody';
import Inputfild from '../../../input/inputs/inputtext/input_html';
import Chekbox from '../../../input/Checkbox/chekboxhtml/chekbox';
import Button from '../../../button/buttonprop/buttonprop';
import fb from '../../../../images/fb.png';
import gmail from '../../../../images/gmail.png';

import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/feather/user';


class singin extends Component {
    
    render() {

       
        return (
            <form >
                <From Background="bg-white">
                    <Formheader
                        Icondiv={true}
                        icon={<Icon icon={user} size={22} />}
                        iconbg="bg-primary"
                        title="Sing in"
                        subtitle=" Already Registered?" 
                        link={true}
                        linkname="Sing up"
                        url="#"
                        />
                    <Formbody>
                        <div className="w-100 mb-20 pull-left">
                            <Inputfild type="email" lablestyle="placeholder"  label="Your E-mail" msg="Assistive message" />
                            
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <Inputfild type="password" label="Password" lablestyle="placeholder" msg="Assistive message" />
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <Chekbox id="unchecked" label="Remember me" color="gray"  defaultChecked/>
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <Button size="btn-md" style="btn-primary w-100" label="Login"  />
                        </div>
                        
                    </Formbody>
                     <div className="form-devider">
                         <span>Or</span>
                     </div>
                     <div className="form-social-login">
                         <div className="row">
                             <div className="col-md-12">
                                 <button className="btn btn-sm social-login-btn w-100 mb-20"><img src={fb} /> Login with Facebook</button>
                                 <button className="btn btn-sm social-login-btn w-100"><img src={gmail} /> Login with Gmail</button>
                             </div>
                         </div>
                     </div>
                </From>
            </form>
        );
    }
}

export default singin;