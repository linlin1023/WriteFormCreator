import React, { Component } from 'react'
import Dialog from './components/Dialog'

class DialogPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 showDialog: false
        }
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick = {()=>{this.setState({showDialog: !this.state.showDialog})}}>showDialog</button>
                </div>
                {this.state.showDialog&& <Dialog><p>this is text</p></Dialog>}
            </div>
        )
    }
}

export default DialogPage
