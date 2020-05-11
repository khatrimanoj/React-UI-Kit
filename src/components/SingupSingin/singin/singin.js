import React, { Component } from 'react';
import PropTypes from 'prop-types';
import From from '../form/form';
import Formheader from '../formheader/formheader';
import Formbody from '../formbody/formbody';
import Inputfild from '../../input/inputs/inputtext/input_html';
import Chekbox from '../../input/Checkbox/chekboxhtml/chekbox';
import fb from '../../../images/fb.png';
import gmail from '../../../images/gmail.png';

import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/feather/user';


class singin extends Component {
    static propTypes = {
        Background: PropTypes.string.isRequired,
    };
    render() {

        const { thamecolor, Background } = this.props;

        const font = `
           singinform z1
          ${thamecolor === 'white' && 'white'}


        `;
        return (
            <form className={font + Background}>
                <From>
                    <Formheader
                        Icondiv={true}
                        icon={<Icon icon={user} size={22} />}
                        iconbg="bg-primary"
                        title="Sing in"
                        subtitle=" Already Registered?" />
                    <Formbody>
                        <div className="w-100 mb-20 pull-left">
                            <Inputfild type="email" label="Your E-mail" msg="Assistive message" />
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <Inputfild type="password" label="Password" msg="Assistive message" />
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <Chekbox id="unchecked" label="Remember me" color="gray" />
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <button class="btn btn-md btn-primary w-100">Login</button>
                        </div>
                    </Formbody>

                </From>


               
                <div className="form-devider">
                    <span className={Background}>Or</span>
                </div>
                <div className="form-social-login">
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-sm social-login-btn w-100 mb-20"><img src={fb} /> Login with Facebook</button>
                            <button className="btn btn-sm social-login-btn w-100"><img src={gmail} /> Login with Gmail</button>

                        </div>

                    </div>


                </div>
            </form>
        );
    }
}

export default singin;