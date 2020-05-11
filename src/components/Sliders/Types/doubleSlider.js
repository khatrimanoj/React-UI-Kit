import React, { Component } from 'react';

class doubleSlider extends Component {
    state = {
        sliderWidth: 0,
        offsetSliderWidht: 0,
        minV: 0,
        maxV: 100,
        minValueBetween: 10,
        
        currentMin: this.props.currentMin,
        inputMin: this.props.inputMin,
        
        currentMax: this.props.currentMax,
        inputMax: this.props.inputMax,

        className: this.props.className,
    };

    componentDidMount() {
        const { currentMin, currentMax, maxV } = this.state;
        
        this.minValue.style.width = (currentMin*100)/maxV + "%";
        this.maxValue.style.width = (currentMax*100)/maxV + "%";
        
        this.setState({
            sliderWidth: this.slider.offsetWidth,
            offsetSliderWidht: this.slider.offsetLeft,
        })
    }

    setMin = (e) => {
        const { minV, maxV, currentMax, minValueBetween } = this.state;
        const inputMin = e.target.value;
        
        this.setState({
            inputMin
        });
        
        if((inputMin >= minV) && (inputMin <= (currentMax-minValueBetween))){
        this.setState({
            currentMin: parseInt(inputMin)
        }); 

        this.minValue.style.width = (inputMin*100)/maxV + "%";
        }
    }

    changeMinValue = (e) => {
        e.preventDefault();

        document.addEventListener('mousemove', this.onMouseMoveMin);
        document.addEventListener('mouseup', this.onMouseUpMin);
        
        document.addEventListener('touchmove', this.onMouseMoveMin);
        document.addEventListener('touchend', this.onMouseUpMin);
    }

    onMouseMoveMin = (e) => {
        const { minV, maxV, currentMax, minValueBetween, sliderWidth, offsetSliderWidht } = this.state;
        
        const dragedWidht = e.clientX - offsetSliderWidht;
        const dragedWidhtInPercent = (dragedWidht*100)/sliderWidth;
        const currentMin = Math.abs(parseInt((maxV * dragedWidhtInPercent)/100));
        
        // console.log(e.pageX, e.clientX, offsetSliderWidht);
        
        // console.log(currentMin , (currentMax-minValueBetween));
        
        // console.log((max * dragedWidhtInPercent)/100);
    
        if( (currentMin >= minV) && (currentMin <= (currentMax-minValueBetween))){
            this.minValue.style.width = dragedWidhtInPercent + "%";
            this.minValue.dataset.content = currentMin;

            this.setState({
                currentMin,
                inputMin: currentMin
            })
        }
    }

    onMouseUpMin = () => {
        document.removeEventListener('mouseup', this.onMouseUpMin);
        document.removeEventListener('mousemove', this.onMouseMoveMin);
        
        document.removeEventListener('touchend', this.onMouseMoveMin);
        document.removeEventListener('touchmove', this.onMouseUpMin);
    }
    
    
    setMax = (e) => {
        const { minV, maxV, currentMin, currentMax, minValueBetween } = this.state;

        const inputMax = e.target.value;
        
        this.setState({
            inputMax
        });

        if((inputMax >= currentMin + minValueBetween) && (inputMax <= maxV)){
        
            this.setState({
                currentMax: parseInt(inputMax)
            });
            this.maxValue.style.width = (inputMax*100)/maxV + "%";
        }
        
    }
    
    changeMaxValue = (e) => {
        e.preventDefault();

        document.addEventListener('mousemove', this.onMouseMoveMax);
        document.addEventListener('mouseup', this.onMouseUpMax);
        
        document.addEventListener('touchmove', this.onMouseMoveMax);
        document.addEventListener('touchend', this.onMouseUpMax);
    }

    onMouseMoveMax = (e) => {
        const { maxV, currentMin, minValueBetween, sliderWidth, offsetSliderWidht} = this.state; 
        const maxWalueThumb = this.maxValue;
        const dragedWidht = e.clientX - offsetSliderWidht;
        const dragedWidhtInPercent = (dragedWidht*100)/sliderWidth;
        const currentMax = Math.abs(parseInt((maxV * dragedWidhtInPercent)/100));
        
        if( (currentMax >= (currentMin + minValueBetween)) && (currentMax <= maxV)){
        
            maxWalueThumb.style.width = dragedWidhtInPercent + "%";
            maxWalueThumb.dataset.content = currentMax;
            this.setState({
                currentMax,
                inputMax: currentMax
            })
        }
    }

    onMouseUpMax = () => {
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mousemove', this.onMouseMoveMax);
        
        document.removeEventListener('touchend', this.onMouseUp);
        document.removeEventListener('touchmove', this.onMouseMoveMax);
    }
    
    maxForMin = () => {
        const { currentMax, minValueBetween} = this.state; 
        return currentMax - minValueBetween;
    }
    
    minForMax = () => {
        const { currentMin, minValueBetween} = this.state; 
        return currentMin + minValueBetween;
    }
    render() {
        return (
            <>
                <div ref={ref => this.slider = ref} id="range-slider" className={`${this.state.className} double-range-slider`}>
                    <div ref={ref => this.minValue = ref} id="min" data-content={this.state.currentMin}>
                        <div ref={ref => this.minValueDrag = ref} id="min-drag" onMouseDown ={this.changeMinValue} onTouchStart={this.changeMinValue}></div>
                    </div>

                    <div ref={ref => this.maxValue = ref} id="max" data-content={this.state.currentMax}>
                        <div ref={ref => this.maxValueDrag = ref} id="max-drag" onMouseDown={this.changeMaxValue} onTouchStart={this.changeMaxValue}></div>
                    </div>
                </div> 
            </>
        );
    }
}

export default doubleSlider;