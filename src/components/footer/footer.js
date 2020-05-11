import React, { Component } from 'react';
import  Header from '../header/header';
import Footerone from '../footer/footerone/footerone';
import Footertwo from '../footer/footertwo/footertwo';
import Footerthree from './footerthree/footerthree'


// import Dropdown from '../Dropdown/dropdownstructure/dropdownmarge/dropdownmarge'


import Logo from '../../images/mindbox.svg';
import Logowhite from '../../images/mindbox-white.svg';
import visa from '../../images/visa.png';
import master from '../../images/master.png';
import am from '../../images/am.png';
import paypal from '../../images/paypal.png';

import fb from '../../images/fb.png';
import tw from '../../images/tw.png';
import insta from '../../images/insta.png';
import you from '../../images/you.png';

import { Icon } from 'react-icons-kit';
import {twitter} from 'react-icons-kit/feather/twitter';
import {instagram} from 'react-icons-kit/feather/instagram';
import {youtube} from 'react-icons-kit/feather/youtube';
import {facebook} from 'react-icons-kit/feather/facebook';
import {clock} from 'react-icons-kit/feather/clock';
import {mapPin} from 'react-icons-kit/feather/mapPin';
import {phone} from 'react-icons-kit/feather/phone';





class footer extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            header: [
            {title: 'Footers'}
            ],
         }
     }
    render() {
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
                     <Footerone 
                          footerlogo={Logo}
                          menu={[{label: 'about', url: '#' },{label: 'Features', url: '#' },{label: 'Learn & Support', url: '#' },{label: 'Compare Plans', url: '#' }]}
                          Otherlink={[{label: 'News', url: '#' },{label: 'Case Studies', url: '#' },{label: 'Contacts', url: '#' }]}
                          number="+1 800 987-6565"
                          email="info@company.com"
                          sociallink={[{icons: <Icon icon={facebook} size={25} />, link: 'abc'},{icons: <Icon icon={twitter} size={25} />, link: 'abc'},{icons: <Icon icon={instagram} size={25} />, link: 'abc'},{icons: <Icon icon={youtube} size={25} />, link: 'abc'}]}
                          policy="Privacy Policy"
                          policylink="abc"
                          copyright="© 2019 Mindbox. All rights reserved."
                          />
                 </div>
                 <div style={divStyle2}>
                     <Footertwo
                     menu={[{label: 'about', url: '#' },{label: 'Features', url: '#' },{label: 'Learn & Support', url: '#' },{label: 'Compare Plans', url: '#' }]}
                     time={[{icons: <Icon icon={clock} size={25} />, title: 'Monday 09:00 AM – 10:00 PM', label: 'Working Hours' },{icons: <Icon icon={mapPin} size={25} />, title: '213 Derrick Street Boston, MA 02130', label: 'Location' },{icons: <Icon icon={phone} size={25} />, title: '+1 (570) 387-1283', label: 'Call Online' }]}
                     copyright="© 2019 Mindbox. All rights reserved."
                     />
                 </div>
                 <div style={divStyle2}>
                     <Footerthree

                     firstcolheading="Connect"
                     firstcol={[{label: 'Facebook', url: '#',socialicon: fb},{label: 'Twitter', url: '#',socialicon: tw},{label: 'Instagram', url: '#',socialicon: insta },{label: 'Youtube', url: '#',socialicon: you }]}

                     secondcolheading="About Us"
                     secondcol={[{label: 'Company', url: '#' },{label: 'Careers', url: '#' },{label: 'Our Team', url: '#' },{label: 'Contacts', url: '#' }]}

                     thirdcolheading="Need Help?"
                     thirdcol={[{label: 'Chat With Us', url: '#' },{label: 'Call Online (570) 387-1283', url: '#' },{label: 'E-mail Us', url: '#' },{label: 'FAQ', url: '#' }]}

                     footerlogo={Logo}
                     tagline="Be the first to know about new arrivals, sales & promos by submitting your email! You can unsubscribe at any time."


                     copyright="© 2019 mindbox. All rights reserved."
                     policy={[{label: 'Privacy Policy', url: '#' },{label: 'Terms of Use', url: '#' }]}
                     payment={[{comlogo: visa},{comlogo: master},{comlogo: am},{comlogo: paypal}]}
                     />
                 </div>
                 <div style={divStyle2}>
                     <Footerone 
                         thamecolor="white"
                         Background="bg-dark"
                          footerlogo={Logowhite}
                          menu={[{label: 'about', url: '#' },{label: 'Features', url: '#' },{label: 'Learn & Support', url: '#' },{label: 'Compare Plans', url: '#' }]}
                          Otherlink={[{label: 'News', url: '#' },{label: 'Case Studies', url: '#' },{label: 'Contacts', url: '#' }]}
                          number="+1 800 987-6565"
                          email="info@company.com"
                          sociallink={[{icons: <Icon icon={facebook} size={25} />, link: 'abc'},{icons: <Icon icon={twitter} size={25} />, link: 'abc'},{icons: <Icon icon={instagram} size={25} />, link: 'abc'},{icons: <Icon icon={youtube} size={25} />, link: 'abc'}]}
                          policy="Privacy Policy"
                          policylink="abc"
                          copyright="© 2019 Mindbox. All rights reserved."
                          />
                 </div>
                 <div style={divStyle2}>
                     <Footertwo
                                               thamecolor="white"
                                               Background="bg-disy-bush"
                      
                     menu={[{label: 'about', url: '#' },{label: 'Features', url: '#' },{label: 'Learn & Support', url: '#' },{label: 'Compare Plans', url: '#' }]}
                     time={[{icons: <Icon icon={clock} size={25} />, title: 'Monday 09:00 AM – 10:00 PM', label: 'Working Hours' },{icons: <Icon icon={mapPin} size={25} />, title: '213 Derrick Street Boston, MA 02130', label: 'Location' },{icons: <Icon icon={phone} size={25} />, title: '+1 (570) 387-1283', label: 'Call Online' }]}
                     copyright="© 2019 Mindbox. All rights reserved."
                     />
                 </div>
                 <div style={divStyle2}>
                     <Footerthree
                      thamecolor=""
                      Background="bg-secondary-variant"

                     firstcolheading="Connect"
                     firstcol={[{label: 'Facebook', url: '#',socialicon: fb},{label: 'Twitter', url: '#',socialicon: tw},{label: 'Instagram', url: '#',socialicon: insta },{label: 'Youtube', url: '#',socialicon: you }]}

                     secondcolheading="About Us"
                     secondcol={[{label: 'Company', url: '#' },{label: 'Careers', url: '#' },{label: 'Our Team', url: '#' },{label: 'Contacts', url: '#' }]}

                     thirdcolheading="Need Help?"
                     thirdcol={[{label: 'Chat With Us', url: '#' },{label: 'Call Online (570) 387-1283', url: '#' },{label: 'E-mail Us', url: '#' },{label: 'FAQ', url: '#' }]}

                     footerlogo={Logo}
                     tagline="Be the first to know about new arrivals, sales & promos by submitting your email! You can unsubscribe at any time."


                     copyright="© 2019 mindbox. All rights reserved."
                     policy={[{label: 'Privacy Policy', url: '#' },{label: 'Terms of Use', url: '#' }]}
                     payment={[{comlogo: visa},{comlogo: master},{comlogo: am},{comlogo: paypal}]}
                     />
                 </div>
                 <div style={divStyle2}>
                    
                 </div>
             </div>
        );
    }
}

export default footer;