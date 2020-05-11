import React, { Component } from 'react';
import Card from '../Cardtags/card/card';
import Cardscroll from '../Cardtags/cardscroll/cardscroll';
import Detail from '../Cardtags/carddetail/carddetail';
import Cardheading from '../Cardtags/Carddescription/cardheading';
import Button from '../../button/buttonprop/buttonprop';
import CardDT from '../Cardtags/Carddescription/cardDT';
import Cardimg from '../Cardtags/cardimage/Cardimg';
import Action from '../Cardtags/Cardaction/Cardaction';
import Cardoverlay from '../Cardtags/Cardoverlay/Cardoverlay';
import Avitar from '../../Notification/avitar/avitar-dropdown/avitar_dropdownhtml';
import Notification from '../../Notification/notificationactive/notificationactive';

import Label from '../Cardtags/Carddescription/Cardlabel';
import Tags from '../../ChipsTags/Types/Tags';


import C21 from '../../../images/cardimg/c21.png';

import { Icon } from 'react-icons-kit';
import { thumbsUp } from 'react-icons-kit/feather/thumbsUp';
import { messageSquare } from 'react-icons-kit/feather/messageSquare';
import { moreHorizontal } from 'react-icons-kit/feather/moreHorizontal';
import { zap } from 'react-icons-kit/feather/zap'
import AvitarIcon from '../../../images/avitar.png';
import C14 from '../../../images/cardimg/c14.png';
import C32 from '../../../images/cardimg/c32.png';
import C33 from '../../../images/cardimg/c33.png';
import C34 from '../../../images/cardimg/c34.png';



class cardloadmore extends Component {
    render() {
        return (
            <>
                <div className="w-100 pull-left mb-30"></div>
                <div className="col-md-4">
                    <Card style="z1">
                        <Detail style="b1-solid b-white-smoke">
                            <div className="card-flex">
                                <div className="flex">
                                    <Cardheading heading="Latest News" />
                                </div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-gray text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={25} />}
                                    />
                                </div>
                            </div>
                        </Detail>
                        <Cardscroll scrollheight="531px">
                            <Card style=" color-card tbl">
                                <Cardoverlay background="#fff">

                                    <Detail >

                                        <CardDT dt="20 Jan, 6:35 PM" />
                                        <div className="w-100 mb-10 pull-left"></div>

                                        <Cardheading heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                        <div className="w-100 mb-30 pull-left"></div>

                                        <div className="card-flex">

                                            <div className="flex">
                                                <Action font="mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                <Action count="200" icon={<Icon icon={thumbsUp} />} />

                                            </div>

                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                            <Card style=" img-card tbl herocard">
                                <Cardimg img={C21} > </Cardimg>
                                <Cardoverlay background="rgba(0, 0, 0, 0.4)">

                                    <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                        <div className="w-100 mb-10 pull-left"></div>

                                        <Cardheading style="text-white h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                        <div className="w-100 mb-30 pull-left"></div>

                                        <div className="card-flex">

                                            <div className="flex">
                                                <Action font="text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                <Action font="text-white mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                            </div>

                                        </div>
                                    </Detail>



                                </Cardoverlay>

                            </Card>
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay background="#fff">

                                    <Detail>

                                        <CardDT dt="20 Jan, 6:35 PM" />
                                        <div className="w-100 mb-10 pull-left"></div>

                                        <Cardheading heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                        <div className="w-100 mb-30 pull-left"></div>

                                        <div className="card-flex">

                                            <div className="flex">
                                                <Action font="mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                <Action count="200" icon={<Icon icon={thumbsUp} />} />

                                            </div>

                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}

                        </Cardscroll>
                        <Detail style="b1-solid b-white-smoke text-center">
                            <div className="dflex justify-items-center">
                                <Button
                                    size=""
                                    style="btn-primary text h6"
                                    label="Load more"
                                />
                            </div>
                        </Detail>
                    </Card>

                </div>
                <div className="col-md-4">
                    <Card style="z1">
                        <Detail style="b1-solid b-white-smoke">
                            <div className="card-flex">
                                <div className="flex dflex">
                                    <Avitar headingstyle="h6" title="Popular" avitar={AvitarIcon} hasRound haslg><span class=" bg-disy-bush text-white"><Icon icon={zap} size={25} /></span></Avitar>
                                </div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-gray text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={25} />}
                                    />
                                </div>
                            </div>

                        </Detail>
                        <Cardscroll scrollheight="500px">
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay background="#fff">
                                    <Detail>
                                        <Cardheading style="subtitle1" heading="5 Things No One Will Tell You About Your First Job" />
                                        <div className="w-100 mb-20 pull-left"></div>
                                        <div className="card-flex">
                                            <div className="flex">
                                                <CardDT style="mr-10" dt="22 Nov, 5:45 PM" />
                                                <Label style="mr-10 body2 text-gray" label="Benjamin Parker " />
                                            </div>
                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay background="#fff">
                                    <Detail>
                                        <Cardheading style="subtitle1" heading="10 Vibrant Lip Colors Perfect for Summer 2019" />
                                        <div className="w-100 mb-20 pull-left"></div>
                                        <div className="card-flex">
                                            <div className="flex">
                                                <CardDT style="mr-10" dt="22 Nov, 5:45 PM" />
                                                <Label style="mr-10 body2 text-gray" label="Thomas Anderson" />
                                            </div>
                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay background="#fff">
                                    <Detail>
                                        <Cardheading style="subtitle1" heading="What No One Will Tell You But You Need To Hear About London" />
                                        <div className="w-100 mb-20 pull-left"></div>
                                        <div className="card-flex">
                                            <div className="flex">
                                                <CardDT style="mr-10" dt="22 Nov, 5:45 PM" />
                                                <Label style="mr-10 body2 text-gray" label="Sophie M. " />
                                            </div>
                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay background="#fff">
                                    <Detail>
                                        <Cardheading style="subtitle1" heading="Master These 7 Essential Elements For Winning Content" />
                                        <div className="w-100 mb-20 pull-left"></div>
                                        <div className="card-flex">
                                            <div className="flex">
                                                <CardDT style="mr-10" dt="22 Nov, 5:45 PM" />
                                                <Label style="mr-10 body2 text-gray" label="Chloe Palmer " />
                                            </div>
                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay background="#fff">
                                    <Detail>
                                        <Cardheading style="subtitle1" heading="5 Things No One Will Tell You About Your First Job" />
                                        <div className="w-100 mb-20 pull-left"></div>
                                        <div className="card-flex">
                                            <div className="flex">
                                                <CardDT style="mr-10" dt="22 Nov, 5:45 PM" />
                                                <Label style="mr-10 body2 text-gray" label="Benjamin Parker " />
                                            </div>
                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                        </Cardscroll>
                        <Detail style="b1-solid b-white-smoke text-center">
                            <div className="dflex justify-items-center">
                                <Button
                                    size=""
                                    style="btn-primary text h6"
                                    label="Load more"
                                />
                            </div>
                        </Detail>
                    </Card>

                </div>
                <div className="col-md-4">
                    <Card style="z1">
                        <Detail style="b1-solid b-white-smoke">
                            <div className="card-flex">
                                <div className="flex">
                                    <Cardheading heading="Latest Issues" />
                                </div>
                                <div className="flex">
                                    <Tags DivclassName="form-group tag number " LabelclassName="bg-yellow text-black rounded" Title="+10" />

                                </div>
                            </div>

                        </Detail>
                        <Cardscroll>
                            <Card style=" img-card ">
                                <Detail>
                                    <div className="row  ">
                                        <div className="col-md-4">
                                            <Cardimg img={C14} ><Notification style="bg-la-rioja" height="10px" width="10px" right="8px" bottom="-2px"/></Cardimg>
                                        </div>
                                        <div className="col-md-8 d-flex justify-content-between flex-md-column">
                                            <Cardheading style="subtitle1" heading="10 Secrets No One Has Told You About" />
                                            <CardDT style="" dt="20 Jan, 6:35 PM" />
                                        </div>
                                    </div>
                                </Detail>
                            </Card>
                            
                            <Card style="img-card ">
                                <Detail>
                                    <div className="row  ">
                                        <div className="col-md-4">
                                            <Cardimg img={C32} ><Notification style="bg-la-rioja" height="10px" width="10px" right="8px" bottom="-2px"/></Cardimg>
                                        </div>
                                        <div className="col-md-8 d-flex justify-content-between flex-md-column">
                                            <Cardheading style="subtitle1" heading="10 Secrets No One Has Told You About" />
                                            <CardDT style="" dt="20 Jan, 6:35 PM" />
                                        </div>
                                    </div>
                                </Detail>
                            </Card>
                            <Card style=" img-card ">
                                <Detail>
                                    <div className="row  ">
                                        <div className="col-md-4">
                                            <Cardimg img={C33} ><Notification style="bg-la-rioja" height="10px" width="10px" right="8px" bottom="-2px"/></Cardimg>
                                        </div>
                                        <div className="col-md-8 d-flex justify-content-between flex-md-column">
                                            <Cardheading style="subtitle1" heading="10 Secrets No One Has Told You About" />
                                            <CardDT style="" dt="20 Jan, 6:35 PM" />
                                        </div>
                                    </div>
                                </Detail>
                            </Card>
                            <Card style=" img-card ">
                                <Detail>
                                    <div className="row  ">
                                        <div className="col-md-4"> 
                                            <Cardimg img={C34} > <Notification style="bg-la-rioja" height="10px" width="10px" right="8px" bottom="-2px"/></Cardimg>
                                        </div>
                                        <div className="col-md-8 d-flex justify-content-between flex-md-column">
                                            <Cardheading style="subtitle1" heading="10 Secrets No One Has Told You About" />
                                            <CardDT style="" dt="20 Jan, 6:35 PM" />
                                        </div>
                                    </div>
                                </Detail>
                            </Card>
                        </Cardscroll>
                        <Detail style="b1-solid b-white-smoke text-center">
                            <div className="dflex justify-items-center">
                                <Button
                                    size=""
                                    style="btn-primary text h6"
                                    label="Load more"
                                />
                            </div>
                        </Detail>
                    </Card>

                </div>







                <div className="w-100 pull-left mb-30"></div>







                <div className="col-md-4">
                    <Card style="z1 bg-dark">
                        <Detail style="b1-solid b-white-smoke">
                            <div className="card-flex">
                                <div className="flex">
                                    <Cardheading style="text-white" heading="Latest News" />
                                </div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-primary text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={25} />}
                                    />
                                </div>
                            </div>
                        </Detail>
                        <Cardscroll scrollheight="531px">
                            <Card style=" color-card tbl">
                                <Cardoverlay >

                                    <Detail >

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                        <div className="w-100 mb-10 pull-left"></div>

                                        <Cardheading style="text-white" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                        <div className="w-100 mb-30 pull-left"></div>

                                        <div className="card-flex">

                                            <div className="flex">
                                                <Action font=" text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                <Action font="text-white" count="200" icon={<Icon icon={thumbsUp} />} />

                                            </div>

                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                            <Card style=" img-card tbl herocard">
                                <Cardimg img={C21} > </Cardimg>
                                <Cardoverlay background="rgba(0, 0, 0, 0.4)">

                                    <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                        <div className="w-100 mb-10 pull-left"></div>

                                        <Cardheading style="text-white h6" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                        <div className="w-100 mb-30 pull-left"></div>

                                        <div className="card-flex">

                                            <div className="flex">
                                                <Action font="text-white mr-10" count="200" icon={<Icon icon={messageSquare} />} />
                                                <Action font="text-white mr-10" count="200" icon={<Icon icon={thumbsUp} />} />

                                            </div>

                                        </div>
                                    </Detail>



                                </Cardoverlay>

                            </Card>
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay>

                                    <Detail>

                                        <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                        <div className="w-100 mb-10 pull-left"></div>

                                        <Cardheading style="text-white" heading="26 Insanely Useful iPhone Tips That You May Not Know About" />
                                        <div className="w-100 mb-30 pull-left"></div>

                                        <div className="card-flex">

                                            <div className="flex">
                                                <Action font="mr-10 text-white" count="200" icon={<Icon icon={messageSquare} />} />
                                                <Action font="text-white" count="200" icon={<Icon icon={thumbsUp} />} />

                                            </div>

                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}

                        </Cardscroll>
                        <Detail style="b1-solid b-white-smoke text-center">
                            <div className="dflex justify-items-center">
                                <Button
                                    size=""
                                    style="btn-primary text h6"
                                    label="Load more"
                                />
                            </div>
                        </Detail>
                    </Card>

                </div>
                <div className="col-md-4">
                    <Card style="z1 bg-dark">
                        <Detail style="b1-solid b-white-smoke">
                            <div className="card-flex">
                                <div className="flex dflex">
                                    <Avitar  headingstyle="h6 text-white" title="Popular" avitar={AvitarIcon} hasRound haslg><span class=" bg-disy-bush text-white"><Icon icon={zap} size={25} /></span></Avitar>
                                </div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-primary text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={25} />}
                                    />
                                </div>
                            </div>

                        </Detail>
                        <Cardscroll scrollheight="500px">
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay >
                                    <Detail>
                                        <Cardheading style="subtitle1 text-white" heading="5 Things No One Will Tell You About Your First Job" />
                                        <div className="w-100 mb-20 pull-left"></div>
                                        <div className="card-flex">
                                            <div className="flex">
                                                <CardDT style="mr-10 text-white" dt="22 Nov, 5:45 PM" />
                                                <Label style="mr-10 body2 text-white" label="Benjamin Parker " />
                                            </div>
                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay>
                                    <Detail>
                                        <Cardheading style="subtitle1 text-white" heading="10 Vibrant Lip Colors Perfect for Summer 2019" />
                                        <div className="w-100 mb-20 pull-left"></div>
                                        <div className="card-flex">
                                            <div className="flex">
                                                <CardDT style="mr-10 text-white" dt="22 Nov, 5:45 PM" />
                                                <Label style="mr-10 body2 text-white" label="Thomas Anderson" />
                                            </div>
                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay>
                                    <Detail>
                                        <Cardheading style="subtitle1 text-white" heading="What No One Will Tell You But You Need To Hear About London" />
                                        <div className="w-100 mb-20 pull-left"></div>
                                        <div className="card-flex">
                                            <div className="flex">
                                                <CardDT style="mr-10 text-white" dt="22 Nov, 5:45 PM" />
                                                <Label style="mr-10 body2 text-white" label="Sophie M. " />
                                            </div>
                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay >
                                    <Detail>
                                        <Cardheading style="subtitle1 text-white" heading="Master These 7 Essential Elements For Winning Content" />
                                        <div className="w-100 mb-20 pull-left"></div>
                                        <div className="card-flex">
                                            <div className="flex">
                                                <CardDT style="mr-10 text-white" dt="22 Nov, 5:45 PM" />
                                                <Label style="mr-10 body2 text-white" label="Chloe Palmer " />
                                            </div>
                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                            {/* =================================== */}

                            <Card style=" color-card tbl">
                                <Cardoverlay background="#fff">
                                    <Detail>
                                        <Cardheading style="subtitle1 text-white" heading="5 Things No One Will Tell You About Your First Job" />
                                        <div className="w-100 mb-20 pull-left"></div>
                                        <div className="card-flex">
                                            <div className="flex">
                                                <CardDT style="mr-10 text-white" dt="22 Nov, 5:45 PM" />
                                                <Label style="mr-10 body2 text-white" label="Benjamin Parker " />
                                            </div>
                                        </div>
                                    </Detail>
                                </Cardoverlay>
                            </Card>

                            {/* =================================== */}
                        </Cardscroll>
                        <Detail style="b1-solid b-white-smoke text-center">
                            <div className="dflex justify-items-center">
                                <Button
                                    size=""
                                    style="btn-primary text h6"
                                    label="Load more"
                                />
                            </div>
                        </Detail>
                    </Card>

                </div>
                <div className="col-md-4">
                    <Card style="z1 bg-dark">
                        <Detail style="b1-solid b-white-smoke">
                            <div className="card-flex">
                                <div className="flex">
                                    <Cardheading style="text-white" heading="Latest Issues" />
                                </div>
                                <div className="flex">
                                    <Tags DivclassName="form-group tag number " LabelclassName="bg-yellow text-black rounded" Title="+10" />

                                </div>
                            </div>

                        </Detail>
                        <Cardscroll>
                            <Card style=" img-card ">
                                <Detail>
                                    <div className="row  ">
                                        <div className="col-md-4">
                                            <Cardimg img={C14} ><Notification style="bg-la-rioja" height="10px" width="10px" right="8px" bottom="-2px"/></Cardimg>
                                        </div>
                                        <div className="col-md-8 d-flex justify-content-between flex-md-column">
                                            <Cardheading style="subtitle1 text-white" heading="10 Secrets No One Has Told You About" />
                                            <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                        </div>
                                    </div>
                                </Detail>
                            </Card>
                            
                            <Card style="img-card ">
                                <Detail>
                                    <div className="row  ">
                                        <div className="col-md-4">
                                            <Cardimg img={C32} ><Notification style="bg-la-rioja" height="10px" width="10px" right="8px" bottom="-2px"/></Cardimg>
                                        </div>
                                        <div className="col-md-8 d-flex justify-content-between flex-md-column">
                                            <Cardheading style="subtitle1 text-white" heading="10 Secrets No One Has Told You About" />
                                            <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                        </div>
                                    </div>
                                </Detail>
                            </Card>
                            <Card style=" img-card ">
                                <Detail>
                                    <div className="row  ">
                                        <div className="col-md-4">
                                            <Cardimg img={C33} ><Notification style="bg-la-rioja" height="10px" width="10px" right="8px" bottom="-2px"/></Cardimg>
                                        </div>
                                        <div className="col-md-8 d-flex justify-content-between flex-md-column">
                                            <Cardheading style="subtitle1 text-white" heading="10 Secrets No One Has Told You About" />
                                            <CardDT style="text-white" dt="20 Jan, 6:35 PM" />
                                        </div>
                                    </div>
                                </Detail>
                            </Card>
                            <Card style=" img-card ">
                                <Detail>
                                    <div className="row  ">
                                        <div className="col-md-4"> 
                                            <Cardimg img={C34} > <Notification style="bg-la-rioja" height="10px" width="10px" right="8px" bottom="-2px"/></Cardimg>
                                        </div>
                                        <div className="col-md-8 d-flex justify-content-between flex-md-column">
                                            <Cardheading style="subtitle1 text-white" heading="10 Secrets No One Has Told You About" />
                                            <CardDT style=" text-white" dt="20 Jan, 6:35 PM" />
                                        </div>
                                    </div>
                                </Detail>
                            </Card>
                        </Cardscroll>
                        <Detail style="b1-solid b-white-smoke text-center">
                            <div className="dflex justify-items-center">
                                <Button
                                    size=""
                                    style="btn-primary text h6"
                                    label="Load more"
                                />
                            </div>
                        </Detail>
                    </Card>

                </div>
            </>
        );
    }
}

export default cardloadmore;