import React, { Component } from 'react';
import Card from '../Cardtags/card/card';
import Detail from '../Cardtags/carddetail/carddetail';
import Avitar from '../../Notification/avitar/avitar-dropdown/avitar_dropdownhtml';
import Action from '../Cardtags/Cardaction/Cardaction';
import Button from '../../button/buttonprop/buttonprop';
import Label from '../Cardtags/Carddescription/Cardlabel';
import Carddec from '../Cardtags/Carddescription/carddec';
import Cardmsg from '../Cardtags/Cardmsg/Cardmsg';
import Cardlink from '../Cardtags/Cardlink/cardlink';
import Tags from '../../ChipsTags/Types/Tags';
import '../../ChipsTags/Chips.css';



import AvitarIcon from '../../../images/avitar.png';
import Avitarbig from '../../../images/avitar80.png';
import fbwhite from '../../../images/fb-white.png';
import fb from '../../../images/fb.png';
import twwhite from '../../../images/tw-white.png';
import tw from '../../../images/tw.png';
import insta from '../../../images/insta.png';

import { Icon } from 'react-icons-kit'
import { thumbsUp } from 'react-icons-kit/feather/thumbsUp';
import { messageSquare } from 'react-icons-kit/feather/messageSquare';
import { eye } from 'react-icons-kit/feather/eye';
import { arrowUp } from 'react-icons-kit/feather/arrowUp';
import CardDT from '../Cardtags/Carddescription/cardDT';
import card from '../Cardtags/card/card';


class cardprofile extends Component {
    render() {
        return (
            <>
            <div className="col-md-12 mb-30">
                <Card style="z1">
                    <Detail>
                        <div className="card-flex">
                            <div className="flex">
                                <Avitar title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} hasRound haslg><img className="" src={AvitarIcon} /></Avitar>
                            </div>
                            <div className="flex">
                                <Action count="3,402" font="text-gray" icon={<Icon icon={eye} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                 <Action count="200" font="text-gray" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                 <Action count="200" font="text-gray" icon={<Icon icon={thumbsUp} />} />
                            </div>
                            <div className="flex">
                                <Button
                                    size="btn-sm"
                                    style="btn-gray text button1"
                                    label="Scroll To Top"
                                    Righticon={true}
                                    icon={<Icon icon={arrowUp} size={25} />}
                                />

                            </div>
                        </div>

                    </Detail>
                    <hr className="b-white-smoke"></hr>
                    <Detail>
                        <div className="card-flex">
                            <div className="flex d-flex">
                                  <Tags DivclassName="form-group tag default-tags no-float mr-10" id="enabled" LabelclassName="default bg-white-smoke text-black" Title="Desing" />
                                  <Tags DivclassName="form-group tag default-tags no-float mr-10" id="enabled" LabelclassName="default bg-white-smoke text-black" Title="Technology" />
                                  <Tags DivclassName="form-group tag default-tags no-float mr-10" id="enabled" LabelclassName="default bg-white-smoke text-black" Title="Development" />


                            </div>
                            <div className="flex d-flex align-items-center">
                                <Label style="mr-10 body2 text-gray" label="Share "/>
                                <Button 
                                             size="btn-sm" 
                                             style="btn-primary labelbtn mr-10" 
                                             
                                             Centericon={true}
                                             icon={<img src={fbwhite}/>}
                                             total={true} 
                                             number="26" 
                                             countstyle="text-primary"
                                             /> 
                                <Button 
                                             size="btn-sm" 
                                             style="bg-primary-variant labelbtn" 
                                             
                                             Centericon={true}
                                             icon={<img src={twwhite}/>}
                                             total={true} 
                                             number="167" 
                                             countstyle="text-primary-variant"
                                             /> 

                            </div>
                        </div>

                    </Detail>
                </Card>
            </div>
            <div className="col-md-4 mb-30">
                  <Card style="z1 text-center">
                      <Detail>
                          <Detail>
                             <div className="flex flex-column">
                                <Avitar iconsize="80px" headingstyle="body1 mb-5" iconstyle="mb-15" style="flex-column text-center" title="Benjamin Parker" subtitle="Front-End Developer" avitar={AvitarIcon} hasRound haslg><img className="" src={Avitarbig} /></Avitar>
                             </div>
                          </Detail>
                          <div className="profileCard-Devider mt-10 mb-10 "><i></i></div>
                          <Detail>
                                <Label style="body1 text-gray" label="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well." />
                          </Detail>
                      </Detail>

                  </Card>
            </div>
             <div className="col-md-4 mb-30">
                 <Card style="z1  bg-white-smoke">
                     <Detail>
                         <Avitar title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} hasRound haslg><img className="" src={AvitarIcon} /></Avitar>
                    
                         <Cardmsg style="mt-15 mb-15 z2">
                              <Label style="body1 text-gray" label="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well." />

                         </Cardmsg>
                         <div className="card-flex">
                             <div className="flex">
                             <CardDT dt="20 Jan, 6:35 PM" />

                             </div>
                             <div className="flex">
                                 <Action count="200" font="text-gray" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                 <Action count="200" font="text-gray" icon={<Icon icon={thumbsUp} />} />
                             </div>
                           

                         </div>
                     </Detail>
                 </Card>
             </div>
             <div className="col-md-4 mb-30">
                  <Card style="z1 text-center">
                      <Detail>
                          <Detail>
                             <div className="flex flex-column">
                                <Avitar iconsize="80px" headingstyle="body1 mb-5" iconstyle="mb-15" style="flex-column text-center" title="Benjamin Parker" subtitle="Front-End Developer" avitar={AvitarIcon} hasRound haslg><img className="" src={Avitarbig} /></Avitar>
                             </div>
                          </Detail>
                          <Detail>
                                 <Cardlink font="subtitle1" label="+1 (570) 387-1283" url="tel:+1 (570) 387-1283" />
                                 <Label style="body1 text-gray w-100 pull-left" label="Call Online" />

                          </Detail>
                          <Detail>
                              <div className="d-flex justify-content-center">
                                     <Button 
                                             size="btn-sm" 
                                             style="btn-light-gray outline mr-10 round socialround"
                                             Centericon={true}
                                             icon={<img src={fb}/>}
                                             /> 
                                     <Button 
                                             size="btn-sm" 
                                             style="btn-light-gray outline mr-10 round socialround"
                                             Centericon={true}
                                             icon={<img src={tw}/>}
                                             /> 
                                     <Button 
                                             size="btn-sm" 
                                             style="btn-light-gray outline round socialround"
                                             Centericon={true}
                                             icon={<img src={insta}/>}
                                             /> 
                                    
                              </div>
                          </Detail>
                          
                         
                      </Detail>

                  </Card>
            </div>
            <div className="col-md-12 mb-30">
                <Card style="bg-dark text-white z1">
                    <Detail>
                        <div className="card-flex">
                            <div className="flex">
                                <Avitar title="Benjamin Parker" subtitle="Developer" subtitlestyle="text-white" avitar={AvitarIcon} hasRound haslg><img className="" src={AvitarIcon} /></Avitar>
                            </div>
                            <div className="flex">
                                <Action count="3,402" font="text-primary caption" icon={<Icon icon={eye} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                 <Action count="200" font="text-primary caption" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                 <Action count="200" font="text-primary caption" icon={<Icon icon={thumbsUp} />} />
                            </div>
                            <div className="flex">
                                <Button
                                    size="btn-sm"
                                    style="btn-white text button1"
                                    label="Scroll To Top"
                                    Righticon={true}
                                    icon={<Icon icon={arrowUp} size={25} />}
                                />

                            </div>
                        </div>

                    </Detail>
                    <hr className="b-gray"></hr>
                    <Detail>
                        <div className="card-flex">
                            <div className="flex d-flex">
                                  <Tags DivclassName="form-group tag default-tags no-float mr-10" id="enabled" LabelclassName="default bg-dark-variant text-white" Title="Desing" />
                                  <Tags DivclassName="form-group tag default-tags no-float mr-10" id="enabled" LabelclassName="default bg-dark-variant text-white" Title="Technology" />
                                  <Tags DivclassName="form-group tag default-tags no-float mr-10" id="enabled" LabelclassName="default bg-dark-variant text-white" Title="Development" />


                            </div>
                            <div className="flex d-flex align-items-center">
                                <Label style="mr-10 body2 text-white" label="Share "/>
                                <Button 
                                             size="btn-sm" 
                                             style="btn-primary labelbtn mr-10" 
                                             
                                             Centericon={true}
                                             icon={<img src={fbwhite}/>}
                                             total={true} 
                                             number="26" 
                                             countstyle="text-primary"
                                             /> 
                                <Button 
                                             size="btn-sm" 
                                             style="bg-primary-variant labelbtn" 
                                             
                                             Centericon={true}
                                             icon={<img src={twwhite}/>}
                                             total={true} 
                                             number="167" 
                                             countstyle="text-primary-variant"
                                             /> 

                            </div>
                        </div>

                    </Detail>
                </Card>
            </div>
            <div className="col-md-4 mb-30">
                  <Card style="z1 text-center bg-dark text-white">
                      <Detail>
                          <Detail>
                             <div className="flex flex-column">
                                <Avitar iconsize="80px" headingstyle="body1 mb-5" iconstyle="mb-15" style="flex-column text-center" title="Benjamin Parker" subtitle="Front-End Developer" subtitlestyle="text-white" avitar={AvitarIcon} hasRound haslg><img className="" src={Avitarbig} /></Avitar>
                             </div>
                          </Detail>
                          <div className="profileCard-Devider mt-10 mb-10 "><i className="bg-primary"></i></div>
                          <Detail>
                                <Label style="body1 text-white" label="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well." />
                          </Detail>
                      </Detail>

                  </Card>
            </div>
             <div className="col-md-4 mb-30">
                 <Card style="z1  bg-dark text-white">
                     <Detail>
                         <Avitar title="Benjamin Parker" subtitle="Developer" subtitlestyle="text-white" avitar={AvitarIcon} hasRound haslg><img className="" src={AvitarIcon} /></Avitar>
                    
                         <Cardmsg style="mt-15 mb-15 z2 bg-dark-variant ">
                              <Label style="body1 text-white" label="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well." />

                         </Cardmsg>
                         <div className="card-flex">
                             <div className="flex">
                             <CardDT style="text-white" dt="20 Jan, 6:35 PM" />

                             </div>
                             <div className="flex">
                                 <Action count="200" font="text-white mr-10" icon={<Icon icon={messageSquare} />} />
                                 <Action count="200" font="text-white " icon={<Icon icon={thumbsUp} />} />
                             </div>
                           

                         </div>
                     </Detail>
                 </Card>
             </div>
             <div className="col-md-4 mb-30">
                  <Card style="z1 text-center bg-dark text-white">
                      <Detail>
                          <Detail>
                             <div className="flex flex-column">
                                <Avitar iconsize="80px" headingstyle="body1 mb-5" iconstyle="mb-15" style="flex-column text-center" title="Benjamin Parker" subtitle="Front-End Developer" subtitlestyle="text-white" avitar={AvitarIcon} hasRound haslg><img className="" src={Avitarbig} /></Avitar>
                             </div>
                          </Detail>
                          <Detail>
                                 <Cardlink font="subtitle1" label="+1 (570) 387-1283" url="tel:+1 (570) 387-1283" />
                                 <Label style="body1 text-white w-100 pull-left" label="Call Online" />

                          </Detail>
                          <Detail>
                              <div className="d-flex justify-content-center">
                                     <Button 
                                             size="btn-sm" 
                                             style="btn-light-gray outline mr-10 round socialround"
                                             Centericon={true}
                                             icon={<img src={fb}/>}
                                             /> 
                                     <Button 
                                             size="btn-sm" 
                                             style="btn-light-gray outline mr-10 round socialround"
                                             Centericon={true}
                                             icon={<img src={tw}/>}
                                             /> 
                                     <Button 
                                             size="btn-sm" 
                                             style="btn-light-gray outline round socialround"
                                             Centericon={true}
                                             icon={<img src={insta}/>}
                                             /> 
                                    
                              </div>
                          </Detail>
                          
                         
                      </Detail>

                  </Card>
            </div>
            </>
        );
    }
}

export default cardprofile;