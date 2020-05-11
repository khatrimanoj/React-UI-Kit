import React, { Component } from 'react';

class modal extends Component {
    Modal.propTypes = {
        visible: React.PropTypes.bool
    };
    constructor () {
        super();

        this.state = {
            isVisible: false
        };
    }
    componentDidMount () {
        if (this.state.isVisible) {
            this.show();
        }
    }
    show () {
        this.state.isVisible = true;
        this.dialog.showModal();
    }
    hide () {
        this.state.isVisible = false;
        this.dialog.close();
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.visible !== this.state.isVisible) {
            this.state.isVisible = nextProps.visible;

            if (this.state.isVisible) {
                this.show();
            } else {
                this.hide();
            }
        }
    }
    render() {
        this.state.isVisible = this.props.visible;
        return (
             <div className="modal lg-popup">
                 <div className="modal-dialog">
                     <div className="modal-content">
                           {this.props.children}
                     </div>
                 </div>
             </div>
        );
    }
}

export default modal;