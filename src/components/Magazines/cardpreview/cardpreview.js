import React, { Component } from 'react';
import Card from '../Cardtags/card/card';
import Cardimg from '../Cardtags/cardimage/Cardimg';
import Detail from '../Cardtags/carddetail/carddetail';
import CardDT from '../Cardtags/Carddescription/cardDT';
import Cardheading from '../Cardtags/Carddescription/cardheading';
import Carddec from '../Cardtags/Carddescription/carddec';
import Avitar from '../../Notification/avitar/avitar-dropdown/avitar_dropdownhtml';
import Button from '../../button/buttonprop/buttonprop';
import Chekbox from '../../input/Checkbox/chekboxhtml/chekbox';
import Input from '../../input/inputs/inputtext/input_html';
import Herolabel from '../Cardtags/Cardheroheader/cardheroheader';
import Tags from '../../ChipsTags/Types/Tags';
import '../../ChipsTags/Chips.css';

import Action from '../Cardtags/Cardaction/Cardaction';
import CardFooter from '../Cardtags/Cardfooter/Cardfooter';
import Cardlink from '../Cardtags/Cardlink/cardlink';
import { Icon } from 'react-icons-kit'
import { thumbsUp } from 'react-icons-kit/feather/thumbsUp';
import { messageSquare } from 'react-icons-kit/feather/messageSquare';
import { moreHorizontal } from 'react-icons-kit/feather/moreHorizontal'
import { moreVertical } from 'react-icons-kit/feather/moreVertical'


import C1 from '../../../images/cardimg/c1.png';
import C2 from '../../../images/cardimg/c2.png';
import C3 from '../../../images/cardimg/c3.png';
import C4 from '../../../images/cardimg/c4.png';
import C5 from '../../../images/cardimg/c5.png';
import C6 from '../../../images/cardimg/c6.png';
import C11 from '../../../images/cardimg/c11.png';
import C12 from '../../../images/cardimg/c12.png';
import C13 from '../../../images/cardimg/c13.png';



import AvitarIcon from '../../../images/avitar.png';



class cardpreview extends Component {
    render() {
        return (
            <>
                <div className="col-md-4">
                    <Card style="z1">
                        <Cardimg img={C1} />
                        <Detail>
                            <CardDT dt="30 min ago" />
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading heading="Down the Rabbit-hole" />
                            <div className="w-100 pull-left mb-15"></div>
                            <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well." />
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
                    </Card>

                    {/* ==================================================================================== */}

                    <div className="w-100 pull-left mb-30"></div>

                    {/* ====================================================================================== */}

                    <Card style="z1">
                        <Cardimg img={C4}>
                        {/* <Tags DivclassName="form-group filled-tags mb-20" id="enabled" LabelclassName="default" Title="Enabled"/> */}
                        <Herolabel>
                            <Tags DivclassName="form-group tag default-tags no-float" id="enabled" LabelclassName="default bg-red text-white" Title="Special Offer" />

                            </Herolabel>
                        </Cardimg>
                        <Detail>
                            <Cardheading heading="Down the Rabbit-hole" />
                            <div className="w-100 pull-left mb-15"></div>
                            <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down" />
                            <div class="card-flex mt-10">
                                <div className="flex w-100">
                                    <Button
                                        size="btn-sm"
                                        style="btn-primary outline w-90"
                                        label="Try for free"
                                    />
                                </div>
                                <div className="flex w-100 text-right">
                                    <Button
                                        size="btn-sm"
                                        style="btn-primary w-90"
                                        label="Purchase $29"
                                    />
                                </div>

                            </div>
                        </Detail>
                        <CardFooter>
                            <div className="card-chekbox">
                                <Chekbox id="checked" label="I accept the terms of the" defaultChecked >


                                </Chekbox>
                                <Cardlink font="caption" label="License Agreement" url="#" />
                            </div>
                        </CardFooter>
                    </Card>

                    {/* ========================================================== */}

                </div>

                {/* ======================================================================================= */}

                <div className="col-md-4">
                    <Card style="z1">
                        <Detail>
                            <Cardheading heading="Down the Rabbit-hole" />
                            <div className="w-100 pull-left mb-10"></div>
                            <CardDT dt="30 min ago" />
                        </Detail>
                        <Cardimg img={C2} />
                        <Detail>
                            <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well." />
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
                    </Card>
                    {/* ========================================================================================= */}
                    <div className="w-100 pull-left mb-30"></div>
                    <Card style="z1">
                        <Detail>
                            <div className="card-flex ">
                                <div className="flex">
                                    <Avitar title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} hasRound><img className="" src={AvitarIcon} /></Avitar>
                                </div>
                                <div className="flex">
                                    <Button
                                        size="btn-sm"
                                        style="btn-dark text"
                                        Centericon={true}
                                        icon={<Icon icon={moreVertical} size={25} />}
                                    />
                                </div>
                            </div>
                        </Detail>
                        <Cardimg img={C5} />
                        <Detail>

                            <div className="card-flex">
                                <div className="flex">
                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                             <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                </div>
                            </div>
                        </Detail>
                        <CardFooter>
                            <Input type="text" placeholder="Add Comment" />
                        </CardFooter>

                    </Card>
                    {/* ======================================================================================= */}
                </div>

                {/* ========================================================================================= */}
                {/* ======================================================================================= */}

                <div className="col-md-4">
                    <Card style="z1">

                        <Cardimg img={C3} />
                        <Detail>
                            <Cardheading heading="The rabbit-hole went straight on like a tunnel for some way" />
                            <div className="card-flex mt-10">
                                <div className="flex">
                                    <Avitar title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} hasRound><img className="" src={AvitarIcon} /></Avitar>
                                </div>
                                <div className="flex">
                                    <Button
                                        size="btn-sm"
                                        style="btn-dark text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={25} />}
                                    />
                                </div>
                            </div>

                        </Detail>

                    </Card>
                    {/* ========================================================================================= */}
                    <div className="w-100 pull-left mb-30"></div>
                    <Card style="z1">
                        <Detail>
                            <div className="card-flex ">
                                <div className="flex">
                                     <Avitar title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} hasRound><img className="" src={AvitarIcon} /></Avitar>
                                </div>
                                <div className="flex">
                                     <CardDT dt="30 min ago" />
                                </div>
                            </div>
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading heading="The rabbit-hole went straight on like a tunnel for some way" />
                            <div className="w-100 pull-left mb-15"></div>
                            <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think... about stopping herself before she found herself falling down what seemed to be a very deep well." />
                            <div className="w-100 pull-left mb-15"></div>
                            <Cardimg img={C6} />
                        </Detail>
                        <CardFooter>
                              <div className="card-flex">
                                    <div className="flex d-flex">
                                         <Tags DivclassName="form-group tag filled-tags mr-10" id="enabled" LabelclassName="default rounded btn-gray outline text-white" Title="Design" />
                                         <Tags DivclassName="form-group tag filled-tags mr-10" id="enabled" LabelclassName="default rounded btn-gray outline text-white" Title="Technology" />
                                     </div>
                               </div>
                        </CardFooter>
                    </Card>
                    {/* ======================================================================================= */}
                </div>
                <div className="w-100 pull-left mb-50"></div>
                <div className="col-md-4">
                    <Card style="z1">
                        <Cardimg img={C11} >
                        </Cardimg>
                        <Herolabel>
                            <Tags DivclassName="form-group tag default-tags no-float" id="enabled" LabelclassName="default bg-mulberry text-white" Title="Lifestyle" />

                            </Herolabel>
                        <Detail>
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading heading="10 Vibrant Lip Colors Perfect for Summer 2019" />
                            <div className="w-100 pull-left mb-15"></div>
                        </Detail>
                        <CardFooter>
                            <div>
                                 <CardDT dt="30 min ago" />
                            </div>
                            <div>
                                <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                              <Action count="200" icon={<Icon icon={thumbsUp} />} />
                            </div>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style="z1">
                        <Cardimg img={C12} >
                        </Cardimg>
                        <Herolabel>
                            <Tags DivclassName="form-group tag default-tags no-float" id="enabled" LabelclassName="default bg-disy-bush text-white rounded" Title="Technology" />
                            </Herolabel>
                        <Detail>
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                            <div className="w-100 pull-left mb-15"></div>
                            <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think... about stopping herself before she found herself falling down what seemed to be a very deep well." />
                        </Detail>
                        <CardFooter>
                            <div>
                                 <CardDT dt="30 min ago" />
                            </div>
                            <div>
                                <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                              <Action count="200" icon={<Icon icon={thumbsUp} />} />
                            </div>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style="z1"> 
                    <Detail>
                        <Cardimg img={C13} ></Cardimg>
                            <div className="w-100 pull-left mb-10"></div>
                            <Cardheading heading="5 Things No One Will Tell You About Your First Job" />
                            <div className="w-100 pull-left mb-15"></div>
                            <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think... about stopping herself before she found herself falling down what seemed to be a very deep well." />
                        </Detail>
                        <CardFooter>

                            <div>
                                 <CardDT dt="30 min ago" />
                            </div>
                            <div>
                                <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                              <Action count="200" icon={<Icon icon={thumbsUp} />} />
                            </div>
                        </CardFooter>
                    </Card>
                </div>

            </>
        );
    }
}

export default cardpreview;