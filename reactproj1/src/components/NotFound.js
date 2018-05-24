import React,{Component} from "react"

export default class NotFound extends Component{
    constructor(){
        super()
        console.log("in constructor")
    }

    //sample w component lifecycle methods
    componentWillMount(){
        //called first
        console.log("in component will mount")
    }
    render(){
        //called second
        console.log("in render")
        return <h1 className="well"> Oops! File Not Found!! </h1>
      }
    componentDidMount(){
        //called 3rd
        //apply styles here
        console.log("in component did mount")
    }
    componentWillUnmount(){
        //called 4th
        console.log("in component will ummount")
    }

}