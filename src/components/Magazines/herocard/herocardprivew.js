import React, { Component } from 'react';
import Card from '../Cardtags/card/card';
import Cardimg from '../Cardtags/cardimage/Cardimg';
import Cardoverlay from '../Cardtags/Cardoverlay/Cardoverlay';
import Detail from '../Cardtags/carddetail/carddetail';
import Cardheading from '../Cardtags/Carddescription/cardheading';
import CardDT from '../Cardtags/Carddescription/cardDT';
import Carddec from '../Cardtags/Carddescription/carddec';
import Action from '../Cardtags/Cardaction/Cardaction';
import Tags from '../../ChipsTags/Types/Tags';
import Button from '../../button/buttonprop/buttonprop';
import CardFooter from '../Cardtags/Cardfooter/Cardfooter';
import Cardlink from '../Cardtags/Cardlink/cardlink';



import '../../ChipsTags/Chips.css';
import { Icon } from 'react-icons-kit'
import { thumbsUp } from 'react-icons-kit/feather/thumbsUp';
import { messageSquare } from 'react-icons-kit/feather/messageSquare';
import { moreHorizontal } from 'react-icons-kit/feather/moreHorizontal'
import { moreVertical } from 'react-icons-kit/feather/moreVertical';
import { ic_share } from 'react-icons-kit/md/ic_share'



import C7 from '../../../images/cardimg/c7.png';
import C8 from '../../../images/cardimg/c8.png';
import C10 from '../../../images/cardimg/c10.png';
import C14 from '../../../images/cardimg/c14.png';
import C15 from '../../../images/cardimg/c15.png';
import C17 from '../../../images/cardimg/c17.png';
import C18 from '../../../images/cardimg/c18.png';
import C19 from '../../../images/cardimg/c19.png';
import C20 from '../../../images/cardimg/c20.png';




class herocardprivew extends Component {
    render() {
        return (
            <>
                <div className="w-100 pull-left mb-60"></div>
                <div className="col-md-4">
                    <Card style="z1 text-center text-white img-card ">
                        <Cardimg img={C7} > </Cardimg>
                        <Cardoverlay >
                            <Detail>
                                <div className="card-flex mt-5">
                                    <div className="flex">
                                        <Tags DivclassName="form-group tag default-tags no-float" id="enabled" LabelclassName="default bg-green text-white" Title="Nature" />
                                    </div>
                                    <div className="flex">
                                        <Button
                                            size=""
                                            style="btn-white text bg-transparant"
                                            Centericon={true}
                                            icon={<Icon icon={ic_share} size={18} />}
                                        />
                                    </div>
                                </div>
                            </Detail>
                            <Detail>
                                <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                <div className="w-100 pull-left mb-15"></div>
                                <Cardheading heading="10 Mindblowing Facts About Birdworld" />
                                <div className="w-100 pull-left mb-40"></div>
                                <Carddec Description="Benjamin Parker" />
                            </Detail>
                            <Detail>
                                <div>
                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                </div>
                                <div className="w-100 pull-left mb-40"></div>
                            </Detail>
                        </Cardoverlay>
                    </Card>
                   
                    {/* =================================================================== */}


                </div>
                {/* =================================================================== */}
                <div className="col-md-4">
                    <Card style="z1 text-center text-white img-card ">
                        <Cardimg img={C8} > </Cardimg>
                        <Cardoverlay background="rgba(0, 0, 0, 0.4)">
                            <Detail>

                                <Tags DivclassName="form-group tag default-tags mt-30" id="enabled" LabelclassName="default bg-pelorous text-white no-float" Title="Nature" />

                            </Detail>
                            <Detail>

                                <Cardheading heading="Everything You Need To Know About Finding Your Perfect Beach" />
                                <div className="w-100 pull-left mb-20"></div>
                                <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down" />
                            </Detail>
                            <CardFooter>
                                <div>
                                    <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                </div>
                                <div>
                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                </div>
                            </CardFooter>
                        </Cardoverlay>
                    </Card>
                   

                </div>
                {/* =================================================================== */}
                <div className="col-md-4">
                    <Card style="z1 text-center text-white color-card tbl">
                        
                        <Cardoverlay  background="#003580">

                            <Detail>

                                <Tags DivclassName="form-group tag default-tags mt-30" id="enabled" LabelclassName="default bg-pelorous text-white no-float" Title="Nature" />

                            </Detail>
                            <Detail>

                                <Cardheading heading="Everything You Need To Know About Finding Your Perfect Beach" />
                                <div className="w-100 pull-left mb-20"></div>
                                <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down" />

                            </Detail>
                            <CardFooter>
                                <div>
                                    <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                </div>
                                <div>
                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                </div>
                            </CardFooter>
                        </Cardoverlay>
                    </Card>
                </div>
                <div className="col-md-4">
                     {/* =================================================================== */}
                     <div className="w-100 pull-left mb-30"></div>
                    <Card style="z1 img-card ">

                        <Detail>

                            <Tags DivclassName="form-group tag default-tags no-float" id="enabled" LabelclassName="default bg-mulberry text-white" Title="Lifestyle" />
                            <div className="w-100 mb-20 pull-left"></div>

                            <Cardheading heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                            <div className="w-100 pull-left mb-30"></div>
                        </Detail>


                        <CardFooter>
                            <div>
                                <CardDT dt="20 Jan, 6:35 PM" />
                            </div>
                            <div>
                                <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                            </div>
                        </CardFooter>

                    </Card>
                    {/* =================================================================== */}
                </div>
                
                <div className="col-md-4">
                     {/* =================================================================== */}
                     <div className="w-100 pull-left mb-30"></div>
                    <Card style="z1 text-white img-card ">
                        <Cardimg img={C10} > </Cardimg>
                        <Cardoverlay background="rgba(0, 0, 0, 0.4)">

                            <Detail>

                                <Tags DivclassName="form-group tag default-tags no-float" id="enabled" LabelclassName="default bg-mulberry text-white" Title="Lifestyle" />
                                <div className="w-100 mb-20 pull-left"></div>

                                <Cardheading heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                            </Detail>


                            <CardFooter>
                                <div>
                                    <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                </div>
                                <div>
                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                </div>
                            </CardFooter>
                        </Cardoverlay>

                    </Card>
                    {/* =================================================================== */}

                </div>
                <div className="w-100 pull-left mb-30"></div>
                <div className="col-md-4">

                    <Card style="z1 img-card ">
                        <Detail>
                            <div className="row  ">
                                <div className="col-md-4">
                                    <Cardimg img={C14} > </Cardimg>
                                </div>
                                <div className="col-md-8 d-flex justify-content-between flex-md-column">
                                    <Cardheading heading="10 Secrets No One Has Told You About" />
                                    <CardDT style="" dt="20 Jan, 6:35 PM" />
                                </div>
                            </div>
                        </Detail>
                    </Card>
                    {/* =================================================================== */}

                </div>
                <div className="col-md-8">
                    <Card style="z1 img-card bg-mulberry text-white">
                        <Detail>
                            <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                            <div className="w-100 pull-left mb-20"></div>
                            <div className="card-flex">
                                <div className="flex d-flex">
                                    <Tags DivclassName="form-group tag filled-tags mr-10" id="enabled" LabelclassName="default rounded btn-white-smoke outline text-white" Title="Nature" />
                                    <Tags DivclassName="form-group tag filled-tags mr-10" id="enabled" LabelclassName="default rounded btn-white-smoke outline text-white" Title="Nature" />
                                </div>
                                <div className="flex">
                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />

                                </div>

                            </div>

                        </Detail>
                    </Card>
                </div>
                <div className="w-100 pull-left mb-30"></div>
                <div className="col-md-8">
                    <Card style="z1 img-card ">

                        <div className="row  no-gutters">
                            <div className="col-md-6">
                                <Cardimg img={C15} />
                            </div>
                            <div className="col-md-6">
                                <div className="tbl d-flex justify-content-between flex-md-column">
                                <Detail>
                                    <CardDT dt="20 Jan, 6:35 PM" />
                                    <div className="w-100 pull-left mb-15"></div>
                                    <Cardheading heading="What No One Will Tell You But You Need To Hear About London" />
                                    <div className="w-100 pull-left mb-15"></div>
                                    <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself... before she found herself falling down what seemed to be a very deep well." />


                                </Detail>
                                <CardFooter>
                                    <div>
                                        <Cardlink font="body2" label="Learn More" url="#" />
                                    </div>
                                    <div>
                                        <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                    </div>
                                </CardFooter>

                                </div>
                              
                            </div>
                        </div>

                    </Card>
                </div>
                 {/* =================================================================== */}
                 <div className="col-md-4">
                    <Card style="z1 text-center text-white color-card tbl">
                        <Cardoverlay background="#502aa0">
                            <Detail>
                                <Tags DivclassName="form-group tag default-tags mt-30" id="enabled" LabelclassName="default bg-pelorous text-white no-float" Title="Nature" />
                                <div className="w-100 pull-left mb-20"></div>
                                <Cardheading style="h2" heading="2,350" />
                                 <div className="w-100 pull-left mb-20"></div>
                                <Cardheading heading="Infographic: The Best Careers For Introverts And Extroverts" />
                            </Detail>
                        </Cardoverlay>
                    </Card>
                </div>
                <div className="w-100 pull-left mb-30"></div>
                <div className="col-md-8">
                    <Card style="z1 text-white img-card ">
                        <Cardimg img={C17} > </Cardimg>
                        <Cardoverlay background="rgba(0, 0, 0, 0.4)">
                            <Detail>
                                 
                                <Tags DivclassName="form-group tag default-tags " id="enabled" LabelclassName="default bg-gray text-white no-float" Title="Interview" />

                            </Detail>
                            <div className="w-100 pull-left">
                            <Detail>
                            <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                            <div className="w-100 pull-left mb-10"></div>
                                <Cardheading heading="Want To Be A Professional Writer? Stop Making These Common 15 Grammar Mistakes" />
                                <div className="w-100 pull-left mb-10"></div>
                               
                            </Detail>
                            <CardFooter>
                               
                                <div>
                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                </div>
                            </CardFooter>
                            </div>
                        </Cardoverlay>
                    </Card>
                   

                </div>
                <div className="col-md-4">
                    <Card style="z1 text-white img-card ">
                        <Cardimg img={C18} > </Cardimg>
                        <Cardoverlay background="rgba(0, 0, 0, 0.4)">
                            <Detail>
                                 
                                <Tags DivclassName="form-group tag default-tags " id="enabled" LabelclassName="default bg-red text-white no-float" Title="Secrets" />

                            </Detail>
                            <div className="w-100 pull-left">
                            <Detail>
                            <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                            <div className="w-100 pull-left mb-10"></div>
                                <Cardheading heading="10 Myths You Need To Stop Believing Now" />
                                <div className="w-100 pull-left mb-10"></div>
                               
                            </Detail>
                            <CardFooter>
                               
                                <div>
                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                </div>
                            </CardFooter>
                            </div>
                        </Cardoverlay>
                    </Card>
                   

                </div>
                <div className="w-100 pull-left mb-60"></div>
                <div className="col-md-8">
                    <Card style="z1 text-center text-white img-card ">
                        <Cardimg img={C19} > </Cardimg>
                        <Cardoverlay background="rgba(0, 0, 0, 0.4)">
                            <Detail>
                            <div className="pull-right">
                                <Button
                                            size=""
                                            style="btn-white text bg-transparant"
                                            Centericon={true}
                                            icon={<Icon icon={ic_share} size={18} />}
                                        />
                                </div>
                                <Tags DivclassName="form-group tag default-tags " id="enabled" LabelclassName="default bg-yellow text-black no-float" Title="Infographic" />
                               
                            </Detail>
                            
                            <Detail>
                            <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                            <div className="w-100 pull-left mb-10"></div>
                                <Cardheading style="h4" heading="Master These 7 Essential Elements For Winning Content" />
                                <div className="w-100 pull-left mb-15"></div>
                                    <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well." />

                               
                            </Detail>
                            <CardFooter>
                                <div>
                                   <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                </div>
                                <div>
                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                </div>
                                <div>
                                   <CardDT style="text-white" dt="Benjamin Parker" />
                                </div>
                            </CardFooter>
                           
                        </Cardoverlay>
                    </Card>
                   

                </div>
                <div className="col-md-4">
                    <Card style="z1 text-white img-card ">
                        <Cardimg img={C20} > </Cardimg>
                        <Cardoverlay background="rgba(0, 0, 0, 0.4)">
                            <Detail>
                                <div className="w-100 pull-left mt-40"></div>
                                 
                                <Tags DivclassName="form-group tag default-tags " id="enabled" LabelclassName="default bg-disy-bush text-white no-float" Title="Advertising" />

                            </Detail>
                           
                            <Detail>
                           
                                <Cardheading style="h4" heading="10 Best Social Media Marketing Tools" />
                               
                            </Detail>
                            <Detail>
                           
                                  <Button
                                            size=""
                                            style="btn btn-sm btn-primary"
                                            label="Try for free"
                                        />
                                        <div className="w-100 pull-left mb-40"></div>
                            </Detail>
                          
                            
                        </Cardoverlay>
                    </Card>
                   

                </div>
                <div className="w-100 pull-left mb-60"></div>
            </>
        );
    }
}

export default herocardprivew;