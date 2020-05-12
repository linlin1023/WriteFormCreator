import React, { Component } from 'react'
import {Form, Input, Button} from 'antd';

//@Form.create({})
class FormPage2 extends Component {
    submit = ()=>{
        console.log("props" , this.props)
    }
    render() {
       
        return (
            <div>
               
                <Form>
                    <Form.Item label="username">
                        <Input placeholder="input ur username" />
                    </Form.Item>
                    <Form.Item label="password">
                        <Input placeholder="input ur password" type="password" />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.submit} type="primary" size="large">Submit</Button>
                    </Form.Item>
                </Form>
                
            </div>
        )
    }
}

export default FormPage2
