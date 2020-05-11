import React, { Component } from 'react';
import From from '../../form/form';
import Formheader from '../../formheader/formheader';
import Formbody from '../../formbody/formbody';
import Button from '../../../button/buttonprop/buttonprop';
import { Icon } from 'react-icons-kit';
import {mail} from 'react-icons-kit/feather/mail'

class CheckEmail extends Component {
    render() {
        return (
             <form >
                <From  Emailform>
                    <Formheader
                      Icondiv={true}
                      icon={<Icon icon={mail} size={22} />}
                      iconbg="bg-dark"
                      title="Check Your E-mail"
                      subtitle=" We have sent you instructions to reset password. Please, check your inbox."  />
                          <Formbody>
                          
                             <div className="w-100 pull-left">
                            <Button size="btn-md" style="btn-primary w-100" label="Sing in"  />
                        </div>
                        </Formbody>

                 </From>
             </form>
        );
    }
}

export default CheckEmail;