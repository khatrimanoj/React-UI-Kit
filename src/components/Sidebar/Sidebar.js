import React, { Component } from 'react';
import Header from '../header/header';
import LightVersion from './Types/LightVersion/LightVersion';
import DarkVersion from './Types/DarkVersion/DarkVersion';
import './Sidebar.css'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: [
                { title: 'Sidebars' }
            ],
            // PersonalnavLinks: [
            //     {
            //         id:'dashboard',
            //         text: 'Dashboard',
            //         // path: '/',
            //         menuIcon: <Icon icon={grid} size={20}/>,
            //         iconActive: true,
            //         active: false,
            //     },
            //     {
            //         id: 'people',
            //         text: 'People',
            //         // path: '/contact',
            //         menuIcon: <Icon icon={user} size={20}/>,
            //         iconActive: true,
            //         active: true,
            //     },
            //     {
            //         id: 'favourite',
            //         text: 'Favourites',
            //         // path: '/about',
            //         menuIcon: <Icon icon={star} size={20}/>,
            //         iconActive: true,
            //         active: false,
            //     },
            //     {
            //         id: 'updates',
            //         text: 'Updates',
            //         // path: '/blog',
            //         BadgeActive: true,
            //         badgeText: '+10',
            //         badgeBg: 'red',
            //         menuIcon: <Icon icon={zap} size={20}/>,
            //         iconActive: true,
            //         active: false,
            //     },
            //     {
            //         id: 'Uploads',
            //         text: 'Uploads',
            //         // path: '/blog',
            //         menuIcon: <Icon icon={uploadCloud} size={20}/>,
            //         iconActive: true,
            //         active: false,
            //     },
            //     {
            //         id: 'setting',
            //         text: 'Setting',
            //         // path: '/portfolio',
            //         menuIcon: <Icon icon={ic_tune} size={20}/>,
            //         iconActive: true,
            //         active: false,
            //     },
            // ],
            // PersonalotherLinks: [
            //     {
            //         text: 'my collections',
            //         items: [
            //             {
            //                 id: '31',
            //                 text: 'Mood Inspiration',
            //                 menuIcon: <Icon icon={folder} style={{color: 'var(--primary-variant)'}} size={20}/>,
            //                 iconActive: true,
            //                 active: false,
            //             },
            //             {
            //                 id: '51',
            //                 text: 'International Women’s Day — Editorial Selects',
            //                 menuIcon: <Icon icon={folder} style={{color: 'var(--secondary)'}} size={20}/>,
            //                 iconActive: true,
            //                 active: false
            //             },
            //             {
            //                 id: '52',
            //                 text: 'Visual Assets for Marketers',
            //                 menuIcon: <Icon icon={folder} style={{color: 'var(--La-Rioja)'}} size={20}/>,
            //                 iconActive: true,
            //                 active: false
            //             }
            //         ]
                
            //     }
            // ],
            // PersonalbottomFixed: [
            //     {
            //         text: 'Need Help?',
            //         menuIcon: <Icon icon={ic_help_outline} fill="red" size={20} style={{backgroundColor: '#f2f2f2', width: '40px',height: '40px',borderRadius: '40px',display: 'flex',alignItems: 'center',justifyContent: 'center'}}/>,
            //         iconActive: true,                  
            //     }
            // ],
            // BusinessnavLinks: [
            //     {
            //         id:'Michael',
            //         text: 'Michael',
            //         // path: '/',
            //         menuIcon: <Icon icon={user} size={20} style={{color: 'var(--primary)'}}/>,
            //         iconActive: true,
            //         active: false,
            //         items: [
            //             {
            //                 id: '11',
            //                 text: 'item11',
            //                 active: true,
            //             },
            //             {
            //                 id: '12',
            //                 text: 'item12',
            //                 active: false,
            //             },
            //             {
            //                 id: '13',
            //                 text: 'item13',
            //                 active: false,
            //             },
            //         ],
            //     },
            //     {
            //         id: 'My Music',
            //         text: 'My Music',
            //         // path: '/contact',
            //         menuIcon: <Icon icon={ic_audiotrack} size={20} style={{color: 'var(--primary)'}}/>,
            //         iconActive: true,
            //         active: false,
            //     },
            //     {
            //         id: 'Collections',
            //         text: 'Collections',
            //         // path: '/about',
            //         menuIcon: <Icon icon={headphones} size={20} style={{color: 'var(--primary)'}}/>,
            //         iconActive: true,
            //         active: true,
            //         items: [
            //             {
            //                 id: '21',
            //                 text: 'New Collection',
            //                 active: true,
            //             },
            //             {
            //                 id: '22',
            //                 text: 'Featured Collections',
            //                 active: false,
            //             },
            //             {
            //                 id: '23',
            //                 text: 'Favorites',
            //                 active: false,
            //             },
            //         ],
            //     },
            //     {
            //         id: 'Pictures',
            //         text: 'Pictures',
            //         // path: '/blog',
            //         menuIcon: <Icon icon={camera} size={20} style={{color: 'var(--primary)'}}/>,
            //         iconActive: true,
            //         active: false,
            //     },
            //     {
            //         id: 'Achievements',
            //         text: 'Achievements',
            //         // path: '/portfolio',
            //         menuIcon: <img src={Award} alt="award" size={20} style={{color: 'var(--primary)'}}/>,
            //         iconActive: true,
            //         active: false,
            //         BadgeActive: true,
            //         badgeText: '5',
            //         badgeBg: 'yellow rounded',
            //     },
            // ],
            // BusinessotherLinks: [
            //     {
            //         menuIcon: <img src={Comment_Line} alt="comment line"/>,
            //         iconActive: true,
            //         text: 'Friends',
            //         items: [
            //             {
            //                 id: '51',
            //                 text: 'Benjamin Parker',
            //                 menuIcon: <img src={Avatar1} alt="avitar1"/>,
            //                 iconActive: true,
            //                 active: false,
            //                 status: '2314567'
            //             },
            //             {
            //                 id: '52',
            //                 text: 'Michael Joseph',
            //                 menuIcon: <img src={Avatar2} alt="avitar1"/>,
            //                 iconActive: true,
            //                 active: false
            //             },
            //             {
            //                 id: '53',
            //                 text: 'Sandra Parker',
            //                 menuIcon: <Icon icon={user}  size={20} style={{backgroundColor: 'var(--Daisy-Bush)', color: 'var(--primary-variant)', height: '40px', width: '40px', borderRadius: '40px',display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>,
            //                 iconActive: true,
            //                 active: false,
            //                 LinkClass: 'no-img'
            //             },
            //             {
            //                 id: '54',
            //                 text: 'Rebecca Lee',
            //                 menuIcon: <img src={Avatar3} alt="avitar3"/>,
            //                 iconActive: true,
            //                 active: false
            //             },
            //             {
            //                 id: '52',
            //                 text: 'Michael Joseph',
            //                 menuIcon: <img src={Avatar2} alt="avitar1"/>,
            //                 iconActive: true,
            //                 active: false
            //             },
            //             {
            //                 id: '53',
            //                 text: 'Sandra Parker',
            //                 menuIcon: <Icon icon={user}  size={20} style={{backgroundColor: 'var(--Daisy-Bush)', color: 'var(--primary-variant)', height: '40px', width: '40px', borderRadius: '40px',display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>,
            //                 iconActive: true,
            //                 active: false,
            //                 LinkClass: 'no-img'
            //             },
            //             {
            //                 id: '54',
            //                 text: 'Rebecca Lee',
            //                 menuIcon: <img src={Avatar3} alt="avitar3"/>,
            //                 iconActive: true,
            //                 active: false
            //             }
            //         ]
                
            //     }
            // ],
            // BusinessbottomFixed: [
            //     {
            //         text: 'Settings',
            //         menuIcon: <Icon icon={ic_tune} size={20}  style={{backgroundColor: 'transparent', width: '40px',height: '40px',borderRadius: '40px',display: 'flex',alignItems: 'center',justifyContent: 'center'}}/>,
            //         iconActive: true,         
            //     }
            // ]
        }
    }
    render() {
        return (
            <div className="wrapper">
                <section className="container h-100">
                    <div className="row h-100">
                        <Header header={this.state.header[0].title} />  
                        <div className="row w-100 h-100">
                            <div className="col-md-12 mb-30 h-100">
                                <div className="h5 mb-20">Light Version</div>
                                <div className="row mb-50" style={{height: 'calc(100vh - 0px)'}}>
                                    {/* <div className="col-md-4">
                                        <LightVersion 
                                            BrandActive={false}
                                            navLinks={this.state.navLinks}
                                            otherLinks={this.state.otherLinks}
                                            // logo={ logo }
                                            background="#fff"
                                            hoverText="#fff"
                                            hoverBackground="var(--primary)"
                                            // hoverText="var(--white)"
                                            // linkColor="#777"
                                            badgeBg="yellow"
                                        />
                                    </div> */}
                                    <LightVersion />
                                </div>
                                <div className="row mb-50" style={{height: 'calc(100vh - 0px)'}}>
                                    {/* <div className="col-md-4">
                                        <LightVersion 
                                            BrandActive={false}
                                            navLinks={this.state.navLinks}
                                            otherLinks={this.state.otherLinks}
                                            // logo={ logo }
                                            background="#fff"
                                            hoverText="#fff"
                                            hoverBackground="var(--primary)"
                                            // hoverText="var(--white)"
                                            // linkColor="#777"
                                            badgeBg="yellow"
                                        />
                                    </div> */}
                                    <DarkVersion />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Index;