import React, { Component } from 'react';
import  Header from '../header/header';
import Headerone from './headerone/headerone';
import Headertwo from './headertwo/headertwo';
import Headerthree from './headerthree/headerthree';
import Headerfour from './headerfour/headerfour';
import Headerfive from './headerfive/headerfive';
import Headersix from './headersix/headersix';


import {facebook} from 'react-icons-kit/icomoon/facebook';
import {twitter} from 'react-icons-kit/icomoon/twitter';
import {instagram} from 'react-icons-kit/feather/instagram';
import {youtube} from 'react-icons-kit/icomoon/youtube';
import profile from '../../images/avitar.png';

import Logo from '../../images/mindbox.svg';
import Logowhite from '../../images/mindbox-white.svg';
class headercomponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            header: [
            {title: 'Headers'}
            ],
         }
     }
     
    render() {
     
        const headerone = {
          'About': {
            'link': '#',
          },
          'Features': {
            'link': '#',
            
          },
          'Learn & Support': {
            'link': '#',
          },
          'Compare Plans': {
            'link': '#',
          },

        };
        const headertwo = {
          'Shop': {
            'link': '#',
            'menu': {
              'Shop 1': {
                'link': '#',
              },
              'Shop 2': {
                'link': '#',
              },
              'Shop 3': {
                'link': '#',
              }
            }
          },
          'Blog': {
            'link': '#',
            
          },
          'About': {
            'link': '#',
          },
          'Contacts': {
            'link': '#',
          },

        };
        const headerfour = {
          'Plans': {
            'link': '#',
            'menu': {
              'Plans 1': {
                'link': '#',
              },
              'Plans 2': {
                'link': '#',
              },
              'Plans 3': {
                'link': '#',
              }
            }
          },
          'Features': {
            'link': '#',
            
          },
          'Whats New': {
            'link': '#',
          },
          'Help Center': {
            'link': '#',
          },

        };
        const headerfive = {
          'Events': {
            'link': '#',
            'menu': {
              'Event 1': {
                'link': '#',
              },
              'Event 2': {
                'link': '#',
              },
              'Event 3': {
                'link': '#',
              }
            }
          },
          'Videos': {
            'link': '#',
            'menu': {
              'Videos 1': {
                'link': '#',
              },
              'Videos 2': {
                'link': '#',
              },
              'Videos 3': {
                'link': '#',
              }
            }
          },
          'Shop': {
            'link': '#',
          },
          'Jobs': {
            'link': '#',
          },

          'Contacts': {
            'link': '#',
          }
        };
        
        var divStyle = {
            background: "#f2f2f2",
            padding: "32px 0",
            float: "left",
            width: "100%",
          };
          var divStyle2 = {
            background: "#f2f2f2",
            padding: "32px 0",
            paddingTop: "0",
            float: "left",
            width: "100%",
          };
        return (
             <div className="wrapper">
                 <section className="container">
                     <div className="row">
                         <Header header={this.state.header[0].title} />
                     </div>
                    
                       
                 </section>
                 <div style={divStyle}>
                     <Headerone  Headerlogo={Logo}  menulink={headerone} button="btn btn-primary btn-sm"/>
                 </div>
                 <div style={divStyle2}>
                     <Headertwo Headerlogo={Logo}   menulink={headertwo} />
                 </div>
                 <div style={divStyle2}>
                     <Headerthree  
                     Headerlogo={Logo}
                     login={[{label: 'Subscribe', url: '#' },{label: 'Sign Up', url: '#' },{label: 'Log In', url: '#' }]}
                     language={['EN','Us']}
                     currancy={['USD','EUR']}
                     number="Customer Service 24/7  | 7874205553"
                     delivery="FREE NEXT DAY DELIVERY OVER $150"
                     />
                 </div>
                 <div style={divStyle2}>
                   <Headerfour 
                     Headerlogo={Logo}
                     location="United States"
                     menu={[{label: 'Corporate', url: '#' },{label: 'Store', url: '#' },{label: 'Stream TV', url: '#' },{label: 'Finance', url: '#' },{label: 'More', url: '#' }]}
                     menulink={headerfour}
                    
                     />
                 </div>
                 <div style={divStyle2}>
                   <Headerfive
                      Headerlogo={Logo}
                      menulink={headerfive}
                      social={[{icons: facebook, url: '#'},{icons: twitter,url: '#'},{icons: instagram, url: '#'},{icons: youtube,url: '#'}]}
                   />
                   </div>
                   <div style={divStyle2}>
                      <Headersix
                        Headerlogo={Logo}
                        profile = {profile}
                        avitartitle="Benjamin Parker"
                      />
                   </div>

                      {/* color header start here */}

                   <div style={divStyle2}>
                       <Headerone Background="bg-dark-bg" thamecolor="white" button="btn btn-primary-variant btn-sm" Headerlogo={Logowhite}  menulink={headerone} />
                   </div>
                   <div style={divStyle2}>
                       <Headertwo Background="bg-dark-bg" thamecolor="white" Headerlogo={Logowhite} badgesBG="bg-primary-variant"   menulink={headertwo} />
                   </div>
                   <div style={divStyle2}>
                     <Headerthree  
                     headertopBG="bg-dark-bg-variant"
                     Background="bg-dark-bg"
                     Headerlogo={Logowhite}
                     thamecolor="white"
                     login={[{label: 'Subscribe', url: '#' },{label: 'Sign Up', url: '#' },{label: 'Log In', url: '#' }]}
                     language={['EN','Us']}
                     currancy={['USD','EUR']}
                     number="Customer Service 24/7  | 7874205553"
                     delivery="FREE NEXT DAY DELIVERY OVER $150"
                     />
                 </div>
                 <div style={divStyle2}>
                   <Headerfour 
                     Headerlogo={Logowhite}
                     Background="bg-dark-bg"
                     thamecolor="white"
                     location="United States"
                     menu={[{label: 'Corporate', url: '#' },{label: 'Store', url: '#' },{label: 'Stream TV', url: '#' },{label: 'Finance', url: '#' },{label: 'More', url: '#' }]}
                     menulink={headerfour}
                     />
                 </div>
                 <div style={divStyle2}>
                   <Headerfive
                      Headerlogo={Logowhite}
                      Background="bg-dark-bg"
                     thamecolor="white"
                      menulink={headerfive}
                      social={[{icons: facebook, url: '#'},{icons: twitter,url: '#'},{icons: instagram, url: '#'},{icons: youtube,url: '#'}]}
                   />
                   </div>
                   <div style={divStyle2}>
                      <Headersix
                        Headerlogo={Logowhite}
                        Background="bg-dark-bg"
                     thamecolor="white"
                        profile = {profile}
                        avitartitle="Benjamin Parker"
                      />
                   </div>
                   

                 
             </div>
        );
    }
}

export default headercomponent;