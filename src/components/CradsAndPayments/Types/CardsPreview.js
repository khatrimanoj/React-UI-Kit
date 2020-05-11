import React, { Component } from 'react';

class CardsPreview extends Component {
    state = {
        width: this.props.width,
        height: this.props.height,
        borderRadius: this.props.borderRadius,
        title1: this.props.title1,
        title2: this.props.title2,
        price: this.props.price,
        cardNo: this.props.cardNo,
        background: this.props.background,
        icon: this.props.icon,
        date: this.props.date,
        className: this.props.className,
        textColor: this.props.textColor,
        boxShadow: this.props.boxShadow,
        opacity: this.props.opacity,
        fill: this.props.fill
    }
    render() {
        return (
            <div className={this.state.className} style={{width: this.state.width, height: this.state.height, borderRadius: this.state.borderRadius, background: this.state.background, boxShadow: this.state.boxShadow, color: this.state.textColor, backgroundSize:'cover'}}>
                <div className="top">
                    <div className="balance">
                        <span className="overline" style={{color: this.state.textColor, opacity: this.state.opacity}}>{this.state.title1}</span>
                        <div className="h5" style={{color: this.state.textColor}}>{this.state.price}</div>
                    </div>
                    <div className="card-icon"><img src={this.state.icon} alt="cards icon"/></div>
                </div>
                <div className="bottom">
                    <div className="card-info">
                        <span className="overline" style={{color: this.state.textColor, opacity: this.state.opacity}}>{this.state.title2}</span>
                        <div className="body1" style={{color: this.state.textColor}}>{this.state.cardNo}</div>
                    </div>
                    <div className="date">
                        <span style={{color: this.state.textColor}}>{this.state.date}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardsPreview;