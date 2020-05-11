import React, { Component, version } from 'react';
import Header from '../header/header';
// --------light version-----------------------
import Singin from './Light/singin/singin';
import Singup from './Light/singup/singup';
import Login from './Light/Login/Login';
import Resetpwd from'./Light/ResetPassword/ResetPassword';
import CheckEmail from './Light/checkEmail/CheckEmail';
// --------dark version-----------------------
import Singindark from './Dark/singin/singin';
import Singupdark from './Dark/singup/singup';
import Logindark from './Dark/Login/Login';
import Resetpwddark from'./Dark/ResetPassword/ResetPassword';
import CheckEmaildark from './Dark/checkEmail/CheckEmail';


class singupsingin extends Component {
    state = {
        header: [
          {title: 'Singup / Singin'}
        ]
     }
    render() {
        return (
             <div className="wrapper">
                 <section className="container">
                     <div className="row">
                         <Header header={this.state.header[0].title} />
                             <div className="col-md-12 mb-30">
                                  <div className="h5 mb-20">Light Version</div>
                             </div>
                             <div className="col-md-4">
                                 <Singin/>
                                 <div className="w-100 pull-left mb-30"></div>
                                 <CheckEmail/>
                             </div>
                             <div className="col-md-4">
                                 <Singup/>
                             </div>
                             <div className="col-md-4">
                                 <Login/>
                                 <div className="w-100 pull-left mb-30"></div>
                                 <Resetpwd/>
                             </div>
                             <div className="col-md-12 mt-50 mb-30">
                                  <div className="h5 mb-20">Dark Version</div>
                             </div>
                             <div className="col-md-4">
                                 <Singindark Background="bg-dark-bg"/>
                                 <div className="w-100 pull-left mb-30"></div>
                                 <CheckEmaildark/>
                                 <div className="w-100 pull-left mb-30"></div>
                             </div>
                             <div className="col-md-4">
                                 <Singupdark/>
                             </div>
                             <div className="col-md-4">
                                 <Logindark/>
                                 <div className="w-100 pull-left mb-30"></div>
                                 <Resetpwddark/>
                                 
                             </div>
                     </div>
                 </section>
             </div>
        );
    }
}

export default singupsingin;