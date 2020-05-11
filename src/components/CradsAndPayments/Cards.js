import React, { Component, useState } from 'react';
import Header from '../header/header';
import CardsPreview from './Types/CardsPreview'; 
import LightVersionCard from './Types/LightVersionCards';
import DarkVersionCard from './Types/DarkVersionCards';
import Radiobtns from '../../components/input/radionbtn/radiobtnhtml/Radiobtnhtml'
import Inputfild from '../../components/input/inputs/inputtext/input_html';
import Button from '../../components/button/buttonprop/buttonprop';
import Chekbox from '../../components/input/Checkbox/chekboxhtml/chekbox';
import Carousel from '../Carousel/CarouselWrapper';
import CarouselDots from '../Carousel/CarouselDots'
import  './Cards.css';
import AvitarIcon from '../../images/avitar.png';
import CardBg from '../../images/Card_Container.png'
import CardBg2 from '../../images/Card_Container2.png'
import VisaIcon from '../../images/visa-icon.svg';
import VisaFillIcon from '../../images/visafill-icon.svg';
import AmeExpIcon from '../../images/ame-icon.svg';
import MasterCardIcon from '../../images/mastercard-icon.svg';
import ArrowBack from '../../images/Arrow_Back.svg';
import MoreIcon from '../../images/More_Vertical.svg';
import BlueArrowBack from '../../images/Blue_Arrow_Back.svg';
import BlueMoreIcon from '../../images/Blue_More_Vertical.svg';
import Avitaricon from '../../components/Notification/avitar/avitar-dropdown/avitar_dropdownhtml';
import { Icon } from 'react-icons-kit';
import {clock} from 'react-icons-kit/feather/clock';
import {loop2} from 'react-icons-kit/icomoon/loop2';
import {bell} from 'react-icons-kit/feather/bell';
import {settings} from 'react-icons-kit/feather/settings'

class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: [
                { title: 'Cards & Payments' }
            ],
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
            width: "100%", 
            height: "200px",
            cardNo: "4321 0987 0000 9876",
            title1: "current balance",
            title2: "Benjamin Parker",
            date: "03/24",
            borderRadius: "8px",
            price: "$3 458.90",
            icon: VisaIcon,
            className: "cards flex-div",
            opacity: "0.64",
            cardType: VisaIcon,
            value: '234234',
            SliderValue: 0,
            CarouselItem: [
                    (<CardsPreview  
                        price="myBank" 
                        width="100%" 
                        icon={AmeExpIcon} 
                        borderRadius="8px" 
                        height="200px" 
                        cardNo="4321 09•• •••• 9876" 
                        date="03/24" 
                        className="hasBg-img cards flex-div" 
                        background={`url(${CardBg2})no-repeat`} 
                        textColor="#fff"
                        boxShadow="0 1px 3px rgba(0, 0, 0, 0.3)"
                    />),(<CardsPreview  
                        price="myBank" 
                        width="100%" 
                        icon={AmeExpIcon} 
                        borderRadius="8px" 
                        height="200px" 
                        cardNo="4321 09•• •••• 9876" 
                        date="03/24" 
                        className="hasBg-img cards flex-div" 
                        background={`url(${CardBg2})no-repeat`} 
                        textColor="#fff"
                        boxShadow="0 1px 3px rgba(0, 0, 0, 0.3)"
                    />),(<CardsPreview  
                        price="myBank" 
                        width="100%" 
                        icon={AmeExpIcon} 
                        borderRadius="8px" 
                        height="200px" 
                        cardNo="4321 09•• •••• 9876" 
                        date="03/24" 
                        className="hasBg-img cards flex-div" 
                        background={`url(${CardBg2})no-repeat`} 
                        textColor="#fff"
                        boxShadow="0 1px 3px rgba(0, 0, 0, 0.3)"
                    />),(<CardsPreview  
                        price="myBank" 
                        width="100%" 
                        icon={AmeExpIcon} 
                        borderRadius="8px" 
                        height="200px" 
                        cardNo="4321 09•• •••• 9876" 
                        date="03/24" 
                        className="hasBg-img cards flex-div" 
                        background={`url(${CardBg2})no-repeat`} 
                        textColor="#fff"
                        boxShadow="0 1px 3px rgba(0, 0, 0, 0.3)"
                    />),
            ]
        }
        this.onchange = this.onchange.bind(this);
    }
    onchange(SliderValue) {
        this.setState({ SliderValue });
    }
    render() {

        return (
            <div className="wrapper">
                <section className="container">
                    <div className="row">
                        <Header header={this.state.header[0].title} />  
                        <div className="row w-100">
                            <div className="col-md-12 mb-30">
                                <div className="h5 mb-20">Cards Preview</div>
                                <div className="row mb-50">
                                    <div className="col-md-4">
                                        <CardsPreview 
                                            { ...this.state } 
                                            background="#1a1f71" 
                                            textColor="#fff"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <CardsPreview 
                                            { ...this.state } 
                                            background="#ffffff"
                                            textColor="#000a19" 
                                            icon={VisaFillIcon}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <CardsPreview 
                                            { ...this.state } 
                                            background={`url(${CardBg})no-repeat`} 
                                            textColor="#fff" 
                                            className="hasBg-img cards flex-div"
                                        />
                                    </div>
                                </div>
                                <div className="h5 mb-20">Light Version</div>
                                <div className="row mb-50">
                                    <div className="col-md-4">
                                        <LightVersionCard 
                                            mainTitle="My Cards"
                                            subTitle="Change your default payment method"
                                            {...this.state}
                                            visibility= "none"
                                            className="cards light-version"
                                        >
                                            <CardsPreview  
                                                { ...this.state } 
                                                background="#000" 
                                                textColor="#fff"
                                                // icon={this.state.cardType}
                                                icon={MasterCardIcon}
                                                cardNo={this.state.value}
                                            /> 
                                            {/* {console.log(this.state.cardNo)} */}
                                            {/* <span>{result}</span> */}
                                            <ul>
                                                <li>    
                                                    <Radiobtns style={{width: "16px", height: "16px"}} id="ame" value={this.state.value === 0} label="2398 9845 0003 6745" name="cards"/>
                                                </li>
                                                <li>
                                                    <Radiobtns style={{width: "16px", height: "16px"}} id="mac" defaultChecked={this.state.cardType === MasterCardIcon}  value={this.state.value === 1} label="4321 0987 000 9876" name="cards"/>
                                                </li>
                                                <li>
                                                    <Radiobtns style={{width: "16px", height: "16px"}} id="visa" defaultChecked={this.state.cardType === VisaIcon}  value={this.state.value === 2} label="0987 0000 0033 8723" name="cards" />
                                                </li>
                                                {/* <input type="radio" id="am" label="1234 5678 9123 3333" value="1234 5678 9123 3333" name="cards" onClick={this.handleRadioChange.bind(this)}/>abc1
                                                 <input type="radio" id="df" label="2398 9845 0003 1234" value="2398 9845 0003 1234" name="cards" onClick={this.handleRadioChange.bind(this)}/>abc2 */}
                                            </ul>
                                            <Button size="btn-sm" style="btn-primary outline w-100" label="Add New Card" />
                                        </LightVersionCard>
                                    </div>
                                    <div className="col-md-4">
                                        <LightVersionCard 
                                            mainTitle="Card Information"
                                            backIcon={ArrowBack}
                                            moreIcon={MoreIcon}
                                            {...this.state}
                                            className="cards light-version"
                                            >
                                            <div className="card-carousel carousel" style={{width: "100%",height: "250px"}}>
                                                <Carousel className={this.state.className} slides={this.state.CarouselItem} value={this.state.SliderValue} onChange={this.onchange} />
                                                <CarouselDots value={this.state.SliderValue} onChange={this.onchange} number={this.state.CarouselItem.length} />
                                            </div>
                                            <div className="deposite-amt">
                                                <p className="body2 caption text-gray">american express debit</p>
                                                <div className="h5">$3 458.90</div>
                                                <Button size="btn-sm" style="btn-primary outline w-50" label="Deposite" />
                                            </div>
                                            <ul className="no-border border-top">
                                                <li><Avitaricon title="Cardholder" subtitle="BENJAMIN PARKER" hasRound><img className="" src={AvitarIcon} alt="avitar icon"/></Avitaricon> </li>
                                                <li><Avitaricon title="Transaction History" hasRound><Icon icon={clock} size={20}/></Avitaricon> </li>
                                                <li><Avitaricon title="Change Card Account" subtitle="Current Account •• 9876" hasRound><Icon icon={loop2} size={16}/></Avitaricon> </li>
                                                <li><Avitaricon title="SMS Notifications" subtitle="+1 (570) 387-1283" hasRound><Icon icon={bell} size={20}/></Avitaricon> </li>
                                                <li><Avitaricon title="Card Settings" hasRound><Icon icon={settings} size={20}/></Avitaricon></li>
                                            </ul>
                                        </LightVersionCard>
                                    </div>
                                    <div className="col-md-4">
                                        <LightVersionCard 
                                            mainTitle="Payment Details"
                                            subtitle="Total"
                                            price="$258.90"
                                            {...this.state}
                                            visibility="none"
                                            className="cards light-version"
                                        >
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-12 no-padding mb-20">
                                                    <Inputfild type="text" label="Card Number *" lablestyle="defult" placeholder="9876 2345 0000 1321"  iconaling="right">  <i className="inputicon"><img src={VisaFillIcon} /></i></Inputfild>
                                                </div>
                                                <div className="col-md-12 no-padding mb-20">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label>Expiry Date *</label>
                                                                <select>
                                                                    <option value="default">MM</option>
                                                                    <option>Jan</option>
                                                                    <option>Feb</option>
                                                                    <option>March</option>
                                                                    <option>April</option>
                                                                    <option>May</option>
                                                                    <option>June</option>
                                                                    <option>July</option>
                                                                    <option>Aug</option>
                                                                    <option>Sept</option>
                                                                    <option>Oct</option>
                                                                    <option>Nov</option>
                                                                    <option>Dec</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 label-hidden">
                                                            <div className="form-group">
                                                                <label>Expiry Date *</label>
                                                                <select>
                                                                    <option value="default">YY</option>
                                                                    <option>01</option>
                                                                    <option>02</option>
                                                                    <option>03</option>
                                                                    <option>04</option>
                                                                    <option>05</option>
                                                                    <option>06</option>
                                                                    <option>07</option>
                                                                    <option>08</option>
                                                                    <option>09</option>
                                                                    <option>10</option>
                                                                    <option>11</option>
                                                                    <option>12</option>
                                                                    <option>13</option>
                                                                    <option>14</option>
                                                                    <option>15</option>
                                                                    <option>16</option>
                                                                    <option>17</option>
                                                                    <option>18</option>
                                                                    <option>19</option>
                                                                    <option>20</option>
                                                                    <option>21</option>
                                                                    <option>22</option>
                                                                    <option>23</option>
                                                                    <option>24</option>
                                                                    <option>25</option>
                                                                    <option>26</option>
                                                                    <option>27</option>
                                                                    <option>28</option>
                                                                    <option>29</option>
                                                                    <option>30</option>
                                                                    <option>31</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <Inputfild type="text" lablestyle="defult" label="CVV *"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 no-padding mb-20">
                                                    <Inputfild type="text" label="Cardholder's Name *" lablestyle="defult" />
                                                </div>
                                                <div className="col-md-12 no-padding mb-20">
                                                    <Chekbox id="unchecked2" label="Save This Card?" color="gray" />
                                                </div>
                                                <div className="col-md-12 no-padding mb-10">
                                                    <Button size="btn-sm" style="btn-primary w-100" label="Create Account" />
                                                </div>
                                                <div className="col-md-12">
                                                    <p className="caption">By creating an account I accept the <a className="text-primary">Terms of Service</a></p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        </LightVersionCard>
                                    </div>
                                </div>
                                <div className="h5 mb-20">Dark Version</div>
                                <div className="row mb-50">
                                    <div className="col-md-4">
                                        <DarkVersionCard 
                                            mainTitle="My Cards"
                                            subTitle="Change your default payment method"
                                            {...this.state}
                                            visibility= "none"
                                            className="cards dark-version"
                                        >
                                            <CardsPreview  
                                                { ...this.state } 
                                                background="#fff" 
                                                textColor="#000"
                                                // icon={this.state.cardType}
                                                icon={MasterCardIcon}
                                                cardNo={this.state.value}
                                            /> 
                                            {/* {console.log(this.state.cardNo)} */}
                                            {/* <span>{result}</span> */}
                                            <ul>
                                                <li>    
                                                    <Radiobtns style={{width: "16px", height: "16px"}} id="dame" defaultChecked={this.state.cardType === AmeExpIcon}  value={this.state.value === 0} label="2398 9845 0003 6745" name="cards"/>
                                                </li>
                                                <li>
                                                    <Radiobtns style={{width: "16px", height: "16px"}} id="dmac" defaultChecked={this.state.cardType === MasterCardIcon}  value={this.state.value === 1} label="4321 0987 000 9876" name="cards"/>
                                                </li>
                                                <li>
                                                    <Radiobtns style={{width: "16px", height: "16px"}} id="dvisa" defaultChecked={this.state.cardType === VisaIcon}  value={this.state.value === 2} label="0987 0000 0033 8723" name="cards" />
                                                </li>
                                                {/* <input type="radio" id="am" label="1234 5678 9123 3333" value="1234 5678 9123 3333" name="cards" onClick={this.handleRadioChange.bind(this)}/>abc1
                                                 <input type="radio" id="df" label="2398 9845 0003 1234" value="2398 9845 0003 1234" name="cards" onClick={this.handleRadioChange.bind(this)}/>abc2 */}
                                            </ul>
                                            <Button size="btn-sm" style="btn-primary outline w-100" label="Add New Card" />
                                        </DarkVersionCard>
                                    </div>
                                    <div className="col-md-4">
                                        <DarkVersionCard 
                                            mainTitle="Card Information"
                                            backIcon={BlueArrowBack}
                                            moreIcon={BlueMoreIcon}
                                            {...this.state}
                                            className="cards dark-version"
                                            >
                                            <div className="card-carousel carousel" style={{width: "100%",height: "250px"}}>
                                            <Carousel className={this.state.className} slides={this.state.CarouselItem} value={this.state.SliderValue} onChange={this.onchange} />
                                                <CarouselDots value={this.state.SliderValue} onChange={this.onchange} number={this.state.CarouselItem.length} />
                                            </div>
                                            <div className="deposite-amt">
                                                <p className="body2 caption text-light-gray">american express debit</p>
                                                <div className="h5 text-white">$3 458.90</div>
                                                <Button size="btn-sm" style="btn-primary outline w-50" label="Deposite" />
                                            </div>
                                            <ul className="no-border border-top">
                                                <li><Avitaricon title="Cardholder" subtitle="BENJAMIN PARKER" hasRound><img className="" src={AvitarIcon} /></Avitaricon> </li>
                                                <li><Avitaricon title="Transaction History" hasRound><Icon fill="blue" className="clock" icon={clock} size={20}/></Avitaricon> </li>
                                                <li><Avitaricon title="Change Card Account" subtitle="Current Account •• 9876" hasRound><Icon fill="blue" className="loop" icon={loop2} size={16}/></Avitaricon> </li>
                                                <li><Avitaricon title="SMS Notifications" subtitle="+1 (570) 387-1283" hasRound><Icon fill="blue" icon={bell} className="bell" size={20}/></Avitaricon> </li>
                                                <li><Avitaricon title="Card Settings" hasRound><Icon icon={settings} fill="blue" className="setting" size={20}/></Avitaricon></li>
                                            </ul>
                                        </DarkVersionCard>
                                    </div>
                                    <div className="col-md-4">
                                        <DarkVersionCard 
                                            mainTitle="Payment Details"
                                            subtitle="Total"
                                            price="$258.90"
                                            {...this.state}
                                            visibility="none"
                                            className="cards dark-version"
                                        >
                                        <div className="col-md-12">
                                        <div className="row">
                                                <div className="col-md-12 no-padding mb-20">
                                                    <Inputfild type="text" label="Card Number *" lablestyle="defult" placeholder="9876 2345 0000 1321"  iconaling="right">  <i className="inputicon"><img src={VisaFillIcon} /></i></Inputfild>
                                                </div>
                                                <div className="col-md-12 no-padding mb-20">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label>Expiry Date *</label>
                                                                <select>
                                                                    <option value="default">MM</option>
                                                                    <option>Jan</option>
                                                                    <option>Feb</option>
                                                                    <option>March</option>
                                                                    <option>April</option>
                                                                    <option>May</option>
                                                                    <option>June</option>
                                                                    <option>July</option>
                                                                    <option>Aug</option>
                                                                    <option>Sept</option>
                                                                    <option>Oct</option>
                                                                    <option>Nov</option>
                                                                    <option>Dec</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 label-hidden">
                                                            <div className="form-group">
                                                                <label>Expiry Date *</label>
                                                                <select>
                                                                    <option value="default">YY</option>
                                                                    <option>01</option>
                                                                    <option>02</option>
                                                                    <option>03</option>
                                                                    <option>04</option>
                                                                    <option>05</option>
                                                                    <option>06</option>
                                                                    <option>07</option>
                                                                    <option>08</option>
                                                                    <option>09</option>
                                                                    <option>10</option>
                                                                    <option>11</option>
                                                                    <option>12</option>
                                                                    <option>13</option>
                                                                    <option>14</option>
                                                                    <option>15</option>
                                                                    <option>16</option>
                                                                    <option>17</option>
                                                                    <option>18</option>
                                                                    <option>19</option>
                                                                    <option>20</option>
                                                                    <option>21</option>
                                                                    <option>22</option>
                                                                    <option>23</option>
                                                                    <option>24</option>
                                                                    <option>25</option>
                                                                    <option>26</option>
                                                                    <option>27</option>
                                                                    <option>28</option>
                                                                    <option>29</option>
                                                                    <option>30</option>
                                                                    <option>31</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <Inputfild type="text" lablestyle="defult" label="CVV *"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 no-padding mb-20">
                                                    <Inputfild type="text" label="Cardholder's Name *" lablestyle="defult" />
                                                </div>
                                                <div className="col-md-12 no-padding mb-20">
                                                    <Chekbox id="dunchecked2" label="Save This Card?" color="gray" />
                                                </div>
                                                <div className="col-md-12 no-padding mb-10">
                                                    <Button size="btn-sm" style="btn-primary w-100" label="Create Account" />
                                                </div>
                                                <div className="col-md-12">
                                                    <p className="caption">By creating an account I accept the <a className="text-primary">Terms of Service</a></p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        </DarkVersionCard>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Cards;