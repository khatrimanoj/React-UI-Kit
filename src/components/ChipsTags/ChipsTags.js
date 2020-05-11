import React, { Component } from 'react';
import '../ChipsTags/Chips.css';
import Header from '../header/header';
import InputChips from './Types/inputChips';
import TextFieldChips from './Types/textfieldChips';
import TextFieldDraggableChips from './Types/draggableChips';
import SelectionChips from './Types/selectionChips';
import NoLableChips from './Types/nolableChips';
import FilterChips from './Types/filterChips';
import ImgFilterChips from './Types/imgFilterChips';
import NoLabelFilter from './Types/nolabelFilter';
import Tags from './Types/Tags';
import {x} from 'react-icons-kit/feather/x';
import {mapPin} from 'react-icons-kit/feather/mapPin'

const selectedTags = tags => {
    console.log(tags);
};
class ChipsTags extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: [
                { title: 'Chips & Tags' }
            ],
        }
    }
    
    render() {
        return (
            <div className="wrapper">
                 <section className="container">
                     <div className="row">
                        <Header header={this.state.header[0].title} />   
                        <div className="col-md-12 mb-30">
                            <div className="h5 mb-20">Input Chips</div>
                            <p className="body1 mb-30">Input chips are used to verify input information by converting it into a compact form.</p>
                            <div className="input-chips-wrapper">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="default w-100 mb-20">
                                            <InputChips  Title="Enabled" DivclassName="form-group input-chips default-chips left-icon" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Disabled" DivclassName="form-group input-chips disabled default-chips left-icon" readOnly disabled="disabled" LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Hover" DivclassName="form-group input-chips focus default-chips left-icon" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                        </div>
                                        <div className="default w-100 mb-20">
                                            <InputChips  Title="Enabled" DivclassName="form-group input-chips default-chips left-icon" inputClass="rounded" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Disabled" DivclassName="form-group input-chips disabled default-chips left-icon" inputClass="rounded" readOnly disabled="disabled" LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Hover" DivclassName="form-group input-chips focus default-chips left-icon" inputClass="rounded" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="default w-100 mb-20">
                                            <InputChips  Title="Enabled" DivclassName="form-group input-chips outline-chips left-icon" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Disabled" DivclassName="form-group input-chips disabled outline-chips left-icon" readOnly disabled="disabled" LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Hover" DivclassName="form-group input-chips focus outline-chips left-icon" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                        </div>
                                        <div className="default w-100 mb-20">
                                            <InputChips  Title="Enabled" DivclassName="form-group input-chips outline-chips left-icon" inputClass="rounded" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Disabled" DivclassName="form-group input-chips disabled outline-chips left-icon" inputClass="rounded" readOnly disabled="disabled" LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Hover" DivclassName="form-group input-chips focus outline-chips left-icon" inputClass="rounded" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="default w-100 mb-20">
                                            <InputChips  Title="Enabled" DivclassName="form-group input-chips filled-chips left-icon" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Disabled" DivclassName="form-group input-chips disabled filled-chips left-icon" readOnly disabled="disabled" LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Hover" DivclassName="form-group input-chips focus filled-chips left-icon" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                        </div>
                                        <div className="default w-100 mb-20">
                                            <InputChips  Title="Enabled" DivclassName="form-group input-chips filled-chips left-icon" inputClass="rounded" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Disabled" DivclassName="form-group input-chips disabled filled-chips left-icon" inputClass="rounded" readOnly disabled="disabled" LeftIcon={mapPin} RightIcon={x}/>
                                            <InputChips  Title="Hover" DivclassName="form-group input-chips focus filled-chips left-icon" inputClass="rounded" readOnly LeftIcon={mapPin} RightIcon={x}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="body1 mb-30">Chips within text field.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <TextFieldChips selectedTags={selectedTags} tags={['Benjamin Parker', 'Michael Joseph']} />
                                    <TextFieldChips selectedTags={selectedTags} ClassName="md" tags={['Benjamin Parker', 'Michael Joseph']} />
                                </div>
                                <div className="col-md-6">
                                    <TextFieldChips selectedTags={selectedTags} ClassName="rounded" tags={['Benjamin Parker', 'Michael Joseph']} />
                                    <TextFieldChips selectedTags={selectedTags} ClassName="md rounded" tags={['Benjamin Parker', 'Michael Joseph']} />
                                </div>
                            </div>
                            
                            <p className="body1 mb-30">Chips can be draggable.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <TextFieldDraggableChips tags={['Benjamin Parker1', 'Michael Joseph1']} />
                                    <TextFieldDraggableChips ClassName="md" tags={['Benjamin Parker1', 'Michael Joseph1']} />
                                </div>
                                <div className="col-md-6">
                                    <TextFieldDraggableChips ClassName="rounded" tags={['Benjamin Parker1', 'Michael Joseph1']} />
                                    <TextFieldDraggableChips ClassName="rounded md" tags={['Benjamin Parker1', 'Michael Joseph1']} />
                                </div>
                            </div>
                            
                            <div className="h5 mb-20">Selection Chips</div>
                            <p className="body1 mb-30">Selection chips may be used as an alternative to toggle buttons or radio buttons. You can select only a single chip from several options.</p>
                            <div className="input-chips-wrapper selection-chips">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="flex-div">
                                            <SelectionChips Title="Enabled" DivclassName="default-chips mb-20" inputId="default" inputClassName="default"/>
                                            <SelectionChips Title="Disabled" inputAttribute="disabled" DivclassName="default-chips disabled mb-20" LableclassName="disabled" inputId="default" inputClassName="default"/>
                                            <SelectionChips Title="Hover" DivclassName="default-chips mb-20" LableclassName="focus" inputId="hover" inputClassName="focus"/>
                                            <SelectionChips Title="Selected" DivclassName="default-chips mb-20" LableclassName="selected" inputId="seleted" inputClassName="selected"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="flex-div">
                                            <SelectionChips Title="Enabled" DivclassName="outline-chips mb-20" inputId="default" inputClassName="default"/>
                                            <SelectionChips Title="Disabled" inputAttribute="disabled" DivclassName="outline-chips disabled mb-20" LableclassName="disabled" inputId="default" inputClassName="default"/>
                                            <SelectionChips Title="Hover" DivclassName="outline-chips mb-20" LableclassName="focus" inputId="hover" inputClassName="focus"/>
                                            <SelectionChips Title="Selected" DivclassName="outline-chips mb-20" LableclassName="selected" inputId="seleted" inputClassName="selected"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="flex-div">
                                            <SelectionChips Title="XS" DivclassName="outline-chips mb-20" inputId="default" LableclassName="disabled" inputClassName="default disabled" inputAttribute="disabled"/>
                                            <SelectionChips Title="S" inputAttribute="disabled" DivclassName="outline-chips disabled mb-20" inputId="default" inputClassName="default"/>
                                            <SelectionChips Title="M" DivclassName="outline-chips mb-20" LableclassName="selected" inputId="m" inputClassName="selected"/>
                                            <SelectionChips Title="L" DivclassName="outline-chips mb-20" inputId="l"/>
                                            <SelectionChips Title="XL" DivclassName="outline-chips mb-20" inputId="xl"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="flex-div">
                                            <SelectionChips Title="Enabled" DivclassName="default-chips mb-20" LableclassName="rounded" inputId="default" inputClassName="default"/>
                                            <SelectionChips Title="Disabled" inputAttribute="disabled" DivclassName="default-chips disabled mb-20" LableclassName="disabled rounded" inputId="default" inputClassName="default"/>
                                            <SelectionChips Title="Hover" DivclassName="default-chips mb-20" LableclassName="focus rounded" inputId="hover" inputClassName="focus"/>
                                            <SelectionChips Title="Selected" DivclassName="default-chips mb-20" LableclassName="selected rounded" inputId="seleted" inputClassName="selected"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="flex-div">
                                            <SelectionChips Title="Enabled" DivclassName="outline-chips mb-20" LableclassName="rounded" inputId="default" inputClassName="default"/>
                                            <SelectionChips Title="Disabled" inputAttribute="disabled" DivclassName="outline-chips disabled mb-20" LableclassName="disabled rounded" inputId="default" inputClassName="default"/>
                                            <SelectionChips Title="Hover" DivclassName="outline-chips mb-20" LableclassName="focus rounded" inputId="hover" inputClassName="focus"/>
                                            <SelectionChips Title="Selected" DivclassName="outline-chips mb-20" LableclassName="selected rounded" inputId="seleted" inputClassName="selected"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="flex-div">
                                            <SelectionChips Title="XS" DivclassName="outline-chips mb-20" inputId="default" LableclassName="disabled rounded" inputClassName="default disabled" inputAttribute="disabled"/>
                                            <SelectionChips Title="S" inputAttribute="disabled" DivclassName="outline-chips disabled mb-20" LableclassName="rounded" inputId="default" inputClassName="default"/>
                                            <SelectionChips Title="M" DivclassName="outline-chips mb-20" LableclassName="selected rounded" inputId="m" inputClassName="selected"/>
                                            <SelectionChips Title="L" DivclassName="outline-chips mb-20" LableclassName="rounded" inputId="l"/>
                                            <SelectionChips Title="XL" DivclassName="outline-chips mb-20" LableclassName="rounded" inputId="xl"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
 
 
                            <p className="body1 mb-30">Selection chips without text labels.</p>
                            <div className="input-chips-wrapper no-label-chips">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="flex-div">
                                            <NoLableChips classFillColor="red" checked={true} id="red" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLableChips classFillColor="yellow" checked={true} id="yellow" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLableChips classFillColor="green" checked={true} id="green" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLableChips classFillColor="pelorous" checked={true} id="pelorous" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLableChips classFillColor="smoke" checked={true} id="smoke" DivclassName="form-group input-chips squared" LableclassName="default" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="flex-div">
                                            <NoLableChips classFillColor="red rounded" checked={true} id="redrd" DivclassName="form-group input-chips squared" />
                                            <NoLableChips classFillColor="yellow rounded" checked={true} id="yellowrd" DivclassName="form-group input-chips squared" />
                                            <NoLableChips classFillColor="green rounded" checked={true} id="greenrd" DivclassName="form-group input-chips squared" />
                                            <NoLableChips classFillColor="pelorous rounded" checked={true} id="pelorousrd" DivclassName="form-group input-chips squared" />
                                            <NoLableChips classFillColor="smoke rounded" checked={true} id="smokerd" DivclassName="form-group input-chips squared" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="flex-div">
                                            <NoLableChips classFillColor="red sm" checked={true} id="red" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLableChips classFillColor="yellow sm" checked={true} id="yellow" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLableChips classFillColor="green sm" checked={true} id="green" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLableChips classFillColor="pelorous sm" checked={true} id="pelorous" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLableChips classFillColor="smoke sm" checked={true} id="smoke" DivclassName="form-group input-chips squared" LableclassName="default" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="flex-div">
                                            <NoLableChips classFillColor="red rounded sm" checked={true} id="redrd" DivclassName="form-group input-chips squared" />
                                            <NoLableChips classFillColor="yellow rounded sm" checked={true} id="yellowrd" DivclassName="form-group input-chips squared" />
                                            <NoLableChips classFillColor="green rounded sm" checked={true} id="greenrd" DivclassName="form-group input-chips squared" />
                                            <NoLableChips classFillColor="pelorous rounded sm" checked={true} id="pelorousrd" DivclassName="form-group input-chips squared" />
                                            <NoLableChips classFillColor="smoke rounded sm" checked={true} id="smokerd" DivclassName="form-group input-chips squared" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h5 mb-20 w-100 pull-left mt-20">Filter Chips</div>
                            <p className="body1 mb-30">Use filter chips to select or unselect multiple options.</p>
                            <div className="input-chips-wrapper filter-chips">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="flex-div">
                                            <FilterChips Title="Enabled" DivclassName="default-chips mb-20" inputId="filter" inputClassName="default"/>
                                            <FilterChips Title="Disabled" inputAttribute="disabled" DivclassName="default-chips disabled mb-20" LableclassName="disabled" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Hover" DivclassName="default-chips mb-20" LableclassName="focus" inputId="hover" inputClassName="focus"/>
                                            <FilterChips Title="Selected" DivclassName="default-chips mb-20" LableclassName="selected" inputId="seleted" inputClassName="selected"/>
                                            <FilterChips Title="Hover Selected" DivclassName="default-chips mb-20" LableclassName="hover-selected" inputId="hover-seleted" inputClassName="hover-selected"/>
                                        </div>
                                        <div className="flex-div">
                                            <FilterChips Title="Default" DivclassName="default-chips mb-20" LableclassName="rounded" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Disabled" inputAttribute="disabled" DivclassName="default-chips disabled mb-20" LableclassName="disabled rounded" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Hover" DivclassName="default-chips mb-20" LableclassName="focus rounded" inputId="hover" inputClassName="focus"/>
                                            <FilterChips Title="Selected" DivclassName="default-chips mb-20" LableclassName="selected rounded" inputId="seleted" inputClassName="selected"/>
                                            <FilterChips Title="Hover Selected" DivclassName="default-chips mb-20" LableclassName="hover-selected rounded" inputId="hover-seleted" inputClassName="hover-selected"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="flex-div">
                                            <FilterChips Title="Enabled" DivclassName="filled-chips mb-20" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Disabled" inputAttribute="disabled" DivclassName="filled-chips disabled mb-20" LableclassName="disabled" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Hover" DivclassName="outline-chips mb-20" LableclassName="focus" inputId="hover" inputClassName="focus"/>
                                            <FilterChips Title="Selected" DivclassName="filled-chips mb-20" LableclassName="selected" inputId="seleted" inputClassName="selected"/>
                                            <FilterChips Title="Hover Selected" DivclassName="filled-chips mb-20" LableclassName="hover-selected" inputId="hover-seleted" inputClassName="hover-selected"/>
                                        </div>
                                        <div className="flex-div">
                                            <FilterChips Title="Enabled" DivclassName="filled-chips mb-20" LableclassName="rounded" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Disabled" inputAttribute="disabled" DivclassName="filled-chips disabled mb-20" LableclassName="disabled rounded" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Hover" DivclassName="filled-chips mb-20" LableclassName="focus rounded" inputId="hover" inputClassName="focus"/>
                                            <FilterChips Title="Selected" DivclassName="filled-chips mb-20" LableclassName="selected rounded" inputId="seleted" inputClassName="selected"/>
                                            <FilterChips Title="hover-Selected" DivclassName="filled-chips mb-20" LableclassName="hover-selected rounded" inputId="hover-seleted" inputClassName="hover-selected"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="flex-div">
                                            <FilterChips Title="Default" DivclassName="outline-chips mb-20" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Disabled" inputAttribute="disabled" DivclassName="outline-chips disabled mb-20" LableclassName="disabled" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Hover" DivclassName="outline-chips mb-20" LableclassName="focus" inputId="hover" inputClassName="focus"/>
                                            <FilterChips Title="Selected" DivclassName="outline-chips mb-20" LableclassName="selected" inputId="seleted" inputClassName="selected"/>
                                            <FilterChips Title="Hover Selected" DivclassName="outline-chips mb-20" LableclassName="hover-selected" inputId="hover-seleted" inputClassName="hover-selected"/>
                                        </div>
                                        <div className="flex-div">
                                            <FilterChips Title="Default" DivclassName="outline-chips mb-20" LableclassName="rounded" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Disabled" inputAttribute="disabled" DivclassName="outline-chips disabled mb-20" LableclassName="disabled rounded" inputId="default" inputClassName="default"/>
                                            <FilterChips Title="Hover" DivclassName="outline-chips mb-20" LableclassName="focus rounded" inputId="hover" inputClassName="focus"/>
                                            <FilterChips Title="Selected" DivclassName="outline-chips mb-20" LableclassName="selected rounded" inputId="seleted" inputClassName="selected"/>
                                            <FilterChips Title="Hover Selected" DivclassName="outline-chips mb-20" LableclassName="hover-selected rounded" inputId="hover-seleted" inputClassName="hover-selected"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="body1 mb-30">Filter chips can contain images.</p>
                            <div className="input-chips-wrapper filter-img-chips">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="flex-div">
                                            <ImgFilterChips Title="Enabled" DivclassName="default-chips mb-20" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Disabled" inputAttribute="disabled" DivclassName="default-chips disabled mb-20" LableclassName="disabled" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Hover" DivclassName="default-chips mb-20" LableclassName="focus" inputId="hover" inputClassName="focus"/>
                                            <ImgFilterChips Title="Selected" DivclassName="default-chips mb-20" LableclassName="selected" inputId="seleted" inputClassName="selected"/>
                                            <ImgFilterChips Title="Hover Selected" DivclassName="default-chips mb-20" LableclassName="hover-selected" inputId="seleted" inputClassName="hover-selected"/>
                                        </div>
                                        <div className="flex-div">
                                            <ImgFilterChips Title="Enabled" DivclassName="default-chips mb-20" inputId="default" LableclassName="md" inputClassName="default"/>
                                            <ImgFilterChips Title="Disabled" inputAttribute="disabled" DivclassName="default-chips disabled mb-20" LableclassName="disabled md" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Hover" DivclassName="default-chips mb-20" LableclassName="focus md" inputId="hover" inputClassName="focus"/>
                                            <ImgFilterChips Title="Selected" DivclassName="default-chips mb-20" LableclassName="selected md" inputId="seleted" inputClassName="selected"/>
                                            <ImgFilterChips Title="Hover Selected" DivclassName="default-chips mb-20" LableclassName="hover-selected md" inputId="seleted" inputClassName="hover-selected"/>
                                        </div>
                                        <div className="flex-div">
                                            <ImgFilterChips Title="Enabled" DivclassName="default-chips mb-20" inputId="default" LableclassName="rounded" inputClassName="default"/>
                                            <ImgFilterChips Title="Disabled" inputAttribute="disabled" DivclassName="default-chips disabled mb-20" LableclassName="disabled rounded" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Hover" DivclassName="default-chips mb-20" LableclassName="focus rounded" inputId="hover" inputClassName="focus"/>
                                            <ImgFilterChips Title="Selected" DivclassName="default-chips mb-20" LableclassName="selected rounded" inputId="seleted" inputClassName="selected"/>
                                            <ImgFilterChips Title="Hover Selected" DivclassName="default-chips mb-20" LableclassName="hover-selected rounded" inputId="seleted" inputClassName="hover-selected"/>
                                        </div>
                                        <div className="flex-div">
                                            <ImgFilterChips Title="Enabled" DivclassName="default-chips mb-20" inputId="default" LableclassName="md rounded" inputClassName="default"/>
                                            <ImgFilterChips Title="Disabled" inputAttribute="disabled" DivclassName="default-chips disabled mb-20" LableclassName="disabled md rounded" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Hover" DivclassName="default-chips mb-20" LableclassName="focus md rounded" inputId="hover" inputClassName="focus"/>
                                            <ImgFilterChips Title="Selected" DivclassName="default-chips mb-20" LableclassName="selected md rounded" inputId="seleted" inputClassName="selected"/>
                                            <ImgFilterChips Title="Hover Selected" DivclassName="default-chips mb-20" LableclassName="hover-selected md rounded" inputId="seleted" inputClassName="hover-selected"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="flex-div">
                                            <ImgFilterChips Title="Red" DivclassName="outline-chips mb-20" LableclassName="red" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Yellow" inputAttribute="disabled" DivclassName="outline-chips disabled mb-20" LableclassName="yellow" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Green" DivclassName="outline-chips mb-20" LableclassName="green" inputId="hover" inputClassName="focus"/>
                                            <ImgFilterChips Title="Pelorous" DivclassName="outline-chips mb-20" LableclassName="pelorous" inputId="seleted" inputClassName="selected"/>
                                            <ImgFilterChips Title="White" DivclassName="outline-chips mb-20" LableclassName="white" inputId="seleted" inputClassName="hover-selected"/>
                                        </div>
                                        <div className="flex-div">
                                            <ImgFilterChips Title="Red" DivclassName="outline-chips mb-20" LableclassName="red md" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Yellow" inputAttribute="disabled" DivclassName="outline-chips disabled mb-20" LableclassName="yellow md" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Green" DivclassName="outline-chips mb-20" LableclassName="green md" inputId="hover" inputClassName="focus"/>
                                            <ImgFilterChips Title="Pelorous" DivclassName="outline-chips mb-20" LableclassName="pelorous md" inputId="seleted" inputClassName="selected"/>
                                            <ImgFilterChips Title="White" DivclassName="outline-chips mb-20" LableclassName="white md" inputId="seleted" inputClassName="hover-selected"/>
                                        </div>
                                        <div className="flex-div">
                                            <ImgFilterChips Title="Red" DivclassName="outline-chips mb-20" LableclassName="red rounded" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Yellow" inputAttribute="disabled" DivclassName="outline-chips disabled mb-20" LableclassName="yellow rounded" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Green" DivclassName="outline-chips mb-20" LableclassName="green" inputId="hover" inputClassName="focus"/>
                                            <ImgFilterChips Title="Pelorous" DivclassName="outline-chips mb-20" LableclassName="pelorous rounded" inputId="seleted" inputClassName="selected"/>
                                            <ImgFilterChips Title="White" DivclassName="outline-chips mb-20" LableclassName="white rounded" inputId="seleted" inputClassName="hover-selected"/>
                                        </div>
                                        <div className="flex-div">
                                            <ImgFilterChips Title="Red" DivclassName="outline-chips mb-20" LableclassName="red md rounded" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Yellow" inputAttribute="disabled" DivclassName="outline-chips disabled mb-20" LableclassName="yellow md rounded" inputId="default" inputClassName="default"/>
                                            <ImgFilterChips Title="Green" DivclassName="outline-chips mb-20" LableclassName="green md rounded" inputId="hover" inputClassName="focus"/>
                                            <ImgFilterChips Title="Pelorous" DivclassName="outline-chips mb-20" LableclassName="pelorous md rounded" inputId="seleted" inputClassName="selected"/>
                                            <ImgFilterChips Title="White" DivclassName="outline-chips mb-20" LableclassName="white md rounded" inputId="seleted" inputClassName="hover-selected"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="body1 mb-30">Filter chips without text labels.</p>
                            <div className="input-chips-wrapper no-label-chips filter mb-30">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="flex-div">
                                            <NoLabelFilter classFillColor="red" id="red" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLabelFilter classFillColor="yellow" checked={true} id="yellow" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLabelFilter classFillColor="green" checked={true} id="green" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLabelFilter classFillColor="pelorous" id="pelorous" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLabelFilter classFillColor="smoke" checked={true} id="smoke" DivclassName="form-group input-chips squared" LableclassName="default" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="flex-div">
                                            <NoLabelFilter classFillColor="red rounded" id="redrd" DivclassName="form-group input-chips squared" />
                                            <NoLabelFilter classFillColor="yellow rounded" checked={true} id="yellowrd" DivclassName="form-group input-chips squared" />
                                            <NoLabelFilter classFillColor="green rounded" checked={true} id="greenrd" DivclassName="form-group input-chips squared" />
                                            <NoLabelFilter classFillColor="pelorous rounded" id="pelorousrd" DivclassName="form-group input-chips squared" />
                                            <NoLabelFilter classFillColor="smoke rounded" checked={true} id="smokerd" DivclassName="form-group input-chips squared" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="flex-div">
                                            <NoLabelFilter classFillColor="red sm" id="red" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLabelFilter classFillColor="yellow sm" checked={true} id="yellow" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLabelFilter classFillColor="green sm" checked={true} id="green" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLabelFilter classFillColor="pelorous sm" id="pelorous" DivclassName="form-group input-chips squared" LableclassName="default" />
                                            <NoLabelFilter classFillColor="smoke sm" checked={true} id="smoke" DivclassName="form-group input-chips squared" LableclassName="default" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="flex-div">
                                            <NoLabelFilter classFillColor="red rounded sm" id="redrd" DivclassName="form-group input-chips squared" />
                                            <NoLabelFilter classFillColor="yellow rounded sm" checked={true} id="yellowrd" DivclassName="form-group input-chips squared" />
                                            <NoLabelFilter classFillColor="green rounded sm" checked={true} id="greenrd" DivclassName="form-group input-chips squared" />
                                            <NoLabelFilter classFillColor="pelorous rounded sm" id="pelorousrd" DivclassName="form-group input-chips squared" />
                                            <NoLabelFilter classFillColor="smoke rounded sm" checked={true} id="smokerd" DivclassName="form-group input-chips squared" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="h5 mb-20">Tags</div>
                            <p className="body1 mb-30">Tags provide additional information or help to find related content.</p>
                            <div className="input-chips-wrapper tags-list">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="flex-div">
                                            <Tags DivclassName="form-group tag outline-tags mb-20" id="enabled" LabelclassName="default" Title="Enabled"/>
                                            <Tags DivclassName="form-group tag outline-tags mb-20" id="hover" LabelclassName="focus" Title="hover"/>
                                            <Tags DivclassName="form-group tag outline-tags mb-20" id="enabledr" LabelclassName="default rounded" Title="Enabled"/>
                                            <Tags DivclassName="form-group tag outline-tags mb-20" id="hoverr" LabelclassName="focus rounded" Title="hover"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="flex-div">
                                            <Tags DivclassName="form-group tag default-tags mb-20" id="enabled" LabelclassName="default" Title="Enabled"/>
                                            <Tags DivclassName="form-group tag default-tags mb-20" id="hover" LabelclassName="focus" Title="hover"/>
                                            <Tags DivclassName="form-group tag default-tags mb-20" id="enabledr" LabelclassName="default rounded" Title="Enabled"/>
                                            <Tags DivclassName="form-group tag default-tags mb-20" id="hoverr" LabelclassName="focus rounded" Title="hover"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="flex-div">
                                            <Tags DivclassName="form-group tag filled-tags mb-20" id="enabled" LabelclassName="default" Title="Enabled"/>
                                            <Tags DivclassName="form-group tag filled-tags mb-20" id="hover" LabelclassName="focus" Title="hover"/>
                                            <Tags DivclassName="form-group tag filled-tags mb-20" id="enabledr" LabelclassName="default rounded" Title="Enabled"/>
                                            <Tags DivclassName="form-group tag filled-tags mb-20" id="hoverr" LabelclassName="focus rounded" Title="hover"/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="flex-div">
                                            <Tags DivclassName="form-group tag color color-outline mb-20" id="enabled" LabelclassName="red" Title="Red"/>
                                            <Tags DivclassName="form-group tag color color-outline mb-20" id="hover" LabelclassName="green" Title="Green"/>
                                            <Tags DivclassName="form-group tag color color-outline mb-20" id="enabledr" LabelclassName="blue" Title="Blue"/>
                                            <Tags DivclassName="form-group tag color color-outline mb-20" id="enabled" LabelclassName="red rounded" Title="Red"/>
                                            <Tags DivclassName="form-group tag color color-outline mb-20" id="hover" LabelclassName="green rounded" Title="Green"/>
                                            <Tags DivclassName="form-group tag color color-outline mb-20" id="enabledr" LabelclassName="blue rounded" Title="Blue"/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="flex-div">
                                            <Tags DivclassName="form-group tag color color-default mb-20" id="enabled" LabelclassName="red" Title="Red"/>
                                            <Tags DivclassName="form-group tag color color-default mb-20" id="hover" LabelclassName="green" Title="Green"/>
                                            <Tags DivclassName="form-group tag color color-default mb-20" id="enabledr" LabelclassName="blue" Title="Blue"/>
                                            <Tags DivclassName="form-group tag color color-default mb-20" id="enabled" LabelclassName="red rounded" Title="Red"/>
                                            <Tags DivclassName="form-group tag color color-default mb-20" id="hover" LabelclassName="green rounded" Title="Green"/>
                                            <Tags DivclassName="form-group tag color color-default mb-20" id="enabledr" LabelclassName="blue rounded" Title="Blue"/>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="flex-div">
                                            <Tags DivclassName="form-group tag number mb-20" LabelclassName="red" Title="+10" />
                                            <Tags DivclassName="form-group tag number mb-20" LabelclassName="yellow" Title="5" />
                                            <Tags DivclassName="form-group tag number mb-20" LabelclassName="red rounded" Title="+10" />
                                            <Tags DivclassName="form-group tag number mb-20" LabelclassName="yellow rounded" Title="5" />
                                        </div>
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

export default ChipsTags;