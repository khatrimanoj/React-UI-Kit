import React, { Component } from 'react';
import Header from '../header/header';

class chat extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
           header: [
              {title: 'Chat'}
            ],
        }
    }   
    render() {
      
        return (
            <div className="wrapper">
                <section className="container">
                    <div className="row">
                        <Header header={this.state.header[0].title} />
                    </div>
                </section>
            </div>
        );
    }
}

export default chat;