import React from "react"
import {Component} from "react"
import MySignComponent from "./MySignComponent";
//OR
//import React,{Component} from "react"

export default class SignUp extends Component{
   
    signUp(uid, pwd){
        
        console.log("entered values are::: User Id:",uid," && Password is: ",pwd)
        
    } 
    render(){
        return <MySignComponent heading ="Quick Sign Up" onSignIn={this.signUp}/>
    }
}