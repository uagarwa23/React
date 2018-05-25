import React, {Component} from "react"


export default class MySignComponent extends Component{
    //define method
    constructor(){
        super()
        console.log("in mysign constructor")      
    }
    //on mounting DOm, atributes are available
    componentWillMount(){
        console.log("Props in constructor:", this.props.heading)
       // document.querySelector("h3").style.color='red';
    }
    componentDidMount(){        
        //document.querySelector("h3").style.color='red';
    }
    sendData = () => {
        this.props.onSignIn(this.refs.uId.value,this.refs.pwd.value)    
        console.log("data sent from MySignComponent.", this.refs.uId.value, this.refs.pwd.value)
    }

    render(){

        return <div>
                <h3>{this.props.heading}</h3>
                    <form>
                        <input type="text" placeholder="Enter User ID" ref="uId"/>&nbsp;
                        <input type="password" placeholder="Enter Password" ref="pwd"/>
                        <button type="button" className="btn-primary" onClick={this.sendData}>{this.props.heading}</button>
                    </form>
                    
                </div>
               
    }
}