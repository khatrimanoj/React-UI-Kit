import React, { Component } from 'react';
import Card from '../../Magazines/Cardtags/card/card';
import Cardimg from '../../Magazines/Cardtags/cardimage/Cardimg';
import Cardoverlay from '../../Magazines/Cardtags/Cardoverlay/Cardoverlay';
import Detail from '../../Magazines/Cardtags/carddetail/carddetail';
import Carddec from '../../Magazines/Cardtags/Carddescription/carddec'
import Button from '../../button/buttonprop/buttonprop';
import Cardheading from '../../Magazines/Cardtags/Carddescription/cardheading';
import Label from '../../Magazines/Cardtags/Carddescription/Cardlabel'
import { Icon } from 'react-icons-kit'
import {moreHorizontal} from 'react-icons-kit/feather/moreHorizontal'
import Calculator from '../../../images/carousel/Calculator.svg';
import Folder from '../../../images/carousel/Folder.svg';
import Weather from '../../../images/carousel/Weather.svg';
import Healthcare from '../../../images/carousel/Healthcare.svg';
import {heart} from 'react-icons-kit/feather/heart'
import {resize_1} from 'react-icons-kit/ikons/resize_1'
import Carousel from '../CarouselWrapper';
import CarouselDots from '../CarouselDots';
import '../Carousel.css'
class MultiItemCarousel extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: 0,
            value1: 0,
            slides: [
                (<Card style="text-center text-black">
                        <Detail>
                            <Detail>
                            <div className="flex flex-column">
                                <Cardimg img={Calculator}></Cardimg>
                            </div>
                            </Detail>
                            <Detail>
                                <Label style="body1 text-white w-100 pull-left" label="Call Online" />

                            </Detail>
                            <Detail>
                                <div className="d-flex justify-content-center">
                                    {/* <Button 
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
                                            />  */}
                                    
                                </div>
                            </Detail>
                            
                        
                        </Detail>

                    </Card>),
                (<Card style="text-center text-black">
                        <Detail>
                            <Detail>
                            <div className="flex flex-column">
                                <Cardimg img={Folder}></Cardimg>
                            </div>
                            </Detail>
                            <Detail>
                                <Label style="body1 text-white w-100 pull-left" label="Call Online" />

                            </Detail>
                            <Detail>
                                <div className="d-flex justify-content-center">
                                    {/* <Button 
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
                                            />  */}
                                    
                                </div>
                            </Detail>
                            
                        
                        </Detail>

                    </Card>),
                (<Card style="text-center text-black">
                        <Detail>
                            <Detail>
                            <div className="flex flex-column">
                                <Cardimg img={Weather}></Cardimg>
                            </div>
                            </Detail>
                            <Detail>
                                <Label style="body1 text-white w-100 pull-left" label="Call Online" />

                            </Detail>
                            <Detail>
                                <div className="d-flex justify-content-center">
                                    {/* <Button 
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
                                            />  */}
                                    
                                </div>
                            </Detail>
                            
                        
                        </Detail>

                    </Card>),
                (<Card style="text-center text-black">
                    <Detail>
                        <Detail>
                        <div className="flex flex-column">
                            <Cardimg img={Healthcare}></Cardimg>
                        </div>
                        </Detail>
                        <Detail>
                            <Label style="body1 text-white w-100 pull-left" label="Call Online" />

                        </Detail>
                        <Detail>
                            <div className="d-flex justify-content-center">
                                {/* <Button 
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
                                        />  */}
                                
                            </div>
                        </Detail>
                        
                    
                    </Detail>

                </Card>),
            ],
            slides2: [
                (<Card style="text-center text-black">
                        <Detail>
                            <Detail>
                            <div className="flex flex-column">
                                <Cardimg img={Calculator}></Cardimg>
                            </div>
                            </Detail>
                            <Detail>
                                <Label style="body1 text-white w-100 pull-left" label="Call Online" />
                            </Detail>
                            <Detail>
                                <div className="d-flex justify-content-center">
                                </div>
                            </Detail>
                        </Detail>
                    </Card>),
                (<Card style="text-center text-black">
                        <Detail>
                            <Detail>
                            <div className="flex flex-column">
                                <Cardimg img={Folder}></Cardimg>
                            </div>
                            </Detail>
                            <Detail>
                                <Label style="body1 text-white w-100 pull-left" label="Call Online" />
                            </Detail>
                            <Detail>
                                <div className="d-flex justify-content-center">
                                </div>
                            </Detail>
                        </Detail>
                    </Card>),
                (<Card style="text-center text-black">
                        <Detail>
                            <Detail>
                            <div className="flex flex-column">
                                <Cardimg img={Weather}></Cardimg>
                            </div>
                            </Detail>
                            <Detail>
                                <Label style="body1 text-white w-100 pull-left" label="Call Online" />
                            </Detail>
                            <Detail>
                                <div className="d-flex justify-content-center">
                                </div>
                            </Detail>
                        </Detail>
                    </Card>),
                (<Card style="text-center text-black">
                    <Detail>
                        <Detail>
                        <div className="flex flex-column">
                            <Cardimg img={Healthcare}></Cardimg>
                        </div>
                        </Detail>
                        <Detail>
                            <Label style="body1 text-white w-100 pull-left" label="Call Online" />
                        </Detail>
                        <Detail>
                            <div className="d-flex justify-content-center">
                            </div>
                        </Detail>
                    </Detail>
                </Card>),
            ],
        }
        this.onchange = this.onchange.bind(this);
        this.onchange2 = this.onchange2.bind(this);
    }
    onchange(value) {
        this.setState({ value });
    }
    onchange2(value1) {
        this.setState({ value1 });
    }
    render() {
        return (
            <div className="row">  
                <div className="col-md-8">
                    <Card style="z1">
                        <Card>
                            <Detail style="b1-solid b-white-smoke">
                                <div className="card-flex">
                                    <div className="flex">
                                        <Cardheading heading="Latest News" />
                                    </div>
                                </div>
                            </Detail>
                        </Card>
                        <div className="card-carousel arrows-top">
                            <Carousel slidesPerPage="3" itemWidth={192}  value={3} offset={24} arrows slides={this.state.slides} value={this.state.value} onChange={this.onchange} />
                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style="z1">
                        <Card>
                            <Detail style="b1-solid b-white-smoke">
                                <div className="card-flex">
                                    <div className="flex">
                                        <Cardheading heading="Latest News" />
                                    </div>
                                </div>
                            </Detail>
                        </Card>
                        <div className="card-carousel arrows-top">
                            <Carousel slidesPerPage="2" itemWidth={192}  value={2} offset={24} slides={this.state.slides2} value={this.state.value1} onChange={this.onchange2} />
                            <CarouselDots value={this.state.value1} onChange={this.onchange2} number={this.state.slides2.length} />
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default MultiItemCarousel;