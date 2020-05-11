import React, { Component } from 'react';
import Carousel from '../CarouselWrapper';
import CarouselDots from '../CarouselDots';
import '../Carousel.css'
import Slider1 from '../../../images/carousel/rsz_slide1.png'
import Slider2 from '../../../images/carousel/rsz_slide2.png'
import Slider3 from '../../../images/carousel/rsz_slide3.png'
class CenteredCarousel extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: 0,
            slides: [
            (<div className="carousel-item"><div className="img-overlay"></div><img src={Slider1} alt='carousel'/><div className="overlay"><p>unknown Plant by Leo Wieling</p></div></div>),
            (<div className="carousel-item"><div className="img-overlay"></div><img src={Slider2} alt='carousel'/><div className="overlay"><p>unknown Plant by Leo Wieling</p></div></div>),
            (<div className="carousel-item"><div className="img-overlay"></div><img src={Slider3} alt='carousel'/><div className="overlay"><p>unknown Plant by Leo Wieling</p></div></div>),
            (<div className="carousel-item"><div className="img-overlay"></div><img src={Slider1} alt='carousel'/><div className="overlay"><p>unknown Plant by Leo Wieling</p></div></div>),
            (<div className="carousel-item"><div className="img-overlay"></div><img src={Slider2} alt='carousel'/><div className="overlay"><p>unknown Plant by Leo Wieling</p></div></div>),
            (<div className="carousel-item"><div className="img-overlay"></div><img src={Slider3} alt='carousel'/><div className="overlay"><p>unknown Plant by Leo Wieling</p></div></div>),
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
                <Carousel  centered infinite slidesPerPage={2} arrows Dots slides={this.state.slides}  value={this.state.value} onChange={this.onchange} />
                <CarouselDots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
            </>
        );
    }
}
export default CenteredCarousel;