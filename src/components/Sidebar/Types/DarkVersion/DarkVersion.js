import React, { Component } from 'react';
import PersonalSidebar from './PersonalSidebar'
import BusinessSidebar from './BusinessSidebar'
import Avatar1 from '../../../../images/menu-icon/chat1.png'
import Avatar2 from '../../../../images/menu-icon/chat2.png'
import Avatar3 from '../../../../images/menu-icon/chat3.png'
import { grid } from 'react-icons-kit/feather/grid';
import {star} from 'react-icons-kit/feather/star'
import {user} from 'react-icons-kit/feather/user'
import {zap} from 'react-icons-kit/feather/zap'
import {ic_tune} from 'react-icons-kit/md/ic_tune'
import {ic_audiotrack} from 'react-icons-kit/md/ic_audiotrack'
import {headphones} from 'react-icons-kit/feather/headphones'
import { Icon } from 'react-icons-kit'
import {folder} from 'react-icons-kit/feather/folder'
import {ic_help_outline} from 'react-icons-kit/md/ic_help_outline'
import {camera} from 'react-icons-kit/feather/camera'
import Award from '../../../../images/menu-icon/Award.svg'
import Comment_Line from '../../../../images/menu-icon/Comment_Line.svg'
import Logo from '../../../../images/mindbox-white.svg'
import HalfLogo from '../../../../images/mindbox-half-logo.svg'
import {uploadCloud} from 'react-icons-kit/feather/uploadCloud'

class DarkVersion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: [
                { title: 'Sidebars' }
            ],
            PersonalnavLinks: [
                {
                    id:'dashboard',
                    text: 'Dashboard',
                    // path: '/',
                    menuIcon: <Icon icon={grid} size={20}/>,
                    iconActive: true,
                    active: false,
                },
                {
                    id: 'people',
                    text: 'People',
                    // path: '/contact',
                    menuIcon: <Icon icon={user} size={20}/>,
                    iconActive: true,
                    active: true,
                },
                {
                    id: 'favourite',
                    text: 'Favourites',
                    // path: '/about',
                    menuIcon: <Icon icon={star} size={20}/>,
                    iconActive: true,
                    active: false,
                },
                {
                    id: 'updates',
                    text: 'Updates',
                    // path: '/blog',
                    BadgeActive: true,
                    badgeText: '+10',
                    badgeBg: 'yellow rounded',
                    menuIcon: <Icon icon={zap} size={20}/>,
                    iconActive: true,
                    active: false,
                },
                {
                    id: 'Uploads',
                    text: 'Uploads',
                    // path: '/blog',
                    menuIcon: <Icon icon={uploadCloud} size={20}/>,
                    iconActive: true,
                    active: false,
                },
                {
                    id: 'setting',
                    text: 'Setting',
                    // path: '/portfolio',
                    menuIcon: <Icon icon={ic_tune} size={20}/>,
                    iconActive: true,
                    active: false,
                },
            ],
            PersonalotherLinks: [
                {
                    text: 'my collections',
                    items: [
                        {
                            id: '31',
                            text: 'Mood Inspiration',
                            menuIcon: <Icon icon={folder} style={{color: 'var(--primary-variant)'}} size={20}/>,
                            iconActive: true,
                            active: false,
                        },
                        {
                            id: '51',
                            text: 'International Women’s Day — Editorial Selects',
                            menuIcon: <Icon icon={folder} style={{color: 'var(--secondary)'}} size={20}/>,
                            iconActive: true,
                            active: false
                        },
                        {
                            id: '52',
                            text: 'Visual Assets for Marketers',
                            menuIcon: <Icon icon={folder} style={{color: 'var(--La-Rioja)'}} size={20}/>,
                            iconActive: true,
                            active: false
                        }
                    ]
                
                }
            ],
            PersonalbottomFixed: [
                {
                    text: 'Need Help?',
                    menuIcon: <Icon icon={ic_help_outline} fill="red" size={20} style={{backgroundColor: '#f2f2f2', width: '40px',height: '40px',borderRadius: '40px',display: 'flex',alignItems: 'center',justifyContent: 'center'}}/>,
                    iconActive: true,                  
                }
            ],
            BusinessnavLinks: [
                {
                    id:'Michael',
                    text: 'Michael',
                    // path: '/',
                    menuIcon: <Icon icon={user} size={20} style={{color: 'var(--primary-variant)'}}/>,
                    iconActive: true,
                    active: false,
                    items: [
                        {
                            id: '11',
                            text: 'item11',
                            active: true,
                        },
                        {
                            id: '12',
                            text: 'item12',
                            active: false,
                        },
                        {
                            id: '13',
                            text: 'item13',
                            active: false,
                        },
                    ],
                },
                {
                    id: 'My Music',
                    text: 'My Music',
                    // path: '/contact',
                    menuIcon: <Icon icon={ic_audiotrack} size={20} style={{color: 'var(--primary-variant)'}}/>,
                    iconActive: true,
                    active: false,
                },
                {
                    id: 'Collections',
                    text: 'Collections',
                    // path: '/about',
                    menuIcon: <Icon icon={headphones} size={20} style={{color: 'var(--white)',opacity: '0.64'}}/>,
                    iconActive: true,
                    active: true,
                    items: [
                        {
                            id: '21',
                            text: 'New Collection',
                            active: true,
                        },
                        {
                            id: '22',
                            text: 'Featured Collections',
                            active: false,
                        },
                        {
                            id: '23',
                            text: 'Favorites',
                            active: false,
                        },
                    ],
                },
                {
                    id: 'Pictures',
                    text: 'Pictures',
                    // path: '/blog',
                    menuIcon: <Icon icon={camera} size={20} style={{color: 'var(--primary-variant)'}}/>,
                    iconActive: true,
                    active: false,
                },
                {
                    id: 'Achievements',
                    text: 'Achievements',
                    // path: '/portfolio',
                    menuIcon: <img src={Award} alt="award" size={20} style={{color: 'var(--primary-variant)'}}/>,
                    iconActive: true,
                    active: false,
                    BadgeActive: true,
                    badgeText: '5',
                    badgeBg: 'yellow rounded',
                },
            ],
            CollapsedBusinessnavLinks: [
                {
                    id:'Michael',
                    text: 'Michael',
                    // path: '/',
                    menuIcon: <Icon icon={user} size={20} style={{color: 'var(--primary-variant)'}}/>,
                    iconActive: true,
                    active: false,
                    items: [
                        {
                            id: '11',
                            text: 'item11',
                            active: true,
                        },
                        {
                            id: '12',
                            text: 'item12',
                            active: false,
                        },
                        {
                            id: '13',
                            text: 'item13',
                            active: false,
                        },
                    ],
                },
                {
                    id: 'My Music',
                    text: 'My Music',
                    // path: '/contact',
                    menuIcon: <Icon icon={ic_audiotrack} size={20} style={{color: 'var(--primary-variant)'}}/>,
                    iconActive: true,
                    active: false,
                },
                {
                    id: 'Collections',
                    text: 'Collections',
                    // path: '/about',
                    menuIcon: <Icon icon={headphones} size={20} style={{color: 'var(--primary-variant)'}}/>,
                    iconActive: true,
                    active: false,
                    items: [
                        {
                            id: '21',
                            text: 'New Collection',
                            active: true,
                        },
                        {
                            id: '22',
                            text: 'Featured Collections',
                            active: false,
                        },
                        {
                            id: '23',
                            text: 'Favorites',
                            active: false,
                        },
                    ],
                },
                {
                    id: 'Pictures',
                    text: 'Pictures',
                    // path: '/blog',
                    menuIcon: <Icon icon={camera} size={20} style={{color: 'var(--primary-variant)'}}/>,
                    iconActive: true,
                    active: false,
                },
                {
                    id: 'Achievements',
                    text: 'Achievements',
                    // path: '/portfolio',
                    menuIcon: <img src={Award} alt="award" size={20} style={{color: 'var(--primary-variant)'}}/>,
                    iconActive: true,
                    active: false,
                    BadgeActive: true,
                    badgeText: '5',
                    badgeBg: 'yellow rounded',
                },
            ],
            BusinessotherLinks: [
                {
                    menuIcon: <img src={Comment_Line} alt="comment line"/>,
                    iconActive: true,
                    text: 'Friends',
                    items: [
                        {
                            id: '51',
                            text: 'Benjamin Parker',
                            menuIcon: <img src={Avatar1} alt="avitar1" title='online'/>,
                            iconActive: true,
                            active: false,
                            StatusType: 'online'
                        },
                        {
                            id: '52',
                            text: 'Michael Joseph',
                            menuIcon: <img src={Avatar2} alt="avitar1" title='Online'/>,
                            iconActive: true,
                            active: false,
                            StatusType: 'online'
                        },
                        {
                            id: '53',
                            text: 'Sandra Parker',
                            menuIcon: <Icon icon={user} title='dnd' size={20} style={{backgroundColor: 'var(--Daisy-Bush)', color: 'var(--primary-variant)', height: '40px', width: '40px', borderRadius: '40px',display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>,
                            iconActive: true,
                            active: false,
                            StatusType: 'dnd',
                            LinkClass: 'no-img'
                        },
                        {
                            id: '54',
                            text: 'Rebecca Lee',
                            menuIcon: <img src={Avatar3} alt="avitar3" title='dnd'/>,
                            iconActive: true,
                            active: false,
                            StatusType: 'dnd'
                        },
                        {
                            id: '52',
                            text: 'Michael Joseph',
                            menuIcon: <img src={Avatar2} alt="avitar1" title='away'/>,
                            iconActive: true,
                            active: false,
                            StatusType: 'away'
                        },
                        {
                            id: '53',
                            text: 'Sandra Parker',
                            menuIcon: <Icon icon={user} title='offline'  size={20} style={{backgroundColor: 'var(--Daisy-Bush)', color: 'var(--primary-variant)', height: '40px', width: '40px', borderRadius: '40px',display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>,
                            iconActive: true,
                            active: false,
                            LinkClass: 'no-img'
                        },
                        {
                            id: '54',
                            text: 'Rebecca Lee',
                            menuIcon: <img src={Avatar3} alt="avitar3" title='away'/>,
                            iconActive: true,
                            active: false,
                            StatusType: 'away'
                        }
                    ]
                
                }
            ],
            BusinessbottomFixed: [
                {
                    text: 'Settings',
                    menuIcon: <Icon icon={ic_tune} size={20}  style={{backgroundColor: 'transparent', width: '40px',height: '40px',borderRadius: '40px',display: 'flex',alignItems: 'center',justifyContent: 'center'}}/>,
                    iconActive: true,         
                }
            ]
        }
    }
    render() {
        return (
            <>
               <div className="col-md-6">
                    <div className="row h-100">
                        <div className="col-md-8">
                            <PersonalSidebar
                                navLinks={this.state.PersonalnavLinks} 
                                otherLinks={this.state.PersonalotherLinks} 
                                bottomFixed={this.state.PersonalbottomFixed}
                                OtherClassName="my-collection"
                                BrandActive={false}
                                logo={Avatar1}
                                active={false}
                                collapseExpand="expand h-100 dark"
                            />
                        </div>
                        <div className="col-md-2">
                            <PersonalSidebar
                                navLinks={this.state.PersonalnavLinks} 
                                otherLinks={this.state.PersonalotherLinks} 
                                bottomFixed={this.state.PersonalbottomFixed}
                                OtherClassName="my-collection"
                                BrandActive={false}
                                active={false}
                                collapseExpand="collapsed h-100 dark"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row h-100">
                        <div className="col-md-7">
                            <BusinessSidebar
                                navLinks={this.state.BusinessnavLinks} 
                                otherLinks={this.state.BusinessotherLinks} 
                                bottomFixed={this.state.BusinessbottomFixed}
                                OtherClassName="chat"
                                BrandActive={true}
                                active={true}
                                fulllogo={Logo}
                                LogoType={true}
                                collapseExpand="expand h-100 dark"
                            />
                        </div>
                        <div className="col-md-3">
                            <BusinessSidebar
                                navLinks={this.state.CollapsedBusinessnavLinks} 
                                otherLinks={this.state.BusinessotherLinks} 
                                bottomFixed={this.state.BusinessbottomFixed}
                                OtherClassName="chat"
                                BrandActive={true}
                                active={true}
                                halflogo={HalfLogo}
                                LogoType={false}
                                collapseExpand="xs h-100 dark"
                            />
                        </div>
                        <div className="col-md-2">
                            <BusinessSidebar
                                navLinks={this.state.CollapsedBusinessnavLinks} 
                                otherLinks={this.state.BusinessotherLinks} 
                                bottomFixed={this.state.BusinessbottomFixed}
                                OtherClassName="chat"
                                BrandActive={true}
                                active={false}
                                halflogo={HalfLogo}
                                LogoType={false}
                                collapseExpand="collapsed h-100 dark"
                            />
                        </div>
                    </div>
                </div> 
            </>
        );
    }
}

export default DarkVersion;