import React, { Component } from 'react';
import From from '../../form/form';
import Formheader from '../../formheader/formheader';
import Formbody from '../../formbody/formbody';
import Inputfild from '../../../input/inputs/inputtext/input_html';
import Button from '../../../button/buttonprop/buttonprop';
import { Icon } from 'react-icons-kit';
import {lock} from 'react-icons-kit/feather/lock'

class ResetPassword extends Component {
    render() {
        return (
             <form >
                 <From>
                     <Formheader
                        Icondiv={true}
                        icon={<Icon icon={lock} size={22} />}
                        iconbg="bg-red"
                        title="Reset Password"
                        />
                        <Formbody>
                             <div className="w-100 mb-20 pull-left">
                                  <p className="text-gray body2">Enter your e-mail and we will send reset instructions to your mailbox</p>
                             </div>
                             <div className="w-100 mb-20 pull-left">
                                 <Inputfild type="email" placeholder="Enter Your Email" msg="Assistive message"/>
                             </div>
                             <div className="w-100 mb-20 pull-left">
                            <Button size="btn-md" style="btn-primary w-100" label="Submit"  />
                        </div>
                        </Formbody>
                 </From>
             </form>
        );
    }
}

export default ResetPassword;