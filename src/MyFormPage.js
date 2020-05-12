import React, { Component } from 'react'
import KFormCreator from './components/KFormCreator'

const nameRules =  {required: true, message: "Please input your username"};
const passwordRules = {required: true, message: "Please input your password"};

@KFormCreator
class MyFormPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                
        }
    }

    handleSubmit = ()=>{
        const {getFieldsValue, getFieldValue, validateFields} = this.props; 
        console.log("fields " , getFieldsValue());
        console.log("field", getFieldValue("username"));
        console.log("field", getFieldValue("password"));

        validateFields((err,values)=>{
            if(err){
                console.error("error", err);
               
            }else{
                console.log("success", values)
            }
        })
    }
    render() {
        console.log("props",this.props)
        const {getFieldDecorator} = this.props;
        return (
            <div>
               <div>
                   {getFieldDecorator("username", {rules:[nameRules]})(<input placeholder="please input ur username"></input>)}
        
               </div>
               <div>
                   {getFieldDecorator("password", {rules:[passwordRules]})(<input type="password" placeholder = "please input ur password"></input>)}
               </div>
               <div>
                   <button onClick={this.handleSubmit}>submit</button>
               </div>
            </div>
        )
    }
}

export default MyFormPage
