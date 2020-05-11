import React, { Component} from 'react';
import  InputRange  from './InputSlider';
import DoubleSlider from './doubleSlider'
import EditableSlider from './editableSlider'

class noValueSlider extends Component {

    render() {
        return (
            <form className="form">  
                <ul className="mb-50">
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Enable</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} /> 
                                    <InputRange value={50} min={0} max={100} /> 
                                    <InputRange value={100} min={0} max={100} /> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <DoubleSlider  currentMin={20} inputMin={20} currentMax={65} inputMax={65}/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Disabled</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} disabled className="disabled"/> 
                                    <InputRange value={50} min={0} max={100} disabled className="disabled"/> 
                                    <InputRange value={100} min={0} max={100} disabled className="disabled"/> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <DoubleSlider currentMin={30} inputMin={30} currentMax={70} inputMax={70} className="disabled"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Hover</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} className="hover md"/> 
                                    <InputRange value={50} min={0} max={100} className="hover md"/> 
                                    <InputRange value={100} min={0} max={100}  className="hover md"/> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <DoubleSlider currentMin={30} inputMin={30} currentMax={70} inputMax={70} className="hover"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Enable</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} className="large"/> 
                                    <InputRange value={50} min={0} max={100} className="large"/> 
                                    <InputRange value={100} min={0} max={100} className="large"/> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <DoubleSlider currentMin={30} inputMin={30} currentMax={70} inputMax={70} className="large"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Disabled</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} disabled className="disabled large"/> 
                                    <InputRange value={50} min={0} max={100} disabled className="disabled large"/> 
                                    <InputRange value={100} min={0} max={100} disabled className="disabled large"/> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <DoubleSlider currentMin={30} inputMin={30} currentMax={70} inputMax={70} className="large disabled"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Hover</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} className="hover large"/> 
                                    <InputRange value={50} min={0} max={100} className="hover large"/> 
                                    <InputRange value={100} min={0} max={100}  className="hover large"/> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <DoubleSlider currentMin={30} inputMin={30} currentMax={70} inputMax={70} className="large hover"/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>


                <p className="body1 mb-30">Slider can be used together with an editable numeric value or value indicator.</p>
                <EditableSlider currentMin={20} inputMin={20} currentMax={65} inputMax={65}/>
            </form>
        );
    }
}


export default noValueSlider;