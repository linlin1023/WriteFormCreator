import React, { Component } from 'react'
import { createPortal } from 'react-dom';

class Dialog extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
        const doc = window.document;
        this.node = doc.createElement("div");
        doc.body.appendChild(this.node)
    }

    componentWillUnmount(){
        window.document.body.removeChild(this.node)
    }

    render() {
        return createPortal(
            <div style={{border:"1px red solid", width:"200px" , height:"200px"}}>
                this is dialog;
                {this.props.children}
            </div>,
            this.node
        )
    }
}

export default Dialog
