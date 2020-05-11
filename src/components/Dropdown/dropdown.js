import React, { Component } from 'react';
import Header from '../header/header';
import Dropdownsimpal from './dropdownsimpal/dropdownsimpal';
import Dropdownsearch from './dropdownsearch/dropdownsearch';
import Dropdown from './dropdownstructure/dropdownmarge/dropdownmarge';
import DisplayContainer from './dropdownew/dropdowncointainer';
// import Dropdownmenu from './dropdownmenu/dropdownmenu';
// // import Dropdownprop from './Dropdownprop/dropdownscode/dropdown';
// import Drpdowns from './Dropdownprop/dropdownmenu/dropdownmenu';
// import Dropdownmarge from './dropdownstructure/dropdownmarge/dropdownmarge';

import { Icon } from 'react-icons-kit';

import { grid } from 'react-icons-kit/feather/grid';
import { zap } from 'react-icons-kit/feather/zap';
import { sliders } from 'react-icons-kit/feather/sliders';
import { star } from 'react-icons-kit/feather/star';
import { users } from 'react-icons-kit/feather/users';
import {plus} from 'react-icons-kit/feather/plus';
class dropdown extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
        header: [
          {title: 'Dropdown'}
        ],
       
         }
    }
    
    
    render() {
        const data = [{
            "id": 1,
          "name": "Hello Kitty",
          "items": [{
              "id": 2, 
            "name": "Kitty Muu Muu"
          }, {
              "id": 3,
            "name": "Kitty smack"
          }]
        }, {
            "id": 4,
          "name": "Hello Pussy",
          "items": [{
            "id": 5,
            "name": "World",
            
          }]
        }];
        const folders = {
            directories: [
                {
                    type: 'head',
                    name: 'CATEGORY 1',
                    children:[
                        {
                            type: 'file',
                            name: 'First Point',
                            link: '#',
                            count: '10',
                        },
                        {
                            type: 'file',
                            name:'Second Point',
                            link: '#',
                            count: '10',
                        },
                        {
                            type: 'file',
                            name:'Third Point',
                            link: '#',
                            count: '10',
                        },
                        {
                            type: 'file',
                            name:'Fourth Point',
                            link: '#',
                            count: '10',
                        },
                    ]
                  
                },
                {
                    type: 'head',
                    name: 'CATEGORY 2',
                    children:[
                        {
                            type: 'file',
                            name: 'First Point',
                            link: '#',
                            count: '10',
                        },
                        {
                            type: 'file',
                            name:'Second Point',
                            link: '#',
                            count: '10',
                        },
                        {
                            type: 'file',
                            name:'Third Point',
                            link: '#',
                            count: '10',
                        },
                    ]
                  
                }
            ],
            directories1: [
                {
                    type: 'file',
                    name: 'First Point',
                    link: '#'
                },
                {
                    type: 'file',
                    name:'Second Point',
                    link: '#'
                },
                {
                    type: 'file',
                    name:'Third Point',
                    link: '#'
                },
                {
                    type: 'file',
                    name:'Four Point fgjfgj',
                    link: '#'
                },
               
            ],
            directories2: [
                {
                    type: 'file',
                    name: 'Project',
                    link: '#',
                    icon: <Icon icon={grid} size={20} />
                },
                {
                    type: 'file',
                    name:'People',
                    link: '#',
                    icon: <Icon icon={users} size={20} />
                },
                {
                    type: 'file',
                    name:'Favorites',
                    link: '#',
                    icon: <Icon icon={star} size={20} />
                },
                {
                    type: 'file',
                    name:'Setting',
                    link: '#',
                    icon: <Icon icon={sliders} size={20} />
                },
               
            ]

        };
        
        return (
             <div className="wrapper">
                  <section className="container">
                     <div className="row">
                          <Header header={this.state.header[0].title} />
                          <div className="col-md-12 mb-30">
                             <p className="body1">Normal Dropdown</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <div className="col-md-3">
                                     <Dropdownsimpal   list={["January","February","March","April","May","June","July","August","September","October","November","December"]} />
                                    
                                 </div>
                                 <div className="col-md-3">
                                     <Dropdownsimpal size="lg" list={[{value: 1, label: 'January'}, {value: 2, label:'February'}, {value: 3, label:'March'},
                         {value: 4, label:'April'},{value: 5, label:'May'},{value: 6, label:'June'},{value: 7, label:'July'},
                         {value: 8, label:'August'},{value: 9, label:'September'},{value: 10, label:'October'},
                         {value: 11, label:'November'},{value: 12, label:'December'}]} />
                                 </div>
                                 <div className="col-md-3">
                                     <Dropdownsimpal border="false"   list={["January","February","March","April","May","June","July","August","September","October","November","December"]} />
                                    
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <p className="body1">Dropdown with search</p>
                         </div>
                         <div className="container">
                             <div className="row">
                                 <div className="col-md-3">
                                     <Dropdownsearch list={[{value: 1, label: 'January'}, {value: 2, label:'February'}, {value: 3, label:'March'},
                         {value: 4, label:'April'},{value: 5, label:'May'},{value: 6, label:'June'},{value: 7, label:'July'},
                         {value: 8, label:'August'},{value: 9, label:'September'},{value: 10, label:'October'},
                         {value: 11, label:'November'},{value: 12, label:'December'}]}/>  
 
                                 </div>
                                 <div className="col-md-3">
                                     {/* <Dropdownmenu  list={[{value: 1, label: 'January'}, {value: 2, label:'February'}, {value: 3, label:'March'},
                         {value: 4, label:'April'},{value: 5, label:'May'},{value: 6, label:'June'},{value: 7, label:'July'},
                         {value: 8, label:'August'},{value: 9, label:'September'},{value: 10, label:'October'},
                         {value: 11, label:'November'},{value: 12, label:'December', menu: {value:13, label: 'sub' }}]}/> */}

                                 </div>
                                 <div className="col-md-3">
                                      {/* <Drpdowns data={ data }/> */}
                                 </div>
                                 <div className="col-md-12">
                                       {/* <Dropdownprop/> */}
                                 </div>
                                 <div className="col-md-3">
                                     <Dropdown data={folders.directories1} searching={false}/>
                                 </div>
                                 <div className="col-md-3">
                                     {/* <Dropdownmarge data={folders.directories} /> */}
                                     
                                     <Dropdown data={folders.directories} searching={true} totals={true}/>
                                 </div>
                                 <div className="col-md-3">
                                     {/* <Dropdownmarge data={folders.directories} /> */}
                                     
                                     <Dropdown border="false" data={folders.directories2} />
                                 </div>
                                 <div className="col-md-3">
                                     <DisplayContainer/>
                                 </div>
                                 <div className="w-100 pull-left mb-30"></div>
                                 <div className="col-md-3">
                                     {/* <Dropdownmarge data={folders.directories} /> */}
                                     
                                     <Dropdown data={folders.directories} searching={true} totals={true}/>
                                 </div>

 
                             </div>

                         </div>
                     </div>
                 </section>
             </div>
        );
    }
}

export default dropdown;