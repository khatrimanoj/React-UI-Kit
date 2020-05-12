import React from 'react'
import Header from '../header/header';
import CenteredCarousel from './Types/CenteredCarousel'
import SingleCarousel from './Types/SingleSlider'
import NumberCountCarousel from './Types/NumberCountCarousel'
import MultiItemCarousel from './Types/MultiItemCarousel'

class Index extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      header: [
        { title: 'Carousel Sliders' }
      ],
    }
  }
  render () {
    return (
      <div className="wrapper">
        <section className="container">
          <div className="row">
            <Header header={this.state.header[0].title} />  
            
              <div className="col-md-12 mb-30">
                <p className="body1 mb-30">You can create carousel slider using images, videos, posts or product previews. Sliders have custom height and width.</p>
                <div className="Carousel01 mb-80">
                  <CenteredCarousel />
                </div>
              </div>
              <div className="col-md-12 mb-30">
                <div className="Carousel02">
                  <SingleCarousel />
                </div>
              </div>
              <div className="col-md-12 mb-30">
                <NumberCountCarousel />
              </div>
              <div className="col-md-12 mb-30">
                <MultiItemCarousel />
              </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Index;