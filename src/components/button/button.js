import React, { Component } from 'react';
import Header from '../header/header';
import Button from './buttonprop/buttonprop';
import Rdiobtn from './togglebtn/togglbtn';
import { Icon } from 'react-icons-kit';
import {userPlus} from 'react-icons-kit/feather/userPlus';
import {chevronRight} from 'react-icons-kit/feather/chevronRight';
import {cloud} from 'react-icons-kit/feather/cloud';
import {heart} from 'react-icons-kit/feather/heart';
import {facebookF} from 'react-icons-kit/fa/facebookF';
import {instagram} from 'react-icons-kit/feather/instagram';
import {twitter} from 'react-icons-kit/feather/twitter';
import {dribbble} from 'react-icons-kit/icomoon/dribbble';
import {behance} from 'react-icons-kit/icomoon/behance';





class button extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
           header: [
              {title: 'Button'}
            ],
        }
    }   
    render() {
        return (
            <div className="wrapper">
                 <section className="container">
                     <div className="row">
                         <Header header={this.state.header[0].title} />
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Contained Button</div>
                              <p className="body1">Used for maximum emphasis.</p>
                         </div>
                         <div className="container">
                             <div className="row">
                                 <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button size="btn-sm" style="btn-primary" label="Button"  />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary" 
                                             label="Add Friend" 
                                             Lefticon={true}
                                             icon={<Icon icon={userPlus}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary" 
                                             label="Next" 
                                             Righticon={true}
                                             icon={<Icon icon={chevronRight}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary"
                                             Centericon={true}
                                             icon={<Icon icon={cloud}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button size="btn-sm" style="btn-primary" label="Disable"  disabled />
                                     </li>
                                 </ul>
                                 <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button size="btn-md" style="btn-primary" label="Button"  />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary" 
                                             label="Add Friend" 
                                             Lefticon={true}
                                             icon={<Icon icon={userPlus}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary" 
                                             label="Next" 
                                             Righticon={true}
                                             icon={<Icon icon={chevronRight}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary"
                                             Centericon={true}
                                             icon={<Icon icon={cloud}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button size="btn-md" style="btn-primary" label="Disable"  disabled />
                                     </li>
                                 </ul>
                                 <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button size="btn-lg" style="btn-primary" label="Button"  />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary" 
                                             label="Add Friend" 
                                             Lefticon={true}
                                             icon={<Icon icon={userPlus}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary" 
                                             label="Next" 
                                             Righticon={true}
                                             icon={<Icon icon={chevronRight}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary"
                                             Centericon={true}
                                             icon={<Icon icon={cloud}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button size="btn-lg" style="btn-primary" label="Disable"  disabled />
                                     </li>
                                 </ul>
                                  
                             </div>
 
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Outlined Button</div>
                              <p className="body1">Used for medium emphasis.</p>
                         </div>
                         <div className="container">
                             <div className="row">
                             <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button size="btn-sm" style="btn-primary outline" label="Button"  />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary outline" 
                                             label="Add Friend" 
                                             Lefticon={true}
                                             icon={<Icon icon={userPlus}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary outline" 
                                             label="Next" 
                                             Righticon={true}
                                             icon={<Icon icon={chevronRight}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary outline"
                                             Centericon={true}
                                             icon={<Icon icon={cloud}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button size="btn-sm" style="btn-primary outline" label="Disable"  disabled />
                                     </li>
                                 </ul>
                                 {/* ---------------------------------------------------------------------------- */}
                                 <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button size="btn-md" style="btn-primary outline" label="Button"  />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary outline" 
                                             label="Add Friend" 
                                             Lefticon={true}
                                             icon={<Icon icon={userPlus}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary outline" 
                                             label="Next" 
                                             Righticon={true}
                                             icon={<Icon icon={chevronRight}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary outline"
                                             Centericon={true}
                                             icon={<Icon icon={cloud}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button size="btn-md" style="btn-primary outline" label="Disable"  disabled />
                                     </li>
                                 </ul>
                                 {/* --------------------------------------------------------------------- */}
                                 <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button size="btn-lg" style="btn-primary outline" label="Button"  />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary outline" 
                                             label="Add Friend" 
                                             Lefticon={true}
                                             icon={<Icon icon={userPlus}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary outline" 
                                             label="Next" 
                                             Righticon={true}
                                             icon={<Icon icon={chevronRight}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary outline"
                                             Centericon={true}
                                             icon={<Icon icon={cloud}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button size="btn-lg" style="btn-primary outline" label="Disable"  disabled />
                                     </li>
                                 </ul>
                                 {/* --------------------------------------------------- */}
                             </div>
 
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Text Button</div>
                              <p className="body1">Used for less important actions.</p>
                         </div>
                         <div className="container">
                             <div className="row">
                             <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button size="btn-sm" style="btn-primary text" label="Button"  />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary text" 
                                             label="Add Friend" 
                                             Lefticon={true}
                                             icon={<Icon icon={userPlus}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary text" 
                                             label="Next" 
                                             Righticon={true}
                                             icon={<Icon icon={chevronRight}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary text"
                                             Centericon={true}
                                             icon={<Icon icon={cloud}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button size="btn-sm" style="btn-primary text" label="Disable"  disabled />
                                     </li>
                                 </ul>
                                 {/* --------------------------------------------------------- */}

                                 <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button size="btn-md" style="btn-primary text" label="Button"  />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary text" 
                                             label="Add Friend" 
                                             Lefticon={true}
                                             icon={<Icon icon={userPlus}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary text" 
                                             label="Next" 
                                             Righticon={true}
                                             icon={<Icon icon={chevronRight}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary text"
                                             Centericon={true}
                                             icon={<Icon icon={cloud}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button size="btn-md" style="btn-primary text" label="Disable"  disabled />
                                     </li>
                                 </ul>
                                 {/* ------------------------------------------------------------------------------- */}
                                 <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button size="btn-lg" style="btn-primary text" label="Button"  />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary text" 
                                             label="Add Friend" 
                                             Lefticon={true}
                                             icon={<Icon icon={userPlus}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary text" 
                                             label="Next" 
                                             Righticon={true}
                                             icon={<Icon icon={chevronRight}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary text"
                                             Centericon={true}
                                             icon={<Icon icon={cloud}  />}
                                              />
                                     </li>
                                     <li>
                                         <Button size="btn-lg" style="btn-primary text" label="Disable"  disabled />
                                     </li>
                                 </ul>
                                 {/* --------------------------------------------------------------- */}
                             </div>
 
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Labeled Button</div>
                              <p className="body1">Buttons can have labels.</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                             <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary labelbtn" 
                                             label="Like"  
                                             Lefticon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary"
                                             /> 
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary labelbtn"
                                             Centericon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary"
                                              />
                                     </li>
                                     <li>
                                     <Button 
                                             size="btn-sm" 
                                             style="btn-red labelbtn" 
                                             label="Like"  
                                             Lefticon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-red border"
                                             /> 
                                     </li>
                                     <li>
                                     <Button 
                                             size="btn-sm" 
                                             style="btn-red labelbtn" 
                                             Centericon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-red border"
                                             /> 
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary-variant labelbtn" 
                                             label="Share"  
                                             Lefticon={true}
                                             icon={<Icon icon={facebookF} />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary-variant"
                                             /> 
                                     </li>
                                     <li>
                                     <Button 
                                             size="btn-sm" 
                                             style="btn-primary-variant labelbtn" 
                                             Centericon={true}
                                             icon={<Icon icon={facebookF}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary-variant border"
                                             /> 
                                     </li>
                                 </ul>

                                {/* ---------------------------------------------------------------- */}

                                <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary labelbtn" 
                                             label="Like"  
                                             Lefticon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary"
                                             /> 
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary labelbtn"
                                             Centericon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary"
                                              />
                                     </li>
                                     <li>
                                     <Button 
                                             size="btn-md" 
                                             style="btn-red labelbtn" 
                                             label="Like"  
                                             Lefticon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-red border"
                                             /> 
                                     </li>
                                     <li>
                                     <Button 
                                             size="btn-md" 
                                             style="btn-red labelbtn" 
                                             Centericon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-red border"
                                             /> 
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary-variant labelbtn" 
                                             label="Share"  
                                             Lefticon={true}
                                             icon={<Icon icon={facebookF} />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary-variant"
                                             /> 
                                     </li>
                                     <li>
                                     <Button 
                                             size="btn-md" 
                                             style="btn-primary-variant labelbtn" 
                                             Centericon={true}
                                             icon={<Icon icon={facebookF}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary-variant border"
                                             /> 
                                     </li>
                                 </ul>

                                 {/* ---------------------------------------------------------------- */}
                                   
                                 <ul className="btn-list mb-30"> 
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary labelbtn" 
                                             label="Like"  
                                             Lefticon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary"
                                             /> 
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary labelbtn"
                                             Centericon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary"
                                              />
                                     </li>
                                     <li>
                                     <Button 
                                             size="btn-lg" 
                                             style="btn-red labelbtn" 
                                             label="Like"  
                                             Lefticon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-red border"
                                             /> 
                                     </li>
                                     <li>
                                     <Button 
                                             size="btn-lg" 
                                             style="btn-red labelbtn" 
                                             Centericon={true}
                                             icon={<Icon icon={heart}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-red border"
                                             /> 
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary-variant labelbtn" 
                                             label="Share"  
                                             Lefticon={true}
                                             icon={<Icon icon={facebookF} />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary-variant"
                                             /> 
                                     </li>
                                     <li>
                                     <Button 
                                             size="btn-lg" 
                                             style="btn-primary-variant labelbtn" 
                                             Centericon={true}
                                             icon={<Icon icon={facebookF}  />}
                                             total={true} 
                                             number="23" 
                                             countstyle="text-primary-variant border"
                                             /> 
                                     </li>
                                 </ul>
                                 {/* --------------------------------------------------------- */}
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Social & Applications Button</div>
                              <p className="body1">Button can link to a social website or application.</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <ul className="btn-list mb-30">
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary" 
                                             label="Facebook" 
                                             Lefticon={true}
                                             icon={<Icon icon={facebookF}/>}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-mulberry" 
                                             label="Instagram" 
                                             Lefticon={true}
                                             icon={<Icon icon={instagram}/>}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-primary-variant" 
                                             label="Twitter" 
                                             Lefticon={true}
                                             icon={<Icon icon={twitter}/>}
                                              />
                                     </li>
                                   
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-dark-variant"
                                             Centericon={true}
                                             icon={<Icon icon={behance}/>}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-sm" 
                                             style="btn-mulberry"
                                             Centericon={true}
                                             icon={<Icon icon={dribbble}/>}
                                              />
                                     </li>
                                 </ul>
                                 {/* ------------------------------------------------------- */}
                                 <ul className="btn-list mb-30">
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary" 
                                             label="Facebook" 
                                             Lefticon={true}
                                             icon={<Icon icon={facebookF}/>}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-mulberry" 
                                             label="Instagram" 
                                             Lefticon={true}
                                             icon={<Icon icon={instagram}/>}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-primary-variant" 
                                             label="Twitter" 
                                             Lefticon={true}
                                             icon={<Icon icon={twitter}/>}
                                              />
                                     </li>
                                   
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-dark-variant"
                                             Centericon={true}
                                             icon={<Icon icon={behance}/>}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-md" 
                                             style="btn-mulberry"
                                             Centericon={true}
                                             icon={<Icon icon={dribbble}/>}
                                              />
                                     </li>
                                 </ul>
                                 {/* -------------------------------------------------- */}
                                 <ul className="btn-list mb-30">
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary" 
                                             label="Facebook" 
                                             Lefticon={true}
                                             icon={<Icon icon={facebookF}/>}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-mulberry" 
                                             label="Instagram" 
                                             Lefticon={true}
                                             icon={<Icon icon={instagram}/>}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-primary-variant" 
                                             label="Twitter" 
                                             Lefticon={true}
                                             icon={<Icon icon={twitter}/>}
                                              />
                                     </li>
                                   
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-dark-variant"
                                             Centericon={true}
                                             icon={<Icon icon={behance}/>}
                                              />
                                     </li>
                                     <li>
                                         <Button 
                                             size="btn-lg" 
                                             style="btn-mulberry"
                                             Centericon={true}
                                             icon={<Icon icon={dribbble}/>}
                                              />
                                     </li>
                                 </ul>
                                 {/* ------------------------------------------------ */}
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Toggle Button</div>
                              <p className="body1">Button can link to a social website or application.</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <Rdiobtn/>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Color</div>
                              <p className="body1">Used for maximum emphasis.</p>
                         </div>
                         
                         <div className="container">
                             <div className="row align-content-end">
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-red w-100" label="Red"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-orange w-100" label="Orange"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-yellow w-100" label="Yellow"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-la-rioja w-100" label="La Rioja"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-pelorous w-100" label="Pelorous"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-mulberry w-100" label="Pelorous"  />
                                 </div>
                                 {/* ---------------------------------------------------------------------------- */}
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-red w-100" label="Red"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-orange w-100" label="Orange"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-yellow w-100" label="Yellow"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-la-rioja w-100" label="La Rioja"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-pelorous w-100" label="Pelorous"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-mulberry w-100" label="Pelorous"  />
                                 </div>
                                 {/* ------------------------------------------------------------------------ */}
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-red outline w-100" label="Red"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-orange outline w-100" label="Orange"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-yellow outline w-100" label="Yellow"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-la-rioja outline w-100" label="La Rioja"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-pelorous outline w-100" label="Pelorous"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-sm" style="btn-mulberry outline w-100" label="Pelorous"  />
                                 </div>
                                 {/* ---------------------------------------------------------------------------- */}
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-red outline w-100" label="Red"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-orange outline w-100" label="Orange"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-yellow outline w-100" label="Yellow"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-la-rioja outline w-100" label="La Rioja"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-pelorous outline w-100" label="Pelorous"  />
                                 </div>
                                 <div class="col-md-2 mb-30">
                                      <Button size="btn-md" style="btn-mulberry outline w-100" label="Pelorous"  />
                                 </div>
                                 {/* ------------------------------------------------------------------------ */}
                                

                             </div>
                         </div>
                     </div>
                 </section>
            </div>
        );
    }
}

export default button;