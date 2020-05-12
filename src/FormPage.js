import React, { Component } from 'react'
import {Form, Input, Button} from 'antd';

class FormPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password:""
        }
    }
    submit = ()=>{
        console.log("state" , this.state)
    }
    render() {
        const {username, password} = this.state;
        return (
            <div>
               
                <Form>
                    <Form.Item label="username">
                        <Input placeholder="input ur username" value={username} onChange={(e)=>this.setState({username: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label="password">
                        <Input placeholder="input ur password" type="password" value={password} onChange={(e)=>this.setState({password: e.target.value})}/>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.submit} type="primary" size="large">Submit</Button>
                    </Form.Item>
                </Form>
                
            </div>
        )
    }
}

export default FormPage
