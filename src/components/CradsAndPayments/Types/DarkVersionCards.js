import React, { Component } from 'react';

class DarkVersionCards extends Component {
    state = {
        mainTitle: this.props.mainTitle,
        subTitle: this.props.subTitle,
        backIcon: this.props.backIcon,
        boxShadow: this.props.boxShadow,
        width: this.props.width,
        height: this.props.height,
        backArrow: this.props.backArrow,
        moreIcon: this.props.moreIcon,
        visibility: this.props.visibility,
        className: this.props.className
    };

    render() {
        return (
            <div className={`${this.state.className}`} style={{boxShadow: this.state.boxShadow}}>
                <div className="heading">
                    <div className="h5">
                        <a href="../" style={{display: `${this.state.visibility}`,paddingRight: '20px'}}><img src={this.state.backIcon} alt="back arrow" /></a>
                        {this.state.mainTitle}
                        <a href="../" style={{display: `${this.state.visibility}`,float: "right"}}><img src={this.state.moreIcon} alt="More Icon" /></a>
                    </div>
                    <p className="body2 text-gray">{this.state.subTitle}</p>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DarkVersionCards;