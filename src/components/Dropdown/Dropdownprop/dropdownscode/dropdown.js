import React, { Component } from 'react';
import Dropdownprop from '../dropdownmenu/dropdownmenu';
import { Icon } from 'react-icons-kit';

import { grid } from 'react-icons-kit/feather/grid';
import { zap } from 'react-icons-kit/feather/zap';
import { sliders } from 'react-icons-kit/feather/sliders';
import { star } from 'react-icons-kit/feather/star';
import { users } from 'react-icons-kit/feather/users';
import {plus} from 'react-icons-kit/feather/plus';

class dropdown extends Component {
  render() {

    const data1 = [{
      "id": 1,
      "name": "Hello Kitty",
      "link": "#",
      "count": "10",
          
    }, {
      "id": 2,
      "name": "Hello Pussy",
      "count": "10",
      "link": "#",

    }, {
      "id": 3,
      "name": "Hello Pussy",
      "count": "10",
      "link": "#",

    }];
    const data2 = [{
      "id": 1,
      "title": "Hello Kitty",
      "link": "#",
      "count": "10",
      "menu": [{
        "id": 2,
        "name": "Kitty Muu Muu",
        "link": "#",
        "count": "10",
      }, {
        "id": 3,
        "name": "Kitty smack",
        "link": "#",
        "count": "10",
      }]
    }, {
      "id": 4,
      "title": "Hello Pussy",
      "link": "abc",
      "menu": [{
        "id": 5,
        "name": "World",
        "link": "#",
        "count": "20"


      }]
    }];
    const data3 = [{
      "id": 1,
      "name": "Projects",
      "count": "10",
      "link": "#",
      "icon": <Icon icon={grid} size={20} />,

    }, {
      "id": 2,
      "name": "People",
      "count": "10",
      "link": "#",
      "icon": <Icon icon={users} size={20} />,
    }, {
      "id": 3,
      "name": "Favorites",
      "count": "10",
      "link": "#",
      "icon": <Icon icon={star} size={20} />,
    }, {
      "id": 4,
      "name": "Settings",
      "count": "10",
      "link": "#",
      "icon": <Icon icon={sliders} size={20} />,
    }, {
      "id": 5,
      "name": "Updates",
      "count": "10",
      "link": "#",
      "icon": <Icon icon={zap} size={20} />,


    },];
    const data4 = [{
      "id": 1,
      "name": "Project Management",
      "subtitle": "by Martin Golubowski",
      "count": "10",
      "link": "#",

    }, {
      "id": 2,
      "name": "Shopping Cart UI",
      "subtitle": "by ABC Design Studio",
      "count": "10",
      "link": "#",

    }, {
      "id": 3,
      "name": "Redesign Concept",
      "subtitle": "by Ricardo Rodrigues",
      "count": "10",
      "link": "#",

    }, {
      "id": 5,
      "name": "Inspiring UI Designs",
      "subtitle": "by Matrix Studio",
      "count": "10",
      "link": "#",

    }, {
      "id": 6,
      "name": "Moodboard",
      "subtitle": "by César Pizarro ",
      "count": "10",
      "link": "#",

    }];
    return (
      <>
        <div className="w-100 pull-left mb-30"></div>
        <div className="row w-100 pull-left">
          <div className="col-md-3">
            <Dropdownprop menu={data1} />
          </div>
          <div className="col-md-3">
            <Dropdownprop menu={data2} countstyle="mr-10 text-gray"/>
          </div>
          <div className="col-md-3">
            <Dropdownprop menu={data3} />
          </div>
        </div>
        <div className="w-100 pull-left mb-30"></div>
        <div className="row w-100 pull-left">
          <div className="col-md-3">
            <Dropdownprop 
            search={true}
            menu={data4} 
            button={true}
            btnlable="Create new board" 
            btnstyle="btn btn-sm btn-gray text  w-100 pull-left text-left text-black"
            btnicon={<Icon icon={plus} size={20} />}/>
          </div>
        </div>
      </>

    );
  }
}

export default dropdown;