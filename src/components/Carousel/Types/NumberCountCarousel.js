import React, { Component } from 'react';
import Card from '../../Magazines/Cardtags/card/card';
import Cardimg from '../../Magazines/Cardtags/cardimage/Cardimg';
import Cardoverlay from '../../Magazines/Cardtags/Cardoverlay/Cardoverlay';
import Detail from '../../Magazines/Cardtags/carddetail/carddetail';
import Button from '../../button/buttonprop/buttonprop';
import Cardheading from '../../Magazines/Cardtags/Carddescription/cardheading';
import CardDT from '../../Magazines/Cardtags/Carddescription/cardDT';
import Action from '../../Magazines/Cardtags/Cardaction/Cardaction';
import CardFooter from '../../Magazines/Cardtags/Cardfooter/Cardfooter';
import { Icon } from 'react-icons-kit'
import {moreHorizontal} from 'react-icons-kit/feather/moreHorizontal'
import CarouselImage1 from '../../../images/carousel/Card_Carousel1.png';
import CarouselImage2 from '../../../images/carousel/Card_Carousel2.png';
import {heart} from 'react-icons-kit/feather/heart'
import { thumbsUp } from 'react-icons-kit/feather/thumbsUp';
import { messageSquare } from 'react-icons-kit/feather/messageSquare';
import Carousel from '../CarouselWrapper';
import CarouselDots from '../CarouselDots';
import '../Carousel.css'

class NumberCountCarousel extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: 0,
            value1: 0,
            slides: [
            (<Card style="z1 text-center text-white img-card ">
                <Cardimg img={CarouselImage1}></Cardimg>
                <Cardoverlay >
                    <Detail>
                        <div className="card-flex mt-5">
                            <div className="flex"></div>
                            <div className="flex">
                                <Button
                                    size=""
                                    style="btn-white text"
                                    Centericon={true}
                                    icon={<Icon icon={heart} size={18} style={{backgroundColor: '#018aae',padding: '11px', borderRadius: '20px'}}/>}
                                />
                            </div>
                        </div>
                    </Detail>
                </Cardoverlay>
            </Card>),
            (<Card style="z1 text-center text-white img-card ">
                <Cardimg img={CarouselImage1}></Cardimg>
                <Cardoverlay >
                    <Detail>
                        <div className="card-flex mt-5">
                            <div className="flex"></div>
                            <div className="flex">
                                <Button
                                    size=""
                                    style="btn-white text"
                                    Centericon={true}
                                    icon={<Icon icon={heart} size={18} style={{backgroundColor: '#018aae',padding: '11px', borderRadius: '20px'}}/>}
                                />
                            </div>
                        </div>
                    </Detail>
                </Cardoverlay>
            </Card>),
            (<Card style="z1 text-center text-white img-card ">
                <Cardimg img={CarouselImage1}></Cardimg>
                <Cardoverlay >
                    <Detail>
                        <div className="card-flex mt-5">
                            <div className="flex"></div>
                            <div className="flex">
                                <Button
                                    size=""
                                    style="btn-white text"
                                    Centericon={true}
                                    icon={<Icon icon={heart} size={18} style={{backgroundColor: '#018aae',padding: '11px', borderRadius: '20px'}}/>}
                                />
                            </div>
                        </div>
                    </Detail>
                </Cardoverlay>
            </Card>),
            ],
            slides2: [
                (<Card style="z1 text-center text-white img-card ">
                    <Cardimg img={CarouselImage2}></Cardimg>
                    <Cardoverlay >
                        <Detail>
                            <div className="card-flex mt-5">
                                <div className="flex"></div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-white text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={24} />}
                                    />
                                </div>
                            </div>
                        </Detail>
                    </Cardoverlay>
                </Card>),
                (<Card style="z1 text-center text-white img-card ">
                    <Cardimg img={CarouselImage2}></Cardimg>
                    <Cardoverlay >
                        <Detail>
                            <div className="card-flex mt-5">
                                <div className="flex"></div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-white text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={24} />}
                                    />
                                </div>
                            </div>
                        </Detail>
                    </Cardoverlay>
                </Card>),
                (<Card style="z1 text-center text-white img-card ">
                    <Cardimg img={CarouselImage2}></Cardimg>
                    <Cardoverlay >
                        <Detail>
                            <div className="card-flex mt-5">
                                <div className="flex"></div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-white text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={24} />}
                                    />
                                </div>
                            </div>
                        </Detail>
                    </Cardoverlay>
                </Card>),
                (<Card style="z1 text-center text-white img-card ">
                    <Cardimg img={CarouselImage2}></Cardimg>
                    <Cardoverlay >
                        <Detail>
                            <div className="card-flex mt-5">
                                <div className="flex"></div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-white text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={24} />}
                                    />
                                </div>
                            </div>
                        </Detail>
                    </Cardoverlay>
                </Card>),
                (<Card style="z1 text-center text-white img-card ">
                    <Cardimg img={CarouselImage2}></Cardimg>
                    <Cardoverlay >
                        <Detail>
                            <div className="card-flex mt-5">
                                <div className="flex"></div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-white text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={24} />}
                                    />
                                </div>
                            </div>
                        </Detail>
                    </Cardoverlay>
                </Card>),
                (<Card style="z1 text-center text-white img-card ">
                    <Cardimg img={CarouselImage2}></Cardimg>
                    <Cardoverlay >
                        <Detail>
                            <div className="card-flex mt-5">
                                <div className="flex"></div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-white text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={24} />}
                                    />
                                </div>
                            </div>
                        </Detail>
                    </Cardoverlay>
                </Card>),
                (<Card style="z1 text-center text-white img-card ">
                    <Cardimg img={CarouselImage2}></Cardimg>
                    <Cardoverlay >
                        <Detail>
                            <div className="card-flex mt-5">
                                <div className="flex"></div>
                                <div className="flex">
                                    <Button
                                        size=""
                                        style="btn-white text"
                                        Centericon={true}
                                        icon={<Icon icon={moreHorizontal} size={24} />}
                                    />
                                </div>
                            </div>
                        </Detail>
                    </Cardoverlay>
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
                <div className="col-md-4">
                    <div className="card-carousel arrows-bottom">
                        <Carousel arrows autoPlay={3000} infinite slides={this.state.slides} value={this.state.value} onChange={this.onchange} />
                        <div className="slide-count">
                            <CarouselDots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />/
                            <div className="total">{this.state.slides.length}</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-carousel dots-bottom">
                        <Carousel arrows autoPlay={5000} infinite slides={this.state.slides2} value={this.state.value1} onChange={this.onchange2}  />
                        <CarouselDots value={this.state.value1} onChange={this.onchange2} number={this.state.slides2.length} />
                    </div>
                </div>
            </div>
        );
    }
}

export default NumberCountCarousel;