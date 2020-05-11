import React, { Component } from 'react';

class CheckEmail extends Component {
    render() {
        return (
             <form className="emailform z1">
                 <div className="w-100 h5 mb-20">
                 Check Your E-mail
                 </div>
                 <p className="body2 text-gray mb-30">We have sent you instructions to reset password. Please, check your inbox.</p>
                 <div className="col-md-12 ">
                                     <button class="btn btn-md btn-primary w-100">Sign In</button>
                                 </div>
             </form>
        );
    }
}

export default CheckEmail;