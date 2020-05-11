import React, { Component } from 'react';
import Header from '../header/header';
import Cardprview from './cardpreview/cardpreview';
import Herocard from './herocard/herocardprivew';
import Cardprofile from './cardprofile/cardprofile';
import Descussion from './Discussions/Discussions';
import Latestnews from './Letestnews/latestnews';
import Cardfourgroup from './cardfourgroup/cardfourgroup';
import Cardloadmore from './cardloadmore/cardloadmore';

class cardview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: [
                { title: 'News/Magazines/Blogs' }
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
                            <div className="h5 mb-20">Preview</div>
                        </div>
                        <div className="container">
                             <div className="row align-content-end">
                                 <Cardprview/>
                                 <Herocard/>
                                 <Cardprofile/>
                                 <Descussion/>
                                 <Latestnews/>
                                 <Cardloadmore/>
                                 <Cardfourgroup/>
                             </div>
                         </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default cardview;