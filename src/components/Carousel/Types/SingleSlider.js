import React, { Component } from 'react';
import Carousel from '../CarouselWrapper';
import CarouselDots from '../CarouselDots';
import '../Carousel.css'
import Slider1 from '../../../images/carousel/Full-Slider1.png'
class SingleSlider extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: 0,
            slides: [
            (<><img src={Slider1} alt='carousel'/><div className="overlay"><h1 className="h3">Another Shot of Oranges</h1></div></>),
            (<><img src={Slider1} alt='carousel'/><div className="overlay"><h1 className="h3">Another Shot of Oranges</h1></div></>),
            (<><img src={Slider1} alt='carousel'/><div className="overlay"><h1 className="h3">Another Shot of Oranges</h1></div></>),
            (<><img src={Slider1} alt='carousel'/><div className="overlay"><h1 className="h3">Another Shot of Oranges</h1></div></>),
            (<><img src={Slider1} alt='carousel'/><div className="overlay"><h1 className="h3">Another Shot of Oranges</h1></div></>),
            (<><img src={Slider1} alt='carousel'/><div className="overlay"><h1 className="h3">Another Shot of Oranges</h1></div></>),
            ],
        }
        this.onchange = this.onchange.bind(this);
    }
    onchange(value) {
        this.setState({ value });
    }
    render() {
        return (
            <>
                <Carousel slidesPerScroll={1} infinite arrows Dots slides={this.state.slides} value={this.state.value} onChange={this.onchange} />
                <CarouselDots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
            </>
        );
    }
}

export default SingleSlider;