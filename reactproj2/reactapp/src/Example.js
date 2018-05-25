import React, {Component} from "react"
import PropTypes from "prop-types"
import axios from "axios"

export class FriendsComponent extends Component {

    state = {
        friends: ["Ankit", "Uma", "Sowmya"]
    }
    handleAddNew = (friendname)=>{
        this.setState({friends:[...this.state.friends,friendname]})
    }
    render() {
        return (
            <div>                
                <AddFriendComponent addNew={this.handleAddNew}/>
                <ShowListComponent friends={this.state.friends} />
            </div>
        )
    }
}

class ShowListComponent extends Component {

    render() {
        return (
           
                <ul>
                    {this.props.friends.map((friend, index) => <li key={index}>{friend}</li>)}
                </ul>
          
        )
    }
}

class AddFriendComponent extends Component{
    state = {
        newFriend: "Guest"
    }
    render(){
        return(
            <p>
                 <input type="text" placeholder="Enter Friend Name" 
                 value={this.state.newFriend} onChange={this.handleOnChange}></input>
                 <button onClick={this.handleButtonClick}>Add Friend</button>
           </p>
        )
    }
    handleOnChange = (event)=>{
        console.log("on change method", event.target.value);
        this.setState({newFriend:event.target.value})

    }
    handleButtonClick=()=>{
        this.props.addNew(this.state.newFriend)
    }
}

AddFriendComponent.propTypes ={
    addNew: PropTypes.func.isRequired
}
ShowListComponent.defaultProps={
    friends:["F1","F2","F3"]
}

export class ServiceDemo extends Component{
    render(){
        return(
            <div>
                <h3> Rest API Example</h3>
            </div>
        )
    }
    
    componentDidMount(){
        this.loadDataFromFillText();
        this.loadProducts();
    }
    loadDataFromFillText(){
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}").then(
            (response)=>{
               // console.log("Success", response)
                console.log("Success", response.data)
            },(error)=>{
                console.log("Failure",error)
            }
        )
    }
    loadProducts(){
        axios.get("http://localhost:3000/wsproducts").then(
            (response)=>{
               // console.log("Success", response)
                console.log("Success", response.data)
            },(error)=>{
                console.log("Failure",error)
            }
        )
    }
}