import React, { Component } from 'react';
import Inputtext from './inputtext/input_html';

import { Icon } from 'react-icons-kit';
import {mapPin} from 'react-icons-kit/feather/mapPin';
import {user} from 'react-icons-kit/feather/user';

class input_text extends Component {
    render() {
        return (
            <>
                 <div className="col-md-3">
                    <p class="body1 mb-30">Inactive</p>
                    <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Assistive message" prefix={'$'}/>
                 </div>
               
                <div className="col-md-3">
                     <p class="body1 mb-30">Error</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Error message" value="Invalid text" hasError/>
                 </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Success</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" value="Valid text" hassuccess/>
                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                   <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" placeholder="input text"  disabled/>
                </div>
                <div className="w-100 mb-30"></div>

                <div className="col-md-3"> 
                    <p class="body1 mb-30">Inactive</p>
                    <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Assistive message" size="lg"/>
                 </div>
               
                <div className="col-md-3">
                     <p class="body1 mb-30">Error</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Error message" size="lg" value="Invalid text" hasError/>
                 </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Success</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" size="lg" value="Valid text" hassuccess/>
                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                   <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" size="lg" placeholder="input text"  disabled/>
                </div>

                <div className="w-100 mb-30"></div>
                <div class="col-md-12 mb-30"><div class="h5 mb-20">Text field with label and left icon</div></div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>
                   <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Assistive message"   iconaling="left">  <i className="inputicon"><Icon icon={mapPin} size={20} /></i></Inputtext>
                </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Error</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Error message" value="Invalid text" iconaling="left" hasError> <i className="inputicon"><Icon icon={mapPin} size={20} /></i></Inputtext>
                 </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Success</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" value="Valid text" iconaling="left" hassuccess> <i className="inputicon"><Icon icon={mapPin} size={20} /></i></Inputtext>
                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                   <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" placeholder="input text" iconaling="left"  disabled> <i className="inputicon"><Icon icon={mapPin} size={20} /></i></Inputtext>
                </div>
                <div className="w-100 mb-30"></div>

                <div className="col-md-3">
                    <p class="body1 mb-30">Inactive</p>
                    <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Assistive message" iconaling="left" size="lg"> <i className="inputicon"><Icon icon={mapPin} size={20} /></i></Inputtext>
                 </div>
               
                <div className="col-md-3">
                     <p class="body1 mb-30">Error</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Error message" iconaling="left" size="lg" value="Invalid text" hasError> <i className="inputicon"><Icon icon={mapPin} size={20} /></i></Inputtext>
                 </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Success</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" iconaling="left" size="lg" value="Valid text" hassuccess> <i className="inputicon"><Icon icon={mapPin} size={20} /></i></Inputtext>
                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                   <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" iconaling="left" size="lg" placeholder="input text"  disabled> <i className="inputicon"><Icon icon={mapPin} size={20} /></i></Inputtext>
                </div>

                <div className="w-100 mb-30"></div>
                <div class="col-md-12 mb-30"><div class="h5 mb-20">Text field with label and right icon</div></div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>
                   <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Assistive message"   iconaling="right">  <i className="inputicon"><Icon icon={user} size={20} /></i></Inputtext>
                </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Error</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Error message" value="Invalid text" iconaling="right" hasError> <i className="inputicon"><Icon icon={user} size={20} /></i></Inputtext>
                 </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Success</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" lablestyle="placeholder" msg="Success message" value="Valid text" iconaling="right" hassuccess> <i className="inputicon"><Icon icon={user} size={20} /></i></Inputtext>
                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                   <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" placeholder="input text" iconaling="right"  disabled> <i className="inputicon"><Icon icon={user} size={20} /></i></Inputtext>
                </div>
                <div className="w-100 mb-30"></div>

                <div className="col-md-3">
                    <p class="body1 mb-30">Inactive</p>
                    <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Assistive message" iconaling="right" size="lg"> <i className="inputicon"><Icon icon={user} size={20} /></i></Inputtext>
                 </div>
               
                <div className="col-md-3">
                     <p class="body1 mb-30">Error</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Error message" iconaling="right" size="lg" value="Invalid text" hasError> <i className="inputicon"><Icon icon={user} size={20} /></i></Inputtext>
                 </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Success</p>
                     <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" iconaling="right" size="lg" value="Valid text" hassuccess> <i className="inputicon"><Icon icon={user} size={20} /></i></Inputtext>
                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                   <Inputtext type="text" label="Label" lablestyle="placeholder" msg="Success message" iconaling="right" size="lg" placeholder="input text"  disabled> <i className="inputicon"><Icon icon={user} size={20} /></i></Inputtext>
                </div>

                <div className="w-100 mb-30"></div>
                <div class="col-md-12 mb-30"><div class="h5 mb-20">Text field without label </div></div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>
                   <Inputtext type="text" msg="Assistive message"   > </Inputtext>
                </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Error</p>
                     <Inputtext type="text" msg="Error message" value="Invalid text"  hasError></Inputtext>
                 </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Success</p>
                     <Inputtext type="text"  msg="Success message" value="Valid text"  hassuccess></Inputtext>
                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>
                   <Inputtext type="text" msg="Success message" placeholder="input text"  disabled> </Inputtext>
                </div>
                <div className="w-100 mb-30"></div>

                <div className="col-md-3">
                    <p class="body1 mb-30">Inactive</p>
                    <Inputtext type="text" msg="Assistive message"  size="lg"> </Inputtext>
                 </div>
               
                <div className="col-md-3">
                     <p class="body1 mb-30">Error</p>
                     <Inputtext type="text" msg="Error message" size="lg" value="Invalid text" hasError> </Inputtext>
                 </div>
                <div className="col-md-3">
                     <p class="body1 mb-30">Success</p>
                     <Inputtext type="text" msg="Success message"  size="lg" value="Valid text" hassuccess> </Inputtext>
                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                   <Inputtext type="text" msg="Success message"  size="lg" placeholder="input text"  disabled></Inputtext>
                </div>
                <div className="w-100 mb-30"></div>
                <div class="col-md-12 mb-30">
                      <p class="body1">Text fields can come without labels if they have clear independent captions (e.g. title, price, description).</p>
                </div>
                <div className="w-100 pull-left">
                     <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-12">
                              <Inputtext type="text" label="Title" lablestyle="defult" msg="Assistive message"/>
                              </div>
                              <div className="col-md-5">
                                   <Inputtext type="text" label="Price" lablestyle="defult" msg="Assistive message"/>

                              </div>
                              <div className="col-md-7">
                                   <Inputtext type="text" label="Description" lablestyle="defult" msg="Assistive message"/>

                              </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-12">
                              <Inputtext type="text" label="Title" lablestyle="defult" msg="Assistive message" size="lg"/>
                              </div>
                              <div className="col-md-5">
                                   <Inputtext type="text" label="Price" lablestyle="defult" msg="Assistive message" size="lg"/>

                              </div>
                              <div className="col-md-7">
                                   <Inputtext type="text" label="Description" lablestyle="defult" msg="Assistive message" size="lg"/>

                              </div>

                            </div>

                        </div>

                     </div>

                </div>
               
                

            </>
        );
    }
}

export default input_text;