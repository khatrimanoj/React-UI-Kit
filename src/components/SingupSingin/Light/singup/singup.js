import React, { Component } from 'react';
import From from '../../form/form';
import Formheader from '../../formheader/formheader';
import Formbody from '../../formbody/formbody';
import Inputfild from '../../../input/inputs/inputtext/input_html';
import Radiobtns from '../../../input/radionbtn/radiobtnhtml/Radiobtnhtml';
import Chekbox from '../../../input/Checkbox/chekboxhtml/chekbox';
import Button from '../../../button/buttonprop/buttonprop';



import { Icon } from 'react-icons-kit';
import {userPlus} from 'react-icons-kit/feather/userPlus'


class singup extends Component {
    render() {
        return (
            <form>
                 <From>
                     <Formheader
                        Icondiv={true}
                        icon={<Icon icon={userPlus} size={22} />}
                        iconbg="bg-disy-bush"
                        title="Sing up"
                        subtitle=" Already Registered?" 
                        link={true}
                        linkname="Sing in"
                        url="#"
                        />
                     <Formbody>
                         <div className="w-100 mb-20 pull-left">
                             <Inputfild type="email" label="Your Login" lablestyle="placeholder" msg="Assistive message"/>
                        </div>
                        <div className="w-100 mb-20 pull-left">
                             <p className="caption text-gray mb-10">Gender</p>
                             <div className="row">
                                 <Radiobtns id="1" defaultChecked label="Female" name="a"/>
                                 <Radiobtns id="2" label="Male" name="a"/>
                             </div>
                        </div>
                        <div className="w-100 mb-20 pull-left">
                             <Inputfild type="email" label="email" lablestyle="placeholder" msg="Assistive message"/>
                        </div>
                        <div className="w-100 mb-20 pull-left">
                             <Inputfild type="number" label="Phone Number" lablestyle="placeholder" msg="Assistive message"/>
                        </div>
                        <div className="w-100 mb-20 pull-left">
                             <Inputfild type="password" label="Password" lablestyle="placeholder" msg="Assistive message"/>
                        </div>
                        <div className="w-100 mb-20 pull-left">
                             <Inputfild type="password" label="Password" lablestyle="placeholder" msg="Assistive message"/>
                        </div>
                        <div className="w-100 mb-20 pull-left">
                             <Chekbox id="unchecked2" label="Subscribe to our newsletter" color="gray" defaultChecked/>
                        </div>
                        <div className="w-100 mb-20 pull-left">
                            <Button size="btn-md" style="btn-primary w-100" label="Create Account"  />
                        </div>
                        <div className="col-md-12">
                             <p className="caption pull-left">By creating an account I accept the <a className="text-primary">Terms of Service</a></p>
                         </div>
                     </Formbody>
                 </From>
             </form>
        );
    }
}

export default singup;