import React, { Component } from 'react';
import Header from '../header/header';
import './progressbar.css';
import LinearIndicator from './Types/LinearIndicator'
import BufferingIndicator from './Types/BufferingIndicator'
import CircularIndicators from './Types/CircularIndicators'


class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
        header: [
            { title: 'Progress Indicators' }
        ],
        size: 28,
        progress: 25,
        strokeWidth: 4,
        circleOneStroke: 'transparent',
        circleTwoStroke: '#0077cc',
    }
  }

  render() {

    return (
      <div className="wrapper">
          <section className="container">
              <div className="row">
                <Header header={this.state.header[0].title} />   
                <div className="col-md-12 mb-30">
                    <div className="h5 mb-20">Linear Indicator</div>
                    <div className="determinate">
                      <p className="body1 mb-30">Determinate indicator</p>
                      <div className="row">
                        <div className="col-md-3">
                          <LinearIndicator progress={0} valueNow={0} data={'Loading...'}  />
                        </div>
                        <div className="col-md-3">
                          <LinearIndicator progress={'25%'} valueNow={100} data={'Loading... 25%'} />
                        </div>
                        <div className="col-md-3">
                          <LinearIndicator progress={'50%'} valueNow={100} data={'Loading... 50%'} />
                        </div>
                        <div className="col-md-3">
                          <LinearIndicator progress={'100%'} valueNow={100} data={'Loading... 100%'} />
                        </div>
                      </div>
                    </div>
                    <div className="indeterminate mb-40">
                      <p className="body1 mb-30">Indeterminate indicator</p>
                      <div className="row">
                        <div className="col-md-3">
                          <LinearIndicator progress={0} valueNow={0} data={'Please wait...'} />
                        </div>
                        <div className="col-md-3">
                          <LinearIndicator progress={'25%'} valueNow={100}  data={'Please wait...'} />
                        </div>
                        <div className="col-md-3">
                          <LinearIndicator progress={'50%'} valueNow={100}  data={'Please wait...'} />
                        </div>
                        <div className="col-md-3">
                          <LinearIndicator progress={'100%'} valueNow={100}  data={'Please wait...'} />
                        </div>
                      </div>
                    </div>

                    <div className="buffering mb-60">
                      <p className="body1 mb-30">Indeterminate indicator</p>
                      <div className="row">
                        <div className="col-md-12">
                          <BufferingIndicator progress={0} valueNow={0} data={'Please wait...'} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="circular mb-50">
                      <div className="h5 mb-20">Circular Indicator</div>
                      <p className="body1 mb-30">Determinate indicator</p>
                      <div className="row">
                        <div className="col-md-4">
                          <CircularIndicators { ...this.state} className="circular-determinate"/>
                          <CircularIndicators { ...this.state} progress={50} className="circular-determinate"/>
                          <CircularIndicators { ...this.state} progress={75} className="circular-determinate"/>
                          <CircularIndicators { ...this.state} progress={100} className="circular-determinate"/>
                        </div>
                        <div className="col-md-4">
                          <CircularIndicators { ...this.state} size={36} className="circular-determinate"/>
                          <CircularIndicators { ...this.state} size={36} progress={50} className="circular-determinate"/>
                          <CircularIndicators { ...this.state} size={36} progress={75} className="circular-determinate" />
                          <CircularIndicators { ...this.state} size={36} progress={100} className="circular-determinate" />
                        </div>
                        <div className="col-md-4">
                          <CircularIndicators { ...this.state} size={52} className="circular-determinate" />
                          <CircularIndicators { ...this.state} size={52} progress={50} className="circular-determinate" />
                          <CircularIndicators { ...this.state} size={52} progress={75} className="circular-determinate" />
                          <CircularIndicators { ...this.state} size={52} progress={100} className="circular-determinate" />
                        </div>
                      </div>
                    </div>
                    <div className="circular">
                      <p className="body1 mb-30">Indeterminate indicator</p>
                      <div className="row">
                        <div className="col-md-4">
                          <CircularIndicators { ...this.state} progress={80} className="circular-indeterminate"/>
                          <CircularIndicators { ...this.state} progress={50} className="circular-indeterminate"/>
                          <CircularIndicators { ...this.state} progress={25} className="circular-indeterminate"/>
                          <CircularIndicators { ...this.state} progress={75} className="circular-indeterminate"/>
                        </div>
                        <div className="col-md-4">
                          <CircularIndicators { ...this.state} size={36} progress={80} className="circular-indeterminate"/>
                          <CircularIndicators { ...this.state} size={36} progress={50} className="circular-indeterminate"/>
                          <CircularIndicators { ...this.state} size={36} progress={25} className="circular-indeterminate" />
                          <CircularIndicators { ...this.state} size={36} progress={75} className="circular-indeterminate" />
                        </div>
                        <div className="col-md-4">
                          <CircularIndicators { ...this.state} size={52} progress={80} className="circular-indeterminate" />
                          <CircularIndicators { ...this.state} size={52} progress={50} className="circular-indeterminate" />
                          <CircularIndicators { ...this.state} size={52} progress={25} className="circular-indeterminate" />
                          <CircularIndicators { ...this.state} size={52} progress={75} className="circular-indeterminate" />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
        </section>
    </div>
    )
  }
}

export default ProgressBar;