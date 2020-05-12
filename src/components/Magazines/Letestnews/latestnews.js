import React, { Component } from 'react';
import Card from '../Cardtags/card/card';
import Detail from '../Cardtags/carddetail/carddetail';
import Cardheading from '../Cardtags/Carddescription/cardheading';
import Button from '../../button/buttonprop/buttonprop';
import Tags from '../../ChipsTags/Types/Tags';
import CardFooter from '../Cardtags/Cardfooter/Cardfooter';
import CardDT from '../Cardtags/Carddescription/cardDT';
import Cardimg from '../Cardtags/cardimage/Cardimg';
import Action from '../Cardtags/Cardaction/Cardaction';
import Cardoverlay from '../Cardtags/Cardoverlay/Cardoverlay';
import Avitar from '../../Notification/avitar/avitar-dropdown/avitar_dropdownhtml';



import '../../ChipsTags/Chips.css';
import { Icon } from 'react-icons-kit'
import { moreHorizontal } from 'react-icons-kit/feather/moreHorizontal'
import { thumbsUp } from 'react-icons-kit/feather/thumbsUp';
import { messageSquare } from 'react-icons-kit/feather/messageSquare';

import C10 from '../../../images/cardimg/c10.png';
import C21 from '../../../images/cardimg/c21.png';
import C22 from '../../../images/cardimg/c22.png';
import C23 from '../../../images/cardimg/c23.png';
import C24 from '../../../images/cardimg/c24.png';
import C26 from '../../../images/cardimg/c26.png';
import C27 from '../../../images/cardimg/c27.png';
import C28 from '../../../images/cardimg/c28.png';
import C29 from '../../../images/cardimg/c29.png';
import C30 from '../../../images/cardimg/c30.png';


import AvitarIcon from '../../../images/avitar.png';




class latestnews extends Component {
    render() {
        return (
            <>
                <div className="w-100 pull-left mb-30" ></div>
                <div className="col-md-12">
                    <Card style="b1-solid b-white-smoke">
                        <Detail>
                            <div className="card-flex">
                                <div className="flex">
                                    <Cardheading heading="Latest News" />
                                </div>
                                <div className="flex">
                                    <Button
                                        size="btn "
                                        style="btn-gray text h3"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={25} />}
                                    />

                                </div>
                            </div>
                        </Detail>
                        <div className="w-100 pull-left"></div>
                        <div className="row no-gutters pull-left">
                            <div className="col-md-4">
                                <Card  style="b1-solid b-white-smoke color-card tbl">
                                <Cardoverlay background="#fff">
            
                                    <Detail>

                                         <CardDT dt="20 Jan, 6:35 PM" />
                                        <div className="w-100 mb-10 pull-left"></div>

                                        <Cardheading heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                        <div className="w-100 mb-30 pull-left"></div>

                                        <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar title="Benjamin Parker" subtitle="Developer"  avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font="text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font="text-white mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                    </Detail>
                                    </Cardoverlay>
                                </Card>

                            </div>
                            <div className="col-md-4">
                            <Card style="b1-solid b-white-smoke img-card tbl herocard">
                                    <Cardimg img={C21} > </Cardimg>
                                    <Cardoverlay background="rgba(0, 0, 0, 0.4)">

                                        <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                            <div className="w-100 mb-10 pull-left"></div>

                                            <Cardheading style="text-white h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                            <div className="w-100 mb-30 pull-left"></div>

                                            <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar headingstyle="text-white" title="Benjamin Parker" subtitle="Developer" subtitlestyle="text-white" avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font="text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font="text-white mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                        </Detail>


                                       
                                    </Cardoverlay>

                                </Card>

                            </div>
                            <div className="col-md-4">
                            <Card style="b1-solid b-white-smoke color-card tbl">
                                    
                                    <Cardoverlay background="#fff">

                                        <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                            <div className="w-100 mb-10 pull-left"></div>

                                            <Cardheading style=" h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                            <div className="w-100 mb-30 pull-left"></div>

                                            <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar  title="Benjamin Parker" subtitle="Developer"  avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font=" mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font=" mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                        </Detail>


                                       
                                    </Cardoverlay>

                                </Card>


                            </div>
                            <div className="col-md-4">
                            <Card style="b1-solid b-white-smoke color-card tbl">
                                    
                                    <Cardoverlay background="#fff">

                                        <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                            <div className="w-100 mb-10 pull-left"></div>

                                            <Cardheading style=" h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                            <div className="w-100 mb-30 pull-left"></div>

                                            <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar  title="Benjamin Parker" subtitle="Developer"  avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font=" mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font=" mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                        </Detail>


                                       
                                    </Cardoverlay>

                                </Card>


                            </div>
                            <div className="col-md-4">
                            <Card style="b1-solid b-white-smoke color-card tbl">
                                    
                                    <Cardoverlay background="#fff">

                                        <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                            <div className="w-100 mb-10 pull-left"></div>

                                            <Cardheading style=" h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                            <div className="w-100 mb-30 pull-left"></div>

                                            <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar  title="Benjamin Parker" subtitle="Developer"  avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font=" mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font=" mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                        </Detail>


                                       
                                    </Cardoverlay>

                                </Card>


                            </div>
                            <div className="col-md-4">
                            <Card style="b1-solid b-white-smoke color-card tbl">
                                    
                                    <Cardoverlay background="#fff">

                                        <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                            <div className="w-100 mb-10 pull-left"></div>

                                            <Cardheading style=" h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                            <div className="w-100 mb-30 pull-left"></div>

                                            <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar  title="Benjamin Parker" subtitle="Developer"  avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font=" mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font=" mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                        </Detail>


                                       
                                    </Cardoverlay>

                                </Card>


                            </div>

                        </div>
                    </Card>

                </div>
                <div className="w-100 pull-left mb-30"></div>


                <div className="col-md-12">
                    <Card style="b1-solid b-white-smoke bg-dark">
                        <Detail>
                            <div className="card-flex">
                                <div className="flex">
                                    <Cardheading style="text-white h6" heading="Latest News" />
                                </div>
                                <div className="flex">
                                    <Button
                                        size="btn "
                                        style="btn-primary text h3"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={25} />}
                                    />

                                </div>
                            </div>
                        </Detail>
                        <div className="w-100 pull-left"></div>
                        <div className="row no-gutters pull-left">
                            <div className="col-md-4">
                                <Card  style="b1-solid b-white-smoke color-card tbl bg-dark">
                                <Cardoverlay >
            
                                    <Detail>

                                         <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                        <div className="w-100 mb-10 pull-left"></div>

                                        <Cardheading style="text-white h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                        <div className="w-100 mb-30 pull-left"></div>

                                        <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar headingstyle="text-white" title="Benjamin Parker" subtitle="Developer" subtitlestyle="text-white"  avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font="text-primary mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font="text-primary mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                    </Detail>
                                    </Cardoverlay>


                                   

                                </Card>

                            </div>
                            <div className="col-md-4">
                            <Card style="b1-solid b-white-smoke img-card tbl bg-dark herocard">
                                    <Cardimg img={C21} > </Cardimg>
                                    <Cardoverlay background="rgba(0, 0, 0, 0.4)">

                                        <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                            <div className="w-100 mb-10 pull-left"></div>

                                            <Cardheading style="text-white h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                            <div className="w-100 mb-30 pull-left"></div>

                                            <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar headingstyle="text-white" title="Benjamin Parker" subtitle="Developer" subtitlestyle="text-white" avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font="text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font="text-white mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                        </Detail>


                                       
                                    </Cardoverlay>

                                </Card>

                            </div>
                            <div className="col-md-4">
                            <Card style="b1-solid b-white-smoke color-card tbl bg-dark">
                                    
                                    <Cardoverlay >

                                        <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                            <div className="w-100 mb-10 pull-left"></div>

                                            <Cardheading style="text-white h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                            <div className="w-100 mb-30 pull-left"></div>

                                            <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar headingstyle="text-white"  title="Benjamin Parker" subtitle="Developer" subtitlestyle="text-white"  avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font="text-primary mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font="text-primary mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                        </Detail>


                                       
                                    </Cardoverlay>

                                </Card>


                            </div>
                            <div className="col-md-4">
                            <Card style="b1-solid b-white-smoke color-card tbl bg-dark">
                                    
                                    <Cardoverlay >

                                        <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                            <div className="w-100 mb-10 pull-left"></div>

                                            <Cardheading style="text-white h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                            <div className="w-100 mb-30 pull-left"></div>

                                            <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar headingstyle="text-white"  title="Benjamin Parker" subtitle="Developer" subtitlestyle="text-white"  avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font="text-primary mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font="text-primary mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                        </Detail>


                                       
                                    </Cardoverlay>

                                </Card>


                            </div>
                            <div className="col-md-4">
                            <Card style="b1-solid b-white-smoke color-card tbl bg-dark">
                                    
                                    <Cardoverlay >

                                        <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                            <div className="w-100 mb-10 pull-left"></div>

                                            <Cardheading style="text-white h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                            <div className="w-100 mb-30 pull-left"></div>

                                            <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar headingstyle="text-white"  title="Benjamin Parker" subtitle="Developer" subtitlestyle="text-white"  avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font="text-primary mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font="text-primary mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                        </Detail>


                                       
                                    </Cardoverlay>

                                </Card>


                            </div>
                            <div className="col-md-4">
                            <Card style="b1-solid b-white-smoke color-card tbl bg-dark">
                                    
                                    <Cardoverlay >

                                        <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                            <div className="w-100 mb-10 pull-left"></div>

                                            <Cardheading style="text-white h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                            <div className="w-100 mb-30 pull-left"></div>

                                            <div className="card-flex">
                                                <div className="flex">
                                                   <Avitar headingstyle="text-white"  title="Benjamin Parker" subtitle="Developer" subtitlestyle="text-white"  avitar={AvitarIcon} hasRound hassm><img className="" src={AvitarIcon} /></Avitar>


                                                </div>
                                                <div className="flex">
                                                     <Action font="text-primary mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                      <Action font="text-primary mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                                </div>

                                            </div>
                                        </Detail>


                                       
                                    </Cardoverlay>

                                </Card>

                            </div>

                        </div>
                    </Card>

                </div>
                <div className="w-100 pull-left mb-30"></div>
                <div className="col-md-3 mb-30">
                     <Card>
                        <Cardimg img={C22} />
                        <div className="w-100 pull-left mt-20"></div>
                           
                            <CardDT dt="30 min ago" />
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading style="subtitle1" heading="5 Things No One Will Tell You About Your First Job" />
                        
                    </Card>

                </div>
                <div className="col-md-3 mb-30">
                     <Card>
                        <Cardimg img={C23} />
                        <div className="w-100 pull-left mt-20"></div>
                           
                            <CardDT dt="1 houre ago" />
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading style="subtitle1" heading="Down the Rabbit-hole" />
                        
                    </Card>
                </div>
                <div className="col-md-3 mb-30">
                      <Card>
                        <Cardimg img={C24} />
                        <div className="w-100 pull-left mt-20"></div>
                           
                            <CardDT dt="Today" />
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading style="subtitle1" heading="10 Secrets No One Has Told You About" />
                    </Card> 
                </div>
                <div className="col-md-3 mb-30">
                <Card>
                        <Cardimg img={C26} />
                        <div className="w-100 pull-left mt-20"></div>
                           
                            <CardDT dt="Today" />
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading style="subtitle1" heading="10 Vibrant Lip Colors Perfect for Summer 2019" />
                    </Card> 

                </div>
                <div className="col-md-3 mb-30">
                <Card>
                        <Cardimg img={C27} />
                        <div className="w-100 pull-left mt-20"></div>
                           
                            <CardDT dt="Yesterday" />
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading style="subtitle1" heading="10 Myths You Need To Stop Believing Now" />
                    </Card> 

                </div>
                <div className="col-md-3 mb-30">
                <Card>
                        <Cardimg img={C28} />
                        <div className="w-100 pull-left mt-20"></div>
                           
                            <CardDT dt="Yesterday" />
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading style="subtitle1" heading="What No One Will Tell You But You Need To Hear About London" />
                    </Card> 

                </div>
                <div className="col-md-3 mb-30">
                <Card>
                        <Cardimg img={C29} />
                        <div className="w-100 pull-left mt-20"></div>
                           
                            <CardDT dt="10 Jan, 11:43 PM" />
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading style="subtitle1" heading="Master These 7 Essential Elements For Winning Content" />
                    </Card> 

                </div>
                <div className="col-md-3 mb-30">
                <Card>
                        <Cardimg img={C30} />
                        <div className="w-100 pull-left mt-20"></div>
                           
                            <CardDT dt="10 Jan, 9:05 PM" />
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading style="subtitle1" heading="10 Best Social Media Marketing Tools" />
                    </Card> 

                </div>

                
            </>
        );
    }
}

export default latestnews;