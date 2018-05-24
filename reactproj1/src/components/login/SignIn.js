import React from "react"
import {Component} from "react"
import MySignComponent from "./MySignComponent";

//OR
//import React,{Component} from "react"

export default class SignIn extends Component{
    state={loggedInUserName: "Guest"}
   
  //ES5 way of doing this
    /*  constructor(){
        super()
        this.signIn = this.signIn.bind(this);
    }
     
    signIn(uid, pwd){
        
        console.log("entered values are::: User Id:",uid," && Password is: ",pwd)
        this.setState({
            loggedInUserName: uid
        })
    } */

    //ES6 way
    signIn=(uid, pwd)=>{
        
        console.log("entered values are::: User Id:",uid," && Password is: ",pwd)
        this.setState({
            loggedInUserName: uid
        })
    } 
    render(){
        return <div>
                <b> Welcome {this.state.loggedInUserName}</b>                
                <MySignComponent heading = "Sign In" onSignIn={this.signIn}/>
                </div>
    }
}