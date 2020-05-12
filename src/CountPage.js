import React, { Component } from 'react'
import {store} from './store'
import KFormCreator from './components/KFormCreator'

const numRule = {required: true, message: "Please input a number"}
@KFormCreator
class CountPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount(){
        store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    
    addnum = ()=>{
        this.validate((num)=>{
             store.dispatch({type: "ADD", payload: num})
        })
        
    }

    minusnum = ()=>{
        this.validate((num)=>{
             store.dispatch({type: "MINUS", payload: num})
        })
       
    }

    validate = (callback)=>{
        
        const {validateFields,getFieldValue} = this.props;
        validateFields((err, values)=>{
            console.log("err",err)
            if(err){
                console.error("error", err);
            }else{
                callback(getFieldValue("num")-0);
            }
        })

    }

    render() {
        const { getFieldDecorator}  =this.props;
        return (
            <div>
                <div>{store.getState()}</div>
                <div>
                    {
                         getFieldDecorator("num",{rules: [numRule]})(<input placeholder="Please input a number"></input>)
                    }
                </div>
                <div>
                    <button onClick={this.addnum}>
                        add
                    </button>
                </div>
                <div>
                    <button onClick={this.minusnum}>minus</button>
                </div>
            </div>
        )
    }
}

export default CountPage
