import React, { Component } from 'react'

export default function KFormCreator(Cmp){
       
        return class extends Component{
            constructor(props){
                super(props)
                this.state={
                    errors: {}
                }
                this.options = {}
            }
            handleChange = (e)=>{
                const {name, value} = e.target;
                // this.setState({
                //     [name]: value
                // },()=> {this.validate()})
                this.validate({...this.state, [name]:value}, ()=>{})
            }
            getFieldDecorator = (field,option)=>{
                return Input=> {
                    this.options[field] = option
                    return <div>
                        {React.cloneElement(Input, 
                           {
                               name: field,
                               value: this.state[field]||"",
                               onChange: this.handleChange
                           }
                        )}
                <p style={{color: 'red'}}>{this.state.errors[field]}</p>
                    </div>;
                }
            }
            getFieldsValue = () => {
                return {...this.state};
            }
            getFieldValue = (fieldName) => {
                return this.state[fieldName]
            }
            validate = (state, afterSetState)=>{
                const errors = {};
                for(let i in this.options){
                    if(!state[i] || state[i] === undefined || state[i] === ""){
                        errors[i] = this.options[i].rules[0].message;
                    }
                }
                this.setState({...state, errors}, afterSetState)
            }
            validateFields = (callback)=>{
                this.validate(this.state, ()=>{
                     const {errors} = this.state;
                     const state = this.state;
                     if(JSON.stringify(errors) === "{}" ){
                             callback(undefined, state);
                    }else {
                         callback(errors, state)
                    }
                });
               
            }
            render(){
                return (
                    <div style={{border: "1px red solid"}}>
                            <Cmp 
                            getFieldDecorator={this.getFieldDecorator} 
                            getFieldsValue={this.getFieldsValue}
                            getFieldValue = {this.getFieldValue}
                            validateFields = {this.validateFields}
                            ></Cmp>
                    </div>
                );
            }
        }
}