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
import CardFooter from '../Cardtags/Cardfooter/Cardfooter';

import { Icon } from 'react-icons-kit'
import { thumbsUp } from 'react-icons-kit/feather/thumbsUp';
import { messageSquare } from 'react-icons-kit/feather/messageSquare';

import C31 from '../../../images/cardimg/c31.png';



class cardfourgroup extends Component {
    render() {
        return (
            <>
              <div className="w-100 pull-left mb-40"></div>
                <div className="col-md-12">
                    <Card style="z1">
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <Card style="z1 text-center  color-card tbl">
                                     <Cardoverlay >
                                        <Detail>
                                            <Tags DivclassName="form-group tag default-tags" id="enabled" LabelclassName="default bg-disy-bush text-white rounded no-float" Title="Technology" />
                                        </Detail>
                                        <Detail>
                                            <Cardheading style="subtitle1" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                        </Detail>
                                        <Detail>
                                            <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly ... down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well." />
                                        </Detail>
                                        <Detail>
                                            <CardFooter style="no-padding-left no-padding-right no-padding-bottom">
                                                <div>
                                                    <CardDT dt="20 Jan, 6:35 PM" />
                                                </div>
                                                <div>
                                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                                </div>
                                            </CardFooter>
                                        </Detail>
                                    </Cardoverlay>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card style="z1 text-center text-white img-card tbl herocard">
                                    <Cardimg img={C31} > </Cardimg>
                                    <Cardoverlay background="rgba(0, 0, 0, 0.4)">
                                    <Detail>
                                            <Tags DivclassName="form-group tag default-tags " id="enabled" LabelclassName="default bg-pelorous text-white rounded no-float" Title="Traveling" />
                                        </Detail>
                                        <Detail>
                                            <Cardheading style="subtitle1" heading="Everything You Need To Know About Finding Your Perfect Beach" />
                                        </Detail>
                                        <Detail>
                                            <Carddec Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down" />
                                        </Detail>
                                        <Detail>
                                            <CardFooter style="no-padding-left no-padding-right no-padding-bottom">
                                                <div>
                                                    <CardDT dt="20 Jan, 6:35 PM" />
                                                </div>
                                                <div>
                                                    <Action font="text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                    <Action font="text-white" count="200" icon={<Icon icon={thumbsUp} />} />
                                                </div>
                                            </CardFooter>
                                        </Detail>
                                    </Cardoverlay>
                                </Card>
                            </div>
                            <div className="col-md-3">
                            <Card style="z1 text-center  color-card tbl">
                                     <Cardoverlay >
                                        <Detail>
                                            <Tags DivclassName="form-group tag default-tags " id="enabled" LabelclassName="default bg-mulberry text-white rounded no-float" Title="Lifestyle" />
                                        </Detail>
                                        <Detail>
                                            <Cardheading style="subtitle1" heading="10 Vibrant Lip Colors Perfect for Summer 2019" />
                                        </Detail>
                                        <Detail>
                                            <Carddec Description="Alice had never been in a court of justice before, but she had read about them in ... books, and she was quite pleased to find that she knew the name of nearly everything there" />
                                        </Detail>
                                        <Detail>
                                            <CardFooter style="no-padding-left no-padding-right no-padding-bottom">
                                                <div>
                                                    <CardDT dt="20 Jan, 6:35 PM" />
                                                </div>
                                                <div>
                                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                                </div>
                                            </CardFooter>
                                        </Detail>
                                    </Cardoverlay>
                                </Card>

                            </div>
                            <div className="col-md-3">
                            <Card style="z1 text-center  color-card tbl">
                                     <Cardoverlay >
                                        <Detail>
                                            <Tags DivclassName="form-group tag default-tags " id="enabled" LabelclassName="default bg-red text-white rounded no-float" Title="Secrets" />
                                        </Detail>
                                        <Detail>
                                            <Cardheading style="subtitle1" heading="Want To Be A Professional Writer? Stop Making These Common ... 15 Grammar Mistakes" />
                                        </Detail>
                                        <Detail>
                                            <Carddec Description="This, of course, Alice could not stand, and she went round the court and got ... behind him, and very soon found an opportunity of taking it away. " />
                                        </Detail>
                                        <Detail>
                                            <CardFooter style="no-padding-left no-padding-right no-padding-bottom">
                                                <div>
                                                    <CardDT dt="20 Jan, 6:35 PM" />
                                                </div>
                                                <div>
                                                    <Action count="200" icon={<Icon icon={messageSquare} />} />&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Action count="200" icon={<Icon icon={thumbsUp} />} />
                                                </div>
                                            </CardFooter>
                                        </Detail>
                                    </Cardoverlay>
                                </Card>

                            </div>
                        </div>

                    </Card>
                </div>
                <div className="w-100 pull-left mb-30"></div>
                <div className="col-md-12">
                    <Card style="z1">
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <Card style="z1 text-center bg-dark color-card tbl">
                                     <Cardoverlay >
                                        <Detail>
                                            <Tags DivclassName="form-group tag default-tags" id="enabled" LabelclassName="default bg-disy-bush text-white rounded no-float" Title="Technology" />
                                        </Detail>
                                        <Detail>
                                            <Cardheading style="subtitle1 text-white" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                        </Detail>
                                        <Detail>
                                            <Carddec style="text-white-smoke" Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly ... down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well." />
                                        </Detail>
                                        <Detail>
                                            <CardFooter style="no-padding-left no-padding-right no-padding-bottom">
                                                <div>
                                                    <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                                </div>
                                                <div>
                                                    <Action font="text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                    <Action font="text-white" count="200" icon={<Icon icon={thumbsUp} />} />
                                                </div>
                                            </CardFooter>
                                        </Detail>
                                    </Cardoverlay>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card style="z1 text-center text-white  tbl herocard">
                                    <Cardimg img={C31} > </Cardimg>
                                    <Cardoverlay background="rgba(0, 0, 0, 0.4)">
                                    <Detail>
                                            <Tags DivclassName="form-group tag default-tags " id="enabled" LabelclassName="default bg-pelorous text-white rounded no-float" Title="Traveling" />
                                        </Detail>
                                        <Detail>
                                            <Cardheading style="subtitle1 text-white" heading="Everything You Need To Know About Finding Your Perfect Beach" />
                                        </Detail>
                                        <Detail>
                                            <Carddec style="text-white" Description="The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down" />
                                        </Detail>
                                        <Detail>
                                            <CardFooter style="no-padding-left no-padding-right no-padding-bottom">
                                                <div>
                                                    <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                                </div>
                                                <div>
                                                    <Action  font="text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                    <Action font="text-white" count="200" icon={<Icon icon={thumbsUp} />} />
                                                </div>
                                            </CardFooter>
                                        </Detail>
                                    </Cardoverlay>
                                </Card>
                            </div>
                            <div className="col-md-3">
                            <Card style="z1 text-center bg-dark color-card tbl">
                                     <Cardoverlay >
                                        <Detail>
                                            <Tags DivclassName="form-group tag default-tags " id="enabled" LabelclassName="default bg-mulberry text-white rounded no-float" Title="Lifestyle" />
                                        </Detail>
                                        <Detail>
                                            <Cardheading style="subtitle1 text-white" heading="10 Vibrant Lip Colors Perfect for Summer 2019" />
                                        </Detail>
                                        <Detail>
                                            <Carddec style="text-white" Description="Alice had never been in a court of justice before, but she had read about them in ... books, and she was quite pleased to find that she knew the name of nearly everything there" />
                                        </Detail>
                                        <Detail>
                                            <CardFooter style="no-padding-left no-padding-right no-padding-bottom">
                                                <div>
                                                    <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                                </div>
                                                <div>
                                                    <Action font="text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                    <Action font="text-white mr-10" count="200" icon={<Icon icon={thumbsUp} />} />
                                                </div>
                                            </CardFooter>
                                        </Detail>
                                    </Cardoverlay>
                                </Card>

                            </div>
                            <div className="col-md-3">
                            <Card style="z1 text-center bg-dark  color-card tbl">
                                     <Cardoverlay >
                                        <Detail>
                                            <Tags DivclassName="form-group tag default-tags " id="enabled" LabelclassName="default bg-red text-white rounded no-float" Title="Secrets" />
                                        </Detail>
                                        <Detail>
                                            <Cardheading style="subtitle1 text-white" heading="Want To Be A Professional Writer? Stop Making These Common ... 15 Grammar Mistakes" />
                                        </Detail>
                                        <Detail>
                                            <Carddec style="text-white" Description="This, of course, Alice could not stand, and she went round the court and got ... behind him, and very soon found an opportunity of taking it away. " />
                                        </Detail>
                                        <Detail>
                                            <CardFooter style="no-padding-left no-padding-right no-padding-bottom">
                                                <div>
                                                    <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                                </div>
                                                <div>
                                                    <Action font="text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                    <Action font="text-white mr-10" count="200" icon={<Icon icon={thumbsUp} />} />
                                                </div>
                                            </CardFooter>
                                        </Detail>
                                    </Cardoverlay>
                                </Card>

                            </div>
                        </div>

                    </Card>
                </div>
                <div className="w-100 pull-left mb-40"></div>
            </>
        );
    }
}

export default cardfourgroup;